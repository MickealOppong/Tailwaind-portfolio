import { techStack } from "../data";
const Skills = () => {
  return <div className='max-w-md mx-auto justify-around'>
    <ul className="flex gap-x-6 justify-center" >
      {
        techStack.map((item) => {
          return <li className="list-disc mt-12 uppercase text-xs" key={item.id}>{item.text}</li>
        })
      }
    </ul>
  </div>
}
export default Skills;