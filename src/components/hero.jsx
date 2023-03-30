import styles from "./hero.module.css";
import Navbar from "./navbar";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <Navbar />
            <div className="ctrlwidth">
                <main>
                     <h2>Logistics & Supply Chain Solutions</h2>
                    <h1>Your Gateway <br /> to any Destination <br /> in the World</h1>
                    <p>
                        In augue ligula, feugiat ut nulla consequat. Ut est lacus, 
                        molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, 
                        nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. 
                    </p>
                    <button>Explore More</button>
                </main>
            </div>
        </div>
    )
}


export default Hero