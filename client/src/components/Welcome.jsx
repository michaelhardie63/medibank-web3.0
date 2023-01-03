import React, { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';
import { Loader } from './';
import { shortenAddress } from '../utils/shortenAddress';

import { CryptoconBadge } from 'cryptocons';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FavoriteIcon from '@mui/icons-material/Favorite';

import logoRev from '../../images/logoRev.svg';

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-center white-glassmorphism mb-5 p-3 cursor-pointer shadow-xl">
        <div className={`w-[70px] h-[70px] text-[36px] rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-black font-semibold text-lg">{title}</h3>
            <p className="my-2 text-black text-sm md:w-9/12">{subtitle}</p>
        </div>
    </div>
);



const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-black"

const Input = ({ placeholder, name, type, value, handleChange}) => (
    <input 
        placeholder={placeholder} 
        type={type} 
        step="0.001" 
        value={value} 
        onChange={(e) => handleChange(e, name)} 
        className="my-2 w-full rounded-lg p-2 outline-none bg-transparent border-[0.5px] border-black text-sm white-glassmorphism placeholder-black" 

        />
)

const Welcome = () => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;
        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message) return;
        sendTransaction();
    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p20 py-12 px-4">
                <div className="flex flex-1 justify-center flex-col mf:mr-10 mt-0">
                    
                    <h1 className="leading-7 sm:text-5xl text-black font-bold py-1 tracking-tight">Secure, protect and own <br />your health.</h1>
                    <p className="text-left mt-5 text-black font-light text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim metus imperdiet tempor sodales. 
                        Pellentesque commodo imperdiet purus at ullamcorper. Suspendisse sed condimentum ligula. Vestibulum nisi nisl, 
                        facilisis in ligula ut, luctus porta sem. 
                    </p>
                    <p>
                        <a href="#" target="_blank">How is Medibank securing our data?</a>
                    </p>
                    {!currentAccount && (
                        <button 
                            type="button"
                            onClick={connectWallet}
                            className="flex flex-row justify-center items-center my-5 bg-[#007ac0] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                                <p className="text-black text-white text-base font-semibold">Connect Wallet</p>
                        </button>
                    )}
                    <div className="flex-1 flex flex-col justify-start items-start mt-8">
                        <ServiceCard
                            color="bg-[#2952e3]"
                            title="Health the way you want it"
                            icon={<FavoriteIcon fontSize="21" className="text-white" />}
                            subtitle="When it comes to your health, we have a range of services, programs, tools and information to help you protect your incredible body and mind every step of the way."
                        />
                        <ServiceCard
                            color="bg-[#8945F8]"
                            title="Live Better"
                            icon={<DirectionsRunIcon fontSize="21" className="text-white" />} 
                            subtitle="Live Better was created to support everyone in Australia to enjoy the things they do every day, with tools to help you eat, move, and feel healthier."
                        />
                        <ServiceCard
                            color="bg-[#dd0822]"
                            title="Health insurance that's right for you"
                            icon={<HealthAndSafetyIcon  fontSize="21" className="text-white" />}
                            subtitle="Eligible Medibank members can access a range of programs and research trials designed to manage their health conditions and provide access to more affordable care options."
                        />
                    </div>
                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 justify-end items-start border-none flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-[100px] h-10 rounded-full flex justify-center item-center">
                                    <img src={logoRev} alt="" />
                                </div>
                                <CryptoconBadge icon="EthereumBadge" />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">
                                    {shortenAddress(currentAccount)}
                                </p>
                                <p className="text-white font-semibold text-lg mt-1">
                                    Medibank ETH Card
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 text-black sm:w-96 w-full flex flex-col justify-start items-center transaction-card">
                        <Input placeholder="Recipient Acc..." name="addressTo" type="text" handleChange={handleChange} />
                        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                        <Input placeholder="Enter GIF Keyword" name="keyword" type="text" handleChange={handleChange} />
                        <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

                        <div className="h-[1px] w-full bg-white my-2" />

                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white font-bold w-full mt-2 rounded-lg p-2 bg-[#dd0822] rounded-full cursor-pointer"
                            >
                                Send Now
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;