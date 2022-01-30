import React from 'react';
import { useQuery } from '@apollo/client';
// import { IS_LOGGED_IN } from '../gql/query';

const Nft = ({ nft }) => {
    // const { loading, error } = useQuery(IS_LOGGED_IN);
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error!</p>;
    return <div className="featured-item v5">
        <div className="featured-item-wrapper">
            <div className="featured-item-content">
                <div className="fav-counter"><svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                </svg><span className="count">{nft.favoriteCount}</span></div>
                <div className="featured-item-image">
                    <img src={nft.image} alt="" />
                </div>
                <div className="featured-item-info">
                    <div className="title"><a href="05-product.html">{nft.title}</a>
                    </div>
                    <div className="item-meta"><span className="avatar box-26"><a href="06-profile-page.html"><img src={nft.author.avatar} alt="" /></a><span className="verified"><svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                    </svg></span></span>@ {nft.author.username}</div>
                </div>
            </div>
        </div>
    </div>;
};

export default Nft;