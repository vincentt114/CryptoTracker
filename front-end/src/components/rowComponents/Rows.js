import { useState } from 'react';
import Row from './Row'

const Rows = () => {
    const [rows, setRows] = useState([]);
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
    .then((data) => data.json())
    .then((data) => {
      const hold = [];
      for (let i = 0; i < data.length; i++) {
        hold.push(<Row key={i} rank={data[i].market_cap_rank} name={data[i].name} symbol={data[i].image} price={data[i].current_price} change={data[i].price_change_24h} />)
      }
      setRows(hold)
    })
  return (
    <tbody>
      {rows}
    </tbody>
  )
}

export default Rows