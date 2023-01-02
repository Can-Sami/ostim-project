import React from "react";
import axios from "axios";

const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
  
    axios.post('/api/register', data)
      .then(response => {
        // handle success
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

export const Register = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className=" drop-shadow-2xl flex flex-col items-center mt-12 h-5/6 mx-64 rounded-xl py-10 backdrop-blur-sm bg-zinc-100/5 outline-double outline-1 outline-white/10">
          <h1 className="text-3xl text-white font-semibold"> KAYIT FORMU</h1>

          <div className="mb-4 flex items-center w-1/2 mt-8 justify-center">
            <div className="flex flex-col ">
              <h1 className=" text-white my-2 ml-1">Ad</h1>
              <div className="relative rounded-md shadow-sm w-2/3 mx-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-cyan-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
                <label htmlFor="name">
                  <input
                    className="form-input block w-80 pl-10 pr-3 py-2  leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-zinc-700/90 text-white/90 focus:outline-none focus:ring-1 focus:ring-cyan-300 focus:border-cyan-300 focus:placeholder-white/50 focus:bg-zinc-700/80"
                    placeholder="Adınızı Giriniz..."
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-col ">
              <h1 className=" text-white my-2 mx-1">Soyad</h1>
              <div className="relative rounded-md shadow-sm w-2/3 mx-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-cyan-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
                <label htmlFor="surname">
                  <input
                    className="form-input block w-80 pl-10 pr-3 py-2  leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-zinc-700/90 text-white/90 focus:outline-none focus:ring-1 focus:ring-cyan-300 focus:border-cyan-300 focus:placeholder-white/50 focus:bg-zinc-700/80"
                    placeholder="Soyadınızı Giriniz..."
                  />
                </label>
              </div>
            </div>
          </div>

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
                  placeholder="Mailinizi Giriniz..."
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col w-full px-44 ">
            <h1 className=" text-white my-2 mx-1">Telefon Numaran</h1>
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
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <label htmlFor="phone">
                <input
                  className="form-input block w-full pl-10 pr-3 py-2  leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-zinc-700/90 text-white/90 focus:outline-none focus:ring-1 focus:ring-cyan-300 focus:border-cyan-300 focus:placeholder-white/50 focus:bg-zinc-700/80"
                  placeholder="512 345 6789"
                  type="tel"
                  pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                  inputMode="numeric"
                />
              </label>
            </div>
          </div>

          <div className="mb-4 flex items-center w-1/2 mt-4 justify-center">
            <div className="flex flex-col ">
              <h1 className=" text-white my-2 ml-1">Şifre</h1>
              <div className="relative rounded-md shadow-sm w-2/3 mx-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-cyan-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                    />
                  </svg>
                </div>
                <label htmlFor="password">
                  <input
                    className="form-input block w-80 pl-10 pr-3 py-2  leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-zinc-700/90 text-white/90 focus:outline-none focus:ring-1 focus:ring-cyan-300 focus:border-cyan-300 focus:placeholder-white/50 focus:bg-zinc-700/80"
                    placeholder="Şifrenizi Giriniz..."
                    id="password"
                    type="password"
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-col ">
              <h1 className=" text-white my-2 mx-1">Şifreni Onayla</h1>
              <div className="relative rounded-md shadow-sm w-2/3 mx-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-cyan-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                    />
                  </svg>
                </div>
                <label htmlFor="repeatPassword">
                  <input
                    className="form-input block w-80 pl-10 pr-3 py-2  leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-zinc-700/90 text-white/90 focus:outline-none focus:ring-1 focus:ring-cyan-300 focus:border-cyan-300 focus:placeholder-white/50 focus:bg-zinc-700/80"
                    placeholder="Şifreni tekrarla..."
                    id="repeatPassword"
                    type="password"
                  />
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className=" text-zinc-900 text-md font-medium hover:bg-cyan-300 rounded-lg py-1 px-3 mt-4 duration-150  bg-cyan-400"
          >
            Kaydı onayla
          </button>
          <h1 className="mt-4 text-white/50">
            Zaten kayıtlı mısın? Hemen{" "}
            <a href="/login" className="text-cyan-500">
              Giriş yap
            </a>
          </h1>
        </div>
      </form>
    </div>
  );
};
