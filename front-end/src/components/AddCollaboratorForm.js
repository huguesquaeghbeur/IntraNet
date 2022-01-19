import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import axios from "axios";
import { getCollaborator } from "../redux/actions/collaboratorAction";
//import AddCollaboratorAction from "../services/collaboratorService";

const AddCollaborator = (props) => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        props.getCollaborator(data);
        console.log(data.firstName);
        // axios({
        //         headers: {
        //             'content-type': 'text/plain',
        //         },
        //         method: 'post',
        //         url: 'http://localhost:42515/collaborator',
        //         data: {
        //             firstName: data.firstName,
        //             lastName: data.lastName,
        //             birthday: data.birthday,
        //             email: data.email,
        //             password: data.password
        //         }
        //     })
        axios.post('http://localhost:42515/collaborator', {
            firstName: data.firstName,
            lastName: data.lastName,
            birthday: data.birthday,
            email: data.email,
            password: data.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div>
                        <div>
                            <label htmlFor="firstName">Nom</label>
                            <input type="text"
                                name="firstname"
                                {...register("firstName", { required: true })} />
                            {errors.firstName && errors.firstName.type === "required" && (<p>Le nom est obligatoire</p>)}
                        </div>
                        <div>
                            <label htmlFor="lastName">Prénom</label>
                            <input type="text"
                                name="lastname"
                                {...register("lastName", { required: true })} />
                            {errors.lastName && errors.lastName.type === "required" && (<p>Le prénom est obligatoire</p>)}
                        </div>
                        <div>
                            <label htmlFor="birthday">Date de naissance</label>
                            <input type="date"
                                name="birthday"
                                {...register("birthday", { required: true })} />
                            {errors.birthday && errors.birthday.type === "required" && (<p>La date de naissance est obligatoire</p>)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text"
                                className="form-control"
                                name="email"
                                {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                            {errors.email && errors.email.type === "required" && (<p>Un email est obligatoire</p>)}
                            {errors.email && errors.email.type === "pattern" && (<p>Votre mail doit être valide</p>)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password"
                                className="form-control"
                                name="password"
                                {...register("password", { required: true, validate: (value) => value.length > 3 && value.length < 20 })} />
                            {errors.password && errors.password.type === "required" && (<p>Un mot de passe est obligatoire</p>)}
                            {errors.password && errors.password.type === "validate" && (<p>Votre mot de passe doit avoir entre 3 et 20 caractéres</p>)}
                        </div>
                        <div>
                            <button type="submit">Valider</button>
                            {/* < AddCollaboratorAction /> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        firstName: state.collaborator.firstName,
        lastname: state.collaborator.lastname,
        birthday: state.collaborator.birthday,
        email: state.collaborator.email,
        password: state.collaborator.password
    }
}
const mapActionToProps = (dispatch) => {
    return {
        getCollaborator: (data) => dispatch(getCollaborator(data))
    }
}

export default connect(mapStateToProps, mapActionToProps)(AddCollaborator);


