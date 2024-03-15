import { useState } from "react";
import img from '../assets/img-2.jpeg';
import SectionTitle from "./SectionTitle";
const About = () => {
  const [showOverview, setShowOverview] = useState(false)
  const [showAbout, setShowAbout] = useState(true)
  return <section className="h-vh py-8 px-8 md:px-16 bg-gray-100  " id="about" >
    <SectionTitle text="about mike" />
    <div className="flex flex-col gap-10 lg:flex-row py-4 px-4">
      <div className="">
        <img src={img} />
      </div>
      <div className="ml-4 flex flex-col gap-y-10">
        <h2 className="italic text-5xl font-semibold text-sky-600 font-shadow">
          I'm Michael Oppong,
          Web Developer<br />
          from Łódź, Poland.
        </h2>
        <p >I have a Bachelor of laws degree and Master of Arts in Finance. I am open minded and team player, communicative and good sense of humor. I enjoy what i do and do what i enjoy and getting the chance to develop web applications is a pleasure.</p>
        <p className="-mt-8">I have rich experience in working with software company. Also I am good at html, css, javascript, react, java and spring framework. I love to talk with you about my unique skills. Feel free to contact me writing an email with your project idea or employment opportunity.</p>
        <button className="bg-sky-500 text-white h-16 w-36 rounded-md capitalize cursor-pointer tracking-wider"><a href="#contact">contact</a></button>
      </div>
    </div>
  </section>
}

export default About;