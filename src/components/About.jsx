import { useState } from "react";
import SectionTitle from "./SectionTitle";
const About = () => {
  const [showOverview, setShowOverview] = useState(false)
  const [showAbout, setShowAbout] = useState(true)
  return <>
    <section className="px-8 md:px-16 lg:px-32 w-[100vw]" id="about" >
      <SectionTitle text="about mike" />
      <article >
        <div className="flex flex-col gap-y-4">
          < p>I am a tech enthusiast,with five(5) years experience  working as a software implementer where i worked with developers to design user interfaces and functionality for Enterprise applications.
            With the experience of working in software industry, i decided to get into coding in order to harness the untapped potentials.
          </p>
          <p >I am married and also a father. i love spending time with my son. I come from Ghana,West of Africa. I speak English and French although English is my official language. I have a decent knowledge of Polish but still learning and i hope in the not distance future i will speak fluently.
          </p>
          <p >I love sports, particular Basketball and football and yes i can play both well. I love going to gym although since the birth of my son, i have not been able  to hit the gym.I am looking forward to restart soon this year. </p>
          <p >I have a Bachelor of laws degree and Master of Arts in Finance. I am open minded and team player, communicative and good sense of humor. I enjoy what i do and do what i enjoy and getting the chance to develop web applications is a pleasure.
            I am good at html, css, javascript, react, java and spring framework. I love to talk with you about my unique skills. Feel free to contact me , writing an email with your project idea or employment opportunity.</p>
          <div className="flex flex-col gap-4 mt-8">
            <button className="btn btn-primary w-36 h-16 mt-4"><a href="#contact">contact</a></button>
            <span className="text-secondary animate-pulse">mikel.oppon@gmail.com</span>
            <span className="text-secondary animate-pulse">+48 739-593-752</span>
          </div>
        </div>
      </article>
    </section>
  </>
}

export default About;