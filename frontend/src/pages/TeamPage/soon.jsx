import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Soon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date(2024, 4, 1, 0, 0)
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({ value, label }) => (
    <div className="relative">
      <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#f9004d] to-[#ff4d4d] rounded-2xl flex items-center justify-center shadow-lg">
        <span className="text-4xl md:text-5xl font-bold text-white">{value}</span>
      </div>
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full">
        <span className="text-sm text-white/80">{label}</span>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4 overflow-hidden">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f9004d] rounded-full filter blur-[128px]" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full filter blur-[128px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center relative z-10"
        >
          <h2 className="text-[#f9004d] font-medium tracking-wider mb-4">
            COMING SOON
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Meet Our Amazing Team
          </h1>
          <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
            We're crafting something extraordinary. Stay tuned as we prepare to introduce 
            the brilliant minds behind our success.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <TimeUnit value={timeLeft.days} label="DAYS" />
            <TimeUnit value={timeLeft.hours} label="HOURS" />
            <TimeUnit value={timeLeft.minutes} label="MINUTES" />
            <TimeUnit value={timeLeft.seconds} label="SECONDS" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
            <p className="text-gray-400 mt-8">
              Want to be notified when we launch?
            </p>
            {/* <button className="mt-4 px-8 py-3 bg-gradient-to-r from-[#f9004d] to-[#ff4d4d] rounded-full text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              Get Notified
            </button> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Soon