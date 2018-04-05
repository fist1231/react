import React from 'react'
import footerImg from '../../public/footer.jpg'

const styles = {
        backgroundImage: 'url(' + footerImg + ')',
        height: '220px',
        marginTop: '6px',
        marginBottom: '6px',
        resizeMode: 'repeat',
}


const Footer = () => (
    <div style={ styles }>Footer here</div>
)

export default Footer
