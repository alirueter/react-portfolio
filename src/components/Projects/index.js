import React from 'react';

const projects = [
    {
        name: "Budget Tracker",
        liveUrl: "https://mighty-citadel-30446.herokuapp.com/",
        ghUrl: "https://github.com/alirueter/budget-tracker",
        tech: "Progressive Web Application",
        style: "budget-tracker"
    },
    {
        name: "Campgrounds Inc.",
        liveUrl: "https://agile-journey-10175.herokuapp.com/",
        ghUrl: "https://github.com/alirueter/campgrounds-inc",
        tech: "MySQL2/Express/Sequelize",
        style: "campgrounds-inc"
    },
    {
        name: "The Tech Blog",
        liveUrl: "https://peaceful-brushlands-31786.herokuapp.com/",
        ghUrl: "https://github.com/alirueter/tech-blog",
        tech: "MVC/Handlebars/Sequelize/Express-Session",
        style: "tech-blog"
    },
    {
        name: "The Makers Corner",
        liveUrl: "https://aqueous-hollows-86524.herokuapp.com/",
        ghUrl: "https://github.com/Jleimer/The-Makers-Corner",
        tech: "React, Apollo, Graphql, MongoDB, Mongoose, dotenv, JWT, Redux, Moment.js, Express, bcrypt, Stripe, Nodemon",
        style: "makers-corner"
    },
    {
        name: "Find My Munchies",
        liveUrl: "https://alirueter.github.io/find-my-munchies/",
        ghUrl: "https://github.com/alirueter/find-my-munchies",
        tech: "HTML/CSS/JavaScript/jQuery/Materialize/APIs",
        style: "find-my-munchies"
    },
    {
        name: "Work Day Scheduler",
        liveUrl: "https://alirueter.github.io/workday-scheduler/",
        ghUrl: "https://github.com/alirueter/workday-scheduler",
        tech: "HTML/CSS/jQuery/Moment.js/Bootstrap",
        style: "workday-scheduler"
    }
]


function Projects() {

    return (
       <section>
            <h2 className="section-header">Projects</h2>
            <div className="project-wrapper">
                {projects.map(project => (
                    <div className={`${project.style} project-item`} key={project.name}>
                        <div className="project-header">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-title">
                                {project.name}
                            </a>
                            <br></br>
                            <a href={project.ghUrl} target="_blank" rel="noopener noreferrer" className="project-gh">
                                GitHub Repo
                            </a>
                        </div>
                        <p className="project-tech">{project.tech}</p>
                    </div>   
                ))} 
            </div>
        </section>
    )
}

export default Projects;