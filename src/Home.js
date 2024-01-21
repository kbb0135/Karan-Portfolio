import React from 'react'
import htmlLearning from './Image-Container/htmlLearning.jpg';
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
        {
            image: UntApp,
            title: 'UNT-Canteen App',
            description: 'Helps UNT student to order food online. Also has a admin and user mode where admin can send and notify users for coupon',
            technology: "Technology Used",
            techDescription: "React, JS, NodeJS, HTML, BootStrap, firebase",
            hlink: "Link to Project",
            link: "https://unt-canteen.web.app"
        },
        {
            image: ChatApp,
            title: 'Chat App',
            description: 'Helps users to chat in real time and allows users to ',
            technology: "Technology Used",
            techDescription: "React, JS, NodeJS, HTML, firebase",
            hlink: "Link to Project",
            link: "https://github.com/kbb0135"
        },
        {
            image: htmlLearning,
            title: 'Learn HTML',
            description: 'Helps users to learn HTML, CSS, and JavaScript in an interactive way. Users are able to learn HTML, CSS, and JavaScript through Quizes, flashcards and tutorial. Progress can be tracked and has a feature of student and user.',
            technology: "Technology Used",
            techDescription: "React, JS, NodeJS, HTML, firebase",
            hlink: "Link to Project",
            link: "https://kbb0135.github.io/CSC344Project/",
        },
       
    ];

    return (
        <div>
            <Header />
            <div className="main-container" >
                <div className="left-container">

                    <h2>Fontend Developer</h2>
                    
                    <p>"Art of turning ideas into interactive,<br /> user-friendly experiences"</p>
                </div>
                <div className="image-container">
                    <div className="center-container">
                        <h2><u>Full Stack Developer</u></h2>
                        <hr></hr>
                    </div>

                    <div className="p-container">
                        <p>Name: <b>Karan Budhathoki</b>
                        </p>
                    </div>
                    <img src={Software} alt="software-img"></img>
                    <div className="center-container">
                    </div>
                    <hr></hr>

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
                <ReactOriginalWordmark size="50" className="test"/>
                <JavascriptOriginal size="50" className="test"/>
                <NodejsOriginalWordmark size="50"  className="test"/>
                <Html5PlainWordmark size="50"  className="test"/>
                <BootstrapOriginal size="50"  className="test"/>
                <COriginal size="50"  className="test"/>
                <JavaOriginalWordmark size="50"  className="test"/>
                <SpringOriginalWordmark size="50"  className="test"/>
                <PythonOriginal size="50"  className="test"/>
                <FirebasePlainWordmark size="50"  className="test"/>
                <CplusplusOriginal size="50"  className="test"/>
                <GithubOriginalWordmark size="50"  className="test"/>
                <MysqlOriginalWordmark size="50"  className="test"/>
            </div>
            <hr></hr>
            <h3>Major Projects</h3>
            <div className="project-box">
                <ProjectContainer projects={projects} />
            </div>



        </div>
    )
}
