import React from 'react'
import './components.css'
import Profile from './Profile'

function HackHeader({ hackname, hackdisc, hackimg, judgelist }) {
    return (
        <div className='card'>
            <div className='lefthalf'>
                <h2 style={{ color: '#fff', marginBottom: 0 }}>{hackname}</h2>
                <div style={{ overflow: "auto", minHeight: "5%", }}>
                    <p style={{ color: '#fff', marginTop: 0, marginBottom: "5px" }}>{hackdisc}</p>
                </div>
                <div style={{ height: "60%", display: "flex", flexDirection: 'column', justifyContent: 'top' }}>
                    <h4 style={{ color: '#fff', marginTop: 0, marginBottom: "5px" }}>Judges</h4>
                    <div className="judgelist">
                        {judgelist.map(judge => {
                            return (
                                <Profile key={judge.wallet_id} name={judge.name} title={judge.title} imglink={judge.pic} email={judge.email} linkedin={judge.linkedin} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='rightthalf'>
                <img id='hackimg' src={hackimg} height={250} width={250} />
            </div>
        </div>
    )
}

export default HackHeader