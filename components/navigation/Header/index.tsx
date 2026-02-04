import styles from './style.module.css'
import Image from "next/image"

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="#hero">
                <div className={styles.logoContainer}>
                    <Image
                        fill
                        src='/images/branding/logo.png'
                        alt=''
                    />
                </div>
            </a>

            <nav>
                <a href="#about-us">Sobre</a>
                <a href="#services">Serviços</a>
                <a href="#units">Unidades</a>
            </nav>
        </header>
    )
}