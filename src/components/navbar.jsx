import styles from "./hero.module.css";
import instagram from "../img/Instagram.svg"
import facebook from "../img/Facebook.svg"
import twitter from "../img/Twitter.svg"
import linkedin from  "../img/Linkdin.svg"
import vector from "../img/vector.png"


const Navbar = () => {
    return(
        <div className={styles.nav}>
            <div className="ctrlwidth">
                <div className={styles.wrap}>
                    <ul className={styles.pages}>
                        <li className={styles.active}>Home</li>
                        <li>About</li>
                        <li>Pages <img src={vector} alt="" /></li>
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