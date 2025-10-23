import React from 'react'
import './Footer.css'
import youtube from '../../assets/youtube_icon.png'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'
import instagram from '../../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube} alt="" />
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
      </div>
      <ul>
        <li>Audio description</li>
        <li>help center</li>
        <li>gift card</li>
        <li>media center</li>
        <li>investor relation</li>
        <li>jobs</li>
        <li>terms of uses</li>
        <li>privacy</li>
        <li>legal notice</li>
        <li>cookie perfomance</li>
        <li>corparate information</li>
        <li>contact us</li>
      </ul>
      <p className='copy-right'>© 2025 Netflix. All rights reserved.</p>
    </div>
  )
}

export default Footer
