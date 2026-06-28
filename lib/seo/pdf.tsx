import path from 'path'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  renderToBuffer,
} from '@react-pdf/renderer'
import type { SeoReport, Severity, AreaStatus, Difficulty } from './types'

// ── Brand font (Space Grotesk — same as the website) ──
// Static instances live in /public/fonts so they are bundled and rendered
// without a network round-trip. next.config traces them into the function.
const FONT_DIR = path.join(process.cwd(), 'public', 'fonts')
Font.register({
  family: 'Space Grotesk',
  fonts: [
    { src: path.join(FONT_DIR, 'SpaceGrotesk-Regular.ttf'), fontWeight: 400 },
    { src: path.join(FONT_DIR, 'SpaceGrotesk-Medium.ttf'), fontWeight: 500 },
    { src: path.join(FONT_DIR, 'SpaceGrotesk-SemiBold.ttf'), fontWeight: 600 },
    { src: path.join(FONT_DIR, 'SpaceGrotesk-Bold.ttf'), fontWeight: 700 },
  ],
})
// Keep long tokens (URLs) from overflowing their column.
Font.registerHyphenationCallback((word) => [word])

const FONT = 'Space Grotesk'

// ── MeghRoop brand palette (mirrors app/globals.css tokens) ──
const BG_DARK = '#080808'
const CARD_DARK = '#0d0d0d'
const PURPLE = '#c084fc' // --accent-purple
const BLUE = '#60a5fa' // --accent-blue
const WHITE = '#ffffff'
const INK = '#18181b'
const MUTED = '#52525b'
const SUBTLE = '#71717a'
const LINE = '#e7e5ea'

const sevColor: Record<Severity, string> = {
  Critical: '#dc2626',
  High: '#ea580c',
  Medium: '#d97706',
  Low: BLUE,
}
const statusColor: Record<AreaStatus, string> = {
  good: '#16a34a',
  warn: '#d97706',
  poor: '#dc2626',
}
const diffColor: Record<Difficulty, string> = {
  Easy: '#16a34a',
  Medium: '#d97706',
  Hard: '#dc2626',
}

