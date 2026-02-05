import styles from './style.module.css'

import Image from 'next/image'

import { Github, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.iconsContainer}>
                <a href='https://github.com/lian-carvalho' target="_blank" rel="noopener noreferrer" title='Github de Lian Dev'>
                    <Github className={styles.icon} />
                </a>
                <a href='https://www.linkedin.com/in/liancarvalho/' target="_blank" rel="noopener noreferrer" title='LinkedIn de Lian Dev'>
                    <Linkedin className={styles.icon} />
                </a>
                <a href='https://www.youtube.com/@LianDev' target="_blank" rel="noopener noreferrer" title='Youtube de Lian Dev'>
                    <Youtube className={styles.icon} />
                </a>
            </div>

            <div className={styles.logoContainer}>
                <Image
                    fill
                    src='/images/branding/logo.png'
                    alt=''
                />
            </div>
        </footer>
    )
}