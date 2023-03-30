import styles from "./first.module.css"
import whyus from "../img/whyus.png"
import travel from "../img/travel.png"
import delivery from "../img/delivery.png"
import pattern from "../img/pattern.png"


const Whyus = () => {
    return(
        <div className={styles.whyus}>
            <div className="ctrlwidth">
                <main>
                    <div className={styles.firstDiv}>
                        <div>
                            <p className="title">Why Us</p>
                            <h2>We provide full range global logistics solution</h2>
                            <p>
                                Leverage agile frameworks to provide a robust synopsis for strategy 
                                foster collaborative thinking to further the overall value proposition. 
                            </p>
                            <p>
                                Organically grow the holistic world view of disruptive innovation 
                                via workplace diversity and empowerment.
                            </p>
                            <ul>
                                <li>
                                    <img src={delivery} alt="" />
                                    <p>Delivery on Time</p>
                                </li>
                                <li>
                                    <img src={travel} alt="" />
                                    <p>Optimized Travel Cost</p>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.image}>
                            <img src={whyus} alt="" />
                        </div>
                    </div>
                    <div className={styles.secondDiv}>
                        <li className={styles.first}>
                            <h3>1294</h3>
                            <img src={pattern} alt="" />
                            <p>Delivered Packages</p>
                        </li>
                        <li className={styles.second}>
                            <h3>3594</h3>
                            <img src={pattern} alt="" />
                            <p>Satisfied Clients</p>
                        </li>
                    </div>
                </main>
            </div>
        </div>
    )
}


export default Whyus