import {useLocation} from 'react-router-dom';

const Main = (props) => {
  const location = useLocation();
  const id = location.state.id;
  let coins;
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
    .then((data) => data.json())
    .then((data) => coins = data)
    .then(() => console.log(coins))
  return(
    <div>
      main
    </div>
  )
}

export default Main;