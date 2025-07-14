'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import styles from './Contact.module.css'

const contactSchema = z.object({
    name: z.string().min(2, 'Ism kamida 2 ta harf bo&apos;lishi kerak'),
    email: z.string().email('To&apos;g&apos;ri email manzil kiriting'),
    subject: z.string().min(5, 'Mavzu kamida 5 ta harf bo&apos;lishi kerak'),
    message: z.string().min(10, 'Xabar kamida 10 ta harf bo&apos;lishi kerak')
})

type ContactFormData = z.infer<typeof contactSchema>

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema)
    })

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log('Form data:', data) // Use the data variable
            setSubmitStatus('success')
            reset()
        } catch (error) {
            console.error('Form submission error:', error) // Use the error variable
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'microsoftreact@gmail.com',
            href: 'mailto:microsoftreact@gmail.com'
        },
        {
            icon: Phone,
            title: 'Telefon',
            value: '+998 91 119 20 19',
            href: 'tel:+998911192019'
        },
        {
            icon: MapPin,
            title: 'Manzil',
            value: 'Farg&apos;ona, O&apos;zbekiston',
            href: '#'
        }
    ]

    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={styles.contactHeader}
                >
                    <h2 className={styles.contactTitle}>
                        <span className="gradient-text">Bog&apos;lanish</span>
                    </h2>
                    <p className={styles.contactSubtitle}>
                        Loyihangiz ustida ishlash yoki savollaringiz bo&apos;sa, bemalol bog&apos;laning.
                        Men 24 soat ichida javob beraman.
                    </p>
                </motion.div>

                <div className={styles.contactGrid}>
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={styles.contactInfo}
                    >
                        <div>
                            <h3 className={styles.contactInfoTitle}>Bog&apos;lanish ma&apos;lumotlari</h3>
                            <div className={styles.contactInfoList}>
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.title}
                                        href={info.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.02 }}
                                        className={styles.contactInfoItem}
                                    >
                                        <div className={styles.contactInfoIconBox}>
                                            <info.icon className={styles.contactInfoIcon} />
                                        </div>
                                        <div>
                                            <div className={styles.contactInfoLabel}>{info.title}</div>
                                            <div className={styles.contactInfoValue}>{info.value}</div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className={styles.workingHoursBox}>
                            <h4 className={styles.workingHoursTitle}>Ish vaqti</h4>
                            <div className={styles.workingHoursList}>
                                <div className={styles.workingHoursRow}>
                                    <span className={styles.workingHoursLabel}>Dushanba - Juma</span>
                                    <span className={styles.workingHoursValue}>09:00 - 18:00</span>
                                </div>
                                <div className={styles.workingHoursRow}>
                                    <span className={styles.workingHoursLabel}>Shanba</span>
                                    <span className={styles.workingHoursValue}>10:00 - 16:00</span>
                                </div>
                                <div className={styles.workingHoursRow}>
                                    <span className={styles.workingHoursLabel}>Yakshanba</span>
                                    <span className={styles.workingHoursValue}>Dam olish</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className={styles.socialsTitle}>Ijtimoiy tarmoqlar</h4>
                            <div className={styles.socialsList}>
                                {[
                                    { name: 'GitHub', href: 'https://github.com' },
                                    { name: 'LinkedIn', href: 'https://linkedin.com' },
                                    { name: 'Telegram', href: 'https://t.me' }
                                ].map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={styles.socialsItem}
                                    >
                                        {social.name}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className={styles.contactFormBox}
                    >
                        <h3 className={styles.contactFormTitle}>Xabar yuborish</h3>

                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={styles.successMessage}
                            >
                                <CheckCircle size={20} />
                                <span>Xabar muvaffaqiyatli yuborildi! Tez orada javob beraman.</span>
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={styles.errorMessage}
                            >
                                <AlertCircle size={20} />
                                <span>Xatolik yuz berdi. Iltimos, qaytadan urinib ko&apos;ring.</span>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
                            <div>
                                <label htmlFor="name" className={styles.contactFormLabel}>
                                    Ismingiz
                                </label>
                                <input
                                    {...register('name')}
                                    type="text"
                                    id="name"
                                    className={
                                        errors.name
                                            ? styles.contactFormInputError
                                            : styles.contactFormInput
                                    }
                                    placeholder="Ismingizni kiriting"
                                />
                                {errors.name && (
                                    <p className={styles.contactFormErrorMsg}>
                                        <AlertCircle className={styles.contactFormErrorIcon} />
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className={styles.contactFormLabel}>
                                    Email
                                </label>
                                <input
                                    {...register('email')}
                                    type="email"
                                    id="email"
                                    className={
                                        errors.email
                                            ? styles.contactFormInputError
                                            : styles.contactFormInput
                                    }
                                    placeholder="Email manzilingizni kiriting"
                                />
                                {errors.email && (
                                    <p className={styles.contactFormErrorMsg}>
                                        <AlertCircle className={styles.contactFormErrorIcon} />
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="subject" className={styles.contactFormLabel}>
                                    Mavzu
                                </label>
                                <input
                                    {...register('subject')}
                                    type="text"
                                    id="subject"
                                    className={
                                        errors.subject
                                            ? styles.contactFormInputError
                                            : styles.contactFormInput
                                    }
                                    placeholder="Xabar mavzusini kiriting"
                                />
                                {errors.subject && (
                                    <p className={styles.contactFormErrorMsg}>
                                        <AlertCircle className={styles.contactFormErrorIcon} />
                                        {errors.subject.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="message" className={styles.contactFormLabel}>
                                    Xabar
                                </label>
                                <textarea
                                    {...register('message')}
                                    id="message"
                                    rows={5}
                                    className={
                                        errors.message
                                            ? styles.contactFormInputError
                                            : styles.contactFormInput
                                    }
                                    placeholder="Xabaringizni kiriting..."
                                />
                                {errors.message && (
                                    <p className={styles.contactFormErrorMsg}>
                                        <AlertCircle className={styles.contactFormErrorIcon} />
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={styles.submitButton}
                            >
                                {isSubmitting ? (
                                    <div className={styles.loadingSpinner} />
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Xabar yuborish
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact 