import { useState } from 'react'
import clsx from 'clsx'


// models
import { Company } from '../../models/company'


// components
import CompanyCardComponent from '../../components/company_card/company_card.component'
import CompanyInfoComponent from '../../components/company_info/company_info.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'


import img_1 from '../../assets/apf.png'
import img_2 from '../../assets/klm.jpg'
import img_3 from '../../assets/gmc.png'
import img_9 from '../../skillcat.jpg'


import './companies.component.scss'



const CompaniesComponent = () => {
    const [ selectedCompany, setSelectedCompany ] = useState<Company | null>()

    const companies: Array<Company> = [
        {
            name: 'SkillCat',
            image: img_9,
            responsibilities: [
                'Collaborated to create strategic initiatives to design, develop, and test solutions that serve millions of blue collar workers in United Stated.',
                'Effectively build software changes and alterations based on specific design specifications to enhance user engagement with SkillCat Mobile Application',
                'Worked in a team to build re-usable mobile widgets saving dozens of hours on future upgrades.',
            ],
            skills: [
                'NodeJS', 'React', 'AWS', 'Docker', 'Firebase'
            ],
            when: '2021 Feb - 2022 Jan'
        },
        {
            name: 'Great Minds Kenya',
            image: img_3,
            responsibilities: [
                'Did research and redesigned their previous website to enhance its user experience and scale to millions of users every year',
                'Migrated a multi-page user experience into a single page app that improved engagement by 47%',
                'I ensure that their online experiences are intuitive, satisfactory and solve client challenges as per research insights',
            ],
            skills: [
                'NodeJS', 'React', 'AWS', 'Docker', 'Firebase', 'Figma'
            ],
            when: '2020 Feb - now'
        },
        {
            name: 'Microsoft AppFactory',
            image: img_1,
            responsibilities: [
                'Was responsible for deciding technologies to use in AppFactory',
                'Was responsible for co-ordinating developers and designers on the incubator projects',
            ],
            skills: [
                'Flutter', 'NodeJS', 'Python', 'Angular', 'Ionic', 
                'Docker', 'Figma', 'Adobe XD'
            ],
            when: '2019 Aug - 2019 Dec'
        },
        {
            name: 'KLM Dutch Airlines',
            image: img_2,
            responsibilities: [
                'Lead a Microsoft AppFactory team that developed KLM Go application',
                'Acted as the Liason ti AppFactory\'s lead',
                'Used a plethora of technologies and tools to build an app that could scale and be used in the whole of East Africa',
            ],
            skills: [
                'Flutter', 'NodeJS', 'Angular', 'Ionic', 
                'Docker', 'Erlang'
            ],
            when: '2019 Sep - 2019 Dec'
        },
    ]

    return (
        <div className='padded_container'>
            
            {
                !selectedCompany &&
                    <div className="row ca_center">
                        <p className="italic text_6">
                            Click a company to see details
                        </p>
                    </div>
            }
            { !selectedCompany && <VSpacerComponent space={1} /> }
            {/* comapny list */}
            <div className="companies_list">
                {
                    companies.map((company: Company, index: number)=> {

                        return (
                            <CompanyCardComponent 
                                key={index}
                                company={company}
                                onClick={
                                    ()=> {
                                        setSelectedCompany(null)
                                        setSelectedCompany(company)
                                    }
                                }
                            />
                        )
                    })
                }
            </div>


            {/* if selected show it hete */}
            {
                selectedCompany &&
                    <CompanyInfoComponent company={selectedCompany} />
            }
            {
                selectedCompany && <VSpacerComponent space={2} />
            }
            {
                selectedCompany &&
                    <div className="row" onClick={ ()=> setSelectedCompany(null) }>
                        <p className="italic text_5">
                            See Less
                        </p>
                    </div>
            }

        </div>
    )
}

export default CompaniesComponent