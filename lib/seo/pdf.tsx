import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToBuffer,
} from '@react-pdf/renderer'
import type { SeoReport, Severity, AreaStatus, Difficulty } from './types'

// ── MeghRoop brand palette ──
const BRAND = '#7c3aed'
const BRAND_DARK = '#5b21b6'
const INK = '#18181b'
const MUTED = '#52525b'
const LINE = '#e4e4e7'
const BG_SOFT = '#faf5ff'

const sevColor: Record<Severity, string> = {
  Critical: '#dc2626',
  High: '#ea580c',
  Medium: '#d97706',
  Low: '#2563eb',
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
    paddingTop: 54,
    paddingBottom: 56,
    paddingHorizontal: 44,
    fontSize: 11,
    color: INK,
    fontFamily: 'Helvetica',
    lineHeight: 1.45,
  },
  // Header band on content pages
  brandBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: BRAND,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 44,
  },
  brandBarText: { color: '#ffffff', fontSize: 10, fontFamily: 'Helvetica-Bold' },
  brandBarSub: { color: '#ede9fe', fontSize: 9 },
  footer: {
    position: 'absolute',
    bottom: 22,
    left: 44,
    right: 44,
    fontSize: 9,
    color: MUTED,
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: LINE,
    paddingTop: 8,
  },
  // Cover
  cover: { flex: 1, justifyContent: 'center' },
  coverBrand: { fontSize: 30, fontFamily: 'Helvetica-Bold', color: BRAND },
  coverTagline: { fontSize: 10, color: MUTED, marginTop: 4, marginBottom: 40 },
  coverLabel: { fontSize: 11, color: MUTED, fontFamily: 'Helvetica-Bold', letterSpacing: 1 },
  coverTitle: { fontSize: 26, fontFamily: 'Helvetica-Bold', color: INK, marginTop: 8 },
  coverUrl: { fontSize: 13, color: BRAND, marginTop: 6 },
  coverMetaRow: { flexDirection: 'row', marginTop: 36 },
  coverMetaCell: { flex: 1 },
  coverMetaKey: { fontSize: 9, color: MUTED, textTransform: 'uppercase', letterSpacing: 1 },
  coverMetaVal: { fontSize: 12, color: INK, fontFamily: 'Helvetica-Bold', marginTop: 2 },
  scoreBox: {
    marginTop: 40,
    alignSelf: 'flex-start',
    backgroundColor: BG_SOFT,
    borderWidth: 1,
    borderColor: BRAND,
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 28,
  },
  scoreNum: { fontSize: 46, fontFamily: 'Helvetica-Bold', color: BRAND },
  scoreLabel: { fontSize: 10, color: MUTED },
  // Sections
  h2: {
    fontSize: 15,
    fontFamily: 'Helvetica-Bold',
    color: BRAND_DARK,
    marginTop: 18,
    marginBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: BRAND,
    paddingBottom: 4,
  },
  para: { fontSize: 11, color: INK, marginBottom: 6 },
  // Scorecard rows
  scRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: LINE,
  },
  scArea: { flex: 1, fontSize: 11 },
  scScore: { width: 48, fontSize: 11, fontFamily: 'Helvetica-Bold', textAlign: 'right' },
  scBadge: { width: 60, fontSize: 9, textAlign: 'right', fontFamily: 'Helvetica-Bold' },
  // Strength card
  strength: {
    backgroundColor: '#f0fdf4',
    borderLeftWidth: 3,
    borderLeftColor: '#16a34a',
    borderRadius: 4,
    padding: 8,
    marginBottom: 6,
  },
  strengthTitle: { fontSize: 11, fontFamily: 'Helvetica-Bold', color: '#15803d' },
  strengthDetail: { fontSize: 10, color: INK, marginTop: 2 },
  // Issue card
  issue: {
    borderWidth: 1,
    borderColor: LINE,
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  issueHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  issueTitle: { fontSize: 12, fontFamily: 'Helvetica-Bold', color: INK, flex: 1, paddingRight: 8 },
  pill: { fontSize: 8, color: '#ffffff', fontFamily: 'Helvetica-Bold', paddingVertical: 2, paddingHorizontal: 6, borderRadius: 8 },
  field: { flexDirection: 'row', marginTop: 3 },
  fieldKey: { width: 96, fontSize: 9, color: MUTED, fontFamily: 'Helvetica-Bold' },
  fieldVal: { flex: 1, fontSize: 10, color: INK },
  metaRow: { flexDirection: 'row', marginTop: 6, gap: 14 },
  metaTag: { fontSize: 9, color: MUTED },
  // Lists
  bullet: { flexDirection: 'row', marginBottom: 4 },
  bulletDot: { width: 14, fontSize: 11, color: BRAND },
  bulletText: { flex: 1, fontSize: 11 },
  check: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 4 },
  checkBox: { width: 16, fontSize: 11, fontFamily: 'Helvetica-Bold' },
  checkText: { flex: 1, fontSize: 11 },
})

