import { useEffect, useState } from 'react'
import clsx from 'clsx'


// models
import { Project } from '../../models/project'


// components
import ProjectCardComponent from '../../components/project_card/project_card.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'


// assets
import covid from '../../assets/covid.jpg'
import lifeboat from '../../assets/foster.jpg'
import gmc from '../../assets/gmc.png'
import k11 from '../../assets/k11.png'
import pizza_inn from '../../assets/pin2.png'
import klm from '../../assets/klm.png'


import './projects.component.scss'

const ProjectsComponent = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>('Web')
    const [onDisplay, setOnDisplay] = useState<Array<Project>>([])


    const filters: Array<string> = [
        'Web', 'UX/UI Design', 'Mobile', 'Open Source', 
    ]
    const projects: Array<Project> = [
        {
            name: 'Great Minds Kenya',
            img: gmc,
            link: 'https://gmc-deployed-app.web.app/',
            description: 'Great Minds Kenya consultncy website.',
            img_styles: {
                objectFit: 'contain',
                // transform: ''
            },
            type: 'Commercial',
            tags: [ 'web', 'ux/ui design', ],
        },
        {
            name: 'KLM Go',
            img: klm,
            link: 'https://github.com/efenstakes/KLMGo',
            description: 'KLM Dutch Airlines GLM Go app.',
            img_styles: {
                // objectFit: 'contain',
                // transform: ''
            },
            type: 'Open Source',
            tags: [ 'web', 'ux/ui design', ],
        },
        {
            name: 'K11',
            img: covid,
            link: 'https://github.com/efenstakes/k11',
            description: 'A COVID-19 passport application that allows people to monitor their tests, vaccinations and location.',
            img_styles: {},
            type: 'Open Source',
            tags: [ 'mobile', 'ux/ui design', 'open source' ],
        },
        {
            name: 'K11 Server',
            img: covid,
            link: 'https://github.com/efenstakes/k11.server',
            description: 'A COVID-19 passport application server that allows people to monitor their tests, vaccinations and location.',
            img_styles: {},
            type: 'Open Source',
            tags: [ 'web', 'open source' ],
        },
        {
            name: 'LifeBoat',
            img: lifeboat,
            link: 'https://github.com/efenstakes/LifeBoat',
            description: 'A foster care management system server for governments and NGOs.',
            img_styles: {},
            tags: [ 'open source' ],
            type: 'Open Source',
        },
        {
            name: 'Kiloko',
            img: covid,
            link: 'https://github.com/TheGoodCollective/Kiloko',
            description: 'A COVID-19 tracking application that allows people to monitor their location and get COVID news.',
            img_styles: {},
            type: 'Open Source',
            tags: [ 'mobile', 'ux/ui design', 'open source' ],
        },
        {
            name: 'Pizza Inn Web',
            img: pizza_inn,
            link: 'https://github.com/efenstakes/pizza_inn',
            description: 'A Pizza Inn website redesign for a better experience.',
            img_styles: {},
            type: 'Open Source',
            tags: [ 'web', 'ux/ui design', ],
        },
        {
            name: 'Pizza Inn Mobile',
            img: pizza_inn,
            link: 'https://github.com/efenstakes/pizza_inn_mobile',
            description: 'A Pizza Inn mobile application concept design and implementation.',
            img_styles: {},
            type: 'Open Source',
            tags: [ 'mobile', 'ux/ui design', ],
        },
    ]


    useEffect(()=> {
        let newDisplay = projects.filter(p=> {
            return p.tags.includes(selectedFilter.toLowerCase())
        })
        setOnDisplay(newDisplay)
    }, [ ])

    useEffect(()=> {
        let newDisplay = projects.filter(p=> {
            return p.tags.includes(selectedFilter.toLowerCase())
        })
        setOnDisplay(newDisplay)
    }, [ selectedFilter ])


    return (
        <div className='section projects__container padded_container'>
            
            {/* filters */}
            <div className="projects__container__chip_list row_wrapped ma_center ca_center">
                {
                    filters.map((filter: string, index: number)=> {
                        const isSelected: boolean = filter === selectedFilter

                        return (
                            <div 
                                key={index} 
                                className={
                                    clsx([
                                        'chip_md', 
                                        'text_7', 
                                        'chip_rounded',
                                        [`fd_${20+(index+2)}`],
                                        {
                                            'chip_outlined': isSelected,
                                            'projects__container__chip_list__chip__outlined': isSelected,
                                            'projects__container__chip_list__chip': !isSelected,
                                        }
                                    ])
                                }
                                onClick={ ()=> setSelectedFilter(filter) }
                            >
                                { filter }
                            </div>
                        )
                    })
                }
            </div>
            <VSpacerComponent space={3.2} />

            {/* projects */}
            <div className="projects__container__project_list">
                {
                    onDisplay.map((project: Project, index: number)=> {

                        return (
                            <ProjectCardComponent
                                key={index}
                                project={project}
                                animationIndex={(index+2)+20}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ProjectsComponent