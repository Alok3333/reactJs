import React from 'react'

const Footer = () => {
    const Footer_Styled = {
        displey: 'flex',
        backgroundColor: '#f1f1f1',
        textAlign: 'center',
        padding: '18px',
        fontFamily: 'bold',
        letterSpacing: '2px'
    }
  return (
    <div style={Footer_Styled}>&copy; Designed by Ak</div>
  )
}

export default Footer