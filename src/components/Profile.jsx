import React from 'react'
import './components.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Profile({ imglink, name, title, email, linkedin }) {
    return (
        <div className='profile'>
            <div className="profilelinks">
                <LinkedInIcon onClick={() => { }} />
                <EmailIcon onClick={() => { }} />
            </div>
            <img id="judgeimg" height={75} width={75} style={{ borderRadius: '100%', margin: 0, objectFit: "cover" }} src={imglink} />
            <h5 style={{ margin: 0 }} >{name}</h5>
            <h6 style={{ margin: 0 }}>{title}</h6>
        </div>
    )
}

export default Profile