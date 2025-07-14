'use client'

import styles from './About.module.css'
import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail, Phone } from 'lucide-react'

const About = () => {
    const personalInfo = [
        { icon: User, label: 'Ism', value: 'Nodirbek Toshpulatov' },
        { icon: MapPin, label: 'Manzil', value: 'Toshkent, O\'zbekiston' },
        { icon: Calendar, label: 'Tug\'ilgan sana', value: '2001 yil' },
        { icon: Mail, label: 'Email', value: 'microsoftreact@gmail.com' },
        { icon: Phone, label: 'Telefon', value: '+998 91 119 20 19' },
    ]

    const experiences = [
        {
            year: '2024 - Hozir',
            title: 'Senior Full-Stack Developer',
            company: 'Pro Teach',
            description: 'Zamonaviy web ilovalarini ishlab chiqish, jamoa boshqaruvi va texnik arxitektura.'
        },
        {
            year: '2021 - 2023',
            title: 'Full-Stack Developer',
            company: 'Startup Company',
            description: 'React, Node.js va boshqa zamonaviy texnologiyalar bilan ishlash.'
        },
        {
            year: '2019 - 2021',
            title: 'Frontend Developer',
            company: 'Web Agency',
            description: 'Responsive dizayn va user experience ustida ishlash.'
        }
    ]

    return (
        <section id="about" className={styles['about-section']}>
            <div className={styles['about-inner']}>
                <h2 className={styles['about-title']}><span className="gradient-text">Haqida</span></h2>
                <p className={styles['about-desc']}>
                    Men zamonaviy web texnologiyalari bilan ishlaydigan tajribali dasturchiman. Har bir loyihada eng yaxshi natijalarni olish uchun doim yangi texnologiyalarni o'rganaman.
                </p>
                <div className={styles['about-grid']}>
                    <div className={styles['about-info']}>
                        <div className={styles['about-info-title']}>Shaxsiy ma'lumotlar</div>
                        <div className={styles['about-info-list']}>
                            {personalInfo.map((info) => (
                                <div key={info.label} className={styles['about-info-item']}>
                                    <div><info.icon size={20} color="#2563eb" /></div>
                                    <div>
                                        <div className={styles['about-info-label']}>{info.label}</div>
                                        <div className={styles['about-info-value']}>{info.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles['about-experience']}>
                        <div className={styles['about-exp-title']}>Ish tajribasi</div>
                        <div className={styles['about-exp-list']}>
                            {experiences.map((exp) => (
                                <div key={exp.year} className={styles['about-exp-item']}>
                                    <div className={styles['about-exp-dot']} />
                                    <div className={styles['about-exp-content']}>
                                        <div className={styles['about-exp-year']}>{exp.year}</div>
                                        <div className={styles['about-exp-role']}>{exp.title}</div>
                                        <div className={styles['about-exp-company']}>{exp.company}</div>
                                        <div className={styles['about-exp-desc']}>{exp.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles['about-why']}>
                    <div className={styles['about-why-title']}>Nima uchun meni tanlashingiz kerak?</div>
                    <div className={styles['about-why-grid']}>
                        <div className={styles['about-why-item']}>
                            <div className={styles['about-why-icon']}>🚀</div>
                            <div className={styles['about-why-label']}>Tezkor ishlash</div>
                            <div className={styles['about-why-desc']}>Har bir loyihani vaqtida va sifatli bajaraman</div>
                        </div>
                        <div className={styles['about-why-item']}>
                            <div className={styles['about-why-icon']}>💡</div>
                            <div className={styles['about-why-label']}>Innovatsion yechimlar</div>
                            <div className={styles['about-why-desc']}>Zamonaviy texnologiyalar va eng yaxshi amaliyotlar</div>
                        </div>
                        <div className={styles['about-why-item']}>
                            <div className={styles['about-why-icon']}>🤝</div>
                            <div className={styles['about-why-label']}>Jamoaviy ishlash</div>
                            <div className={styles['about-why-desc']}>Samarali kommunikatsiya va hamkorlik</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About 