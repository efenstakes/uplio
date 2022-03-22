import './appbar.component.scss'



import { Link, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'



const AppbarComponent = () => {
  return (
    <div className='appbar padded_container row ma_space_btn ca_center'>
        
        <p className="appbar__title text_4 bold">
            FELIX
        </p>

        <div className="appbar_right row ma_end ca_center">

            {/* git */}
            <Link href="#" underline="none" style={{ margin: '0 .5rem' }}>
                <IconButton color='primary' aria-label="github">
                    <GitHubIcon />
                </IconButton>
            </Link>

            {/* linkedin */}
            <Link href="#" underline="none" style={{ margin: '0 .5rem' }}>
                <IconButton color='primary' aria-label="linkedin">
                    <LinkedInIcon />
                </IconButton>
            </Link>

            {/* email me */}
            <Link href="#" underline="none" style={{ margin: '0 .5rem' }}>
                <IconButton color='primary' aria-label="email me">
                    <EmailIcon />
                </IconButton>
            </Link>

        </div>

    </div>
  )
}

export default AppbarComponent