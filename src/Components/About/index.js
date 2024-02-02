import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useState } from 'react';

const About = () => {

    const [letterClass] = useState('text-animate');

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
        </div>
    )
}

export default About;