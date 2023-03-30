import styles from "./second.module.css"
import expertone from "../img/expert1.png"
import experttwo from "../img/expert2.png"
import expertthree from "../img/expert3.png"



const Expert = () => {
    return (
        <div className={styles.expert}>
            <div className="ctrlwidth">
                <p className="title">The Transporters</p>
                <h2>Meet Expert Team</h2>
                <ul>
                    <li><img src={expertone} alt="" /></li>
                    <li><img src={experttwo} alt="" /></li>
                    <li><img src={expertthree} alt="" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Expert