const s = StyleSheet.create({
  page: {
    paddingTop: 52,
    paddingBottom: 60,
    paddingHorizontal: 44,
    fontSize: 11,
    color: INK,
    fontFamily: FONT,
    fontWeight: 400,
    // NOTE: lineHeight is intentionally NOT set on the Page. A fractional
    // lineHeight inherited onto a `render`-based fixed <Text> (the page-number
    // footer) silently stops react-pdf from drawing it on every page. Apply
    // comfortable line spacing on the individual body-text styles instead.
  },
  // ── Content-page header band ──
  brandBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 34,
    backgroundColor: BG_DARK,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 44,
  },
  brandBarLeft: { flexDirection: 'row', alignItems: 'center' },
  brandBarDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: PURPLE, marginRight: 7 },
  brandBarText: { color: WHITE, fontSize: 11, fontWeight: 700, letterSpacing: 0.3 },
  brandBarSub: { color: '#a1a1aa', fontSize: 8.5, fontWeight: 500, letterSpacing: 0.4 },
  // Thin gradient-ish accent strip under the dark bar
  accentStrip: { position: 'absolute', top: 34, left: 0, right: 0, height: 2.5, backgroundColor: PURPLE },
  footer: {
    position: 'absolute',
    bottom: 24,
    left: 44,
    right: 44,
    borderTopWidth: 1,
    borderTopColor: LINE,
    paddingTop: 8,
  },
  footerText: {
    fontSize: 8,
    color: SUBTLE,
    fontWeight: 500,
    textAlign: 'center',
  },

  // ── Cover (dark, on-brand) ──
  coverPage: { backgroundColor: BG_DARK, padding: 0, fontFamily: FONT, color: WHITE },
  coverInner: { flex: 1, paddingHorizontal: 48, paddingVertical: 64, justifyContent: 'center' },
  coverTopDot: { width: 9, height: 9, borderRadius: 5, backgroundColor: PURPLE, marginBottom: 18 },
  coverBrand: { fontSize: 36, fontWeight: 700, color: WHITE, lineHeight: 1, letterSpacing: -0.5 },
  coverTagline: { fontSize: 9.5, color: PURPLE, marginTop: 12, fontWeight: 500, letterSpacing: 0.5 },
  coverDivider: { height: 1, backgroundColor: '#27272a', marginTop: 30, marginBottom: 30 },
  coverLabel: { fontSize: 10, color: BLUE, fontWeight: 600, letterSpacing: 2 },
  coverTitle: { fontSize: 30, fontWeight: 700, color: WHITE, marginTop: 10, lineHeight: 1.1, letterSpacing: -0.5 },
  coverUrl: { fontSize: 12, color: '#a1a1aa', marginTop: 8, fontWeight: 400 },
  coverMetaRow: { flexDirection: 'row', marginTop: 40 },
  coverMetaCell: { flex: 1 },
  coverMetaKey: { fontSize: 8, color: SUBTLE, fontWeight: 600, letterSpacing: 1.2 },
  coverMetaVal: { fontSize: 11, color: WHITE, fontWeight: 500, marginTop: 4 },
  scoreRow: { flexDirection: 'row', marginTop: 44, alignItems: 'center' },
  scoreBox: {
    backgroundColor: CARD_DARK,
    borderWidth: 1,
    borderColor: PURPLE,
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 30,
    alignItems: 'flex-start',
  },
  scoreNum: { fontSize: 42, fontWeight: 700, color: PURPLE, lineHeight: 1 },
  scoreLabel: { fontSize: 9, color: '#a1a1aa', marginTop: 8, fontWeight: 500, letterSpacing: 0.5 },
  coverFootNote: { position: 'absolute', bottom: 40, left: 48, right: 48, fontSize: 8.5, color: SUBTLE, fontWeight: 400 },

  // ── Sections ──
  h2: {
    fontSize: 15,
    fontWeight: 700,
    color: INK,
    marginTop: 20,
    marginBottom: 10,
    letterSpacing: -0.2,
  },
  h2Rule: { height: 2, backgroundColor: PURPLE, width: 40, marginBottom: 12, marginTop: 2 },
  para: { fontSize: 11, color: INK, marginBottom: 6, fontWeight: 400, lineHeight: 1.5 },

  // Scorecard
  scRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: LINE,
  },
  scArea: { flex: 1, fontSize: 11, fontWeight: 500 },
  scScore: { width: 44, fontSize: 11, fontWeight: 700, textAlign: 'right' },
  scBadge: { width: 64, fontSize: 8.5, textAlign: 'right', fontWeight: 700, letterSpacing: 0.5 },

  // Strength card
  strength: {
    backgroundColor: '#f0fdf4',
    borderLeftWidth: 3,
    borderLeftColor: '#16a34a',
    borderRadius: 4,
    padding: 9,
    marginBottom: 7,
    flexDirection: 'row',
  },
  strengthMark: { width: 11, height: 11, borderRadius: 3, backgroundColor: '#16a34a', marginTop: 2, marginRight: 8 },
  strengthTitle: { fontSize: 11, fontWeight: 700, color: '#15803d' },
  strengthDetail: { fontSize: 10, color: INK, marginTop: 2, fontWeight: 400, lineHeight: 1.45 },

  // Issue card
  issue: { borderWidth: 1, borderColor: LINE, borderRadius: 8, padding: 11, marginBottom: 10 },
  issueHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 },
  issueTitle: { fontSize: 12, fontWeight: 700, color: INK, flex: 1, paddingRight: 8 },
  pill: { fontSize: 8, color: WHITE, fontWeight: 700, paddingVertical: 3, paddingHorizontal: 7, borderRadius: 9, letterSpacing: 0.3 },
  field: { flexDirection: 'row', marginTop: 3 },
  fieldKey: { width: 92, fontSize: 9, color: SUBTLE, fontWeight: 600 },
  fieldVal: { flex: 1, fontSize: 10, color: INK, fontWeight: 400, lineHeight: 1.4 },
  metaRow: { flexDirection: 'row', marginTop: 7 },
  metaTag: { fontSize: 9, fontWeight: 600 },

  // Lists
  bullet: { flexDirection: 'row', marginBottom: 5, alignItems: 'flex-start' },
  bulletDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: PURPLE, marginTop: 5, marginRight: 9 },
  bulletText: { flex: 1, fontSize: 11, fontWeight: 400, lineHeight: 1.4 },
  check: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 },
  checkBoxDone: { width: 11, height: 11, borderRadius: 3, backgroundColor: '#16a34a', marginTop: 2, marginRight: 9 },
  checkBoxOpen: { width: 11, height: 11, borderRadius: 3, borderWidth: 1.4, borderColor: '#9ca3af', marginTop: 2, marginRight: 9 },
  checkText: { flex: 1, fontSize: 11, fontWeight: 400, lineHeight: 1.4 },
})

