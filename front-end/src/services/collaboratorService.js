import {connect} from "react-redux";
//import { getCollaborator } from "../redux/actions/collaboratorAction";
//import axios from "axios";
//import AddCollaborator from "../components/AddCollaboratorForm";
//require ('dotenv').config();

const AddCollaboratorAction = (props) => {
    console.log(props.firstname);
    // axios({
    //     headers: {
    //         'content-type': 'application/json',
    //     },
    //     method: 'post',
    //     url: 'http://localhost:42515/collaborator',
    //     params: {
    //         'firstName': props.firstName,
    //         'lastName': props.lastName,
    //         'birthday': props.birthday,
    //         'email': props.email,
    //         'password': props.password
    //     }
    // })
    // .then(function (response) {
    //     console.log(response);
    // })
    // .catch(function(error) {
    //     console.log(error);
    // })
    //console.log(props.email)
    fetch('http://localhost:42515/collaborator', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        }, 
        body: JSON.stringify(props.firstName)
    });
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