function BrandBar() {
  return (
    <View style={s.brandBar} fixed>
      <Text style={s.brandBarText}>MeghRoop</Text>
      <Text style={s.brandBarSub}>Enterprise SEO Audit Report</Text>
    </View>
  )
}

function Footer({ domain }: { domain: string }) {
  return (
    <Text
      style={s.footer}
      fixed
      render={({ pageNumber, totalPages }) =>
        `MeghRoop  |  Enterprise SEO Audit Report — ${domain}  |  Page ${pageNumber} of ${totalPages}`
      }
    />
  )
}

function SeoDocument({ report }: { report: SeoReport }) {
  const { domain } = report
  return (
    <Document title={`SEO Audit — ${domain}`} author="MeghRoop">
      {/* ── Cover ── */}
      <Page size="A4" style={s.page}>
        <View style={s.cover}>
          <Text style={s.coverBrand}>MeghRoop</Text>
          <Text style={s.coverTagline}>
            Enterprise SEO • GEO • AI Search Optimization • Technical Growth Consulting
          </Text>
          <Text style={s.coverLabel}>ENTERPRISE SEO AUDIT</Text>
          <Text style={s.coverTitle}>{domain}</Text>
          <Text style={s.coverUrl}>{report.url}</Text>

          <View style={s.coverMetaRow}>
            <View style={s.coverMetaCell}>
              <Text style={s.coverMetaKey}>Audit Date</Text>
              <Text style={s.coverMetaVal}>{report.auditDate}</Text>
            </View>
            <View style={s.coverMetaCell}>
              <Text style={s.coverMetaKey}>Prepared By</Text>
              <Text style={s.coverMetaVal}>MeghRoop</Text>
            </View>
            <View style={s.coverMetaCell}>
              <Text style={s.coverMetaKey}>Contact</Text>
              <Text style={s.coverMetaVal}>hello@meghroop.tech</Text>
            </View>
          </View>

          <View style={s.scoreBox}>
            <Text style={s.scoreNum}>{report.overallScore}/100</Text>
            <Text style={s.scoreLabel}>Overall SEO Health Score</Text>
          </View>
        </View>
        <Footer domain={domain} />
      </Page>

      {/* ── Body ── */}
      <Page size="A4" style={s.page}>
        <BrandBar />

        <Text style={s.h2}>Executive Summary</Text>
        <Text style={s.para}>{report.executiveSummary}</Text>

        <Text style={s.h2}>SEO Scorecard</Text>
        {report.scorecard.map((row, i) => (
          <View style={s.scRow} key={i} wrap={false}>
            <Text style={s.scArea}>{row.area}</Text>
            <Text style={s.scScore}>{row.score}</Text>
            <Text style={[s.scBadge, { color: statusColor[row.status] ?? MUTED }]}>
              {(row.status || '').toUpperCase()}
            </Text>
          </View>
        ))}

        {report.strengths.length > 0 && (
          <>
            <Text style={s.h2}>What This Site Does Well</Text>
            {report.strengths.map((st, i) => (
              <View style={s.strength} key={i} wrap={false}>
                <Text style={s.strengthTitle}>✓  {st.title}</Text>
                <Text style={s.strengthDetail}>{st.detail}</Text>
              </View>
            ))}
          </>
        )}

        <Text style={s.h2}>Issues & Recommendations</Text>
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
            <Text style={s.h2}>Quick Wins</Text>
            {report.quickWins.map((q, i) => (
              <View style={s.bullet} key={i} wrap={false}>
                <Text style={s.bulletDot}>•</Text>
                <Text style={s.bulletText}>{q}</Text>
              </View>
            ))}
          </>
        )}

        {report.checklist.length > 0 && (
          <>
            <Text style={s.h2}>Final SEO Checklist</Text>
            {report.checklist.map((c, i) => (
              <View style={s.check} key={i} wrap={false}>
                <Text style={[s.checkBox, { color: c.done ? '#16a34a' : '#dc2626' }]}>
                  {c.done ? '☑' : '☐'}
                </Text>
                <Text style={s.checkText}>{c.item}</Text>
              </View>
            ))}
          </>
        )}

        <Text style={s.h2}>Final Audit Summary</Text>
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
