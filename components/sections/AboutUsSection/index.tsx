import styles from './style.module.css'

import Image from 'next/image'

export default function AboutUsSection() {
    return (
        <section className={styles.aboutUs} id='about-us'>
            <div className={styles.photosContainer}>
                <div>
                    <Image
                        fill
                        src="/images/showcase/about-us-1.png"
                        alt='Homem cortando o cabelo - Visão lateral'
                    />
                </div>
                <div>
                    <Image
                        fill
                        src="/images/showcase/about-us-2.png"
                        alt='Homem cortando o cabelo - Visão lateral esquerda'
                    />
                </div>
                <div>
                    <Image
                        fill
                        src="/images/showcase/about-us-3.png"
                        alt='Homem cortando o cabelo - Visão lateral direita'
                    />
                </div>
            </div>
            <div className={styles.textContainer}>
                <h1 className="c-white font-bold">Sobre</h1>
                <p className="c-white">
                    Cada detalhe do nosso trabalho é pensado para valorizar sua presença. Técnica, experiência e atenção caminham juntas para entregar um resultado preciso, consistente e alinhado com quem você é. Aqui, o foco não é seguir padrões prontos, mas criar um visual que respeite sua identidade e fortaleça sua imagem de forma natural.
                </p>
                <p className="c-white">
                    Estilo é mais do que aparência. É um reflexo direto da sua atitude e da sua persona. Nossa barbearia existe para homens que entendem isso e sabem que o visual comunica antes de qualquer palavra. Criamos um ambiente onde confiança, autenticidade e personalidade são levadas a sério.
                </p>
                <p className="c-white font-bold">Horário de funcionamento: 09:00 ás 18:00</p>
            </div>
        </section>
    )
}