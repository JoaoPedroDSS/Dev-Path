import styles from './Frase.module.css'
function Frase(){
    return(
      <div className={styles.Frase.container}>
        <p className={styles.FraseContent}>Este é um paragráfo com uma frase?</p>
      </div>
    )
   
}
export default Frase