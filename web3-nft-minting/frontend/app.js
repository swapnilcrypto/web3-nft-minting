
let signer, contract;
const connectBtn = document.getElementById('connect');
const mintBtn = document.getElementById('mint');
const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS";
const CONTRACT_ABI = ["function mintNFT(address recipient) public returns (uint256)"];

connectBtn.onclick = async () => {
    if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        alert("Wallet Connected!");
    } else {
        alert("MetaMask not detected!");
    }
};

mintBtn.onclick = async () => {
    try {
        const tx = await contract.mintNFT(await signer.getAddress());
        await tx.wait();
        alert("NFT Minted Successfully!");
    } catch (e) {
        alert(e.message);
    }
};
