import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import { CardColumns, CardDeck, Container } from 'react-bootstrap';

const projects = [
    {
        name: "Budget Tracker",
        liveUrl: "https://mighty-citadel-30446.herokuapp.com/",
        ghUrl: "https://github.com/alirueter/budget-tracker",
        tech: "Progressive Web Application",
        description: "Budget Tracker is an app that helps users keep track of their finances. It has offline functionality, a table to track their transactions, and a chart displalying how their total balance has changed over time.",
        style: "/assets/proj-images/budget-tracker.png"
    },
    {
        name: "Campgrounds Inc.",
        liveUrl: "https://agile-journey-10175.herokuapp.com/",
        ghUrl: "https://github.com/alirueter/campgrounds-inc",
        tech: "MySQL2, Express, Sequelize",
        description: "Campgrounds Inc. is an app that uses the National Park Service's API to allow users to search for different national parks. Users can also create an account and save their favorite parks to their dashboard as well as write posts to share their experiences.",
        style: "/assets/proj-images/campgrounds.png"
    },
    {
        name: "The Tech Blog",
        liveUrl: "https://peaceful-brushlands-31786.herokuapp.com/",
        ghUrl: "https://github.com/alirueter/tech-blog",
        tech: "MVC, Handlebars, Sequelize, Express-Session",
        description: "The Tech Blog is a CMS-style blog site similar to a Wordpress site where developers can share their blog posts and comment on others' posts as well. This site was built from scratch and follows the MVC paradigm in architectual structure.",
        style: "/assets/proj-images/tech-blog.png"
    },
    {
        name: "Note Taker",
        liveUrl: "https://cryptic-mesa-12158.herokuapp.com/",
        ghUrl: "https://github.com/alirueter/note-taker",
        tech: "Express.js",
        description: "Note Taker is exactly as it sounds. It allows users to create and save notes using an Express.js backend.",
        style: "/assets/proj-images/note-taker.png"
    },
    {
        name: "Find My Munchies",
        liveUrl: "https://alirueter.github.io/find-my-munchies/",
        ghUrl: "https://github.com/alirueter/find-my-munchies",
        tech: "HTML, CSS, JavaScript, jQuery, Materialize, APIs",
        description: "Find My Munchies website that empowers hungry and thirsty users to find craft bewereries and food close to their location. The app uses several open source APIs to gather information to display relevant dining options.",
        style: "/assets/proj-images/find-my-munchies.png"
    },
    {
        name: "Work Day Scheduler",
        liveUrl: "https://alirueter.github.io/workday-scheduler/",
        ghUrl: "https://github.com/alirueter/workday-scheduler",
        tech: "HTML, CSS, jQuery, Moment.js, Bootstrap",
        description: "The Work Day Scheduler is a simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery as well as moment.js and Bootstrap.",
        style: "/assets/proj-images/workday-scheduler.png"
    }
]


function Projects() {

    return (
        <Container fluid class="container">
            {/* <hr class="line-1"></hr> */}
                <h2 className="section-header">Projects</h2>
                <hr class="line-2"></hr>
                <p class="subheading-text">Below you will find projects that I have completed during my Coding Bootcamp. Each project includes a link to both the live application as well as its GitHub repository.</p>
            <CardColumns>
            {projects.map(project => (
                <div key={project.name}>
                    <Card>
                    <Card.Header>{project.name}</Card.Header>
                        <Card.Body>
                            <Card.Img as={Image} variant="top" src={project.style}/>
                            <Card.Text>
                                {project.description}
                                <br></br><br></br>
                                <a href={project.liveUrl} target="_blank" class="card-link">Live Site</a>
                                <a href={project.ghUrl} target="_blank" class="card-link">Repository</a>
                            </Card.Text>
                            <Card.Footer class="tech-styles">
                                {project.tech}
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </div>   
            ))} 
            </CardColumns>
        </Container>
    )

    
}

export default Projects;