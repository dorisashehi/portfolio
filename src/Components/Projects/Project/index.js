import { Link } from 'react-router-dom';
const Project = (props) => {

    return(
        <div className='project'>

            <Link to={props.project.link} className='project-link' target='blank'>
                <img className='project-image' alt="Project" src={"/projects/images/" + props.project.img} />
                <p className='project-title'>{props.project.title}</p>
            </Link>
                <h2 className='project-description'>{props.project.description}</h2>
                <div className='project-technologies'>
                    {
                        props.project.technologies.map((technology)=>{
                            return <span className='technology flat-button'>{technology}</span>
                        })
                    }
                </div>

        </div>
    )

}

export default Project;