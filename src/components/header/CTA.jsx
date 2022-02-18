import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
    return (
        /* Call To Action (CTA) */
        <div className="cta">
            <a href={CV}download className="btn">Dowload CV</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    )
}

export default CTA
