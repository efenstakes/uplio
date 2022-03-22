import './company_info.component.scss'


// models
import { Company } from '../../models/company'

// component
import VSpacerComponent from '../v_spacer/v_spacer.component'
import { Grid } from '@mui/material'



type ComponentProps = {
    company: Company
}
const CompanyInfoComponent = ({ company }: ComponentProps) => {
  return (
    <div className='company_info'>
        
        <p className='text_4 bolder'>
            { company.name }
        </p>
        <VSpacerComponent space={.2} />
        <p className='company_info__when text_7'>
            { company.when }
        </p>
        <VSpacerComponent space={2} />


        <Grid container>

            <Grid item xs={12} md={6} sm={6}>

                <h2> Achievements </h2>
                <VSpacerComponent space={1} />

                {
                    company?.responsibilities?.map((resp, index)=> {

                        return (
                            <div key={index} className="company_info__responsibilities row ca_center">
                                <div className="company_info__responsibilities__number">
                                    { index + 1 }
                                </div>
                                <p className=''>
                                    { resp }
                                </p>
                            </div>
                        )
                    })
                }

            </Grid>

            
            <Grid item xs={12} md={6} sm={6}>
                <h2> Tools </h2>
                <VSpacerComponent space={1} />

                <div className="company_info__tools row_wrapped ca_center">
                    {
                        company?.skills?.map((skill, index)=> {

                            return (
                                <div key={index} className='chip_md chip_rounded text_7 company_info__chip'>
                                    { skill }
                                </div>
                            )
                        })
                    }
                </div> 
            </Grid>

        </Grid>
 
    </div>
  )
}

export default CompanyInfoComponent