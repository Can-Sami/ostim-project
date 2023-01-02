import React, {useContext} from 'react'
import AuthContext from './context/AuthContext';

export const HomePage = () => {
  let {user} = useContext(AuthContext);
  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-36 text-center'>
            <h1 className='text-6xl font-black text-white mb-5'><span className='text-sky-200'>OSTIM Teknik Üniversitesi</span>'ndeki <br/> bütün kulüpleri Burada bulabilirsin. </h1>
        
            <h1 className='text-2xl text-gray-400'>İlgini çeken kulüplerle <span className='text-sky-200/90'>kolayca</span> iletişime geçebilir, üyesi olduğun kulüpler hakkında <span className='text-sky-200/90'>bilgi verebilir</span> ve <br /> daha birçok şey yapabilirsin. Yöneticisi olduğun kulübün <span className='text-sky-200/90'>duyurularını</span> paylaşabilirsin.</h1>
            <div className='flex justify-between mt-8'>
                <button className='text-lg text-zinc-900 font-medium px-4 py-2 rounded-md bg-sky-400 mx-8 hover:bg-sky-300 duration-150'>Kulüpleri keşfet</button>
            </div>
        </div>
    </div>
  )
}
