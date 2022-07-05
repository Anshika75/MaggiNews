import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="w-full absolute top-[60px] h-screen bg-hero-pattern bg-cover grid place-items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-base font-Geo text-bgwhite tracking-wider opacity-75">WELCOME TO</p>
          <p className=' text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-Exo text-yellow'>MaggiNews</p>
          <Link to="/general" className='no-underline'>
            <button className='bg-black font-Palanquin rounded-md text-xl text-white opacity-75 hover:opacity-100 transition-all cursor-pointer mt-12 px-5 py-3'>Read News</button>
          </Link>
        </div>
      </div>
    )
  }
}
