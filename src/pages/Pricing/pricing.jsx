import React, { useState, useEffect } from 'react'

import Loader from '../../components/loader'
import Soon from '../TeamPage/soon'
const Pricing = () => {
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
            {/* <Header/> */}
            <Soon/>
            {/* <Footer/> */}
          </>
        )}
    </div>
  )
}

export default Pricing