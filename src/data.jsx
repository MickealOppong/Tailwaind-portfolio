import { nanoid } from "nanoid";
import { FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import img from './assets/spring.png';
export const links = [
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" }
]


export const skills = [
  {
    id: nanoid(),
    title: 'Java SE',
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Java SE and its core libraries for creating  desktop application."
  },
  {
    id: nanoid(),
    title: 'Spring Frameworks ',
    icon: <img src={img} className="h-20 " />,
    text: "Proficient in spring boot and spring mvc,adeptly crafting Rest-API for front end applications for optimal user experiences."
  },
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences."
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in javascript, adeptly crafting visually appealing and responsive websites for optimal user experiences."
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in react and its core libraries, adeptly crafting visually appealing and responsive websites for optimal user experiences."
  },


]

export const projectData = [
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/tkvxc10g03l8/6Uukj7hjDJ2au8eb9dn6CI/7cfe69004d7004c1c37ef2bac368f251/progress_tracker.png',
    text: 'progressTracker',
    url: 'https://react-progresstracker.netlify.app/',
    github: 'https://github.com/MickealOppong/ProgressTrackerApp'
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/tkvxc10g03l8/4gEOjI5YiUjSoSYNqwAJBa/53c459b5c7ba98b43eabf8c911b4921d/sidebar.png',
    text: 'progressTracker',
    url: 'https://react-my-sidebarmodal.netlify.app/',
    github: 'https://github.com/MickealOppong/sidebar'
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/tkvxc10g03l8/5p60CAe44hoguRPNVUjch9/20e6759f6f527adb506da022bacc3481/menu.png',
    text: 'progressTracker',
    url: 'https://react-my-menu.netlify.app/',
    github: 'https://github.com/MickealOppong/menu'
  }
]


export const bgImage = [
  {
    id: 1,
    img: 'https://media.istockphoto.com/id/481009476/pl/zdj%C4%99cie/widok-z-g%C3%B3ry-z-kopia-miejsce-biurku.jpg?s=612x612&w=0&k=20&c=ZlIkMmqQr0oqd6oek3KSxx-o6mjsRo0vLDbjfoNKsGA='
  },
  {
    id: 2,
    img: 'https://media.istockphoto.com/id/618357880/pl/zdj%C4%99cie/biurko-pracuje-w-drewnianym-tle.jpg?s=612x612&w=0&k=20&c=cuDnqitkgCXoi-s6p0t5V-4AxsNkI7s1nenDs3ohTQk='
  },
]