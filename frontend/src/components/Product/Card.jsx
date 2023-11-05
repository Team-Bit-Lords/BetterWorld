/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { ethers } from "ethers"
import MyEpicNFT from "../../../../build/contracts/JettNFT.json"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { remNFT } from '../../redux/store'


const Card = (props) => {
    const [recipientAddress, setRecipientAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const sendEthToAddress = async () => {
        try {
            // Connect to the Ethereum provider (e.g., MetaMask)
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Get the signer (account) from the provider
            await provider.send('eth_requestAccounts', []); // <- this promps user to connect metamask
            const signer = provider.getSigner();
            console.log(signer)
            // Replace with your contract address and ABI
            const contractAddress = '0x92a77a6D079577a4F316BEAD527C71344dA2f3f6';
            const contractABI = MyEpicNFT.abi

            // Create a contract instance
            const contract = new ethers.Contract(contractAddress, contractABI, signer);
            // Send ETH to the specified address
            console.log(contract);
            const options = {
                gasLimit: 30000000
            }
            const tx = await contract.mint("0x61870E770e1fA53234a342Ea8424284820ab8A0b", ethers.BigNumber.from("804"), "https://www.jsonkeeper.com/b/FLNO", options);
            console.log(tx);
            // await tx.wait();
            setTimeout(()=> {
                setMessage('Transaction successful!');
                dispatch(remNFT())
                navigate("/product")
            }, 4000)
            
        } catch (error) {
            console.error('Error:', error);
            setMessage('Transaction failed. Check the console for details.');
        }
    };

    return (
        <div className="max-w-xs hover:cursor-pointer p-6 mt-10 ml-10 rounded-md shadow-md bg-white text-black" >
            <img src={props.image} alt="" className="object-cover object-center w-full rounded-md h-72 text-black" />
            <div className="imageDetail mt-4 flex flex-col">
                <div className="contentInfo items-center flex justify-between">
                    <div className="creator flex items-center gap-2 float-left">
                        <img className=' rounded-full w-12' src={props.profile} alt="" />
                        <div className="creatorInfo">
                            <p className=' text-sm text-slate-500'>Creator</p>
                            <p className=' font-semibold text-base'>{props.Creator}</p>
                        </div>
                    </div>
                    <div className="bid float-right">
                        <p className=' text-sm text-slate-500'>Price</p>
                        <p className='font-semibold text-base'>{props.price}</p>
                    </div>
                </div>
                <div className="mt-5 contentTitle flex justify-between items-center ">
                    <h1 className=' mt-5 font-bold font-mono text-2xl'>{props.title}</h1>
                    <button className='btn bg-primary text-white hover:text-black' onClick={() => sendEthToAddress("0x61870E770e1fA53234a342Ea8424284820ab8A0b", "0.0045")}> Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card