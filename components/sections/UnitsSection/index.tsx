import styles from './style.module.css'

import UnitCard from '@/components/renders/UnitCard'

export default function UnitsSection() {

    const unidades = [
        {
            rua: 'Rua Aguiar, n120',
            cidade: 'Campo Grande - MS',
            imageUrl: 'unidade-aguiar.png',
        },
        {
            rua: 'Rua Centro, n10',
            cidade: 'Campo Grande - MS',
            imageUrl: 'unidade-centro.png',
        },
    ]

    return (
        <section className={styles.units} id='units'>
            <h1 className="c-blue font-bold">NOSSAS UNIDADES</h1>
            <div className={styles.container}>
                {unidades.map((unit, index) => (
                    <UnitCard
                        key={index}
                        rua={unit.rua}
                        cidade={unit.cidade}
                        imgUrl={unit.imageUrl} />
                ))}
            </div>
        </section>
    )
}