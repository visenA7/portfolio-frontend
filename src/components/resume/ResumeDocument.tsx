import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import type { ResumeData } from '../../types/resume';

// Register a standard font (optional, using Helium/Helvetica by default is fine for a clean look)
// Helvetica is a standard font and doesn't need to be registered
// Font.register({ ... });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30, // 30pt padding ~ 1cm
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB', // Gray-200
    paddingBottom: 10,
  },
  headerLeft: {
    flexDirection: 'column',
    maxWidth: '60%',
  },
  headerRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#000000',
  },
  title: {
    fontSize: 14,
    color: '#0369A1', // Sky-700
    marginBottom: 4,
    fontWeight: 'medium',
  },
  summary: {
    fontSize: 9,
    color: '#374151', // Gray-700
    lineHeight: 1.4,
    marginTop: 4,
  },
  contactItem: {
    fontSize: 9,
    color: '#4B5563', // Gray-600
    marginBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactLink: {
    fontSize: 9,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#0369A1', // Sky-700
    textDecorationLine: 'underline',
  },
  columns: {
    flexDirection: 'row',
    gap: 15, // Gap between columns
  },
  leftColumn: {
    width: '68%',
    flexDirection: 'column',
  },
  rightColumn: {
    width: '32%',
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginBottom: 8,
    paddingBottom: 2,
    letterSpacing: 1,
  },
  jobEntry: {
    marginBottom: 8,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    alignItems: 'flex-end',
  },
  role: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
  companyLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  company: {
    fontSize: 9,
    fontWeight: 'bold', // Semibold
    color: '#0369A1', // Sky-700
  },
  location: {
    fontSize: 9,
    color: '#6B7280', // Gray-500
    marginLeft: 4,
  },
  date: {
    fontSize: 8,
    color: '#6B7280', // Gray-500
  },
  bulletList: {
    marginLeft: 10,
  },
  bulletPoint: {
    fontSize: 9,
    color: '#374151', // Gray-700
    lineHeight: 1.3,
    marginBottom: 1,
  },
  skillCategory: {
    marginBottom: 8,
  },
  skillTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#0369A1', // Sky-700
    marginBottom: 2,
  },
  skillTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillTag: {
    fontSize: 8,
    backgroundColor: '#F3F4F6', // Gray-100
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 2,
    color: '#1F2937', // Gray-800
  },
  educationEntry: {
    marginBottom: 6,
  },
  degree: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#000000',
  },
  institution: {
    fontSize: 9,
    color: '#0369A1', // Sky-700
  },
  achievement: {
    fontSize: 8,
    color: '#374151',
    marginBottom: 2,
    lineHeight: 1.2,
  },
  languageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F3F4F6',
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
          {/* Add links if needed */}
        </View>
      </View>

      <View style={styles.columns}>

        {/* Main Column */}
        <View style={styles.leftColumn}>

          {/* Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {data.experience.map((job, idx) => (
              <View key={idx} style={styles.jobEntry}>
                <View style={styles.jobHeader}>
                  <Text style={styles.role}>{job.role}</Text>
                  <Text style={styles.date}>{job.start_date} - {job.end_date}</Text>
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

          {/* Projects */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Projects</Text>
            {data.projects.map((proj, idx) => (
              <View key={idx} style={styles.jobEntry}>
                <View style={styles.jobHeader}>
                  <Text style={styles.role}>{proj.name}</Text>
                  <Text style={styles.date}>{proj.duration}</Text>
                </View>
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

          {/* Skills */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>

            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>Frontend</Text>
              <View style={styles.skillTags}>
                {data.skills.frontend.map(s => (
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
              <Text style={styles.skillTitle}>Tools & Testing</Text>
              <View style={styles.skillTags}>
                {[...data.skills.testing_and_optimization, ...data.skills.tools_and_platforms].map(s => (
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
                {edu.field && <Text style={{ fontSize: 8, color: '#374151', marginBottom: 1 }}>{edu.field}</Text>}
                <Text style={styles.institution}>{edu.institution}</Text>
                <Text style={styles.date}>{edu.duration}</Text>
              </View>
            ))}
          </View>

          {/* Achievements */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            {data.achievements.map((ach, idx) => (
              <Text key={idx} style={styles.achievement}>• {ach}</Text>
            ))}
          </View>

          {/* Languages */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            {data.languages.map((lang, idx) => (
              <View key={idx} style={styles.languageRow}>
                <Text style={{ fontSize: 9, fontWeight: 'bold' }}>{lang.language}</Text>
                <Text style={{ fontSize: 8, color: '#6B7280' }}>{lang.proficiency}</Text>
              </View>
            ))}
          </View>

        </View>

      </View>
    </Page>
  </Document>
);
