import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import Whyus from "./components/whyus"
import Transport from "./components/transport"
import Testimonials from "./components/testimonial"
import Expert from "./components/expert"
import Contact from "./components/contact"
import Blog from "./components/blog"
import Footer from "./components/footer"

const Home = () => {

    return(
        <div>
            <Header />
            <Hero />
            <Services />
            <Whyus />
            <Transport />
            <Testimonials />
            <Expert />
            <Contact />
            <Blog />
            <Footer />
        </div>
    )
}

export default Home