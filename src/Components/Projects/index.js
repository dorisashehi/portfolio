import './index.scss'
//import AnimatedLetters from '../AnimatedLetters'
//import { useState } from 'react'
import projects from '../../projects'
import Project from './Project'

const Projects = () => {
  //const [letterClass] = useState('text-animate')

  return (
    <div className="container projects-page">
      <div className="text-zone">
        {/* <h1>
                    <AnimatedLetters  letterClass = {letterClass}
                        strArray={['M','y',' ','P','r','o','j','e', 'c', 't', 's']}
                        idx={15}
                    />
                </h1> */}
        <div className="projects-container">
          {projects.map((project, index) => {
            return <Project key={project.id} project={project} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
