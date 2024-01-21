import React from 'react'
import Software from './Image-Container/software-engineer.png'
import './about.css'
import Header from './Header';
import {
    ReactOriginalWordmark, JavascriptOriginal, JavaOriginalWordmark,
    COriginal, NodejsOriginalWordmark, SpringOriginalWordmark,
    Html5PlainWordmark, BootstrapOriginal, PythonOriginal,
    FirebasePlainWordmark, CplusplusOriginal, GithubOriginalWordmark,
    MysqlOriginalWordmark, Css3PlainWordmark, ExpressOriginal, LinkedinOriginal
}
    from 'devicons-react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
export default function About() {
    return (
        <div>
            <Header />
            <div>
                <div className="biography-container">
                    <header>
                        <h2>Karan's Portfolio</h2>
                    </header>

                    <section className="main-content">
                        <div className="image-container">

                            <img src={Software} alt="Profile" />
                        </div>


                        <div className="bio-details">
                            <h3>Name: Karan Budhathoki</h3>
                            <p>Major: <b>Computer Science (CyberSecurity Certificate)</b></p>
                            <p>Graduation: <b>University of North Texas</b></p>
                            <p>Technologies:
                                <div className='about-tech-container'>
                                    <ReactOriginalWordmark size="35" className="test" />
                                    <JavascriptOriginal size="35" className="test" />
                                    <NodejsOriginalWordmark size="35" className="test" />
                                    <Html5PlainWordmark size="35" className="test" />
                                    <Css3PlainWordmark size="35" className="test" />
                                    <BootstrapOriginal size="35" className="test" />
                                    <COriginal size="35" className="test" />
                                    <JavaOriginalWordmark size="35" className="test" />
                                    <SpringOriginalWordmark size="35" className="test" />
                                    <PythonOriginal size="35" className="test" />
                                    <FirebasePlainWordmark size="35" className="test" />
                                    <CplusplusOriginal size="35" className="test" />
                                    <GithubOriginalWordmark size="35" className="test" />
                                    <MysqlOriginalWordmark size="35" className="test" />
                                    <ExpressOriginal size="35" className="test" />
                                </div></p>
                            <h3>About My Journey</h3>
                            <p>Driven by a deep passion for technology, my desire to innovate has led
                                me to undertake impactful projects showcasing a diverse skill set. From coding
                                to problem-solving, I've engaged in creating solutions that contribute to
                                communities and foster continuous learning. Eager to make meaningful contributions,
                                my journey is fueled by a commitment to explore and innovate in the dynamic field of
                                technology.
                            </p>
                            <h5>Projects and Ideas</h5>
                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Expense App</Accordion.Header>
                                    <Accordion.Body>
                                        In developing the expense management application, I harnessed React, JavaScript,
                                        and Node.js to ensure a seamless user experience. As the creator, I designed the platform for
                                        effortless expense input and categorization, providing users, including myself, with insightful
                                        visualizations. The user-friendly interface is a testament to my commitment to simplifying expense
                                        tracking, empowering individuals to manage their finances efficiently. By incorporating cutting-edge
                                        technologies, I aimed to streamline the user journey, enabling quick insights into spending patterns.
                                        This project is not just a demonstration of my proficiency in front-end and back-end development but also
                                        reflects my dedication to crafting practical, user-centric solutions for everyday challenges in financial management.
                                        <br></br><br></br>
                                        <h5>Technologies Used:</h5>
                                        <ReactOriginalWordmark size="35" className="test" />
                                        <JavascriptOriginal size="35" className="test" />
                                        <NodejsOriginalWordmark size="35" className="test" />
                                        <Html5PlainWordmark size="35" className="test" />
                                        <BootstrapOriginal size="35" className="test" />
                                        <MysqlOriginalWordmark size="35" className="test" />
                                        <ExpressOriginal size="35" className="test" />
                                        <br></br><br></br>
                                        <h5>Link to site</h5>
                                        <Button variant="info" size="lg">
                                            <a href="https://github.com/kbb0135/Expense-MySQL">Expense App</a>
                                        </Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>UNT-Canteen</Accordion.Header>
                                    <Accordion.Body>

                                        Addressing the specific needs of the UNT-Canteen, my team and I developed a comprehensive UNT-Cafeteria application
                                        to enhance the overall dining experience. This innovative platform seamlessly integrates secure payment options
                                        through Stripe, ensuring a trustworthy transaction process for users.<br></br>
                                        A key feature of the application is its intuitive admin mode, allowing for
                                        effortless food item management. This administrative capability empowers the cafeteria staff to efficiently add, delete,
                                        and modify items, ensuring the menu is always up-to-date. Moreover, the incorporation of features like coupons and real-time
                                        notifications serves to keep users well-informed about attractive deals, fostering user engagement.<br></br>
                                        Our UNT-Cafeteria application stands as a testament to our commitment to providing practical solutions that prioritize user
                                        satisfaction. By combining secure payment methods, intuitive admin controls, and engaging features, our team has crafted a
                                        user-friendly and efficient platform that elevates the dining experience for the UNT community.
                                        <h5>Technologies Used:</h5>
                                        <ReactOriginalWordmark size="35" className="test" />
                                        <JavascriptOriginal size="35" className="test" />
                                        <ExpressOriginal size="35" className="test" />
                                        <NodejsOriginalWordmark size="35" className="test" />
                                        <Html5PlainWordmark size="35" className="test" />
                                        <BootstrapOriginal size="35" className="test" />
                                        <FirebasePlainWordmark size="35" className="test" />
                                        <br></br><br></br>
                                        <h5>Link to site</h5>
                                        <Button variant="info" size="lg">
                                            <a href="https://unt-canteen.web.app">UNT-Canteen</a>
                                        </Button>



                                    </Accordion.Body>

                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Chat App</Accordion.Header>
                                    <Accordion.Body>

                                        I developed a real-time chat application with a focus on providing users with an instantaneous and engaging
                                        communication experience. The platform features live messaging, multimedia support, and an intuitive user
                                        interface for seamless interaction. It incorporates features like message notifications and status indicators,
                                        enhancing the overall user experience. The application prioritizes adaptability by employing scalable architecture to
                                        accommodate a growing user base while maintaining optimal performance. Security measures, including end-to-end encryption,
                                        are implemented to ensure the privacy and integrity of user data. This project underscores my dedication to creating dynamic,
                                        user-centric solutions that leverage the latest technologies, emphasizing both functionality and a commitment to continuous

                                        improvement in the rapidly evolving landscape of software development.
                                        <br></br><br></br>
                                        <h5>Technologies Used:</h5>
                                        <ReactOriginalWordmark size="35" className="test" />
                                        <JavascriptOriginal size="35" className="test" />
                                        <NodejsOriginalWordmark size="35" className="test" />
                                        <Html5PlainWordmark size="35" className="test" />
                                        <BootstrapOriginal size="35" className="test" />
                                        <FirebasePlainWordmark size="35" className="test" />
                                        <br></br><br></br>
                                        <h5>Link to site</h5>
                                        <Button variant="info" size="lg">
                                            <a href="https://github.com/kbb0135">Chat-App</a>
                                        </Button>
                                    </Accordion.Body>

                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Path to HTML, CSS, and JS</Accordion.Header>
                                    <Accordion.Body>
                                        Recognizing the  importance of continuous learning, I developed an HTML-JS
                                        learning app. This educational resource not only facilitates
                                        interactive HTML learning but also allows users to track their
                                        progress, promoting a personalized and effective learning
                                        experience.
                                        These projects collectively highlight my versatility in
                                        addressing practical needs, fostering communication, and
                                        promoting continuous learning. As I progress in my academic
                                        journey at XYZ University, I am enthusiastic about contributing
                                        further to the dynamic landscape of technology.
                                        <br></br><br></br>
                                        <h5>Technologies Used:</h5>
                                        <JavascriptOriginal size="35" className="test" />
                                        <Html5PlainWordmark size="35" className="test" />
                                        <BootstrapOriginal size="35" className="test" />
                                        <Css3PlainWordmark size="35" className="test" />
                                        <FirebasePlainWordmark size="35" className="test" />
                                        <br></br><br></br>
                                        <h5>Link to site</h5>
                                        <Button variant="info" size="lg">
                                            <a href="https://kbb0135.github.io/CSC344Project/">Learn HTML</a>
                                        </Button>
                                    </Accordion.Body>

                                </Accordion.Item>
                            </Accordion>

                        </div>
                    </section>

                    <footer>
                        <p>Contact me at by clicking:
                            <a href="https://www.linkedin.com/in/karan-budhathoki-099907219/">
                                {<LinkedinOriginal size="25" className="footertest" />}
                            </a>
                            <a href="https://github.com/kbb0135">
                                {<GithubOriginalWordmark size="25" className="footertest" />}
                            </a>
                        </p>
                        
                    </footer>

                </div>
            </div>
        </div>
    )
}
