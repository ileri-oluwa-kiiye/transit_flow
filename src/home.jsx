import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import Whyus from "./components/whyus"
import Transport from "./components/transport"
import Testimonials from "./components/testimonial"

const Home = () => {

    return(
        <div>
            <Header />
            <Hero />
            <Services />
            <Whyus />
            <Transport />
            <Testimonials />
        </div>
    )
}

export default Home