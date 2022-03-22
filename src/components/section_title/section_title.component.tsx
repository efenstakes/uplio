

type ComponentProps = {
    title: string
}
const SectionTitleComponent = ({ title }: ComponentProps) => {
    return (
        <div className="row ma_center">
            
            <h2 style={{ textAlign: 'center' }} className='su_8 section_title' > 
                { title }
            </h2> 

        </div>
    )
}

export default SectionTitleComponent
