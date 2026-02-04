import styles from './style.module.css'

import Image from 'next/image'

export default function AboutUsSection() {
    return (
        <section className={styles.aboutUs}>
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
                    Lorem ipsum dolor sit amet consectetur. Elementum euismod at sed tortor enim lorem leo congue. In mauris urna eget tempor quisque sed libero nunc. Dictum luctus aliquam vel ut aliquet pulvinar ac. Bibendum elementum vestibulum ultricies adipiscing nulla rhoncus.
                </p>
                <p className="c-white">
                    Lorem ipsum dolor sit amet consectetur. Elementum euismod at sed tortor enim lorem leo congue. In mauris urna eget tempor quisque sed libero nunc. Dictum luctus aliquam vel ut aliquet pulvinar ac. Bibendum elementum vestibulum ultricies adipiscing nulla rhoncus.
                </p>
                <p className="c-white font-bold">Horário de funcionamento: 09:00 ás 18:00</p>
            </div>
        </section>
    )
}