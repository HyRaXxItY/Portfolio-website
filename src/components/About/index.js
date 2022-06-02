import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faFigma, faGitAlt, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500)
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']} idx={15} />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iure officia ex.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati libero beatae sunt facere vero error, minus laboriosam voluptatem animi? Veritatis!
                </p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color="#28a4d9"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faJs} color="#efd81d"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faGitAlt} color="#ec4b28"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faFigma} color="#6002ee"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About
