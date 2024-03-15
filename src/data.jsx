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
    title: 'HTML&CSS',
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

export const about = [
  {
    id: nanoid(),
    title: 'overview',
    content: [
      {
        id: nanoid(),
        img: '',
        name: 'mo',
        data: Date.now(),
        title: 'hello world',
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed saepe magni nobis numquam itaque, id quaerat consequatur nam pariatur rem quasi fuga ullam libero hic tempora sequi esse deleniti at.'
      }
    ]
  },
  {
    id: nanoid(),
    title: 'about',
    content: [
      {
        id: nanoid(),
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed saepe magni nobis numquam itaque, id quaerat consequatur nam pariatur rem quasi fuga ullam libero hic tempora sequi esse deleniti at.'

      }
    ]
  },


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