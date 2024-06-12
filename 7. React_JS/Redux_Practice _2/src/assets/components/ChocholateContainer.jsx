import { buy_chocholate} from "../../Redux/Index";
import { connect } from "react-redux";


const ChocholateContainer = (props) => {

  return (
    <div>

        <h2> Number of Chocholate - {props.numOfchocholate}</h2>

        <button onClick={props.buy_chocholate }>Buychocholate</button>
      
    </div>
  )
}
const mapStateToProps = state => {

    return{

        numOfchocholate:state.numOfchocholate
    }

}
const mapDisptchToProps = dispatch => {
    return {
        buy_chocholate:() => dispatch(buy_chocholate())
    }
}



export default connect(mapStateToProps , mapDisptchToProps) (ChocholateContainer)
