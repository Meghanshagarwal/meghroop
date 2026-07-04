#!/usr/bin/env python3
"""Regenerate MeghRoop OG / social share images (Est. 2026) to match the
existing brand design in app/opengraph-image.tsx — rendered pixel-perfect
via headless Chromium (Playwright)."""
import base64, pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
font_b64 = base64.b64encode((ROOT / "public/SpaceGrotesk-Bold.ttf").read_bytes()).decode()

def html(w, h, hero_fs, name_fs, eyebrow_fs, sub_fs, meta_fs, pad, headline_maxw):
    # vertical/square layouts stack the headline for balance
    return f"""<!doctype html><html><head><meta charset='utf-8'><style>
@font-face{{font-family:'Space Grotesk';src:url(data:font/ttf;base64,{font_b64}) format('truetype');font-weight:700;}}
*{{margin:0;padding:0;box-sizing:border-box;}}
html,body{{width:{w}px;height:{h}px;}}
.stage{{width:{w}px;height:{h}px;background:#000;background-image:radial-gradient(circle at 75% 25%,#2d124d 0%,#000 70%);
padding:{pad}px;font-family:'Space Grotesk',sans-serif;color:#fff;position:relative;
display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;}}
.dots{{position:absolute;inset:0;opacity:.15;background-image:radial-gradient(rgba(255,255,255,.15) 1px,transparent 1px);background-size:24px 24px;}}
.header{{display:flex;align-items:center;gap:16px;position:relative;}}
.logo{{width:{int(hero_fs*0.75)}px;height:{int(hero_fs*0.75)}px;border-radius:{int(hero_fs*0.25)}px;
border:2px solid rgba(167,139,250,.4);background:linear-gradient(135deg,rgba(167,139,250,.2),rgba(96,165,250,.2));
display:flex;align-items:center;justify-content:center;}}
.logo svg{{width:{int(hero_fs*0.4)}px;height:{int(hero_fs*0.32)}px;}}
.name{{font-size:{name_fs}px;font-weight:700;letter-spacing:-.02em;}}
.center{{display:flex;flex-direction:column;gap:{int(hero_fs*0.28)}px;max-width:{headline_maxw}px;margin:auto 0;position:relative;}}
.eyebrow{{font-size:{eyebrow_fs}px;font-weight:700;text-transform:uppercase;letter-spacing:.3em;color:#a78bfa;}}
.hero{{font-size:{hero_fs}px;font-weight:700;letter-spacing:-.03em;line-height:1.1;
background:linear-gradient(to right,#fff,#a78bfa,#60a5fa);-webkit-background-clip:text;background-clip:text;color:transparent;}}
.sub{{font-size:{sub_fs}px;color:#9ca3af;font-weight:300;line-height:1.5;}}
.footer{{display:flex;justify-content:space-between;align-items:center;width:100%;flex-wrap:wrap;gap:16px;
border-top:1px solid rgba(255,255,255,.08);padding-top:{int(pad*0.4)}px;position:relative;}}
.meta{{display:flex;align-items:center;gap:12px;color:#6b7280;font-size:{meta_fs}px;letter-spacing:.1em;text-transform:uppercase;}}
.dot{{color:rgba(255,255,255,.15);}}
.tag{{display:flex;align-items:center;gap:8px;font-size:{meta_fs}px;font-weight:700;color:#34d399;}}
.gdot{{width:8px;height:8px;border-radius:50%;background:#34d399;}}
.tag span{{letter-spacing:.05em;text-transform:uppercase;}}
</style></head><body><div class='stage'><div class='dots'></div>
<div class='header'><div class='logo'><svg viewBox='0 0 20 16' fill='none'><path d='M1 15V1L10 9.5L19 1V15' stroke='#fff' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/></svg></div><div class='name'>MeghRoop</div></div>
<div class='center'><div class='eyebrow'>Software · AI · Growth Agency</div><div class='hero'>We build it. We grow it.</div><div class='sub'>Performance Marketing • AI Automation • Custom Software</div></div>
<div class='footer'><div class='meta'><span>Est. 2026</span><span class='dot'>•</span><span>Based in India</span><span class='dot'>•</span><span>Serving Worldwide</span></div>
<div class='tag'><div class='gdot'></div><span>Two Engineers. Built Properly.</span></div></div>
</div></body></html>"""

# name, width, height, hero_fs, name_fs, eyebrow_fs, sub_fs, meta_fs, pad, maxw
JOBS = [
    ("og-image",   1200, 630,  64, 28, 12, 22, 14, 80,  900),   # FB / LinkedIn / Twitter / WhatsApp / default OG
    ("og-square",  1080, 1080, 78, 34, 15, 28, 18, 90,  900),   # Instagram feed
    ("og-story",   1080, 1920, 90, 40, 18, 34, 22, 110, 900),   # IG / FB story (vertical)
    ("og-twitter", 1200, 675,  64, 28, 12, 22, 14, 80,  900),   # X large summary card
]

with sync_playwright() as p:
    b = p.chromium.launch()
    for name, w, h, hero, nm, eb, sub, meta, pad, maxw in JOBS:
        pg = b.new_page(viewport={"width": w, "height": h}, device_scale_factor=1)
        pg.set_content(html(w, h, hero, nm, eb, sub, meta, pad, maxw), wait_until="networkidle")
        out = ROOT / "public" / f"{name}.png"
        pg.screenshot(path=str(out), clip={"x":0,"y":0,"width":w,"height":h})
        print(f"  ✓ {out.relative_to(ROOT)}  ({w}×{h})")
        pg.close()
    b.close()
print("done")
