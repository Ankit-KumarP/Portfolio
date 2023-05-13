import React from 'react'
import './WorkCardStyles.css'
import textEditor from '../assets/textEditor.png'
import { NavLink } from 'react-router-dom'

function WorkCard(props) {
    return (
        <>
            <div className="project-card">
                <img src={props.imgsrc} alt="image" />
                <h2 className='project-title'>{props.title}</h2>
                <div className="project-details">
                    <div className='text'>{props.text}</div>
                    <div className="project-btns ">
                        <NavLink to={props.view} target='_blank' className="btn work-btn">{props.name1}</NavLink>
                        <NavLink to={props.score} target='_blank' className="btn work-btn">{props.name2}</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkCard
