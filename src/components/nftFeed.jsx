import React from 'react';
import Nft from './nft';

const NftFeed = ({ nfts }) => {
    return(
        nfts.map(nft => (
            <Nft key={nft.id} nft={nft}></Nft>
        ))
    )
};

export default NftFeed;
