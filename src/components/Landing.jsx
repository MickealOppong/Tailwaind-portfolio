import Hero from "./Hero";
import Navbar from "./Navbar";
import Skills from "./Skills";
const Landing = () => {
  return <section className="flex flex-col h-[90vh]">
    <div className="">
      <Navbar />
      <Skills />
    </div>

    <Hero />
  </section>
}
export default Landing;