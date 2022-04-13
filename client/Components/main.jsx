import React from 'react';
import { useNavigate, useNavigation} from 'react-router-dom';
import axios from 'axios';

const Main = (props) => {
  let info = [];
  axios({
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
  })
  .then(data => info = data.data)
  .then(data => console.log(info))
  return (
    <div>
      MAIN
    </div>
  )
}

export default Main;