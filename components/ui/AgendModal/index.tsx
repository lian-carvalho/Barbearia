'use client'

import styles from './style.module.css'

import { useState, useEffect } from "react"

import Image from 'next/image'

import { X } from 'lucide-react'

type AgendModalProps = {
    open: boolean;
    closeFunction: () => void;
}

export default function AgendModal({ open = false, closeFunction }: AgendModalProps) {

    const [finished, setFinished] = useState(false);

    useEffect(() => {
        if (!open) {
            setFinished(false);
        }
    }, [open])

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
                            <X className={styles.closeBtn} onClick={() => { closeFunction() }} />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="name">Nome completo</label>
                            <div>
                                <input type="text" name="name" id="name" placeholder='Nome completo' />
                            </div>
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="date">Selecione uma data</label>
                            <div>
                                <input type="date" name="date" id="date" />
                            </div>
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="date">Selecione uma unidade</label>
                            <select name="unit" id="">
                                <option value="unit1">Campo Grande - Rua Aguiar</option>
                                <option value="unit2">Campo Grande - Rua Centro</option>
                            </select>
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

                        <button className={styles.orangeBtn} onClick={() => { closeFunction() }}>Voltar</button>
                    </div>
                </div>
            )}
        </>
    )
}