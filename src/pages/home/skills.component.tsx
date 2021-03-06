
// models
import { Skill } from '../../models/skill'


// components
import SkillCardComponent from '../../components/skill_card/skill_card.component'


import backend_img from '../../assets/be.jpg'
import frontend_img from '../../assets/fr3.png'
import block_img from '../../assets/block.jpg'
import mobile_img from '../../assets/mobile.jpeg'
import devops_img from '../../assets/devops.jpg'



import './skills.component.scss'


const SkillsComponent = () => {
    const skills: Array<Skill> = [
        {
            title: "Backend",
            image: backend_img,
            tools: [
                "NodeJs", "Elixir", "Python", "PhP",
            ]
        },
        {
            title: "Frontend",
            image: frontend_img,
            tools: [
                "TypeScript", "Javascript", "React", "HTML5", "CSS3"
            ]
        },
        {
            title: "Blockchain",
            image: block_img,
            tools: [
                "Solidity", "The Graph", "HardHat",
            ]
        },
        {
            title: "Mobile",
            image: mobile_img,
            tools: [
                "Flutter", "React Native", "SwiftUI",
            ]
        },
        {
            title: "DevOps",
            image: devops_img,
            tools: [
                "Docker", "Git", "AWS", "Firebase", "Heroku",
            ]
        }
    ]



    return (
        <div className='section padded_container'>
            
            {
                skills.map((skill: Skill, index: number)=> {


                    return (
                        <SkillCardComponent
                            key={index}
                            skill={skill}
                            animationIndex={ (index+2)+16 }
                            reverse={ index % 2 === 1 }
                        />
                    )
                })
            }

        </div>
    )
}

export default SkillsComponent