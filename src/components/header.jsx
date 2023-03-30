import styles from "./hero.module.css";
import email from "../img/email.svg"
import clock from "../img/clock.svg"
import call from "../img/call.svg"
import logo from "../img/logo.png"


const Header = () => {

    return (
        <>
            <header className={styles.header}>
                <div className="ctrlwidth">
                    <main>
                        <img src={logo} alt="" />
                        <ul>
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
                    </main>
                </div>
            </header>
        </>
    )
}


export default Header