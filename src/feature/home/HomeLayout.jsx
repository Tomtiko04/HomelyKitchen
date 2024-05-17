import Home from "./Home";
import Counter from "./Counter";
import WhyChooseUs from "./WhyChooseUs";
import HomeDish from "../dishes/HomeMenu"
import About from "./About";
import GetApp from "./GetApp";
import Testimonials from "../testimonials/Testimonials";
import NewsLetter from "./NewsLetter";

export default function HomeLayout() {
  return (
   <>
   <Home />
   <Counter />
   <WhyChooseUs />
   <HomeDish />
   <About />
    <GetApp />
   <Testimonials />
   <NewsLetter />
   </>
  )
}
