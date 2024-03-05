import React, { useState, useContext } from 'react';
import google_icon from '../assets/google_icon.svg';
import ErrorModal from './ErrorModal';
import { AuthContext } from '../contexts/AuthContext';
import { AuthError } from '../contexts/AuthContext';

type RegistrationFormProps = {
    isOpen?: boolean;
    closeModal?: () => void;
};

const RegistrationForm: React.FC<RegistrationFormProps> = ({ isOpen, closeModal }: RegistrationFormProps) => {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const [setUser, setSetUser] = useState('')
    const [sucess, setSucess] = useState(false)

    const { register } = useContext(AuthContext);

    const handleRegistration = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username) {
            console.error('Username is required');
            return;
        }


        const data = {
            username,
            password
        }
        try {
            await register(data);

            setErrorModalOpen(true);
            setSucess(true);

            setErrorMessage('Usuário logado com sucesso');
        }
        catch (error) {
            if (error instanceof AuthError) {
                setErrorModalOpen(true);
                setErrorMessage(error.message);
            }
        }

    };

    return (
        <>
            <form
                onSubmit={handleRegistration}
                className='flex text-center bg-gray-800 flex-col space-y-4 p-8 rounded-md'
            >
                <h1 className='text-4xl font-bold text-white mb-5'>Registrar</h1>

                <input
                    type='text'
                    placeholder='Usuario'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:border-none focus:ring-0'
                />

                <input
                    type='password'
                    placeholder='Senha'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:border-none focus:ring-0'
                />

                <button
                    type='submit'
                    className='p-2 bg-red-700 rounded-md text-white font-bold'
                >
                    Registar
                </button>

                <p className="my-3 text-center text-white">Ou</p>

                <button
                    className='p-2 bg-white rounded-md font-bold flex justify-center items-center w-60'
                    onClick={() => {
                        console.log('Register with Google');
                    }}
                >
                    <img src={google_icon} alt="google icon" className='w-8 mr-5' />
                    Entrar com o Google
                </button>
            </form>
            <ErrorModal isOpen={errorModalOpen} closeModal={() => setErrorModalOpen(false)} errorMessage={errorMessage} sucess={sucess} />
        </>
    );
};

export default RegistrationForm;
