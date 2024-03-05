import React from 'react'
import Navbar from '../components/Navbar'
import RegisterForm from '../components/RegisterForm'

const RegisterPage = () => {
    return (
        <>
            <Navbar />

            <main className='bg-black h-screen flex justify-center flex-col items-center'>

                <RegisterForm />

            </main>
        </>
    )
}

export default RegisterPage