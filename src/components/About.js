import React from 'react'
import AppNavbar from './AppNavbar'

function About() {
    return (
        <div>
        <AppNavbar/>
        <div style={aboutStyle}>
            <h4>Greetings From Developer....</h4>
            <h5>This app provides the daily status of COVID19 cases around the world</h5>
            <h5>It gives you detail summary of cases in some Countries in the list</h5>
            <br></br>
            <h6>
                Contact-
            </h6>
            <p><a href="https://www.linkedin.com/in/nikhil-ranjan-niks">Linkedin Profile</a></p>
            <p><a href="https://github.com/nikstrick">Github Profile</a></p>
        </div>
        </div>
    )
}
const aboutStyle={
    margin:'10px',
    padding:'10px'
}
export default About