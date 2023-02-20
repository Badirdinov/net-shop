import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


type Props = {}

export default function Layout({ children }: any) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}