

// components
import AppbarComponent from '../../components/appbar/appbar.component'
import SectionTitleComponent from '../../components/section_title/section_title.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'
import CompaniesComponent from './companies.component'
import ContactComponent from './contact.component'
import ProjectsComponent from './projects.component'
import WelcomeComponent from './welcome.component'
import SkillsComponent from './skills.component'



import './home.page.scss'



const HomePage = () => {
  return (
    <div className='page'>
        
        {/* app bar */}
        <AppbarComponent />
        
        {/* welcome */}
        <WelcomeComponent />
        <VSpacerComponent space={8} />

        {/* companies */}
        <SectionTitleComponent title="COMPANIES" />
        <VSpacerComponent space={2} />
        <CompaniesComponent />
        <VSpacerComponent space={8} />

        {/* projects */}
        <SectionTitleComponent title="PROJECTS" />
        <VSpacerComponent space={2} />
        <ProjectsComponent />
        <VSpacerComponent space={8} />

        {/* tools */}
        <SectionTitleComponent title="SKILLS" />
        <VSpacerComponent space={2} />
        <SkillsComponent />
        <VSpacerComponent space={8} />


        {/* contact */}
        <SectionTitleComponent title="CONTACT ME" />
        <VSpacerComponent space={2} />
        <ContactComponent />
        <VSpacerComponent space={8} />

    </div>
  )
}

export default HomePage