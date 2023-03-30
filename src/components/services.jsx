import styles from "./first.module.css"
import sea from "../img/sea.png"
import house from "../img/house.png"
import air from "../img/air.png"
import local from "../img/local.png"


const Services = () => {
    return(
        <div className={styles.services}>
            <div className="ctrlwidth">
                <main>
                    <div>
                        <p className="title">What We Do</p>
                        <h2>Safe & Reliable Cargo Solutions</h2>
                    </div>
                    <div>
                        <li>
                            <div className={styles.img}>
                                <img src={sea} alt="" />
                            </div>
                            <div>
                                <h2>Sea Transport Services</h2>
                                <p>
                                    Following the quality of our service thus 
                                    having gained trust of our many clients.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.img}>
                                <img src={air} alt="" />
                            </div>
                            <div>
                                <h2>Air Fright Services</h2>
                                <p>
                                    Following the quality of our service thus 
                                    having gained trust of our many clients.
                                </p>
                            </div>
                        </li>
                    </div>
                    <div>
                        <li>
                            <div className={styles.img}>
                                <img src={house} alt="" />
                            </div>
                            <div>
                                <h2>Warehousing Services</h2>
                                <p>
                                    Following the quality of our service thus 
                                    having gained trust of our many clients.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.img}>
                                <img src={local} alt="" />
                            </div>
                            <div>
                                <h2>Local Shipping Services</h2>
                                <p>
                                    Following the quality of our service thus 
                                    having gained trust of our many clients.
                                </p>
                            </div>
                        </li>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Services