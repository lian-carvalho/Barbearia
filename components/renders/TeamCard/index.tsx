import styles from './style.module.css'

import Image from 'next/image'

import { Twitter, Facebook, Instagram, Github, Linkedin, Youtube } from 'lucide-react'

type TeamCardProps = {
    nome: string;
    imgUrl: string;
    type?: 'dev' | 'barber';
    githubUrl?: string;
    linkedinUrl?: string;
    youtubeUrl?: string;
};

export default function TeamCard(
    { nome, imgUrl, type = 'barber', githubUrl = '', linkedinUrl = '', youtubeUrl = '' }:
        TeamCardProps) {
    return (
        <div className={styles.teamCard}>
            <div className={styles.imageContainer}>
                <Image
                    fill
                    src={`/images/team/${imgUrl}`}
                    alt={nome}
                />
                <span></span>
                <p className="c-orange font-bold">{nome}</p>
            </div>


            {type === 'barber' && (
                <div className={styles.iconsContainer}>
                    <Twitter className={styles.icon} />
                    <Facebook className={styles.icon} />
                    <Instagram className={styles.icon} />
                </div>
            )}

            {type === 'dev' && (
                <div className={styles.iconsContainer}>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" title={`Github de ${nome}`}>
                        <Github className={styles.icon} />
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" title={`LinkedIn de ${nome}`}>
                        <Linkedin className={styles.icon} />
                    </a>
                    <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" title={`Youtube de ${nome}`}>
                        <Youtube className={styles.icon} />
                    </a>
                </div>
            )}

        </div>
    )
}