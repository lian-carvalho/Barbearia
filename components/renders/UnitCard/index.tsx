import styles from './style.module.css'

import Image from 'next/image'

type UnitCardProps = {
    rua: string;
    cidade: string;
    imgUrl: string;
};

export default function UnitCard({ rua, cidade, imgUrl }: UnitCardProps) {
    return (
        <div className={styles.unitCard}>
            <div className={styles.infos}>
                <p className="c-white font-bold">{rua}</p>
                <p className="c-white">{cidade}</p>
            </div>
            <span></span>
            <Image fill src={`/images/units/${imgUrl}`} alt={`Foto da unidade na ${rua} em ${cidade}`} />
        </div>
    )
}