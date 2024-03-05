import React from 'react'
import LoginForm from '../components/LoginForm'
import Navbar from '../components/Navbar'

const LoginPage = () => {
    return (
        <>
            <Navbar />

            <main className='bg-black h-screen flex justify-center flex-col items-center'>

                <LoginForm />

            </main>

        </>
    )
}

export default LoginPage