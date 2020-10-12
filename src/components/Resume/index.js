import React from 'react';
import resumePdf from "../../assets/res-portfolio.pdf";

function Resume() {
    return(
        <section>
            <h2 className="section-header">Resume</h2>
            <p> Download my <a href={resumePdf} download={resumePdf}>resume</a>.</p>
        
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Materialize.css</li>
                <li>Responsive Design</li>
            </ul>

            <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>Express</li>
                    <li>Node</li>
                    <li>APIs</li>
                    <li>MySQL/Sequelize</li>
                    <li>MongoDB/Mongoose</li>
                </ul>
        </section>
    )
};

export default Resume;