function BrandBar() {
  return (
    <>
      <View style={s.brandBar} fixed>
        <View style={s.brandBarLeft}>
          <View style={s.brandBarDot} />
          <Text style={s.brandBarText}>MeghRoop</Text>
        </View>
        <Text style={s.brandBarSub}>Enterprise SEO Audit</Text>
      </View>
      <View style={s.accentStrip} fixed />
    </>
  )
}

function Footer({ domain }: { domain: string }) {
  return (
    <View style={s.footer} fixed>
      <Text
        style={s.footerText}
        render={({ pageNumber, totalPages }) =>
          `MeghRoop   ·   Enterprise SEO Audit — ${domain}   ·   Page ${pageNumber} of ${totalPages}`
        }
      />
    </View>
  )
}

function SeoDocument({ report }: { report: SeoReport }) {
  const { domain } = report
  return (
    <Document title={`SEO Audit — ${domain}`} author="MeghRoop">
      {/* ── Cover ── */}
      <Page size="A4" style={s.coverPage}>
        <View style={s.coverInner}>
          <View style={s.coverTopDot} />
          <Text style={s.coverBrand}>MeghRoop</Text>
          <Text style={s.coverTagline}>
            Enterprise SEO · GEO · AI Search Optimization · Technical Growth Consulting
          </Text>

          <View style={s.coverDivider} />

          <Text style={s.coverLabel}>ENTERPRISE SEO AUDIT</Text>
          <Text style={s.coverTitle}>{domain}</Text>
          <Text style={s.coverUrl}>{report.url}</Text>

          <View style={s.coverMetaRow}>
            <View style={s.coverMetaCell}>
              <Text style={s.coverMetaKey}>AUDIT DATE</Text>
              <Text style={s.coverMetaVal}>{report.auditDate}</Text>
            </View>
            <View style={s.coverMetaCell}>
              <Text style={s.coverMetaKey}>PREPARED BY</Text>
              <Text style={s.coverMetaVal}>MeghRoop</Text>
            </View>
            <View style={s.coverMetaCell}>
              <Text style={s.coverMetaKey}>CONTACT</Text>
              <Text style={s.coverMetaVal}>hello@meghroop.tech</Text>
            </View>
          </View>

          <View style={s.scoreRow}>
            <View style={s.scoreBox}>
              <Text style={s.scoreNum}>{report.overallScore}/100</Text>
              <Text style={s.scoreLabel}>OVERALL SEO HEALTH SCORE</Text>
            </View>
          </View>
        </View>
        <Text style={s.coverFootNote}>
          Prepared by MeghRoop — Growth, AI &amp; Software Agency   ·   meghroop.tech
        </Text>
      </Page>

      {/* ── Body ── */}
      <Page size="A4" style={s.page}>
        <BrandBar />

        <Section title="Executive Summary" />
        <Text style={s.para}>{report.executiveSummary}</Text>

        <Section title="SEO Scorecard" />
        {report.scorecard.map((row, i) => (
          <View style={s.scRow} key={i} wrap={false}>
            <Text style={s.scArea}>{row.area}</Text>
            <Text style={[s.scScore, { color: statusColor[row.status] ?? INK }]}>{row.score}</Text>
            <Text style={[s.scBadge, { color: statusColor[row.status] ?? MUTED }]}>
              {(row.status || '').toUpperCase()}
            </Text>
          </View>
        ))}

        {report.strengths.length > 0 && (
          <>
            <Section title="What This Site Does Well" />
            {report.strengths.map((st, i) => (
              <View style={s.strength} key={i} wrap={false}>
                <View style={s.strengthMark} />
                <View style={{ flex: 1 }}>
                  <Text style={s.strengthTitle}>{st.title}</Text>
                  <Text style={s.strengthDetail}>{st.detail}</Text>
                </View>
              </View>
            ))}
          </>
        )}

        <Section title="Issues & Recommendations" />
        {report.issues.map((iss, i) => (
          <View style={s.issue} key={i} wrap={false}>
            <View style={s.issueHead}>
              <Text style={s.issueTitle}>
                {i + 1}. {iss.description}
              </Text>
              <Text style={[s.pill, { backgroundColor: sevColor[iss.severity] ?? MUTED }]}>
                {iss.severity}
              </Text>
            </View>
            <Field k="Area" v={iss.area} />
            <Field k="Evidence" v={iss.evidence} />
            <Field k="SEO Impact" v={iss.seoImpact} />
            <Field k="Business Impact" v={iss.businessImpact} />
            <Field k="Recommendation" v={iss.recommendation} />
            <Field k="Expected Gain" v={iss.expectedImprovement} />
            <View style={s.metaRow}>
              <Text style={[s.metaTag, { color: diffColor[iss.difficulty] ?? MUTED }]}>
                Difficulty: {iss.difficulty}
              </Text>
            </View>
          </View>
        ))}

        {report.quickWins.length > 0 && (
          <>
            <Section title="Quick Wins" />
            {report.quickWins.map((q, i) => (
              <View style={s.bullet} key={i} wrap={false}>
                <View style={s.bulletDot} />
                <Text style={s.bulletText}>{q}</Text>
              </View>
            ))}
          </>
        )}

        {report.checklist.length > 0 && (
          <>
            <Section title="Final SEO Checklist" />
            {report.checklist.map((c, i) => (
              <View style={s.check} key={i} wrap={false}>
                <View style={c.done ? s.checkBoxDone : s.checkBoxOpen} />
                <Text style={s.checkText}>{c.item}</Text>
              </View>
            ))}
          </>
        )}

        <Section title="Final Audit Summary" />
        <Text style={s.para}>{report.finalSummary}</Text>
        <Text style={[s.para, { marginTop: 14, color: MUTED, fontSize: 10 }]}>
          Prepared by MeghRoop — Growth, AI &amp; Software Agency. Ready to fix these and grow?
          Email hello@meghroop.tech or visit meghroop.tech.
        </Text>

        <Footer domain={domain} />
      </Page>
    </Document>
  )
}

function Section({ title }: { title: string }) {
  return (
    <View wrap={false}>
      <Text style={s.h2}>{title}</Text>
      <View style={s.h2Rule} />
    </View>
  )
}

function Field({ k, v }: { k: string; v: string }) {
  if (!v) return null
  return (
    <View style={s.field}>
      <Text style={s.fieldKey}>{k}</Text>
      <Text style={s.fieldVal}>{v}</Text>
    </View>
  )
}

/** Render the report into a real PDF buffer (works on Vercel Node runtime). */
export async function renderReportPdf(report: SeoReport): Promise<Buffer> {
  return renderToBuffer(<SeoDocument report={report} />)
}
