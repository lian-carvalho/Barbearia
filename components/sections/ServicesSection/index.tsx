import styles from './style.module.css'

import ServiceCard from '@/components/renders/ServiceCard'

export default function ServicesSection() {

    const services = [
        {
            nomeServico: 'Corte de cabelo',
            urlImagem: 'cut.png',
            preco: '55,90'
        },
        {
            nomeServico: 'Corte completo',
            urlImagem: 'full-cut.png',
            preco: '85,90'
        },
        {
            nomeServico: 'Corte & Barba',
            urlImagem: 'cut-and-beard.png',
            preco: '95,90'
        },
    ];

    return (
        <section className={styles.services} id='services'>
            <h1 className="c-blue font-bold">SERVIÇOS</h1>
            <p className="c-blue1">
                Lorem ipsum dolor sit amet consectetur. Nec dolor nibh cursus porttitor ipsum feugiat bibendum. At bibendum vulputate mi sit in facilisis elementum magnis non.
            </p>

            <div className={styles.container}>
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        nome={service.nomeServico}
                        imgUrl={service.urlImagem}
                        preco={service.preco}
                    />
                ))}
            </div>
        </section>
    )
}