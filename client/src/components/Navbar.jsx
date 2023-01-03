import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useState } from 'react';

import logo from '../../images/logo.svg';

const NavBarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4 border-b-2">
            <div className='md:flex-[0.75] flex-initial justify-center items-center'>
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-black md:flex hidden list-none flex-row justify-evenly items-center flex-initial">
                {["Health & wellbeing", "Insurance", "Securing your data"].map((item, index) => (
                    <NavBarItem key={item + index} title={item} />
                ))}
            <li className="bg-[#dd0822] py-2 px-7 mx-4 rounded-lg text-white cursor-pointer hover:bg-[#2546bd]">Log in</li>
            </ul>
            <div className='flex relative'>
                {toggleMenu
                    ? <CloseOutlinedIcon fontSize="28" className="text-black text-3xl md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                    : <MenuOutlinedIcon fontSize="28" className="text-black text-3xl md:collapse cursor-pointer" onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <ul
                        className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                                    flex flex-col justify-start items-end rounded-md medibank-red text-black animate-slide-in">
                        <li className="text-xl text-white cursor-pointer w-full my-2">
                            <CloseOutlinedIcon onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Health & wellbeing", "Insurance", "Securing your data"].map((item, index) => (
                            <NavBarItem key={item + index} title={item} classProps="my-2 text-lg text-white" />
                        ))}
                    </ul>
                )}
            </div>
        </nav> 
    );
}

export default Navbar;