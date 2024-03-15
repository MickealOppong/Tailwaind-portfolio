import { skills } from "../data";
import SectionTitle from "./SectionTitle";
const Skills = () => {
  return <section className="py-20 " id="skills">
    <SectionTitle text="tech stack" />
    <div className="px-8 grid gap-8 mt-8 md:px-16  md:grid-cols-2 lg:flex lg:flex-row lg:gap-4 lg:px-32">
      {
        skills.map((skill) => {
          const { id, title, icon, text } = skill;
          return <article key={id} className="grid grid-col-3 gap-4 border-2 shadow-md w-96 rounded-md px-4 py-4 lg:gap-20">
            <span >{icon}</span>
            <h2 className="text-gray-500 -lg:mt-12">{title}</h2>
            <p className="text-slate-700 tracking-wide -lg:mt-16">{text}</p>
          </article>
        })
      }
    </div>
  </section>
}
export default Skills;