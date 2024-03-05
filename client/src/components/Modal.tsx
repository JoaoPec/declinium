import React, {ReactNode} from 'react'
import close_icon from '../assets/close_icon.svg'

type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    children?: ReactNode;
};

const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
    return (
        <>
            {isOpen && (
                <div className='fixed text-center top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center'>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-lg p-5'>
                        <img className='w-8 ml-auto hover:cursor-pointer' onClick={closeModal} src={close_icon} alt="Close icon" />
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal