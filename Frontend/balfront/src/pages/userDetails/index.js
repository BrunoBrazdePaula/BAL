import React, { Component } from "react";
import api from "../../services/api";

import './styles.css'

export default class UserDetail extends Component {
    state = {
        users: [],
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        
        //const response = await api.get(`/userDetails/${id}`);
        //nome da rota da API backend
        const response = await api.get(`/usuarios/${id}`);

        this.setState({ users: response.data })
    }

    render() {
       const { users } = this.state;

       return(
           <div className="user-info">
               <h1>{ users.userName}</h1>
               <p>{ users.userNickname }</p>

               <p>
                URL: <a href="">{ users.userCity }</a>
               </p>
           </div>
       )
    }
}