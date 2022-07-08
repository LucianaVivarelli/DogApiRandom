import React from 'react'
import dogPhoto from '../assets/images/fundo-dog.jpg'
import styles from './BgBackground.module.css'

const BgBackground = () => {
  return (
    <div className={styles.dogHeaderContainer}>
      <h1 className={styles.dogHeaderText}>
        Se divirta com fotinhas aleatórios de doguinhos fofinhos
      </h1>
        <img className={styles.photo} src={dogPhoto} />
    </div>
  )
}

export default BgBackground