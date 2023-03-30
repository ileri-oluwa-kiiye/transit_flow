import styles from "./second.module.css"
import blogone from "../img/blog1.png"
import blogtwo from "../img/blog2.png"
import blogthree from "../img/blog3.png"
import calendar from "../img/calendar.png"

const Blog =() =>{

    // I used this object as styling for the calendar part of the blog 
    let styleDiv = {
        "display" : "flex",
        "flexDirection" : "column",
        "alignItems" : "center",
    }

    return(
        <div className={styles.blog}>
            <div className="ctrlwidth">
                <header>
                    <p className="title">Our Blog</p>
                    <h2>Our Latest News</h2>
                </header>
                <main>
                    <ul className={styles.main}>
                        <li className={styles.main}>
                            <img src={blogone} alt="" />
                            <div style={styleDiv}>
                                <img src={calendar} alt="" />
                                <h2>08</h2>
                                <p>September</p>
                            </div>
                            <div className={styles.text} style={{maxWidth:"500px"}}>
                                <h3>Inland freight a worthy solution for your business</h3>
                                <p>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>

                                <ul className={styles.sub}>
                                    <li>Urgent transport solutions</li>
                                    <li>Reliable & experienced staffs</li>
                                    <li>Urgent transport solutions</li>
                                    <li>Reliable & experienced staffs</li>
                                </ul>
                            </div>
                        </li>


                        <li className={styles.main}>
                            <img src={blogtwo} alt="" />
                            <div style={styleDiv}>
                                <img src={calendar} alt="" />
                                <h2>12</h2>
                                <p>September</p>
                            </div>
                            <div className={styles.text} style={{maxWidth:"500px"}}>
                                <h3 className={styles.yellow}>Inland freight a worthy solution for your business</h3>
                                <p>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>

                                <ul className={styles.sub}>
                                    <li>Urgent transport solutions</li>
                                    <li>Reliable & experienced staffs</li>
                                    <li>Urgent transport solutions</li>
                                    <li>Reliable & experienced staffs</li>
                                </ul>
                            </div>
                        </li>


                        <li className={styles.main} style={{borderBottom: "1px solid #D6D6D6"}}>
                            <img src={blogthree} alt="" />
                            <div style={styleDiv}>
                                <img src={calendar} alt="" />
                                <h2>25</h2>
                                <p>September</p>
                            </div>
                            <div className={styles.text} style={{maxWidth:"500px"}}>
                                <h3>Five things you should have ready for your broker</h3>
                                <p>We are dedicated in creating added value for our customers by implementing modern technology in our work. </p>

                                <ul className={styles.sub}>
                                    <li>Urgent transport solutions</li>
                                    <li>Reliable & experienced staffs</li>
                                    <li>Urgent transport solutions</li>
                                    <li>Reliable & experienced staffs</li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <div className={styles.button}>
                        <button>More Blog</button>
                    </div>
                </main>
            </div>
        </div>
    )
}


export default Blog