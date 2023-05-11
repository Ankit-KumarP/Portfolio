import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome, FaLinkedin, FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";

import './FooterStyles.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="left">
                        <div className="location" style={{ margin: "10px 0px" }}>
                            <Link to="https://www.google.com/maps/place/Amanwan,+Bihar/@25.2471829,85.6974526,15z/data=!3m1!4b1!4m6!3m5!1s0x39f26738f7ef561b:0xd089006d96a15ec2!8m2!3d25.2433219!4d85.6943193!16s%2Fg%2F12hkwn_gj" target='_blank'>
                                <FaHome size={27} style={{ color: "#fff", marginRight: "2rem" }} className="icons" />
                            </Link>
                            <div>
                                <p style={{ fontSize: "1.2rem" }}>Nalanda, Bihar</p>
                                <p style={{ fontSize: "1.2rem" }}>India</p>
                            </div>
                        </div>
                        <div className="phone" style={{ margin: "10px 0px" }}  >
                            <h4>
                                <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} className="icons" />
                                8210448078
                            </h4>
                        </div>
                        <div className="email" style={{ margin: "20px 0px" }} >
                            <h4 >
                                <GrMail size={20} style={{ color: "#fff", marginRight: "2rem" }} className="icons" />
                                ankit.kum1rr@gmail.com
                            </h4>
                        </div>
                    </div>
                    <div className="right">
                        <h4 style={{ fontSize: "1.4rem", marginBottom: "15px" }} >About Me</h4>
                        <p style={{ fontSize: "1.2rem", marginBottom: "15px" }} >Hi, I'm Ankit Kumar, a B.Tech CSE 3rd year student at ITER in Odisha. Originally from Nalanda, Bihar, I'm passionate about pursuing a career in technology and eager to learn and grow in the field. </p>
                        <div className="social" style={{ marginTop: "30px" }}>
                            <Link to="https://www.linkedin.com/in/ankitkrr/" target='_blank'>
                                <FaLinkedin size={25} style={{ color: "#fff", marginRight: "2rem" }} className="icons" />
                            </Link>
                            <Link to="https://leetcode.com/_AnkitKumar/" target='_blank'>
                                <SiLeetcode size={25} style={{ color: "#fff", marginRight: "2rem" }} className="icons" />
                            </Link>
                            <Link to="https://www.youtube.com/@AnkitKumar-ys7vs" target='_blank'>
                                <BsYoutube size={25} style={{ color: "#fff", marginRight: "2rem" }} className="icons" />
                            </Link>
                            <Link to="https://github.com/Ankit-KumarP" target='_blank'>
                                <FiGithub size={25} style={{ color: "#fff", marginRight: "2rem" }} className="icons" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer


