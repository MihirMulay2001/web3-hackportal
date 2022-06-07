import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import CreateHackathon from './pages/CreateHackathon'
import Hackathon from './pages/Hackathon'
import Leaderboard from './pages/Leaderboard'

export default function Router() {
  return (
    <>
        <Routes>
            <Route path='/home' element={<Homepage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/createhack' element={<CreateHackathon />} />
            <Route path='/hackathon' element={<Hackathon />}/>
            <Route path='/leaderboard' element={<Leaderboard />}/>
        </Routes>
    </>
  )
}
