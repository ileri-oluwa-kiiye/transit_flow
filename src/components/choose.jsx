
import styles from "./second.module.css"

import one from "../img/choose1.png"
import two from "../img/choose2.png"
import three from "../img/choose3.png"
import four from "../img/choose4.png"
import five from "../img/choose5.png"
import six from "../img/choose6.png"
import choose from "../img/choose.png"



const Choose = () => {
    return (
        <div className={styles.choose}>
            <div className="controlwidth">
                <main>
                    <img src={choose} alt="" className={styles.mainimg} />
                    <section>
                        <p className="title">Why Choose</p>
                        <h2>We create opportunity to reach potential</h2>
                        <h3>
                            Leverage agile frameworks to provide a robust synopsis for strategy foster
                             collaborative thinking to further the overall value proposition. 
                        </h3>
                        <div>

                            <ul>
                                <li>
                                    <img src={one} alt="" />
                                    <p>Safe Package</p>
                                </li>
                                <li>
                                    <img src={two} alt="" />
                                    <p>Global Tracking</p>
                                </li>
                                <li>
                                    <img src={three} alt="" />
                                    <p>In Time Delivery</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <img src={four} alt="" />
                                    <p>Ship Everywhere</p>
                                </li>
                                <li>
                                    <img src={five} alt="" />
                                    <p>24/7 Support</p>
                                </li>
                                <li>
                                    <img src={six} alt="" />
                                    <p>Transparant Pricing</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Choose