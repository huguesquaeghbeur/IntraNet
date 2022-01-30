import { connect } from "react-redux";
import {getUser} from '../redux/actions/userAction'
import { IS_LOADING } from "../redux/reducers/userReducer";
import {PureComponent} from 'react'

class Home extends PureComponent {
    constructor(props) {
        super(props);
    }
    state = { 
        user:undefined
     }
     componentDidMount(){
         this.props.getUser()
     }
     componentDidUpdate(){
         console.log(this.props.user)
     }
    
    render() { 
        return ( 
            <div>
                {this.props.user.isLoading == true ? "ca charge": "non"}
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
} 

const mapActionToProps = (dispatch) => {
    return {
        getUser : () => dispatch(getUser()),
    }
}

export default connect(mapStateToProps,mapActionToProps)(Home);