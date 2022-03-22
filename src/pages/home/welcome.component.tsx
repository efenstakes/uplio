

import img from '../../assets/1.jpg'
import VSpacerComponent from '../../components/v_spacer/v_spacer.component'


import './welcome.component.scss'

const WelcomeComponent = () => {
    return (
        <div className='section welcome column ma_center ca_center'>
            
            <VSpacerComponent space={-1} />

            {/* image */}
            <div className="welcome_image__container">
                <img
                    className="su_2 welcome_image__container__image" 
                    src={img} 
                />
                <p className="fd_10 welcome_image__container__text">
                    FELIX
                </p>
            </div>
            <VSpacerComponent space={1} />

            {/* roles */}
            <p className="welcome__text welcome__text_1 title_6 bolder">
                I Transform
            </p>

            {/* hintline */}
            <p className="welcome__text welcome__text_2 text_3 bolder">
                IDEAS INTO PRODUCTS
            </p>
            <VSpacerComponent space={.5} />

            {/* name */}
            <p className="welcome__text text_7 welcome__my_name">
                And I'm Felix
            </p>

        </div>
    )
}

export default WelcomeComponent