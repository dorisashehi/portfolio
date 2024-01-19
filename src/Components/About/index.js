import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    return(
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters  letterClass = {letterClass}
                        strArray={['A','b','o','u','t', ' ', 'M', 'e']} 
                        idx={15}
                    />
                </h1>
                <p>As an enthusiastic web developer, I am actively seeking employment 
                    opportunities to enhance my skills in
                    web development and gain valuable professional experience.</p>

                <p>With five years of experience, I am proficient
                    in PHP, Magento 2 CMS, Laravel framework, and Javascript. Additionally, I possess hands-on experience
                    with NodeJS, ExpressJs framework, VueJs, Jquery. Currently, I am expanding my skill set by learning
                    ReactJs and Python.</p>

                <p>I am excited to learn new things, face new challenges, 
                    and contribute to the company's success.</p>
            </div>
            {/* <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4"/>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default About;