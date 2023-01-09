const Row = ( props ) => {
  return ( 
    <tr>
      <td> {props.rank} </td>
      <td> {props.name} </td>
      <td>  
        <img src={props.symbol} alt={'img'} height={'25px'} width={'25px'}></img>
      </td>
      <td> ${props.price} </td>
      <td> ${props.change} </td>
    </tr>
  )
}

export default Row;