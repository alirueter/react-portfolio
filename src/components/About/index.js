import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return (
        <section>
            <h1 id="about"> Who am I? </h1>
            <img src={coverImage} style={{ width: "100%"}} alt="cover" />
            <p>
                My name is Ali and I've been around the Web Dev world for a few years now.
                I was first introduced to HTML, JavaScript, and CSS in one of my intro college courses and I've been slowly building my coding skillset ever since.
                I graduated with a Bachelor's in Business Administration with a focus on Interactive Web Management from the University of Wisconsin Oshkosh in May 2020 and
                started the University of Wisconsin Extended Campus' Coding Bootcamp shortly after that to further improve my web development toolkit. 
            </p>
            <p>
            How do you comfort a JavaScript bug? You console it.
            </p>
            <p> Oh, and I like nerdy jokes.</p>
        </section>
    )
}

export default About;