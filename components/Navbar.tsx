'use client';
import Link from "next/link";
import { useState } from "react";


export const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false); 

    return (
        <nav className="bg-cyan-950 text-white flex items-center justify-between px-4 h-16">
            <div className="container mx-auto flex justify-between items-center">
                <a href="http://localhost:3000" className="text-2xl font-bold">
                    Virginia Gorge
                </a>
                <div className={`${isOpen ? "flex top-16  bg-cyan-950 w-full absolute" : "hidden"} left-0 flex-col md:flex md:flex-row px-2 py-2 gap-4`}>
                    <Link href="/boletines" onClick={() => setIsOpen(false)} 
                    className="mx-2 font-bold hover:text-gray-300">BOLETINES</Link>

                    <Link href="/fallos" 
                    onClick={() => setIsOpen(false)} className="mx-2 font-bold hover:text-gray-300">FALLOS DEL HTP</Link>

                    <Link href="/designaciones" 
                    onClick={() => setIsOpen(false)} className="mx-2 font-bold hover:text-gray-300">DESIGNACIONES</Link>

                    <Link href="/formularios" 
                    onClick={() => setIsOpen(false)} className="mx-2 font-bold hover:text-gray-300">FORMULARIOS</Link>

                    <Link href="/institucion" 
                    onClick={() => setIsOpen(false)} className="mx-2 font-bold hover:text-gray-300">INSTITUCION</Link>

                </div>

                <div className="md:hidden flex items-center">   
                    <button
                        onClick={()=>{
                            setIsOpen(!isOpen);
                        }}
                    >

                         <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                         >
                            {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 18L18 6M6 6l12 12"
                            ></path>
                            ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                            )}
                         </svg>

                    </button>
                </div>

            </div>
        
        </nav>
    );       
};