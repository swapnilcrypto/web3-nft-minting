
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EventSignup {
    mapping(address => bool) public participants;

    event SignedUp(address indexed participant);

    function signup() external {
        require(!participants[msg.sender], "Already signed up!");
        participants[msg.sender] = true;
        emit SignedUp(msg.sender);
    }
}
