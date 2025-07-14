'use client'

import styles from './Hero.module.css'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
    const scrollToAbout = () => {
        const element = document.querySelector('#about')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollToContact = () => {
        const element = document.querySelector('#contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const downloadCV = () => {
        // Create a temporary link to download CV
        const link = document.createElement('a')
        link.href = '/cv-nodirbek-toshpulatov.pdf' // You can add your CV file to public folder
        link.download = 'Nodirbek_Toshpulatov_CV.pdf'
        link.target = '_blank'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    // Typewriter animation for name (looping)
    const fullName = 'Nodirbek Toshpulatov'
    const [typed, setTyped] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (!isDeleting && typed.length < fullName.length) {
            timeout = setTimeout(() => setTyped(fullName.slice(0, typed.length + 1)), 80)
        } else if (!isDeleting && typed.length === fullName.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1200)
        } else if (isDeleting && typed.length > 0) {
            timeout = setTimeout(() => setTyped(fullName.slice(0, typed.length - 1)), 40)
        } else if (isDeleting && typed.length === 0) {
            timeout = setTimeout(() => setIsDeleting(false), 600)
        }
        return () => clearTimeout(timeout)
    }, [typed, isDeleting])

    return (
        <section id="home" className={styles.hero}>
            <div className={styles['hero-inner']}>
                <div className={styles['hero-greeting']}>Salom, men</div>
                <h1 className={styles['hero-title']}>
                    <span className="gradient-text">
                        {typed.startsWith('Nodirbek') ? 'Nodirbek' : typed}
                    </span>
                    <span>
                        {typed.length > 8 ? typed.slice(8) : ''}
                        <span className={styles.typeCursor}>{'|'}</span>
                    </span>
                </h1>
                <h2 className={styles['hero-subtitle']}>Full-Stack Developer</h2>
                <p className={styles['hero-desc']}>
                    Zamonaviy web texnologiyalari bilan ishlaydigan tajribali dasturchi. React, Next.js, Node.js va boshqa zamonaviy texnologiyalarda kuchli bilimga ega.
                </p>
                <div className={styles['hero-cta']}>
                    <button onClick={scrollToContact} className={styles['hero-cta-btn']}>
                        <Mail size={20} /> Bog{"'"}lanish
                    </button>
                    <button onClick={downloadCV} className={`${styles['hero-cta-btn']} ${styles.secondary}`}>
                        <Download size={20} /> CV yuklab olish
                    </button>
                </div>
                <div className={styles['hero-stats']}>
                    <div className={styles['hero-stat']}>
                        <div className={styles['hero-stat-value']}>3+</div>
                        <div className={styles['hero-stat-label']}>Yillik tajriba</div>
                    </div>
                    <div className={styles['hero-stat']}>
                        <div className={styles['hero-stat-value']}>50+</div>
                        <div className={styles['hero-stat-label']}>Loyihalar</div>
                    </div>
                    <div className={styles['hero-stat']}>
                        <div className={styles['hero-stat-value']}>100%</div>
                        <div className={styles['hero-stat-label']}>Mamnuniyat</div>
                    </div>
                </div>
            </div>

            <motion.button
                onClick={scrollToAbout}
                className={styles['scroll-down']}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown size={24} />
            </motion.button>
        </section>
    )
}

export default Hero 