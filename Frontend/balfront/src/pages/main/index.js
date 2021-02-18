import React, { Component } from 'react';
import api from "../../services/api";
import { Link } from "react-router-dom";

import './styles.css';

export default class Main extends Component{
    state = {
        users: [],
        userInfo: {},
        page: 10,
    };

    componentDidMount(){
        this.loadUsers();
    }

    loadUsers = async( page = 1 ) => {
        const response = await api.get(`/usuarios?page=${page}`);
        
        const { docs, ...userInfo } = response.data;

        this.setState({ users: docs, userInfo , page });
    };

    prevPage = () => {

        const { page, userInfo } = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;

        this.loadUsers(pageNumber);
    }

    nextPage = () => {
        const { page , userInfo } = this.state;
        

        if(page === userInfo.totalPages) return;
        
        const pageNumber = page + 1;
        
        this.loadUsers(pageNumber);
    };

    render() { 
        const { users, page, userInfo} = this.state;
        
    return (
        <div className="user-list">
            {this.state.users.map(users =>(
                <article key={users._id}>
                    <strong>{users.userName}</strong> 
                    <p>{users.userNickname}</p>

                <Link to={`/userDetails/${users._id}`}>Acessar</Link>
                    
                </article>
            ))}
            <div className="actions">
                <button disabled={page === 1} onClick={this.prevPage}> Anterior </button>
                <button disabled={page === userInfo.totalPages} onClick={this.nextPage}> Proximo </button>
            </div>
        </div>
    )
    }
}