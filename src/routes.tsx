import { lazy, Suspense, useEffect, useState } from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { Navbar } from "./components/Navbar.tsx"
import { IntroOverlay } from "./components/IntroOverlay"
import Footer from "./components/Footer"
// Public pages
import Home from './pages/Home'
import Team from './pages/Team'
import Join from './pages/Join'
import Sponsor from './pages/Sponsor'
import Cars from './pages/Cars'
import CarPage from './pages/CarPage'

import Chassis from './pages/System-Pages/Chassis'
import Powertrain from './pages/System-Pages/Powertrain'
import Business from './pages/System-Pages/Business'
import PublicRelations from './pages/System-Pages/PublicRelations'
import Software from './pages/System-Pages/Software'


export const AppRoutes = () => {    
    return (
        <>
            <Navbar />
            <IntroOverlay />
                <Routes>
                    {/* public pages */}
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/cars" element={<Cars />}/> 
                    <Route path="/cars/:year" element={<CarPage />}/> 

                    <Route path="/sponsor" element={<Sponsor />} />
                    <Route path="/join" element={<Join />}/> 

                    {/* subpages */}
                    <Route path="/join/chassis" element={<Chassis />}/>
                    <Route path="/join/powertrain" element={<Powertrain />}/>
                    <Route path="/join/business" element={<Business />}/>
                    <Route path="/join/public-relations" element={<PublicRelations />}/>
                    <Route path="/join/software" element={<Software />}/>

                    {/* the else statement (wow) */}
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
            <Footer/>
        </>
    )
}
