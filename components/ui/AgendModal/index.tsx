'use client'

import styles from './style.module.css'

import { useState } from "react"

import Image from 'next/image'

import { X } from 'lucide-react'

type AgendModalProps = {
    open: boolean;
    closeFunction: () => void;
}

export default function AgendModal({ open = false, closeFunction }: AgendModalProps) {

    const [finished, setFinished] = useState(false);

    const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

    const [hourForm, setHourForm] = useState(hours[0]);

    const handleClose = () => { 
        setFinished(false);
        setHourForm(hours[0]);
        closeFunction();
    };

    const formValidation = () => {
        // Future validation
        setFinished(true);
    };

    return (
        <>
            {!finished && (
                <div className={`${styles.modalContainer} ${!open ? 'opacity-0 pointer-events-none' : ''} `}>
                    <div className={styles.modal}>
                        <div className={styles.modalHead}>
                            <h3 className="c-white font-bold">Agendar horário</h3>
                            <X className={styles.closeBtn} onClick={() => { handleClose() }} />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="name">Nome completo</label>
                            <div>
                                <input type="text" name="name" id="name" placeholder='Nome completo' autoComplete='off' />
                            </div>
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="date">Selecione uma data</label>
                            <div>
                                <input type="date" name="date" id="date" defaultValue={new Date().toISOString().split('T')[0]} />
                            </div>
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="date">Selecione uma unidade</label>
                            <select name="unit" id="">
                                <option value="unit1">Campo Grande - Rua Aguiar</option>
                                <option value="unit2">Campo Grande - Rua Centro</option>
                            </select>
                        </div>

                        <div className={styles.hoursContainer}>
                            <p className='c-white'>Selecione um horário</p>
                            <div className={styles.container}>

                                {hours.map((hour, index) => (
                                    <button
                                        key={index}
                                        className={hour === hourForm ? styles.active : ''}
                                        onClick={() => { setHourForm(hour) }}
                                    >
                                        {hour}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button className={styles.orangeBtn} onClick={() => { formValidation() }}>Agendar horário</button>
                    </div>
                </div>
            )}

            {finished && (
                <div className={`${styles.modalContainer} ${!open ? 'opacity-0 pointer-events-none' : ''} `}>
                    <div className={styles.modal}>
                        <h4 className="c-white font-bold">Agendamento realizado com sucesso!</h4>

                        <div className={styles.logoContainer}>
                            <Image
                                fill
                                src='/images/branding/logo.png'
                                alt=''
                            />
                        </div>

                        <button className={styles.orangeBtn} onClick={() => { handleClose() }}>Voltar</button>
                    </div>
                </div>
            )}
        </>
    )
}