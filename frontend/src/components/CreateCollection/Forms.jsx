import { useState, useEffect } from "react";
import { ethers } from "ethers";
import contractAddr from "../../../../build/contracts/JettNFT.json";
import { useDispatch } from "react-redux";
import { setData } from "../../redux/store";

function App() {
  const [to, setTo] = useState("");
  const [tokenId, setTokenId] = useState(0);
  const [uri, setUri] = useState("");
  const [message, setMessage] = useState("");
  const [xdcProvider, setXdcProvider] = useState(null);
  const dispatch = useDispatch()
  useEffect(() => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      setXdcProvider(provider);
    } else {
      setMessage(
        "MetaMask not found. Please install and connect to XinFin XDC."
      );
    }
  }, []);

  const connectWallet = async () => {
    if (!xdcProvider) {
      setMessage(
        "MetaMask not found. Please install and connect to XDC Apothem."
      );
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      setMessage("Connected to XDC Apothem Network!");
    } catch (error) {
      setMessage(`Error connecting to XDC Apothem: ${error.message}`);
    }
  };

  const mintNFT = async () => {
    if (!xdcProvider) {
      setMessage("Please connect your wallet to XinFin XDC network.");
      return;
    }

    try {
      const contractAddress = "0x92a77a6D079577a4F316BEAD527C71344dA2f3f6";
      const contractAbi = contractAddr.abi;

      const signer = xdcProvider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      );

      const options = {
        gasLimit: 30000000,
      };
      const tx = await contract.mint(to, tokenId, uri, options);
      console.log(tx);
      // await tx.wait();
      // console.log(tx.hash);
      setTimeout(() => {
        setMessage(`NFT minted successfully!`);
        dispatch(setData({
          "Id": 9,
          "image": "https://media.istockphoto.com/id/1405987908/photo/metaverse-cyberpunk-style-city-with-robots-walking-on-street-neon-lighting-on-building.webp?b=1&s=170667a&w=0&k=20&c=7cPJuFZQ1IDJo7TPiOCny4rWAmEBpTOsEfXlaCT7XEo=",
          "title": "City Develop",
          "Creator": "Social NGO",
          "price": "0.35 Eth",
          "profile" : "https://templates.hibootstrap.com/nedo/default/assets/img/author/author-4.jpg"
      }))
        window.location = `https://apothem.blocksscan.io/txs/${tx.hash}`;
      }, 4000);
      
      
    } catch (error) {
      setMessage(`Error minting NFT: ${error.message}`);
    }
  };

  return (
    <div className="bg-slate-200 p-5 mx-[400px] flex-wrap rounded-lg flex justify-center gap-7 items-center flex-col my-[100px]">
      <h1 className=" font-semibold text-2xl">Enter your details</h1>
      <div>
        {!xdcProvider ? (
          <button
            className="btn bg-primary hover:text-black hover:bg-slate-400 text-white"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        ) : (
          <button
            className="btn bg-[#08A045] hover:text-black hover:bg-slate-400 text-white"
            onClick={connectWallet}
          >
            Wallet Connected
          </button>
        )}
      </div>
      <div>
        <label htmlFor="to">Address:</label>
        <input
          type="text"
          id="to"
          className="input input-bordered w-[500px] ml-5"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          disabled={!xdcProvider}
        />
      </div>
      <div>
        <label htmlFor="tokenId">Token ID:</label>
        <input
          className="input input-bordered w-[500px] ml-5"
          type="number"
          id="tokenId"
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
          disabled={!xdcProvider}
        />
      </div>
      <div>
        <label htmlFor="uri">Token URI:</label>
        <input
          type="text"
          id="uri"
          className="input input-bordered w-[500px] ml-5"
          value={uri}
          onChange={(e) => setUri(e.target.value)}
          disabled={!xdcProvider}
        />
      </div>
      <button
        className="btn bg-violet-600 hover:text-black hover:bg-violet-300 text-white"
        onClick={mintNFT}
        disabled={!xdcProvider}
      >
        Mint NFT
      </button>
      <div className="alert alert-success bg-primary text-white overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="overflow-hidden">{message}</span>
      </div>
    </div>
  );
}

export default App;
