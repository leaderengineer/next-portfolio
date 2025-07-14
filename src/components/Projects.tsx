'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Globe, Smartphone } from 'lucide-react'
import styles from './Projects.module.css'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all')

    const filters = [
        { id: 'all', name: 'Hammasi' },
        { id: 'web', name: 'Web ilovalar' },
        { id: 'mobile', name: 'Mobile ilovalar' },
        { id: 'fullstack', name: 'Full-Stack' }
    ]

    const projects = [
        {
            id: 1,
            title: 'E-commerce Platform',
            description: 'Zamonaviy e-commerce platforma React va Node.js bilan ishlab chiqilgan. To\'lov tizimi, admin panel va real-time chat mavjud.',
            image: '/api/placeholder/400/250',
            category: 'fullstack',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com',
            icon: Globe
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Jamoaviy ishlash uchun task management ilovasi. Real-time updates, file sharing va progress tracking.',
            image: '/api/placeholder/400/250',
            category: 'web',
            technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com',
            icon: Code
        },
        {
            id: 3,
            title: 'Fitness Tracking Mobile App',
            description: 'React Native bilan ishlab chiqilgan fitness tracking ilovasi. Workout plans, progress tracking va social features.',
            image: '/api/placeholder/400/250',
            category: 'mobile',
            technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com',
            icon: Smartphone
        },
        {
            id: 4,
            title: 'Real Estate Website',
            description: 'Real estate kompaniyasi uchun zamonaviy website. Property search, virtual tours va contact forms.',
            image: '/api/placeholder/400/250',
            category: 'web',
            technologies: ['React', 'Tailwind CSS', 'Node.js', 'MySQL'],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com',
            icon: Globe
        },
        {
            id: 5,
            title: 'Food Delivery App',
            description: 'Food delivery platformasi. Restaurant management, order tracking va payment integration.',
            image: '/api/placeholder/400/250',
            category: 'fullstack',
            technologies: ['React Native', 'Node.js', 'MongoDB', 'PayPal'],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com',
            icon: Smartphone
        },
        {
            id: 6,
            title: 'Portfolio Website',
            description: 'Zamonaviy portfolio website Framer Motion animatsiyalari bilan. Dark mode va responsive design.',
            image: '/api/placeholder/400/250',
            category: 'web',
            technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com',
            icon: Globe
        }
    ]

    const filteredProjects = projects.filter(project =>
        activeFilter === 'all' ? true : project.category === activeFilter
    )

    const scrollToContact = () => {
        const element = document.querySelector('#contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="projects" className={styles.projectsSection}>
            <div className={styles.projectsContainer}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={styles.projectsHeader}
                >
                    <h2 className={styles.projectsTitle}>
                        <span className="gradient-text">Loyihalar</span>
                    </h2>
                    <p className={styles.projectsSubtitle}>
                        Men ishlab chiqqan eng yaxshi loyihalar. Har bir loyiha zamonaviy texnologiyalar
                        va eng yaxshi amaliyotlar bilan yaratilgan.
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={styles.filterButtons}
                >
                    {filters.map((filter) => (
                        <motion.button
                            key={filter.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveFilter(filter.id)}
                            className={
                                activeFilter === filter.id
                                    ? styles.activeFilterButton
                                    : styles.filterButton
                            }
                        >
                            {filter.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className={styles.projectsGrid}
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className={styles.projectCard}
                            >
                                {/* Project Image */}
                                <div className={styles.projectImage}>
                                    <project.icon className={styles.projectIcon} />
                                </div>

                                {/* Project Content */}
                                <div className={styles.projectContent}>
                                    <h3 className={styles.projectTitle}>
                                        {project.title}
                                    </h3>
                                    <p className={styles.projectDesc}>
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className={styles.projectTechs}>
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className={styles.projectTech}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className={styles.projectActions}>
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.projectLiveBtn}
                                        >
                                            <Eye className={styles.projectActionIcon} />
                                            Ko&apos;rish
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.projectGithubBtn}
                                        >
                                            <Github className={styles.projectActionIcon} />
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={styles.projectsCta}
                >
                    <div className={styles.projectsCtaBox}>
                        <h3 className={styles.projectsCtaTitle}>Yangi loyiha ustida ishlayapsizmi?</h3>
                        <p className={styles.projectsCtaDesc}>
                            Men sizning loyihangizni zamonaviy texnologiyalar bilan ishlab chiqishga yordam beraman.
                            Keling, birgalikda ajoyib natijalarga erishamiz!
                        </p>
                        <motion.button
                            onClick={scrollToContact}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.projectsCtaBtn}
                        >
                            <ExternalLink className={styles.projectsCtaBtnIcon} />
                            Bog&apos;lanish
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects 