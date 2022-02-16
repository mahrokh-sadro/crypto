
import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
// import Loader from './Loader';

const Cryptocurrencies = () => {

  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('');

  console.log(cryptos)


  return (

    
    <div>   
       <Row gutter={[32, 32]} className="crypto-card-container">
{cryptos.map(currency=>(

  <Col  xs={24}
  sm={12}
  lg={6}
  className="crypto-card"
  key={currency.uuid}
  >
  <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
  <Card>
    
  </Card>
  </Link>



  </Col>
))}
       </Row>
    </div>
  )
}

export default Cryptocurrencies