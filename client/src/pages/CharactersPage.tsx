import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Navbar from '../components/Navbar'
type Props = {}

const CharactersPage = (props: Props) => {

    const { signed } = useContext(AuthContext)

    useEffect(() => {
        console.log(signed)
    })

    return (
        <>
            <Navbar />
            <main className='bg-black h-screen flex justify-center flex-col items-center'>
                <h1 className='text-4xl font-bold text-white mb-5'>Characters</h1>
            </main>
        </>
    )
}

export default CharactersPage 