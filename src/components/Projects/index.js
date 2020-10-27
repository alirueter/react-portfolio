import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
        name: "Note Taker",
        liveUrl: "https://cryptic-mesa-12158.herokuapp.com/",
        ghUrl: "https://github.com/alirueter/note-taker",
        tech: "Express.js",
        style: "note-taker"
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
    //    <section>
    //         <h2 className="section-header">Projects</h2>
    //         <div className="project-wrapper">
    //             {projects.map(project => (
    //                 <div className={`${project.style} project-item`} key={project.name}>
    //                     <div className="project-header">
    //                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-title">
    //                             {project.name}
    //                         </a>
    //                         <br></br>
    //                         <a href={project.ghUrl} target="_blank" rel="noopener noreferrer" className="project-gh">
    //                             GitHub Repo
    //                         </a>
    //                     </div>
    //                     <p className="project-tech">{project.tech}</p>
    //                 </div>   
    //             ))} 
    //         </div>
    //     </section>

            <section>
                <h2 className="section-header">Projects</h2>
                <div className="project-wrapper">
                {projects.map(project => (
                    <div key={project.name}>
                        <Card style={{width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>{project.tech}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>   
                ))} 
                </div>
            </section>
            
           
                
        //     <Card style={{ width: '18rem' }} border="dark">
        //     <Card.Img variant="top" src="holder.js/100px180" />
        //     <Card.Body>
        //       <Card.Title>Card Title</Card.Title>
        //       <Card.Text>
        //         Some quick example text to build on the card title and make up the bulk of
        //         the card's content.
        //       </Card.Text>
        //       <Button variant="primary">Go somewhere</Button>
        //     </Card.Body>
        //   </Card> 
    )

    
}

export default Projects;