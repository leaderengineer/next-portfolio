'use client'

import styles from './Header.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ]

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMenuOpen(false)
    }

    return (
        <header className={styles.header}>
            <div className={styles['header-inner']}>
                <div className={styles.logo}>NT</div>
                <nav className={styles.nav}>
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className={styles['nav-btn']}
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>
                <div className={styles.socials}>
                    <a href="mailto:nodirbek@example.com" className={styles['social-link']}><Mail size={18} /></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles['social-link']}><Github size={18} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles['social-link']}><Linkedin size={18} /></a>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles['menu-btn']}>
                        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>
            <div className={`${styles['mobile-menu']} ${isMenuOpen ? styles.open : ''}`}>
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={styles['nav-btn']}
                    >
                        {item.name}
                    </button>
                ))}
                <div className={styles.socials} style={{ marginTop: '1rem' }}>
                    <a href="mailto:nodirbek@example.com" className={styles['social-link']}><Mail size={18} /></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles['social-link']}><Github size={18} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles['social-link']}><Linkedin size={18} /></a>
                </div>
            </div>
        </header>
    )
}

export default Header 