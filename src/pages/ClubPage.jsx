import React from "react";
import archery from "../images/archery.jpeg";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import discord from "../images/discord.png";

export const ClubPage = () => {
  return (
    <section className="m-12 flex flex-col items-center vh-90 bg-gray-400/5 shadow-2xl ring-1 ring-gray-900 ring-opacity-10 rounded-xl backdrop-blur-lg outline-double outline-1 outline-white/10 ">
      <div className="grid grid-rows-3 grid-cols-2 grid-flow-row-dense gap-4 m-12 h-auto">
        <div className="w-full col-span-3 row-span-2 bg-gray-100 ring-1 ring-gray-900 ring-opacity-10 h-4/5 flex flex-col rounded-lg shadow-lg items-center">
          <div className="flex items-center mt-8">
            <img
              src={archery}
              alt=""
              srcset=""
              className="h-24 rounded-full ml-10 ring-4 ring-gray-900"
            />
            <h1 className="text-5xl text-center font-medium ml-10 text-gray-900">
              OSTIM OKÇULUK KULÜBÜ
            </h1>
            <button className="text-md text-gray-900 px-6 py-2 rounded-md bg-red-400 mx-8 hover:bg-red-300 duration-150">
              Kulübe Katıl
            </button>
          </div>

          <div className="flex ml-40 -mt-5 text-gray-700">
            <h1 className="-ml-52 ">
              {" "}
              <span className="text-red-400">42</span> Kayıtlı Üye
            </h1>
            <h1 className="ml-9 ">
              <span className="text-red-400">6</span> Yönetici
            </h1>
            <h1 className="ml-9 ">
              <span className="text-red-400">4</span> Duyuru
            </h1>
            <h1 className="ml-9 ">
              <span className="text-red-400">10/12/2022</span> Kuruluş tarihi
            </h1>
          </div>

          <line className="w-full h-1px bg-gray-900 mt-8 opacity-30"></line>

          <div className="flex flex-row justify-start self-start">
            <div className="flex self-start flex-col mt-5 mx-5 rounded-md p-2">
              <h1 className="text-red-600 ml-4">Kulüp Açıklaması</h1>
              <p className="text-gray-900 mx-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                Consequuntur quaerat aut autem quo libero, cum unde delectus{" "}
                <br />
                maiores. Lorem ipsum dolor sit amet consectetur <br />
              </p>
            </div>

            <line className="h-full w-1px bg-gray-900 opacity-20"></line>

            <div className="mt-8 ml-8 flex gap-10 items-center justify-center">
              <div className="flex justify-center items-center flex-col">
                {" "}
                <img src={instagram} className="h-20" />
                <h1 className="text-red-600 text-sm">Instagram</h1>
              </div>
              <div className="flex justify-center items-center flex-col">
                <img src={twitter} className="h-20" />
                <h1 className="text-red-600 text-sm">Twitter</h1>{" "}
              </div>
              <div className="flex justify-center items-center flex-col">
                <img src={discord} className="h-20" />
                <h1 className="text-red-600 text-sm">Discord</h1>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="w-96 h-48 bg-gray-100 rounded-lg shadow-xl"></div>

        <div className="w-96 h-48 bg-gray-100 rounded-lg shadow-xl"></div>
        <div className="w-96 h-48 bg-gray-100 rounded-lg shadow-xl"></div>
        <div className="w-96 h-48 bg-gray-100 rounded-lg shadow-xl"></div>
      </div>
    </section>
  );
};
