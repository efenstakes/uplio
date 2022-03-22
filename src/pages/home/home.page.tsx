import AppbarComponent from '../../components/appbar/appbar.component'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'
import './home.page.scss'
import WelcomeComponent from './welcome.component'



const HomePage = () => {
  return (
    <div className='page'>
        
        {/* app bar */}
        <AppbarComponent />
        
        {/* welcome */}
        <WelcomeComponent />
        <VSpacerComponent space={8} />

        {/* companies */}

        {/* projects */}

        {/* tools */}

    </div>
  )
}

export default HomePage