import { useState } from "react";
import SectionTitle from "./SectionTitle";
const About = () => {
  const [showOverview, setShowOverview] = useState(false)
  const [showAbout, setShowAbout] = useState(true)
  return <section className=" bg-gray-100 py-8 " id="about" >
    <SectionTitle text="about mike" />
    <div className="flex flex-col lg:flex-row px-8 md:px-16 lg:px-32">
      <div className="flex flex-col gap-y-10">
        < p className="text-gray-500 leading-6 tracking-wider">I am a tech enthusiast ,with five(5) years experience  working as a software implementer where i worked with developers to design user interfaces and functionality for Enterprise applications.
          With the experience of working in software industry, i decided to get into coding in order to harness the untapped potentials.
        </p>
        <p className="text-gray-500 leading-6 tracking-wider -mt-8">I am married and also a father. i love spending time with my son. I come from Ghana,West of Africa. I speak English and French although English is my official language. I have a decent knowledge of Polish but still learning and i hope in the not distance future i will speak fluently.
        </p>
        <p className="text-gray-500 leading-6 tracking-wider -mt-8">I love sports, particular Basketball and football and yes i can play both well. I love going to gym although since the birth of my son, i have not been able  to hit the gym.I am looking forward to start soon this year. </p>
        <p className="text-gray-500 leading-6 tracking-wider -mt-8">I have a Bachelor of laws degree and Master of Arts in Finance. I am open minded and team player, communicative and good sense of humor. I enjoy what i do and do what i enjoy and getting the chance to develop web applications is a pleasure.
          I am good at html, css, javascript, react, java and spring framework. I love to talk with you about my unique skills. Feel free to contact me , writing an email with your project idea or employment opportunity.</p>
        <button className="bg-sky-500 text-white h-16 w-36 rounded-md capitalize cursor-pointer tracking-wider"><a href="#contact">contact</a></button>
      </div>
    </div>
  </section>
}

export default About;