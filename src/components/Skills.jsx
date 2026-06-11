import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: '⚡',
    skills: ['C++', 'JavaScript', 'Python', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '🧩',
    skills: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'FastAPI'],
  },
  {
    title: 'Developer Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    title: 'Databases & Cloud',
    icon: '☁️',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Cloudinary', 'Firebase', 'Appwrite'],
  },
  {
    title: 'Coursework',
    icon: '📚',
    skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems'],
  },
  {
    title: 'Areas of Interest',
    icon: '🎯',
    skills: ['Full-Stack Development', 'Software Engineering', 'Competitive Programming', 'System Design'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What I Work With</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          className="skills__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              className="skills__card glass-card"
              variants={cardVariants}
            >
              <div className="skills__card-header">
                <span className="skills__card-icon">{cat.icon}</span>
                <h3 className="skills__card-title">{cat.title}</h3>
              </div>
              <div className="skills__tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
