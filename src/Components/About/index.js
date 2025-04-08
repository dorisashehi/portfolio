import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'

const About = () => {
  const [letterClass] = useState('text-animate')

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
          👨‍💻 As a web developer, I am actively seeking employment opportunities
          to enhance my skills in web development and gain valuable professional
          experience.
        </p>

        <p>
          💡 With several years of experience, I am proficient in JavaScript,
          React.js, Node.js, Expess.js, and PHP. Additionally, I possess
          hands-on experience with Magento 2, Vue.js, and JQuery.
        </p>
        <p>
          🔍 Open to new opportunities and challenges where I can apply my
          skills, learn from innovative projects, and contribute to the
          company's success.
        </p>
      </div>
    </div>
  )
}

export default About
