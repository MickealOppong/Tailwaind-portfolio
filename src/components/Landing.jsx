import Hero from "./Hero";
import Navbar from "./Navbar";

const Landing = () => {
  return <section className="flex flex-col h-vh xl:h-lvh bg-i">
    <Navbar />
    <Hero />
  </section>
}
export default Landing;