import { Link } from 'react-router-dom';
const Project = (props) => {

    return(
        <div className='project'>
            <img className='project-image' src={"/projects/images/" + props.project.img} />
            <Link to="https://seitron.com/en" className='project-link'>
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