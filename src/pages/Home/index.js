import React from 'react';
import { Link } from 'react-router-dom';
import NftFeed from '../../components/nftFeed';
import { useQuery } from '@apollo/client';
import { GET_NFTS, GET_NOTES } from '../../gql/query';
import logoz from '../../assets/img/avatar.png'
import satu from '../../assets/img/content/items/featured-item-29.png'
import dua from '../../assets/img/content/items/featured-item-30.png'
import tiga from '../../assets/img/content/items/featured-item-31.png'
import empat from '../../assets/img/content/items/featured-item-32.png'
import lima from '../../assets/img/content/items/featured-item-33.png'
import enam from '../../assets/img/content/items/featured-item-34.png'
import tujuh from '../../assets/img/content/items/featured-item-35.png'


const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NFTS);
   
   if (loading) return <p>Loading...</p>;

   if (error) return <p>Error!</p>;
  return(
    
    <div className="Main">
      <div className="primary-content-area bottom-padding-70 ">
        <div className="container section-padding">
          <div className="featured-box">
            
            <div className="featured-box-wrapper grid-4-columns">
              <NftFeed nfts={data.nftFeed.nfts}></NftFeed>
            </div>
          </div>
        </div>
      </div>
    </div>
) 
}

export default Home;
