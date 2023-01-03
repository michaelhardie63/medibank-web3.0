import logo from '../../images/logo.svg';

const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    <img src={logo} alt="logo" className="w-32" />
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                    <p className='text-black text-base text-center mx-2 cursor-pointer'>Help & support</p>
                    <p className='text-black text-base text-center mx-2 cursor-pointer'>Find a provider</p>
                    <p className='text-black text-base text-center mx-2 cursor-pointer'>Insurance</p>
                    <p className='text-black text-base text-center mx-2 cursor-pointer'>About Medibank</p>
                </div>
            </div>
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
            <div className="sm:w-[90%] w-full flex justify-between items-center mt-4">
            <p className="text-black text-sm text-center">&copy; 2022 Medibank Private Limited. All rights reserved. ABN 47 080 890 259.</p>
            <p className="text-black text-sm text-center">Privacy policy  |  Legal information</p>
            </div>
        </div>
    );
}

export default Footer;