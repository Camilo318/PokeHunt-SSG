import React from 'react'
import style from './styles/Pokemon.module.scss'
import Image from 'next/image'

const Pokemon = ({ id, children }) => {
    const source = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    return (
        <div className={style.pokemon}>
            <div className={style.pokemon__img}>
                <Image
                src={source}
                alt={`Picture of ${children}`}
                width={240}
                height={240}
                />
            </div>
            <h4>{ children }</h4>
        </div>
    )
}

export default Pokemon
