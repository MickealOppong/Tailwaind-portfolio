import { skills } from "../data";
import SectionTitle from "./SectionTitle";
const Skills = () => {
  return <section className="py-20 " id="skills">
    <SectionTitle text="tech stack" />
    <div className="max-w-5xl mx-auto grid px-8 gap-2  md:grid-cols-2 lg:grid-cols-3" >
      {
        skills.map((skill) => {
          const { id, title, icon, text } = skill;
          return <article key={id} className="flex flex-col border-2 gap-y-2 shadow-md w-96 rounded-md px-4 py-4 lg:w-80">
            <span>{icon}</span>
            <h2 className="text-gray-700 text-xl -lg:mt-12">{title}</h2>
            <p className="text-slate-500 tracking-wide -lg:mt-16">{text}</p>
          </article>
        })
      }
    </div>
  </section>
}
export default Skills;