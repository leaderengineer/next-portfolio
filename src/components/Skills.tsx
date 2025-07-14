'use client'

import styles from './Skills.module.css'
import { motion } from 'framer-motion'
import {
    Code,
    Database,
    Smartphone,
    Globe,
    Zap,
    Shield,
    Cloud,
    Braces,
    Server,
    FileCode,
    Terminal,
    Dock
} from 'lucide-react'

const Skills = () => {
    const skillCategories = [
        {
            icon: Code,
            title: 'Frontend Development',
            skills: [
                { name: 'React', level: 95 },
                { name: 'Next.js', level: 90 },
                { name: 'TypeScript', level: 85 },
                { name: 'Tailwind CSS', level: 90 },
                { name: 'Vue.js', level: 80 }
            ]
        },
        {
            icon: Database,
            title: 'Backend Development',
            skills: [
                { name: 'Node.js', level: 90 },
                { name: 'Python', level: 85 },
                { name: 'PostgreSQL', level: 80 },
                { name: 'MongoDB', level: 75 },
                { name: 'Redis', level: 70 }
            ]
        },
        {
            icon: Smartphone,
            title: 'Mobile Development',
            skills: [
                { name: 'React Native', level: 80 },
                { name: 'Flutter', level: 70 },
                { name: 'iOS Development', level: 65 },
                { name: 'Android Development', level: 60 }
            ]
        }
    ]

    const technologies = [
        { name: 'React', icon: Braces },
        { name: 'Node.js', icon: Server },
        { name: 'TypeScript', icon: FileCode },
        { name: 'Python', icon: Terminal },
        { name: 'Docker', icon: Dock },
        { name: 'AWS', icon: Cloud }
    ]

    const tools = [
        { name: 'Git & GitHub', icon: Globe },
        { name: 'VS Code', icon: Code },
        { name: 'Postman', icon: Zap },
        { name: 'Jira', icon: Shield }
    ]

    const extraSkills = [
        'Agile/Scrum metodologiyasi',
        'CI/CD pipeline',
        'Microservices arxitektura',
        'RESTful API dizayn',
        'GraphQL',
        'WebSocket',
        'SEO optimizatsiya',
        'Performance optimizatsiya'
    ]

    return (
        <section id="skills" className={styles.skillsSection}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.gradientText}>Ko&apos;nikmalar</span>
                </motion.h2>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Zamonaviy web texnologiyalari va dasturlash tillarida kuchli bilimga ega. Har bir texnologiyani chuqur o&apos;rganib, amaliy loyihalarda qo&apos;llayman.
                </motion.p>

                <div className={styles.skillsGrid}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className={styles.skillCategory}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className={styles.categoryHeader}>
                                <div className={styles.categoryIcon}>
                                    <category.icon size={24} />
                                </div>
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                            </div>

                            <div className={styles.skillList}>
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className={styles.skillItem}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                                    >
                                        <div className={styles.skillInfo}>
                                            <span className={styles.skillName}>{skill.name}</span>
                                            <span className={styles.skillLevel}>{skill.level}%</span>
                                        </div>
                                        <div className={styles.skillBar}>
                                            <motion.div
                                                className={styles.skillProgress}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.technologiesSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className={styles.sectionTitle}>Asosiy texnologiyalar</h3>
                    <div className={styles.techGrid}>
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                className={styles.techItem}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className={styles.techIcon}>
                                    <tech.icon size={32} />
                                </div>
                                <span className={styles.techName}>{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className={styles.toolsSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className={styles.sectionTitle}>Ishlash vositalari</h3>
                    <div className={styles.toolsGrid}>
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                className={styles.toolItem}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className={styles.toolIcon}>
                                    <tool.icon size={32} />
                                </div>
                                <span className={styles.toolName}>{tool.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className={styles.extraSkillsSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className={styles.sectionTitle}>Qo&apos;shimcha ko&apos;nikmalar</h3>
                    <div className={styles.extraSkillsGrid}>
                        {extraSkills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                className={styles.extraSkillItem}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills 