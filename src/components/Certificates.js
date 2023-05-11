import React from 'react'
import ReactJS from '../assets/ReactJS.webp'
import CloudComputing from '../assets/CloudComputing.webp'
import Javascript from '../assets/Javascript.png'
import GoldmanSachs from '../assets/GS.png'
import CSS from '../assets/CSS.webp'
import JAVA from '../assets/JAVA.jpg'
import { NavLink } from 'react-router-dom'
import './CertificateStyles.css';

const Certificates = () => {
    return (
        <>
            <h1 className="certificate-heading">Certificates</h1>

            {/* CONTAINER 1 */}

            <div className="certificate-container">
                <div className="certificate-card">
                    <img src={ReactJS} alt="image" />
                    <h2 className='certificate-title'>React Js</h2>
                    <div className="certificate-details">
                        <p>
                            <ul>
                                <li style={{ margin: "8px 0px" }}>Completed React JS course and earned certification in the subject.  </li>
                                <li style={{ margin: "8px 0px" }}>Developed practical experience in building React applications, including integrating with external APIs.</li>
                                <li style={{ margin: "8px 0px" }}>Gained ability to design and implement user interfaces using React.</li>
                            </ul>
                        </p>
                        <div className="certificate-btns ">
                            <NavLink to="https://drive.google.com/file/d/16GQs0FJGEKE2C3q2zcE4gGRt8sTrH5hq/view?usp=sharing" target='_blank' className="btn work-btn">Credential</NavLink>
                        </div>
                    </div>
                </div>
                <div className="certificate-card">
                    <img src={CloudComputing} alt="image" />
                    <h2 className='certificate-title'>Cloud computing services</h2>
                    <div className="certificate-details">
                        <p>
                            <ul>
                                <li style={{ margin: "8px 0px" }}>Acquired a comprehensive understanding of cloud computing service models.  </li>
                                <li style={{ margin: "8px 0px" }}>Demonstrated knowledge of the unique characteristics SAAS, PAAS, IAAS.</li>
                                <li style={{ margin: "8px 0px" }}>Understand the types of workloads that are best suited for each service model.</li>
                            </ul>
                        </p>
                        <div className="certificate-btns ">
                            <NavLink to="https://drive.google.com/file/d/176u4YLcVgaX3vRJPjbFf91VEilhISwK1/view?usp=share_link" target='_blank' className="btn work-btn">Credential</NavLink>
                        </div>
                    </div>
                </div>
                <div className="certificate-card">
                    <img src={Javascript} alt="image" />
                    <h2 className='certificate-title'>Javascript</h2>
                    <div className="certificate-details">
                        <p>
                            <ul>
                                <li style={{ margin: "8px 0px" }}>Developed a strong understanding of JavaScript concepts through projects.  </li>
                                <li style={{ margin: "8px 0px" }}>Demonstrated proficiency in core JavaScript concepts.</li>
                                <li style={{ margin: "8px 0px" }}>Proven ability to implement front-end web applications using JavaScript and related technologies.</li>
                            </ul>
                        </p>
                        <div className="certificate-btns ">
                            <NavLink to="https://drive.google.com/file/d/1aepl3C-8Sfr5dWlyvNTf1ziTz3cwltWB/view?usp=sharing" target='_blank' className="btn work-btn">Credential</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTAINER => 2 */}

            <div className="certificate-container">
                <div className="certificate-card">
                    <img src={GoldmanSachs} alt="image" />
                    <h2 className='certificate-title'>Software engineering</h2>
                    <div className="certificate-details">
                        <p>
                            <ul>
                                <li style={{ margin: "8px 0px" }}>Participant of Software Engineering Virtual Experience program at Goldman Sachs.  </li>
                                <li style={{ margin: "8px 0px" }}>Explored a variety of fascinating topics, including Cryptography basics.</li>
                                <li style={{ margin: "8px 0px" }}>Gained valuable insights into the daily work of interns at the company.</li>
                            </ul>
                        </p>
                        <div className="certificate-btns ">
                            <NavLink to="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_n3fWRJFJWCfegLNbw_1677138422945_completion_certificate.pdf" target='_blank' className="btn work-btn">Credential</NavLink>
                        </div>
                    </div>
                </div>
                <div className="certificate-card">
                    <img src={CSS} alt="image" />
                    <h2 className='certificate-title'>CSS</h2>
                    <div className="certificate-details">
                        <p>
                            <ul>
                                <li style={{ margin: "8px 0px" }}>Developed understanding of CSS through coursework and practical experience.</li>
                                <li style={{ margin: "8px 0px" }}>Gained practical experience with CSS flex-box, box model, positioning, and grid.</li>
                                <li style={{ margin: "8px 0px" }}>Proven ability to work with CSS framework, Bootstrap to develop web applications.</li>
                            </ul>
                        </p>
                        <div className="certificate-btns ">
                            <NavLink to="https://drive.google.com/file/d/1rLBvC20VLNoCkcE8DQXfE4z6qVvu05Hy/view?usp=share_link" target='_blank' className="btn work-btn">Credential</NavLink>
                        </div>
                    </div>
                </div>
                <div className="certificate-card">
                    <img src={JAVA} alt="image" />
                    <h2 className='certificate-title'>Java</h2>
                    <div className="certificate-details">
                        <p>
                            <ul>
                                <li style={{ margin: "8px 0px" }}>Successfully completed a self placed Java programming certification course.  </li>
                                <li style={{ margin: "8px 0px" }}>Gained practical experience through hands-on exercises and projects.</li>
                                <li style={{ margin: "8px 0px" }}>Apply the concepts to solve real-world problems and implement solutions.</li>
                            </ul>
                        </p>
                        <div className="certificate-btns ">
                            <NavLink to="https://drive.google.com/file/d/1-7bGwTkIkwDBdWY0mCk93k0YpL0RKcsu/view?usp=share_link" target='_blank' className="btn work-btn">Credential</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Certificates
