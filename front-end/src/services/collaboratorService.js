import {connect} from "react-redux";
import axios from "axios";
//require ('dotenv').config();

const AddCollaboratorAction = (props) => {
    console.log(props.firstName, props.email);
    axios.post(`http://localhost:42515/collaborator`, {
        FirstName: props.firstName,
        LastName: props.lastName,
        Birthday: props.birthday,
        Email: props.email,
        Password: props.password
    })
    return null;
}

const mapStateToProps = (state) => {
    return {
        firstName: state.collaborator.firstName,
        lastName: state.collaborator.lastName,
        birthday: state.collaborator.birthday,
        email: state.collaborator.email,
        password: state.collaborator.password
    }
}

export default connect (mapStateToProps, null)(AddCollaboratorAction);
