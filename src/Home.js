import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />

        <div className='home__row'>
          <Product
            id='12321341'
            title='The lean startup: How Constant Innovation Creates Radically Succesful Businesses Paperback'
            price={11.96}
            rating={5}
            image='https://m.media-amazon.com/images/I/51WIKlio9qL.jpg'
          />
          <Product
            id='49538094'
            title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
            price={239.0}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SL1500_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='4903850'
            title='Apple Watch Series 4 GPS, 40mm'
            price={349.0}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/81msUytwA8L._AC_SL1500_.jpg'
          />
          <Product
            id='23445930'
            title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
            price={98.99}
            rating={5}
            image='https://www.pcrichard.com/images/product/large/Z_B07NFTVP7P.jpg'
          />
          <Product
            id='3254354345'
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
            price={598.99}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='90829332'
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={1094.98}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
