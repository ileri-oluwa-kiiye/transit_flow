import styles from "./hero.module.css";
import instagram from "../img/Instagram.svg"
import facebook from "../img/Facebook.svg"
import twitter from "../img/Twitter.svg"
import linkedin from  "../img/Linkdin.svg"


const Navbar = () => {
    return(
        <div className={styles.nav}>
            <div className="ctrlwidth">
                <div className={styles.wrap}>
                    <ul className={styles.pages}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Pages</li>
                        <li>Project</li>
                        <li>Contact</li>
                    </ul>
                    <ul className={styles.socials}>
                        <li><img src={instagram} alt="" /></li>
                        <li><img src={facebook} alt="" /></li>
                        <li><img src={twitter} alt="" /></li>
                        <li><img src={linkedin} alt="" /></li>
                    </ul>
                    <ul className={styles.quote}>
                        Request Quote
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Navbar