import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import ProfileImg from '../../assets/images/profile.png'
import { useState } from 'react'

const Home = () => {
  const [letterClass] = useState('text-animate')
  const nameArray = [
    ' ',
    'D',
    'o',
    'r',
    'i',
    's',
    'a',
    ' ',
    'S',
    'h',
    'e',
    'h',
    'i',
  ]
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I </span>
          <span className={`${letterClass} _14`}>'m</span>

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Full-stack Developer </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>

      <div className="profile-picture">
        <img className="sub-logo" src={ProfileImg} alt="Dorisa" />
      </div>
    </div>
  )
}

export default Home
