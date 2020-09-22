---
id: flip-a-karen
title: Experiment #1 - Flip a Karen
---

Flip a Karen is an experiment using decaying royalties.

**Decaying Royalties Explained**

Decaying royalties is a new royalties model where artists get X% from secondary sales, first collector gets (X-1)%, second collector gets (X-2)%, and so on. By opening up the royalties pool to collectors, it effectively shifts the concept of NFTs as personal ownership to that of common ownership. It is distinct from models employed by existing NFT platforms, where flat royalties (only artists receive X% from secondary sales) are used. 

As an example, we will start with artist Alice selling an NFT to Bob for $1. Bob then resells it to Cathy for $2 (2x), Cathay then resells it to Darren for $4 (2x), Darren then resells it to Emily for $8 (2x) and so on until the NFT reaches Karen at a sale price of $512. Put simply, Alice’s NFT starts with a price of $1 and is sold at a flip multiple of 2x per secondary resale. 

![](https://i.imgur.com/M65oUck.png)

Now, suppose Alice minted her NFT with 10% decaying royalties, which means that Alice would receive 10%, Bob would receive 9%, Cathay would receive 8% and so on from each secondary sale. Eventually, Jack would receive 1% and Karen would be left with nothing, hence the title of the experiment, “Flip a Karen.”  By adding up the royalties payouts for each individual, we get the following: 

![](https://i.imgur.com/2uBxDAA.png)

In contrast, this is what flat royalties look like. Take your pick. 

![](https://i.imgur.com/PEJkqPC.png)

**Flip a Karen**

The experiment is, flip a Karen with one NFT and royalties model of your choosing. Remember, you’re not flipping Karen alone, the collectors of your NFT are also in on it. To participate in this experiment, here are some things to know:

*NFT*

**Only ERC721 will work.** Luckily, most platforms, SuperRare, KnownOrigin, etc., use ERC721. But, if you are using NFTs from Rarible, make sure it is ERC721 and not ERC1155. Lastly, we ask that you refrain from using Async Art NFTs because their NFTs have functions that may conflict with our smart contract.

*Royalties Model*

As this is the first experiment, we will keep it simple. To participate in this experiment, you should scribe at least one NFT with 10% decaying royalties to formally flip a Karen, but feel free to scribe more NFTs with different royalties %. As we become more familiar with how scribing works, we’ll gradually update additional controls for you to play around with. For example, you could scribe NFTs with a fixed flip multiple of 3x (sale price predetermined at $1, $3, $9, $27, $81 …), or scribe one or more buddies to the royalties pool before royalties begin to decay. 

*Smart Contract*

“Flip a Karen” involves a smart contract named “MolScribe” (credit to Conlan for his work on NFT Scribe) which will scribe decaying royalties to the NFT of your choice. To scribe, you’ll need to specify (1) NFT token address, (2) NFT token ID, and (3) a royalties % to decay from. You’d only need to scribe an NFT once.

To buy and sell a scribed NFT, sellers will need to identify a buyer and a sale price, similar to the flow for “Buy Now.” As the designated buyer completes a transaction, MolScribe will automatically distribute royalties to the previous owners. Because MolScribe keeps a registry of royalties data, future transactions must go through MolScribe. This means that if you transfer a scribed NFT using OpenSea or equivalent, you may lose the benefits of decaying royalties.

For those feeling adventurous, here’s the Solidity code to [MolScribe](https://github.com/Mol-LeArt/Smart-Contracts/blob/master/LexArt721%20-%20Scribe.sol). 

*Mol’s Cut*

Mol LeArt, as a DAO, takes 5% from secondary sales. 
