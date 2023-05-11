import React from 'react'
import { Link } from 'react-router-dom'
import heroBG from '../assets/heroBG.jpg'
import './HeroImageStyles.css'

const HeroImage = () => {
    return (
        <>
            <div className="hero">
                <div className="mask">
                    <img className='intro-img' src={heroBG} />
                </div>
                <div className="content">
                    <p>ITER, SOA UNIVERSITY</p>
                    <h1>Ankit</h1>
                    <h1>Kumar</h1>
                    <div>
                        <Link to='/projects' className="btn">Projects</Link>
                        <Link to='/mywork' className="btn btn-light">Experience</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroImage
