import React from 'react'
import Loader from 'react-loaders';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import PortfolioData from '../../data/portfolio.json'

const Portfolio = () => {
    const titleArray = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'];
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        const imgsrc = `${port.cover}`;
                        const gitLink = `${port.gitlink}`
                        return (
                            <div key={idx} className='image-box' >
                                <div className='image' style={{backgroundImage: `url(${imgsrc})` }}>
                                    {/* <img  alt="portfolio" src={imgsrc}
                                className='portfolio-image' /> */}
                                </div>
                                <div className="text">
                                    <a className='link'href={gitLink} target='_blank' rel='noreferrer' >GitHub</a>
                                    <h2 className="title">{port.title}</h2>
                                    <h4 className="description">{port.description}</h4>
                                    <h5>{port.stack}</h5>
                                </div>
                                <div className='view'>
                                <button className='btn' onClick={() => window.open(`${port.url}`)}>Live Demo</button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        )
    }
    return (
        <>
            <Loader type='pacman' />
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx={5} />
                </h1>
                <div>
                    {renderPortfolio(PortfolioData.portfolio)}
                </div>
            </div>
        </>
    )
}

export default Portfolio