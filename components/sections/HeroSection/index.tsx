import styles from './style.module.css'

export default function HeroSection () {
    return(
        <section className={styles.hero}>
            <div>
                <h1 className="font-bold c-white">ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONA.</h1>
                <h5 className="c-white">Horário de funcionamento: 09:00 ás 18:00</h5>
                <button className={styles.agendBtn}>Agendar horário</button>
            </div>
        </section>
    )
}