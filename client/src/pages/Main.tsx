import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Modal from '../components/Modal';
import declinioLogo from '../assets/declinioLogo.jpg';
import { AuthContext } from '../contexts/AuthContext';

const Main = () => {

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const { signed, user } = useContext(AuthContext)

  useEffect(() => {
    console.log(signed, user);
  }, [signed, user]);

  if (signed) {
    return (
      <>
        <Navbar auth={signed} />

        <main className='bg-black h-screen flex justify-center flex-col items-center'>

          <div className='text-white text-center flex flex-col'>
            <h1 className='text-6xl mb-8'>Decliunium</h1>

            <p className='mb-5'>Bem-vindo ao nosso site dedicado à criação de fichas no sistema Declinium RPG, um sistema surgido a partir da campanha "A aurora do Caos".<br />
              <br />Sistema por Aquiles e Samuel Leal
              Campanha narrada por: Aquiles</p>

            <img src={declinioLogo} className='max-w-82 max-h-88 mx-auto my-4 rounded-full border-2 border-gray-500 shadow-md filter brightness-110' alt="Foto do rpg aurora do caos" />


          </div>


          <div className='flex mt-8'>
            <a href="/characters">
              <button
                className='p-2 mr-10 bg-white rounded-md font-bold flex justify-center items-center w-60'
              >
                Personagens
              </button>
            </a>

            <a href="/campaigns">
              <button
                className='p-2 mr-10 bg-white rounded-md font-bold flex justify-center items-center w-60'
              >
                Campanhas
              </button>
            </a>
          </div>
        </main >
      </>
    );

  } else {
    return (
      <>
        <Navbar />

        <main className='bg-black h-screen flex justify-center flex-col items-center'>

          <div className='text-white text-center flex flex-col'>
            <h1 className='text-6xl mb-8'>Decliunium</h1>

            <p className='mb-5'>Bem-vindo ao nosso site dedicado à criação de fichas no sistema Declinium RPG, um sistema surgido a partir da campanha "A aurora do Caos".<br />
              <br />Sistema por Aquiles e Samuel Leal
              Campanha narrada por: Aquiles</p>

            <img src={declinioLogo} className='max-w-82 max-h-88 mx-auto my-4 rounded-full border-2 border-gray-500 shadow-md filter brightness-110' alt="Foto do rpg aurora do caos" />


          </div>


          <div className='flex mt-8'>
            <button
              className='p-2 mr-10 bg-white rounded-md font-bold flex justify-center items-center w-60'
              onClick={() => setOpenLoginModal(true)}>
              Login
            </button>

            <Modal isOpen={openLoginModal} closeModal={() => setOpenLoginModal(false)}>
              <LoginForm />
            </Modal>

            <button
              className='p-2 bg-white rounded-md font-bold flex justify-center items-center w-60'
              onClick={() => setOpenRegisterModal(true)}>
              Registrar
            </button>

            <Modal isOpen={openRegisterModal} closeModal={() => setOpenRegisterModal(false)}>
              <RegisterForm />
            </Modal>
          </div>
        </main>
      </>
    );

  }

}

export default Main;
