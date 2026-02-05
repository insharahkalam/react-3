import React, { useState } from 'react'
import logo from './assets/logo.png'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <section className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-screen mx-auto px-4 md:px-12 flex items-center justify-between ">

          {/* Left: Desktop Links */}
          <div className="hidden lg:flex items-center gap-12">
            <li className="list-none text-md font-normal cursor-pointer text-black">Features</li>
            <li className="list-none text-md font-normal cursor-pointer text-black">Pricing</li>
            <li className="list-none text-md font-normal cursor-pointer text-black">Testimonials</li>
            <li className="list-none text-md font-normal cursor-pointer text-black">Resources</li>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center lg:justify-center flex-1 md:flex-none">
            <img className="w-40 md:w-48" src={logo} alt="Logo" />
          </div>

          {/* Right: Desktop Links */}
          <div className="hidden lg:flex items-center gap-12">
            <li className="list-none text-md font-normal cursor-pointer text-black">Company</li>
            <li className="list-none text-md font-normal cursor-pointer text-black">Contact</li>
            <button className="border cursor-pointer font-medium hover:bg-sky-500 transition duration-500 hover:text-white border-sky-500 px-8 py-1">
              Login
            </button>
          </div>

          {/* Mobile: Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-black focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <span className="text-3xl">&times;</span> // close icon
              ) : (
                <span className="text-3xl">&#9776;</span> // hamburger icon
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <ul className="flex flex-col px-4 py-4 gap-4">
              <li className="text-md font-normal cursor-pointer text-black">Features</li>
              <li className="text-md font-normal cursor-pointer text-black">Pricing</li>
              <li className="text-md font-normal cursor-pointer text-black">Testimonials</li>
              <li className="text-md font-normal cursor-pointer text-black">Resources</li>
              <li className="text-md font-normal cursor-pointer text-black">Company</li>
              <li className="text-md font-normal cursor-pointer text-black">Contact</li>
              <button className="border cursor-pointer font-medium hover:bg-sky-500 transition duration-500 hover:text-white border-sky-500 px-8 py-1 w-full">
                Login
              </button>
            </ul>
          </div>
        )}
      </section>
    </>
  )
}

export default App
