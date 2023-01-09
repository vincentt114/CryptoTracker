import RowHeader from "./RowHeader"
import Rows from "./Rows"

const Table = (props) => {
  return (
    <div> 
      <table >
        <RowHeader />
        <Rows />
      </table>
    </div>
  )
}

export default Table;