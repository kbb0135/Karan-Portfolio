import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Software from './Image-Container/software-engineer.png'
import './style.css'
import Header from './Header';
import {
    ReactOriginalWordmark, JavascriptOriginal, JavaOriginalWordmark,
    COriginal, NodejsOriginalWordmark, SpringOriginalWordmark,
    Html5PlainWordmark, BootstrapOriginal, PythonOriginal,
    FirebasePlainWordmark, CplusplusOriginal, GithubOriginalWordmark,
    MysqlOriginalWordmark
}
    from 'devicons-react';
import ProjectContainer from './ProjectContainer';
import ChatApp from './Image-Container/ChatApp.jpg';
import PieChart from './Image-Container/PieChart.jpg'
import UntApp from './Image-Container/entree.jpg'

export default function Home() {
    const expense = "Helps User to visualize data and helps user to manages those data in more effective way"
    const expenseTech = "React, JS, NodeJS, HTML, BootStrap, MYSQL"
    const projects = [
        {
            image: PieChart,
            title: "Expense App",
            description: expense,
            technology: "Technology Used",
            techDescription: expenseTech,
            hlink: "Link to Project",
            link: "https://github.com/kbb0135/Expense-MySQL"
        },
        { image: UntApp, title: 'UNT-Canteen', description: 'Description 2' },
        // Add more projects as needed
    ];

    return (
        <div>
            <Header />
            <div className="main-container" >
                <div className="left-container">

                    <h2>Fontend Developer</h2>
                    <h6>Backend developer that </h6>
                    <p>Art of turning ideas into interactive,<br /> user-friendly experiences</p>
                </div>
                <div className="image-container">
                    <div className="center-container">
                        <h2>Full Stack Developer</h2>
                    </div>

                    <div className="p-container">
                        <p>Name: Karan Budhathoki
                        </p>
                    </div>
                    <img src={Software}></img>
                    <div className="center-container">
                    </div>

                </div>
                <div className="right-container">
                    <h2>Backend Developer</h2>
                    <p>engine that powers applications, <br />
                        handling the complexities behind the <br />
                        scenes and ensuring a robust
                        <br /> and scalable infrastructure.</p>
                </div>
            </div>
            <hr></hr>
            <h3>Technologies</h3>
            <div className='tech-container'>
                <ReactOriginalWordmark size="50" />
                <JavascriptOriginal size="50" />
                <NodejsOriginalWordmark size="50" />
                <Html5PlainWordmark size="50" />
                <BootstrapOriginal size="50" />
                <COriginal size="50" />
                <JavaOriginalWordmark size="50" />
                <SpringOriginalWordmark size="50" />
                <PythonOriginal size="50" />
                <FirebasePlainWordmark size="50" />
                <CplusplusOriginal size="50" />
                <GithubOriginalWordmark size="50" />
                <MysqlOriginalWordmark size="50" />
            </div>
            <hr></hr>
            <h3>Major Projects</h3>
            <div className="project-box">
                <ProjectContainer projects={projects} />
            </div>



        </div>
    )
}
