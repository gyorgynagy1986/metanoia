import React from 'react'
import style from './Devider.module.css'
import Image from 'next/image'
import photo from '../../../public/assets/devider.svg'

const Devider = () => {
  return (
    <div className={style.container}>
        <Image alt='section devider' src={photo} />
    </div>
  )
}

export default Devider