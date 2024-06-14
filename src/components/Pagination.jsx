
import './Pagination.css'
const Pagination = (props) => {
  
    const len=props.btns;
    const buttons = [];

    for (let i = 0; i < len/9; i++) {
      var act=""
      
     buttons.push(<button key={i} className={`page-btn ${props.crnt==i+1?'active':''}`} value={i+1}>{i + 1}</button>);
    }

    return(
    <div className='pagination' onClick={props.handleClick}>
        <button className="page-btn" value={-1}>«</button>
       {buttons}
       <button className="page-btn" value={0}>»</button>
    </div>
  )
}
export default Pagination