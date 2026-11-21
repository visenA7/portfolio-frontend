import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import type { ResumeData } from '../../types/resume';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 26,
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    borderBottomWidth: 1.5,
    borderBottomColor: '#E7DECF',
    paddingBottom: 8,
  },
  headerLeft: {
    flexDirection: 'column',
    maxWidth: '62%',
  },
  headerRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    maxWidth: '36%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#29261F',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 10,
    color: '#A77C42',
    marginTop: 2,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  summary: {
    fontSize: 8,
    color: '#4A453C',
    lineHeight: 1.35,
    marginTop: 2,
  },
  contactItem: {
    fontSize: 8,
    color: '#5A544A',
    marginBottom: 2,
  },
  contactLink: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#A77C42',
    textDecorationLine: 'underline',
    marginBottom: 2,
  },
  badge: {
    fontSize: 7.5,
    backgroundColor: '#F0E9DC',
    color: '#29261F',
    paddingHorizontal: 4,
    paddingVertical: 1.5,
    borderRadius: 2,
    marginTop: 2,
    fontWeight: 'bold',
  },
  columns: {
    flexDirection: 'row',
    gap: 12,
  },
  leftColumn: {
    width: '66%',
    flexDirection: 'column',
  },
  rightColumn: {
    width: '34%',
    flexDirection: 'column',
  },
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 9.5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#29261F',
    borderBottomWidth: 1,
    borderBottomColor: '#E7DECF',
    marginBottom: 5,
    paddingBottom: 2,
    letterSpacing: 0.8,
  },
  jobEntry: {
    marginBottom: 6,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 1,
  },
  role: {
    fontSize: 8.5,
    fontWeight: 'bold',
    color: '#29261F',
  },
  companyLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  company: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#A77C42',
  },
  location: {
    fontSize: 7.5,
    color: '#777064',
    marginLeft: 3,
  },
  date: {
    fontSize: 7.5,
    color: '#777064',
  },
  techStack: {
    fontSize: 7.5,
    color: '#A77C42',
    fontFamily: 'Helvetica-Oblique',
    marginBottom: 2,
  },
  bulletList: {
    marginLeft: 6,
  },
  bulletPoint: {
    fontSize: 7.5,
    color: '#3F3B33',
    lineHeight: 1.3,
    marginBottom: 1,
  },
  skillCategory: {
    marginBottom: 5,
  },
  skillTitle: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#A77C42',
    marginBottom: 1.5,
  },
  skillTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 2.5,
  },
  skillTag: {
    fontSize: 7,
    backgroundColor: '#F0E9DC',
    paddingHorizontal: 3.5,
    paddingVertical: 1,
    borderRadius: 2,
    color: '#29261F',
  },
  educationEntry: {
    marginBottom: 4,
  },
  degree: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#29261F',
  },
  institution: {
    fontSize: 7.5,
    color: '#A77C42',
  },
  achievement: {
    fontSize: 7.5,
    color: '#3F3B33',
    marginBottom: 3,
    lineHeight: 1.25,
  },
  languageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F0E9DC',
    paddingBottom: 1,
  },
});

interface ResumeDocumentProps {
  data: ResumeData;
}

