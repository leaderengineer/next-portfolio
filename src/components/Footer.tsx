'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp, Mail, Github, Linkedin, Twitter } from 'lucide-react'
import styles from './Footer.module.css'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerGrid}>
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={styles.brand}
                    >
                        <div className={styles.brandLogo}>NT</div>
                        <p className={styles.brandDesc}>
                            Zamonaviy web texnologiyalari bilan ishlaydigan tajribali dasturchi.
                            Har bir loyihada eng yaxshi natijalarni olish uchun doim yangi texnologiyalarni o'rganaman.
                        </p>
                        <div className={styles.socials}>
                            {[
                                { icon: Mail, href: 'mailto:nodirbek@example.com', label: 'Email' },
                                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
                            ].map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={styles.socialLink}
                                    aria-label={social.label}
                                >
                                    <social.icon className={styles.socialIcon} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={styles.quickLinks}
                    >
                        <h3 className={styles.quickLinksTitle}>Tezkor havolalar</h3>
                        <ul className={styles.quickLinksList}>
                            {[
                                { name: 'Bosh sahifa', href: '#home' },
                                { name: 'Haqida', href: '#about' },
                                { name: 'Loyihalar', href: '#projects' },
                                { name: "Ko'nikmalar", href: '#skills' },
                                { name: "Bog'lanish", href: '#contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <motion.button
                                        onClick={() => scrollToSection(link.href)}
                                        whileHover={{ x: 5 }}
                                        className={styles.quickLink}
                                    >
                                        {link.name}
                                    </motion.button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className={styles.services}
                    >
                        <h3 className={styles.servicesTitle}>Xizmatlar</h3>
                        <ul className={styles.servicesList}>
                            {[
                                'Web ilovalar',
                                'Mobile ilovalar',
                                'E-commerce',
                                'API ishlab chiqish',
                                'SEO optimizatsiya'
                            ].map((service) => (
                                <li key={service}>
                                    <span className={styles.serviceItem}>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.bottomBar}
                >
                    <div className={styles.copyright}>
                        <span>© {currentYear} Nodirbek Toshpulatov. Barcha huquqlar himoyalangan.</span>
                        <Heart className={styles.heartIcon} />
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={styles.scrollTopBtn}
                        aria-label="Yuqoriga qaytish"
                    >
                        <ArrowUp className={styles.scrollTopIcon} />
                    </motion.button>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer 