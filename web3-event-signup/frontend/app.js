
let signer, contract;
const connectBtn = document.getElementById('connect');
const signupBtn = document.getElementById('signup');

const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS";
const CONTRACT_ABI = ["function signup() external"];

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

signupBtn.onclick = async () => {
    try {
        const tx = await contract.signup();
        await tx.wait();
        alert("Successfully signed up!");
    } catch (e) {
        alert(e.message);
    }
};
