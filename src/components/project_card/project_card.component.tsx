import './project_card.component.scss'


// models
import { Project } from '../../models/project'

// components
import VSpacerComponent from '../v_spacer/v_spacer.component'



type ComponentProps = {
    project: Project
}
const ProjectCardComponent = ({ project }: ComponentProps) => {
    return (
        <div className='project_card'>
            
            <div className='project_card__image_container'>
                <img 
                    src={project.img} 
                    alt="project" 
                    className="project_card__image_container__image" 
                />
            </div>
            <VSpacerComponent space={1} />

            {/* name */}
            <p className="text_6 bolder">
                {project.name}
            </p>
            <VSpacerComponent space={.5} />

            <p className="">
                {project.description}
            </p>
            <VSpacerComponent space={1} />

        </div>
    )
}

export default ProjectCardComponent