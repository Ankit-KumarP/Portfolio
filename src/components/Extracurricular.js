import React from 'react'
import './Extracurricular.css'
import { NavLink } from 'react-router-dom'
import './ExperienceStyles.css'
import Ques from '../assets/100Ques.png'
import GFG from '../assets/GFG.jpg'
import YT from '../assets/YouTube.png'

const Extracurricular = () => {
    return (
        <>
            <div className="extracurricular">
                <h1>Extracurricular</h1>
                <div className="container">
                    <div className="box1">
                        <div className="c-image">
                            <NavLink to="https://leetcode.com/_AnkitKumar/" target='_blank'>
                                <img src={Ques} className='img-cc' alt="Codeclause" width="" />
                            </NavLink>
                        </div>
                        <div className="role-work">
                            <h1>LeetCode</h1>
                            <h2>Completed 100+ Questions on LeetCode.</h2>

                        </div>
                    </div>
                    <div className="box2">
                        <div className="c-image">
                            <NavLink to="https://www.youtube.com/@AnkitKumar-ys7vs" target='_blank'>
                                <img src={YT} alt="Codeclause" width="" />
                            </NavLink>
                        </div>
                        <div className="role-work">
                            <h1>YouTube</h1>
                            <h2>I have a Youtube channel where I post videos related to coding.</h2>

                        </div>
                    </div>
                    <div className="box1">
                        <div className="c-image">
                            <NavLink to="https://drive.google.com/file/d/1_Q1PURuowG090T15BPPDVKbmq7IWNMwu/view?usp=share_link" target='_blank'>
                                <img src={GFG} alt="Codeclause" width="" />
                            </NavLink>
                        </div>
                        <div className="role-work">
                            <h1>Geeks For Geeks</h1>
                            <h2> Participated in a coding contest by Geeks for Geeks, scored  68.25 marks with a rank of 689 out of 4000 students.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Extracurricular
