import React, { useState, useEffect } from 'react'
import Header from '../HomePage/Header'
import Footer from '../HomePage/footer'
import Loader from '../../components/loader'
import ExecutiveTeam from './soon'
const Team = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <div>
        {isLoading ? (
          <Loader/>
        ) : (
          <>
            <Header/>
            {/* <Soon/> */}
            <ExecutiveTeam/>
            <Footer/>
          </>
        )}
    </div>
  )
}

export default Team