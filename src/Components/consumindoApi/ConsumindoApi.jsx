import { useEffect, useState } from 'react'
import styles from'./ConsumindoApi.module.css'


function ConsumindoApi() {

  const url = 'https://dog.ceo/api/breeds/image/random'
  const [ foto, setFoto] = useState('')
  
    const requisicao = async ()=> {
    const response = await fetch (url)
    const json = await response.json()
    console.log(json);
    setFoto(json.message)

    }
  
  return (
    <div className={styles.containerSite}>
     
      <h1 className={styles.Titulo}>Aperte o botão abaixo para ver os doguinhos que temos por aqui!</h1>
      <img  className={styles.img} src={foto} alt='dog' />
      <button  className={styles.btn} onClick={requisicao}>cute dogs random</button>
    </div>
  )
}

export default ConsumindoApi
