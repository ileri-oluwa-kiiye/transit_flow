import styles from "./first.module.css"
import one from "../img/1.png"
import two from "../img/2.png"
import three from "../img/3.png"
import four from "../img/4.png"
import five from "../img/5.png"
import image from "../img/transportbg.png"


const Transport = () => {
    return(
        <>
            <div className={styles.transport}>
                <h2>Transporting Across The World</h2>
                <div className={styles.images}>
                    <img src={one} alt="" />
                    <img src={two} alt="" />
                    <img src={three} alt="" />
                    <img src={four} alt="" />
                    <img src={five} alt="" />
                </div>
                <div className={styles.button}>
                    <button>More Work</button>
                </div>
            </div>

            <div className={styles.cover}>
                <img src={image} alt="" />
            </div>
        </>
    )
}

export default Transport