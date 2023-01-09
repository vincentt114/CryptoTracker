import { useState } from 'react';
import {useLocation} from 'react-router-dom';
import Table from './rowComponents/Table';

const Main = (props) => {
  const location = useLocation();
  const id = location.state.id;
  return(
    <div>
      <Table />
    </div>
  )
}

export default Main;