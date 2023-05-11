import React from 'react'
import './WorkCardStyles.css'
import WorkCard from './WorkCard';
import WorkCardDataProject from './WorkCardDataProject'
import { NavLink } from 'react-router-dom'

function Work(props) {
    return (
        <>
            <div className="work-container">
                <h1 className="project-heading">{props.title}</h1>
                <div className="project-container">
                    {
                        WorkCardDataProject.map((val, ind) => {
                            return (
                                <WorkCard
                                    name1 = "View"
                                    name2 = "Source code"
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    text={val.text}
                                    view={val.view}
                                    score={val.score}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Work
