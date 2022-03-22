import clsx from 'clsx'


// models
import { Project } from '../../models/project'

// components
import VSpacerComponent from '../v_spacer/v_spacer.component'



import './project_card.component.scss'


type ComponentProps = {
    project: Project
    animationIndex?: number
}
const ProjectCardComponent = ({ project, animationIndex }: ComponentProps) => {
    return (
        <div 
            className={
                clsx([
                    'project_card', [`su_${animationIndex}`]
                ])
            }
        >
            
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