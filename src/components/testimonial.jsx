import styles from "./first.module.css"
import star from "../img/Star.png"
import quote from "../img/quote.png"
import userone from "../img/user1.png"
import usertwo from "../img/user2.png"
import left from "../img/left.png"
import right from "../img/right.png"


const Testimonials = () => {
    return(
        <div className={styles.test}>
            <div className="ctrlwidth">
                <header>
                    <div>
                        <p className="title">Testimonial</p>
                        <h2>What Our Customers Say</h2>
                    </div>
                    <div>
                        <img src={left} alt="" />
                        <img src={right} alt="" />
                    </div>
                </header>
                <ul>
                    <li className={styles.first}> 
                        <section>
                            <img src={userone} alt="" className={styles.profileimg}/>
                            <div>
                                <h4>Kathleen Smith</h4>
                                <p>Fuel Company</p>
                            </div>
                            <img src={quote} alt="" />
                        </section>
                        <p className={styles.testimonial}>
                            Leverage agile frameworks to provide a robust synopsis for strategy 
                            foster collaborative thinking to further the overall value proposition. 
                            Organically grow the holistic world view of disruptive innovation via 
                            workplace diversity and empowerment.
                        </p>
                        <img src={star} alt="" />
                    </li>
                    <li className={styles.second}> 
                        <section>
                            <img src={usertwo} alt="" className={styles.profileimg}/>
                            <div>
                                <h4>John Martin</h4>
                                <p>Restoration Company</p>
                            </div>
                            <img src={quote} alt="" />
                        </section>
                        <p className={styles.testimonial}>
                            Leverage agile frameworks to provide a robust synopsis for strategy 
                            foster collaborative thinking to further the overall value proposition. 
                            Organically grow the holistic world view of disruptive innovation via 
                            workplace diversity and empowerment.
                        </p>
                        <img src={star} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials