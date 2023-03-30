import style from "./footer.module.css"
import logo from "../img/logo.png"

import email from "../img/email.svg"
import call from "../img/call.svg"


import facebook from "../img/Facebook.svg"
import twitter from "../img/Twitter.svg"
import linkedin from  "../img/Linkdin.svg"

const Footer = () => {
    return(
        <footer className={style.footer}>

        <section>
            {/* This is to contain the image above the footer */}
        </section>
            <main>
                <ul className={style.first}>
                    <h2 className={style.active}><img src={logo} alt="" /></h2>
                    <p>
                        Leverage agile frameworks to provide a robust synopsis 
                        for strategy foster collaborative thinking to further the overall value.
                    </p>
                    <ul className={style.links}>
                        <li>
                            <img src={email} alt="" />
                            <p>Email<br />contact@logistics.com</p>
                        </li>
                        <li>
                            <img src={call} alt="" />
                            <p>Call Us <br /> (00) 112 365 489</p>
                        </li>
                    </ul>
                </ul>
                <ul className={style.middle}>
                    <h2>Pages</h2>
                    <li>About Us</li>
                    <li>Our Team</li>
                    <li>Our Project</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
                <ul className={style.middle}>
                    <h2>Style Guide</h2>
                    <li>Changelog</li>
                    <li>Licenses</li>
                    <li>Protected</li>
                    <li>Not Found</li>
                </ul>
                <ul className={style.subscribe}>
                    <h2>Subscribe</h2>
                    <input type="text" placeholder="Email Here*" />
                    <div>
                        <button>Send Now</button>
                        <img src={linkedin} alt="" />
                        <img src={twitter} alt="" />
                        <img src={facebook} alt="" />
                    </div>
                </ul>
            </main>
            <footer>
                <div>
                    <p>Copyright &copy; TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>
                    <ul>
                        <li>Style Guide</li>
                        <li>Licences</li>
                        <li>Changelog</li>
                        <li>Password</li>
                    </ul>
                </div>
            </footer>
        </footer>
    )
}


export  default Footer