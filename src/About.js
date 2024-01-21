import React from 'react'
import Software from './Image-Container/software-engineer.png'
import './about.css'
import Header from './Header';
import {
    ReactOriginalWordmark, JavascriptOriginal, JavaOriginalWordmark,
    COriginal, NodejsOriginalWordmark, SpringOriginalWordmark,
    Html5PlainWordmark, BootstrapOriginal, PythonOriginal,
    FirebasePlainWordmark, CplusplusOriginal, GithubOriginalWordmark,
    MysqlOriginalWordmark
}
    from 'devicons-react';
export default function
    () {
    return (
        <div>
            <Header />
            <div>
            <div className="biography-container">
      <header>
        <h1>My Biography</h1>
      </header>

      <section className="main-content">
        <div className="image-container">
          
          <img src={Software} alt="Profile" />
        </div>


        <div className="bio-details">
          <h2>Name: Karan Budhathoki</h2>
          <p>Major: <b>Computer Science (CyberSecurity Certificate)</b></p>
          <p>Graduation: <b>University of North Texas</b></p>
          <p>Technologies: <div className='about-tech-container'>
                <ReactOriginalWordmark size="35" className="test"/>
                <JavascriptOriginal size="35" className="test"/>
                <NodejsOriginalWordmark size="35"  className="test"/>
                <Html5PlainWordmark size="35"  className="test"/>
                <BootstrapOriginal size="35"  className="test"/>
                <COriginal size="35"  className="test"/>
                <JavaOriginalWordmark size="35"  className="test"/>
                <SpringOriginalWordmark size="35"  className="test"/>
                <PythonOriginal size="35"  className="test"/>
                <FirebasePlainWordmark size="35"  className="test"/>
                <CplusplusOriginal size="35"  className="test"/>
                <GithubOriginalWordmark size="35"  className="test"/>
                <MysqlOriginalWordmark size="35"  className="test"/>
            </div></p> 
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam vitae massa vel metus rhoncus commodo. Suspendisse
            ullamcorper lacus vel elit tincidunt efficitur.
          </p>
        </div>
      </section>

      <footer>
        <p>Contact me at: </p>
      </footer>
    </div>
            </div>
        </div>
    )
}
