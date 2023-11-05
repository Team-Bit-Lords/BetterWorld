/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import myEpicNft from "../../utils/JettNFT.json";
import { ethers } from "ethers";

const Nft = () => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [image, setImage] = useState("");
    const [link, setLink] = useState("");
    const [loading, setLoading] = useState(false);

    const checkIfWalletIsConnected = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            console.log("Make sure you have metamask!");
            return;
        } else {
            console.log("We have the ethereum object", ethereum);
        }

        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
            const account = accounts[0];
            console.log("Found an authorized account:", account);
            setCurrentAccount(account);
        } else {
            console.log("No authorized account found");
        }
    };
    const connectWallet = async () => {
        try {
            const { ethereum } = window;

            if (!ethereum) {
                alert("Get MetaMask!");
                return;
            }
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            console.log("Connected", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
        }
    };

    const askContractToMintNft = async () => {
        const CONTRACT_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

        try {
            const { ethereum } = window;

            if (ethereum) {
                const provider = new ethers.BrowserProvider(window.ethereum);
                console.log(provider);
                const signer = provider.getSigner();
                console.log(signer);
                const connectedContract = new ethers.Contract(
                    CONTRACT_ADDRESS,
                    myEpicNft.abi,
                    signer
                );

                console.log("Going to pop wallet now to pay gas...");
                let nftTxn = await connectedContract.makeAnEpicNFT();

                console.log("Mining...please wait.");
                setLoading(true);
                await nftTxn.wait();

                console.log(
                    `Mined, see transaction: https://sepolia.etherscan.io/tx/${nftTxn.hash}`
                );
                setImage(
                    "https://bafybeidvcjkmdtagb3s5prc7g3wxswhpj6hdklm3dr4cc2xsklacb5ap2q.ipfs.dweb.link/Minithon.png"
                );
                setLink(`https://sepolia.etherscan.io/tx/${nftTxn.hash}`);
            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Render Methods
    const renderNotConnectedContainer = () => (
        <button
            onClick={connectWallet}
            className="cta-button connect-wallet-button"
        >
            Connect to Wallet
        </button>
    );

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <div className="App bg-green-300">
            <div className="container">
                <div className="header-container">
                    <p className="header gradient-text">My NFT Collection</p>
                    <p className="sub-text">
                        Each unique. Each beautiful. Discover your NFT today.
                    </p>
                    {currentAccount === "" ? (
                        renderNotConnectedContainer()
                    ) : (
                        <>
                            {image !== "" && link !== "" ? (
                                <div className="nft-image">
                                    <img src={image} alt="NFT" className="nft-image" />
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link"
                                    >
                                        Link to your transaction
                                    </a>
                                </div>
                            ) : loading ? (
                                <>
                                    <div className="container">
                                        <div className="ring">
                                            <h1>Generating...</h1>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <button
                                    onClick={askContractToMintNft}
                                    className="cta-button connect-wallet-button"
                                >
                                    Mint NFT
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nft;
