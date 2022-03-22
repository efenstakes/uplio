import clsx from 'clsx'


// models
import { Skill } from '../../models/skill'


// components
import VSpacerComponent from '../v_spacer/v_spacer.component'



import './skill_card.component.scss'



type ComponentProps = {
    skill: Skill
    animationIndex: number
    reverse?: boolean
}
const SkillCardComponent = ({ skill, animationIndex, reverse }: ComponentProps) => {
    const { title, tools, image } = skill

  
    return (
        <div 
            className={
                clsx([
                    'card', 'skill_card', [`fd_${animationIndex}`],
                    {
                        'skill_card__reverse': reverse
                    }
                ])
            }
        >
                    
            <div className="card__contents">

                <h3 className='text_3 bolder su_8'> {title } </h3>
                <VSpacerComponent space={3} />

                <div className='card__contents__tools row_wrapped ca_center'>
                    {
                        tools?.map((s: string, index: number)=> {

                            return (
                                <div 
                                    key={index} 
                                    className={
                                        clsx([
                                            "card__contents__tools__chip",
                                            `su_${index+10}`
                                        ])
                                    }
                                >
                                    { s }
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <img src={image}  className="card__image fd_16"/>
            
        </div>
    )
}

export default SkillCardComponent