import React, { useContext } from 'react'
import AuthContext from './context/AuthContext';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  let {user, logoutUser} = useContext(AuthContext);
  return (
    <div className=" bg-zinc-500 bg-opacity-10 backdrop-blur-md h-14  ring-white/20 flex items-center justify-between px-14">
    <div className="flex items-center">
      <a href='/' className="text-2xl text-white font-bold mr-8">OSTIMTECH CLUBS</a>
      <a href="#" className="mx-4 text-sm text-sky-200 font-light">Hakkımızda</a>
      <a href="#" className="mx-4 text-sm text-sky-200 font-light">Projelerimiz</a>
      <a href="#" className="mx-4 text-sm text-sky-200 font-light">İletişim</a>
    </div>
    

    <div className="flex justify-end w-1/2">

    <div className="relative rounded-md shadow-sm w-2/3 mx-8">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg
      className="h-5 w-5 text-white"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  <input
    className="form-input block w-full pl-10 pr-3 py-2 placeholder:italic leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-zinc-700/90 text-white/90 focus:outline-none focus:ring-1 focus:ring-white focus:border-white focus:placeholder-white/50 focus:bg-zinc-700/80"
    placeholder="Kulüp Bul..."
  />
</div>

<div className="flex justify-between items-center w-36">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-9 h-9 text-sky-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>


      {/* <a
        href="/login"
        className=" text-zinc-900 font-medium text-md duration-150 rounded-lg py-1 px-3 bg-white hover:bg-sky-200"
      >
        Üye Girişi
      </a> */}
      {user ? (
        <a onClick={logoutUser} className="text-zinc-900 font-medium text-md duration-150 rounded-lg py-1 px-3 bg-white hover:bg-sky-200">
          Çıkış Yap
        </a>
      ) : (
        <Link to="/login" className="text-zinc-900 font-medium text-md duration-150 rounded-lg py-1 px-3 bg-white hover:bg-sky-200">
          Üye Girişi
        </Link>
      )}

      
    </div>

    </div>

    
  </div>
  )
}
