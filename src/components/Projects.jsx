import { projectData } from '../data';
import SectionTitle from "./SectionTitle";
const Projects = () => {
  return <section id="projects">
    <SectionTitle text="Web creations" />
    <div className='max-w-5xl mx-auto px-8 grid gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-2 lg:4-auto'>
      {
        projectData.map((item) => {
          const { id, img, url, github, title } = item;
          return <article className='grid gap-8 border-2 rounded-md shadow-md w-80 '>
            <img src={img} className='' />
            <div>

            </div>
          </article>
        })
      }

    </div>
    <div>
      <button className="bg-sky-600 text-white rounded-md px-4 py-4"><a href="https://vite-cms.netlify.app/" referrerPolicy="no_referer" target="_blank">see more</a></button>
    </div>
  </section>
}
export default Projects;