import styles from './style.module.css'

import Image from 'next/image'

export default function WhatsappButton() {

    const phone = '5588981424288';
    const message = 'Olá, vi o seu ótimo trabalho com o site da barbearia e gostaria de encomendar o meu próprio!';
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a href={whatsappLink} className={styles.whatsBtn} target="_blank" rel="noopener noreferrer" title='Encomende o seu site agora mesmo'>
            <div>
                <Image
                    fill
                    src='/images/branding/whatsapp.png'
                    alt=''
                />
            </div>
        </a>
    )
}