import React from 'react';
// import coverImage from "/assets/cover/cover-image.jpg";

function About() {
    return (
        <section>
            <h2 id="about" className="section-header"> About Me </h2>
            {/* <img src="/assets/cover/cover-image.jpg" style={{ width: "40%"}} alt="cover" className="me-pic"/> */}
            <p className="about-text">
                My name is Ali and I've been around the Web Dev world for a few years now.
                I was first introduced to HTML, JavaScript, and CSS in one of my intro college courses and I've been slowly building my coding skillset ever since.
                I graduated with a Bachelor's in Business Administration with a focus on Interactive Web Management from the University of Wisconsin Oshkosh in May 2020 and
                started the University of Wisconsin Extended Campus' Coding Bootcamp shortly after that to further improve my web development toolkit. 

                <br></br>
                <br></br>
                How do you comfort a JavaScript bug? <span className="joke">You console it.</span>
                <br></br>
                <br></br>
                Oh, and I like nerdy jokes.
            </p>
        </section>
    )
}

export default About;