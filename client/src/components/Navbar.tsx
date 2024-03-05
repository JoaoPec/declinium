import React, { EffectCallback, useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';

type Props = {
  auth?: boolean
};

const Navbar: React.FC<Props> = ({ auth }: Props) => {

  const { logout, signed } = useContext(AuthContext)

  const handleLogout = async () => {
    await logout()
    console.log('logout')
  }


  auth = signed

  if (auth) {
    return (
      <nav className="flex items-center justify-between p-6 bg-black text-white border-b-2 border-red-700 shadow-md">
        <a href="/" className="hover:text-gray-300 text-xl font-bold  transition duration-300">
          <h1 className="text-xl font-bold ">Declinium RPG SHEET</h1>
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="https://www.youtube.com/@auroradocaosrpg" className="hover:text-gray-300 hover:border-b-2 hover:border-red-700 mr-5 sm:border-red-700 transition duration-300">
              Conheça a Aurora do Caos
            </a>
            <a href="/characters" className="hover:text-gray-300 hover:border-b-2 hover:border-red-700 sm:border-red-700 transition duration-300">
              Personagens
            </a>
          </li>
          <li>
            <a href="/campaigns" className="hover:text-gray-300 hover:border-b-2 hover:border-red-700 sm:border-red-700 transition duration-300">
              Campanhas
            </a>
          </li>
          <li>
            <a href='/map' className="hover:text-gray-300 hover:border-b-2 hover:border-red-700 transition duration-300">
              Mapa
            </a>
          </li>
          <li>
            <a href='/' className="hover:text-gray-300 hover:border-b-2 hover:border-red-700 transition duration-300" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="flex items-center justify-between p-6 bg-black text-white border-b-2 border-red-700 shadow-md">
        <a href="/" className="hover:text-gray-300 text-xl font-bold  transition duration-300">
          <h1 className="text-xl font-bold ">Declinium RPG SHEET</h1>
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="https://www.youtube.com/@auroradocaosrpg" className="hover:text-gray-300 hover:border-b-2 hover:border-red-700 mr-5 sm:border-red-700 transition duration-300">
              Conheça a Aurora do Caos
            </a>
            <a href="/characters" className="hover:text-gray-300 hover:border-b-2 hover:border-red-700 sm:border-red-700 transition duration-300">
              Personagens
            </a>
          </li>
          <li>
            <a href="/campaigns" className="hover:text-gray-300 hover:border-b-2 hover:border-red-700 sm:border-red-700 transition duration-300" >
              Campanhas
            </a>
          </li>
          <li>
            <a href='/map' className="hover:text-gray-300 hover:border-b-2 hover:border-red-700 transition duration-300">
              Mapa
            </a>
          </li>
          <li>
            <a href='/register' className="hover:text-gray-300 hover:border-b-2 hover:border-red-700 transition duration-300">
              Registrar-se
            </a>
          </li>
          <li>
            <a href='/login' className="hover:text-gray-300 hover:border-b-2 hover:border-red-700 transition duration-300">
              Login
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