export const ResumeDocument = ({ data }: ResumeDocumentProps) => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.name}>{data.basics.name}</Text>
          <Text style={styles.title}>{data.basics.title}</Text>
          <Text style={styles.summary}>{data.basics.summary}</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.contactItem}>{data.basics.location.city}, {data.basics.location.country}</Text>
          <Text style={styles.contactItem}>{data.basics.contact.email}</Text>
          <Text style={styles.contactItem}>{data.basics.contact.phone}</Text>
          <Text style={styles.contactLink}>{data.basics.contact.linkedin}</Text>
          <Text style={styles.contactLink}>{data.basics.contact.portfolio}</Text>
          {data.basics.notice_period && (
            <Text style={styles.badge}>{data.basics.notice_period}</Text>
          )}
        </View>
      </View>

      <View style={styles.columns}>

        {/* Main Column */}
        <View style={styles.leftColumn}>

          {/* Professional Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {data.experience.map((job, idx) => (
              <View key={idx} style={styles.jobEntry} wrap={false}>
                <View style={styles.jobHeader}>
                  <Text style={styles.role}>{job.role}</Text>
                  <Text style={styles.date}>{job.start_date} – {job.end_date}</Text>
                </View>
                <View style={styles.companyLine}>
                  <Text style={styles.company}>{job.company}</Text>
                  <Text style={styles.location}>| {job.location}</Text>
                </View>
                <View style={styles.bulletList}>
                  {job.responsibilities.map((resp, rIdx) => (
                    <Text key={rIdx} style={styles.bulletPoint}>• {resp}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* Key Projects */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Projects</Text>
            {data.projects.map((proj, idx) => (
              <View key={idx} style={styles.jobEntry} wrap={false}>
                <View style={styles.jobHeader}>
                  <Text style={styles.role}>{proj.name}</Text>
                  {proj.duration && <Text style={styles.date}>{proj.duration}</Text>}
                </View>
                {proj.technologies && (
                  <Text style={styles.techStack}>{proj.technologies}</Text>
                )}
                <View style={styles.bulletList}>
                  {proj.description.map((desc, dIdx) => (
                    <Text key={dIdx} style={styles.bulletPoint}>• {desc}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Sidebar Column */}
        <View style={styles.rightColumn}>

          {/* Technical Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>

            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>AI / GenAI</Text>
              <View style={styles.skillTags}>
                {data.skills.ai_genai.map(s => (
                  <Text key={s} style={styles.skillTag}>{s}</Text>
                ))}
              </View>
            </View>

            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>Backend</Text>
              <View style={styles.skillTags}>
                {data.skills.backend.map(s => (
                  <Text key={s} style={styles.skillTag}>{s}</Text>
                ))}
              </View>
            </View>

            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>Frontend</Text>
              <View style={styles.skillTags}>
                {data.skills.frontend.map(s => (
                  <Text key={s} style={styles.skillTag}>{s}</Text>
                ))}
              </View>
            </View>

            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>Databases & Messaging</Text>
              <View style={styles.skillTags}>
                {data.skills.databases_and_messaging.map(s => (
                  <Text key={s} style={styles.skillTag}>{s}</Text>
                ))}
              </View>
            </View>

            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>Architecture & Security</Text>
              <View style={styles.skillTags}>
                {data.skills.architecture_and_security.map(s => (
                  <Text key={s} style={styles.skillTag}>{s}</Text>
                ))}
              </View>
            </View>

            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>Cloud & DevOps</Text>
              <View style={styles.skillTags}>
                {data.skills.cloud_and_devops.map(s => (
                  <Text key={s} style={styles.skillTag}>{s}</Text>
                ))}
              </View>
            </View>

            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>Programming</Text>
              <View style={styles.skillTags}>
                {data.skills.programming.map(s => (
                  <Text key={s} style={styles.skillTag}>{s}</Text>
                ))}
              </View>
            </View>

            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>Tools & Testing</Text>
              <View style={styles.skillTags}>
                {data.skills.tools.map(s => (
                  <Text key={s} style={styles.skillTag}>{s}</Text>
                ))}
              </View>
            </View>
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu, idx) => (
              <View key={idx} style={styles.educationEntry}>
                <Text style={styles.degree}>{edu.degree}</Text>
                {edu.field && <Text style={{ fontSize: 7.5, color: '#4A453C', marginBottom: 1 }}>{edu.field}</Text>}
                <Text style={styles.institution}>{edu.institution}</Text>
                <Text style={styles.date}>{edu.duration}</Text>
              </View>
            ))}
          </View>

          {/* Achievements */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Achievements</Text>
            {data.achievements.map((ach, idx) => (
              <Text key={idx} style={styles.achievement}>• {ach}</Text>
            ))}
          </View>

          {/* Languages */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            {data.languages.map((lang, idx) => (
              <View key={idx} style={styles.languageRow}>
                <Text style={{ fontSize: 8, fontWeight: 'bold', color: '#29261F' }}>{lang.language}</Text>
                <Text style={{ fontSize: 7.5, color: '#777064' }}>{lang.proficiency}</Text>
              </View>
            ))}
          </View>

        </View>

      </View>
    </Page>
  </Document>
);
