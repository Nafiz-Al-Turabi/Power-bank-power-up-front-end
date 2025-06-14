import Footer from '@/components/Shared/Footer/Footer'
import Navbar from '@/components/Shared/Navbar/Navbar'
import React from 'react'

export default function ClientLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <Navbar />
        <main className="pt-20">
            {children}
        </main>
        <Footer />
    </div>
  )
}
