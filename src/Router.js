import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import CreateHackathon from './pages/CreateHackathon'
import Hackathon from './pages/Hackathon'
import Leaderboard from './pages/Leaderboard'

export default function Router({setAccount, account}) {
  return (
    <>
        <Routes>
            <Route path='/home' element={<Homepage account={account}/>} />
            <Route path='/signup' element={<Signup account={account} setAccount={setAccount}/>} />
            <Route path='/createhack' element={<CreateHackathon />} />
            <Route path='/hackathon:hackId' element={<Hackathon />}/>
            <Route path='/leaderboard' element={<Leaderboard />}/>
        </Routes>
    </>
  )
}
