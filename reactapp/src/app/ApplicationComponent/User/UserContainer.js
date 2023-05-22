import { AddUserToStoreAction } from "../../State/UserState/userActions";
import User from "./UserComponent";
import { connect } from "react-redux";


//container based 

//to make a component subscriber it implements - mapStateToProps
let mapStateToProps = (state)=>{ //state - is store with all reducers
    return {
        User : state.userReducer.User, //User is read a props.User
        //Product : state.productReducer.ProductList
    }
}

//to make a component publisher it implements - mapDispatchToProps
let mapDispatchToProps = (dispatch)=>{
    return {
        addUser : (newuser)=>{
            dispatch(AddUserToStoreAction(newuser))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(User);