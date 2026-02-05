import styles from './style.module.css'

import Image from 'next/image'

type ServiceCardProps = {
    nome: string,
    imgUrl: string,
    preco: string
};

export default function ServiceCard({ nome, imgUrl, preco }: ServiceCardProps) {
    return (
        <div className={styles.serviceCard}>
            <div className={styles.imageContainer}>
                <Image
                    fill
                    src={`/images/services/${imgUrl}`}
                    alt={`Foto de prestação de serviço - ${nome}`}
                />
            </div>
            <div className={styles.infos}>
                <p className="c-blue1 font-bold">{nome}</p>
                <span><small className="c-white">{`R$${preco}`}</small></span>
            </div>
        </div>
    )
}