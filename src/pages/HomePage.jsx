import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

export const HomePage = () => {
  let { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center mt-28 text-center">
          <h1 className="text-7xl font-black text-gray-900 mb-5 uppercase">
            <span className="text-red-600">OSTIM</span> Technical <br />{" "}
            university
            <br /> Öğrenci Toplulukları.{" "}
          </h1>

          <h1 className="text-2xl text-gray-900">
            İlgini çeken kulüplerle{" "}
            <span className="text-red-500">kolayca</span> iletişime geçebilir,
            üyesi olduğun kulüpler hakkında{" "}
            <span className="text-red-500">bilgi verebilir</span> ve <br /> daha
            birçok şey yapabilirsin. Yöneticisi olduğun kulübün{" "}
            <span className="text-red-500">duyurularını</span> paylaşabilirsin.
          </h1>
          <div className="flex justify-start mt-8">
            <button className="text-lg text-gray-900 px-6 py-2 rounded-md bg-red-400 mx-8 hover:bg-red-300 duration-150">
              Kulüpleri keşfet
            </button>
            <button className="text-lg bg-white backdrop-blur-sm text-gray-900 px-6 py-2 rounded-md ring-1 ring-red-400 mx-8 hover:bg-red-300 duration-150">
              Duyurulara gözat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
