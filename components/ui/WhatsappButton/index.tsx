import styles from './style.module.css'

import Image from 'next/image'

export default function WhatsappButton() {
    return (
        <a href='' className={styles.whatsBtn}>
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