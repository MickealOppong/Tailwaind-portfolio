import Hero from "./Hero";
import Navbar from "./Navbar";

const Landing = () => {
  return <section className="flex flex-col bg-gray-700">
    <Navbar />
    <Hero />
  </section>
}
export default Landing;