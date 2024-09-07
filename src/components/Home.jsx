import React from 'react'

const Home = () => {
  return (
    
    <div className="h-24 mx-auto mt-40 border-2 rounded-md w-72">
        <div className="flex flex-row items-center justify-center h-full space-x-5 animate-pulse">
            <div className="w-12 h-12 bg-gray-300 rounded-full ">
                <img src="./src/assets/Link-logo.png" alt="VGP" />
            </div>
            <div className="flex flex-col space-y-3">
                <div className="h-6 bg-gray-300 rounded-md w-36 text-center">
                    Welcome to VGP
                </div>
                <div className="w-24 h-6 bg-gray-300 rounded-md text-center ">
                    Hospital
                </div>
            </div>
        </div>
    </div>

  )
}

export default Home