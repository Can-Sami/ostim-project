import React from 'react'
import {useContext} from 'react'
import AuthContext from './context/AuthContext'



export const Login = () => {
  let {loginUser} = useContext(AuthContext)
  return (
    <div>
    <form onSubmit={loginUser}>
      <div className="flex flex-col items-center mt-12 h-5/6 bg-zinc-100/5 mx-64 rounded-xl py-10 backdrop-blur-lg outline-double outline-1 outline-white/10">
        <h1 className="text-3xl text-white font-semibold"> ÜYE GİRİŞİ</h1>


        <div className="flex flex-col w-full px-44 ">
          <h1 className=" text-white my-2 mx-1">Eposta</h1>
          <div className="relative rounded-md shadow-sm w-full mx-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-cyan-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <label htmlFor="email">
              <input
                className="form-input block w-full pl-10 pr-3 py-2  leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-zinc-700/90 text-white/90 focus:outline-none focus:ring-1 focus:ring-cyan-300 focus:border-cyan-300 focus:placeholder-white/50 focus:bg-zinc-700/80"
                placeholder="Eposta adresinizi giriniz..."
                type="email"
                name="email"
              />
            </label>
          </div>
        </div>

    

        <div className="flex flex-col w-full px-44 ">
          <h1 className=" text-white my-2 mx-1">Şifre</h1>
          <div className="relative rounded-md shadow-sm w-full mx-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-cyan-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"                />
              </svg>
            </div>
            <label htmlFor="password">
              <input
                className="form-input block w-full pl-10 pr-3 py-2  leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-zinc-700/90 text-white/90 focus:outline-none focus:ring-1 focus:ring-cyan-300 focus:border-cyan-300 focus:placeholder-white/50 focus:bg-zinc-700/80"
                placeholder="Şifrenizi giriniz..."
                type={"password"}
                name={"password"}
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="text-zinc-900 text-md font-medium hover:bg-cyan-300 rounded-lg py-1 px-3 mt-4 duration-150  bg-cyan-400"
        >
          Girişi onayla
        </button>
        <h1 className="mt-4 text-white/50">
          Kayıtlı hesabın mı yok ? Hemen{" "}
          <a href="/register" className="text-cyan-500">
            Kaydol
          </a>
        </h1>
      </div>
    </form>
  </div>
  )
}
