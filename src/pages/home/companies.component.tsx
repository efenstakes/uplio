import { useState } from 'react'
import clsx from 'clsx'


// models
import { Company } from '../../models/company'


// components
import CompanyCardComponent from '../../components/company_card/company_card.component'


import img_1 from '../../assets/apf.png'
import img_2 from '../../assets/klm.jpg'
import img_3 from '../../assets/gmc.png'



import './companies.component.scss'
import CompanyInfoComponent from '../../components/company_info/company_info.component'



const CompaniesComponent = () => {
    const [ selectedCompany, setSelectedCompany ] = useState<Company>()

    const companies: Array<Company> = [
        {
            name: 'Microsoft AppFactory',
            image: img_1,
            responsibilities: [
                'Team Lead',
                'Backend Development Lead',
                'Intergration Developer',
            ],
            skills: [
                'Flutter', 'Python', 'Angular', 'Ionic', 
                'Docker', 
            ],
            when: '2019 Sep - 2019 Dec'
        },
        {
            name: 'KLM Dutch Airlines',
            image: img_2,
            responsibilities: [
                'Team Lead',
                'Backend Development Lead',
                'Intergration and DevOps Developer',
                'Mobile Developer',
            ],
            skills: [
                'Flutter', 'NodeJS', 'Angular', 'Ionic', 
                'Docker', 'Erlang'
            ],
            when: '2019 Sep - 2019 Dec'
        },
        {
            name: 'Great Minds Kenya',
            image: img_3,
            responsibilities: [
                'Branding and Digital Strategy',
                'UX/UI Design',
                'Systems Developer',
            ],
            skills: [
                'NodeJS', 'React', 'AWS', 'Docker', 'Firebase'
            ],
            when: '2020 Feb - now'
        }
    ]

  return (
    <div className='section padded_container'>
        
        {/* comapny list */}
        <div className="companies_list">
            {
                companies.map((company: Company, index: number)=> {

                    return (
                        <CompanyCardComponent 
                            key={index}
                            company={company}
                            onClick={
                                ()=> setSelectedCompany(company)
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

    </div>
  )
}

export default CompaniesComponent