import React from 'react'
import { NavLink } from 'react-router-dom'
import './ExperienceStyles.css'
import oasis from '../assets/o.jpg'
import IBM from '../assets/IBM.jpg'
import codeclause from '../assets/codeclause.jpg'

const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="container">
          <div className="box1">
            <div className="c-image">
              <NavLink to="https://drive.google.com/file/d/1ecIz8LTNkDynJxRny15pT8IfANQi4o4m/view?usp=share_link" target='_blank'>
                <img src={codeclause} className='img-cc' alt="Codeclause" width="" />
              </NavLink>
            </div>
            <div className="role-work">
              <h1>Web Developer</h1>
              <h2>Code clause</h2>
              <i>05/2023 - Present</i>
              <li>Skills used : React Js | JavaScript | Bootstrap</li>
              <li>Successfully worked on 2 major projects, namely URL Shortener and Unit Converter.</li>
              <li>Demonstrated a strong proficiency in React Js and JavaScript to create interactive web application.</li>
              <li>Leveraged Bootstrap to create consistent and mobile-friendly design layouts across various devices.
              </li>
            </div>
          </div>
          <div className="box2">
            <div className="c-image">
              <NavLink to="https://courses.cognitiveclass.ai/certificates/0de14a6f6e9e447ba8de8fc778af2944" target='_blank'>
                <img src={IBM} alt="Codeclause" width="" />
              </NavLink>
            </div>
            <div className="role-work">
              <h1>Gaming Project</h1>
              <h2>IBM Developer Skills</h2>
              <i>04/2023 - 04/2023</i>
              <li>Skills used : JavaScript | JQuery</li>
              <li>Developed a Rock Paper Scissors game using JavaScript with IBM Developer Skills Network.</li>
              <li>Successfully implemented features of user input handling, random selection, and result determination.</li>
              <li>Gained valuable experience in working under the guidance of experienced professionals of IBM developer skills.</li>
              <li></li>
            </div>
          </div>
          <div className="box1">
            <div className="c-image">
              <NavLink to="https://drive.google.com/file/d/12lhoXJkcxIZuN1JupWcaTCYmjn0N1eCc/view?usp=share_link" target='_blank'>
                <img src={oasis} alt="Codeclause" width="" />
              </NavLink>
            </div>
            <div className="role-work">
              <h1>Intern</h1>
              <h2>Oasis Infobyte</h2>
              <i>02/2023 - 04/2023</i>
              <li>Skills used : HTML | CSS | JavaScript | JQuery</li>
              <li>Created innovative and responsive web-based user interfaces using HTML, CSS, and JavaScript.</li>
              <li>Completed 3 major projects, and designed responsive layouts using JavaScript and jQuery.</li>
              <li>Ensured smooth customer experiences by implementing intuitive and user-friendly interfaces.
                Demonstrated a solid understanding of web development principles and best practices.
              </li>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Experience
