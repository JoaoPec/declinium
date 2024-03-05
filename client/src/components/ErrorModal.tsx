import React, { ReactNode } from 'react'
import close_icon from '../assets/close_icon.svg'

type ErrorModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    errorMessage?: any;
    sucess?: boolean;
}


const ErrorModal = ({ isOpen, closeModal, errorMessage, sucess }: ErrorModalProps) => {


    if (sucess) {
        return (
            <>
                {isOpen && (
                    <div className='fixed text-center top-0 left-0 w-full h-full  bg-black bg-opacity-75 flex items-center justify-center'>
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-lg p-5'>
                            <img className='w-8 ml-auto hover:cursor-pointer' onClick={closeModal} src={close_icon} alt="Close icon" />
                            <h1 className='text-4xl font-bold text-white mb-5'>Sucesso!</h1>
                            <p className='text-white'>{errorMessage}</p>
                        </div>
                    </div>
                )}
            </>
        )

    } else {
        return (
            <>
                {isOpen && (
                    <div className='fixed text-center top-0 left-0 w-full h-full  bg-black bg-opacity-75 flex items-center justify-center'>
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-lg p-5'>
                            <img className='w-8 ml-auto hover:cursor-pointer' onClick={closeModal} src={close_icon} alt="Close icon" />
                            <h1 className='text-4xl font-bold text-white mb-5'>Erro</h1>
                            <p className='text-white'>{errorMessage}</p>
                        </div>
                    </div>
                )}
            </>
        )

    }

}

export default ErrorModal
