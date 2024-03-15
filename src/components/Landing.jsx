import Hero from "./Hero";
import Navbar from "./Navbar";

const Landing = () => {
  return <section className="flex flex-col bg-gray-600 h-vh xl:h-lvh">
    <Navbar />
    <Hero />
  </section>
}
export default Landing;