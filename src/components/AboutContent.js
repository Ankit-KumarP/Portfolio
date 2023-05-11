import React from 'react'
import './AboutContentStyles.css'
import { Link } from 'react-router-dom'
// import Stack1 from '../assets/DP.png'
import Stack2 from '../assets/DP.png'
import { NavLink } from 'react-router-dom'



const AboutContent = () => {
    return (
        <>
            <div className="about">
                <div className="left">
                    <h1>Who Am I?</h1>
                    <p>
                        <li>I'm Ankit Kumar, a third-year Siksha O Anusandhan University student.</li>
                        <li>Intern @Code Clause | Ex - Oasis Infobyte.</li>
                        <li>Solved 100+ questions on <Link to="https://leetcode.com/_AnkitKumar/" target='_blank' style={{ textDecoration: "underline" }}><i>LeetCode</i></Link> </li>
                        <li>Completed a game project with IBM Developer Skills Network.</li>
                        <li>I have a YouTube channel <Link to="https://www.youtube.com/@AnkitKumar-ys7vs" target='_blank' style={{ textDecoration: "underline" }}><i>@Ankit Kumar</i></Link></li>
                        <li>In my spare time, I enjoy video editing, playing chess, reading tech documentaries, and participating in coding competitions.</li>
                    </p>
                    <Link to="https://inputformp.netlify.app/" target='_blank'>
                        <button className='btn'>Lets's Talk</button>
                    </Link>
                </div>
                <div className="right">
                    <div className="img-container">
                        {/* <div className="img-stack top">
                            <img src={Stack1} alt="image" className='img' />
                        </div> */}
                        <div className="img-stack bottom">
                            <img src={Stack2} alt="image" className='img' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContent
