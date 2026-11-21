import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import type { ResumeData } from '../../types/resume';

/**
 * ATS-Optimized Stylesheet
 * - 100% linear single-column layout for flawless ATS parsing order
 * - Standard Helvetica typography (universally parsed by Workday, Greenhouse, Taleo, Lever)
 * - Standard bullet characters without custom glyphs
 * - Clear semantic hierarchy: Name -> Contact -> Summary -> Skills -> Experience -> Projects -> Education
 * - Elegant architectural accents (#A77C42 / #1F1C18) for executive human readability
 */
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 36,
    fontFamily: 'Helvetica',
    color: '#1A1A1A',
    fontSize: 9,
    lineHeight: 1.35,
  },

  // Running Header (Page 1)
  header: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#A77C42',
    paddingBottom: 10,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    color: '#1A1A1A',
    letterSpacing: 0.8,
    lineHeight: 1.25,
    marginBottom: 8,
  },
  title: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#A77C42',
    letterSpacing: 0.4,
    lineHeight: 1.3,
    marginBottom: 7,
  },
  contactLine: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 8.5,
    color: '#4A4A4A',
    gap: 6,
  },
  contactItem: {
    fontSize: 8.5,
    color: '#4A4A4A',
  },
  contactLink: {
    fontSize: 8.5,
    color: '#A77C42',
    textDecoration: 'none',
  },
  separator: {
    fontSize: 8.5,
    color: '#999999',
  },

  // Running Header (Page 2)
  miniHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D1C7B7',
    paddingBottom: 5,
    marginBottom: 12,
  },
  miniHeaderName: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    color: '#1A1A1A',
  },
  miniHeaderTitle: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: '#A77C42',
  },
  miniHeaderContact: {
    fontSize: 8,
    color: '#666666',
  },

  // Sections
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    color: '#1A1A1A',
    borderBottomWidth: 1,
    borderBottomColor: '#E0D8CB',
    paddingBottom: 2,
    marginBottom: 5,
    letterSpacing: 0.6,
  },
  summaryText: {
    fontSize: 8.5,
    color: '#2A2A2A',
    lineHeight: 1.4,
  },

  // Skills: Linear Category-Value Lines (Gold Standard for ATS)
  skillRow: {
    flexDirection: 'row',
    marginBottom: 2.5,
    lineHeight: 1.3,
  },
  skillCategory: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
    width: '28%',
  },
  skillList: {
    fontSize: 8.5,
    color: '#333333',
    width: '72%',
  },

  // Job & Project Entries
  entry: {
    marginBottom: 8,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 1,
  },
  entryRole: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
  },
  entryDate: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: '#666666',
  },
  entrySubHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2.5,
  },
  entryCompany: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: '#A77C42',
  },
  entryLocation: {
    fontSize: 8,
    color: '#666666',
    marginLeft: 4,
  },
  techStack: {
    fontSize: 8,
    fontFamily: 'Helvetica-Oblique',
    color: '#666666',
    marginBottom: 2,
  },

  // Bullet Points (Using Standard Unicode Bullet for Universal Parsing)
  bulletList: {
    marginLeft: 2,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 1.6,
  },
  bulletPoint: {
    width: 8,
    fontSize: 8.5,
    color: '#A77C42',
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    color: '#2A2A2A',
    lineHeight: 1.32,
  },

  // Education & Achievements
  itemTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#1A1A1A',
  },
  itemSub: {
    fontSize: 8,
    color: '#A77C42',
    fontFamily: 'Helvetica-Bold',
  },
  itemDate: {
    fontSize: 8,
    color: '#666666',
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 16,
    left: 36,
    right: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#E0D8CB',
    paddingTop: 4,
  },
  footerText: {
    fontSize: 7.5,
    color: '#777777',
  },
});

interface ResumeDocumentProps {
  data: ResumeData;
}

export const ResumeDocument = ({ data }: ResumeDocumentProps) => {
  const { basics, skills, experience, projects, education, achievements, languages } = data;

  const jobPE = experience.find(j => j.company.includes("P.E. Analytics") || j.company.includes("PropEquity")) || experience[0];
  const jobFuturionic = experience.find(j => j.company.includes("Futurionic")) || experience[1];
  const jobABS = experience.find(j => j.company.includes("ABStechservices")) || experience[2];

  return (
    <Document
      title={`Resume - ${basics.name} - Senior Full Stack Software Engineer`}
      author={basics.name}
      subject="Senior Full Stack Software Engineer Resume"
      keywords="Full Stack, ASP.NET Core, React, Node.js, AI, GenAI, RAG, Kafka, PostgreSQL, Distributed Systems, Software Engineer"
    >
      {/* ========================================================================= */}
      {/* PAGE 1: HEADER, PROFESSIONAL SUMMARY, TECHNICAL SKILLS, RECENT EXPERIENCE */}
      {/* ========================================================================= */}
      <Page size="A4" style={styles.page}>
        {/* Contact Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{basics.name}</Text>
          <Text style={styles.title}>{basics.title}</Text>
          <View style={styles.contactLine}>
            <Text style={styles.contactItem}>{basics.location.city}, {basics.location.country}</Text>
            <Text style={styles.separator}>|</Text>
            <Text style={styles.contactItem}>{basics.contact.phone}</Text>
            <Text style={styles.separator}>|</Text>
            <Link src={`mailto:${basics.contact.email}`} style={styles.contactLink}>
              {basics.contact.email}
            </Link>
            <Text style={styles.separator}>|</Text>
            <Link src={`https://${basics.contact.linkedin}`} style={styles.contactLink}>
              {basics.contact.linkedin}
            </Link>
            <Text style={styles.separator}>|</Text>
            <Link src={`https://${basics.contact.portfolio}`} style={styles.contactLink}>
              {basics.contact.portfolio}
            </Link>
            {basics.notice_period && (
              <>
                <Text style={styles.separator}>|</Text>
                <Text style={{ fontSize: 8.5, fontFamily: 'Helvetica-Bold', color: '#A77C42' }}>
                  {basics.notice_period}
                </Text>
              </>
            )}
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summaryText}>{basics.summary}</Text>
        </View>

        {/* Technical Skills (Category : Items - Gold Standard for ATS Parsing) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>

          <View style={styles.skillRow}>
            <Text style={styles.skillCategory}>Programming Languages:</Text>
            <Text style={styles.skillList}>{skills.programming.join(", ")}</Text>
          </View>

          <View style={styles.skillRow}>
            <Text style={styles.skillCategory}>AI & Generative AI:</Text>
            <Text style={styles.skillList}>{skills.ai_genai.join(", ")}</Text>
          </View>

          <View style={styles.skillRow}>
            <Text style={styles.skillCategory}>Backend & APIs:</Text>
            <Text style={styles.skillList}>{skills.backend.join(", ")}</Text>
          </View>

          <View style={styles.skillRow}>
            <Text style={styles.skillCategory}>Frontend Architecture:</Text>
            <Text style={styles.skillList}>{skills.frontend.join(", ")}</Text>
          </View>

          <View style={styles.skillRow}>
            <Text style={styles.skillCategory}>Databases & Messaging:</Text>
            <Text style={styles.skillList}>{skills.databases_and_messaging.join(", ")}</Text>
          </View>

          <View style={styles.skillRow}>
            <Text style={styles.skillCategory}>Architecture & Security:</Text>
            <Text style={styles.skillList}>{skills.architecture_and_security.join(", ")}</Text>
          </View>

          <View style={styles.skillRow}>
            <Text style={styles.skillCategory}>Cloud & DevOps:</Text>
            <Text style={styles.skillList}>{skills.cloud_and_devops.join(", ")}</Text>
          </View>

          <View style={styles.skillRow}>
            <Text style={styles.skillCategory}>Developer Tools & Testing:</Text>
            <Text style={styles.skillList}>{skills.tools.join(", ")}</Text>
          </View>
        </View>

        {/* Professional Experience (Recent Roles) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>

          {/* Role 1: P.E. Analytics Ltd. */}
          {jobPE && (
            <View style={styles.entry}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryRole}>{jobPE.role}</Text>
                <Text style={styles.entryDate}>{jobPE.start_date} – {jobPE.end_date}</Text>
              </View>
              <View style={styles.entrySubHeader}>
                <Text style={styles.entryCompany}>{jobPE.company}</Text>
                <Text style={styles.entryLocation}>| {jobPE.location}</Text>
              </View>
              <View style={styles.bulletList}>
                {jobPE.responsibilities.map((resp, idx) => (
                  <View key={idx} style={styles.bulletRow}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletText}>{resp}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Role 2: Futurionic Private Limited */}
          {jobFuturionic && (
            <View style={styles.entry}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryRole}>{jobFuturionic.role}</Text>
                <Text style={styles.entryDate}>{jobFuturionic.start_date} – {jobFuturionic.end_date}</Text>
              </View>
              <View style={styles.entrySubHeader}>
                <Text style={styles.entryCompany}>{jobFuturionic.company}</Text>
                <Text style={styles.entryLocation}>| {jobFuturionic.location}</Text>
              </View>
              <View style={styles.bulletList}>
                {jobFuturionic.responsibilities.map((resp, idx) => (
                  <View key={idx} style={styles.bulletRow}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletText}>{resp}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>

        {/* Page 1 Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>{basics.name} — Senior Full Stack Software Engineer</Text>
          <Text style={styles.footerText}>Page 1 of 2</Text>
        </View>
      </Page>

      {/* ========================================================================= */}
      {/* PAGE 2: CONTINUED EXPERIENCE, KEY PROJECTS, EDUCATION, ACHIEVEMENTS       */}
      {/* ========================================================================= */}
      <Page size="A4" style={styles.page}>
        {/* Running Mini-Header */}
        <View style={styles.miniHeader}>
          <Text style={styles.miniHeaderName}>{basics.name}</Text>
          <Text style={styles.miniHeaderTitle}>Senior Full Stack Software Engineer</Text>
          <Text style={styles.miniHeaderContact}>{basics.contact.email} | {basics.contact.phone}</Text>
        </View>

        {/* Experience Continued (Role 3: ABStechservices) */}
        {jobABS && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience (Continued)</Text>
            <View style={styles.entry}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryRole}>{jobABS.role}</Text>
                <Text style={styles.entryDate}>{jobABS.start_date} – {jobABS.end_date}</Text>
              </View>
              <View style={styles.entrySubHeader}>
                <Text style={styles.entryCompany}>{jobABS.company}</Text>
                <Text style={styles.entryLocation}>| {jobABS.location}</Text>
              </View>
              <View style={styles.bulletList}>
                {jobABS.responsibilities.map((resp, idx) => (
                  <View key={idx} style={styles.bulletRow}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletText}>{resp}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}

        {/* Key Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Projects & Production Architectures</Text>

          {projects.map((proj, idx) => (
            <View key={idx} style={styles.entry}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryRole}>{proj.name}</Text>
                {proj.duration && <Text style={styles.entryDate}>{proj.duration}</Text>}
              </View>
              {proj.technologies && (
                <Text style={styles.techStack}>Technologies: {proj.technologies}</Text>
              )}
              <View style={styles.bulletList}>
                {proj.description.map((desc, dIdx) => (
                  <View key={dIdx} style={styles.bulletRow}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletText}>{desc}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu, idx) => (
            <View key={idx} style={styles.entryHeader}>
              <View>
                <Text style={styles.itemTitle}>{edu.degree} — {edu.field}</Text>
                <Text style={styles.itemSub}>{edu.institution}</Text>
              </View>
              <Text style={styles.itemDate}>{edu.duration}</Text>
            </View>
          ))}
        </View>

        {/* Honors & Key Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Honors & Key Achievements</Text>
          <View style={styles.bulletList}>
            {achievements.map((ach, idx) => (
              <View key={idx} style={styles.bulletRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>{ach}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Additional Information / Languages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Information</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletRow}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={{ fontFamily: 'Helvetica-Bold' }}>Languages: </Text>
                {languages.map(l => `${l.language} (${l.proficiency})`).join(", ")}
              </Text>
            </View>
            {basics.notice_period && (
              <View style={styles.bulletRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={{ fontFamily: 'Helvetica-Bold' }}>Availability: </Text>
                  {basics.notice_period}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Page 2 Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>{basics.name} — Senior Full Stack Software Engineer</Text>
          <Text style={styles.footerText}>Page 2 of 2</Text>
        </View>
      </Page>
    </Document>
  );
};
