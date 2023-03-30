import styles from "./second.module.css"
import email from "../img/email.svg"
import clock from "../img/clock.svg"
import call from "../img/call.svg"

import clientone from "../img/client1.png"
import clienttwo from "../img/client2.png"
import clientthree from "../img/client3.png"
import clientfour from "../img/client4.png"


const Contact = () => {
    return(
        <div className={styles.contact}>
            <div className="ctrlwidth">

            <p className="title" style={{color:"white"}}>Contact</p>
                <section>
                    <aside>
                        <h2>Get in touch with us</h2>
                        <p>
                            Leverage agile frameworks to provide a robust synopsis 
                            for strategy foster collaborative thinking to further the overall value.
                        </p>

                        <ul className={styles.links}>
                            <li>
                                <img src={clock} alt="" />
                                <p>Mon - Sat 9.00 - 18.00 <br />Sunday Closed</p>
                            </li>
                            <li>
                                <img src={email} alt="" />
                                <p>Email<br />contact@logistics.com</p>
                            </li>
                            <li>
                                <img src={call} alt="" />
                                <p>Call Us <br /> (00) 112 365 489</p>
                            </li>
                        </ul>
                    </aside>

                    <form>
                        <div>
                            <input type="text" placeholder="Your name*"/>
                            <input type="email" placeholder="Email*"/>
                        </div>
                        <div>
                            <input type="tel" placeholder="Phone Number*"/>
                            <input type="text" placeholder="City*"/>
                        </div>
                        <textarea name="message" placeholder="Message*"></textarea>
                        <div className="button">
                            <button>Submit Message</button>
                        </div>
                    </form>
                </section>
                <section className={styles.clients}>
                    <img src={clientone} alt="" />
                    <img src={clienttwo} alt="" />
                    <img src={clientthree} alt="" />
                    <img src={clientfour} alt="" />
                </section>
            </div>
        </div>
    )
}

export default Contact