import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo'
import {Link} from 'react-router';

import {hashHistory} from 'react-router';

import query from '../queries/fetchSongs'

class SongCreate extends Component{
    
    constructor(props){
        super(props)
        this.state = {title:''};
    }

    onSubmit(event){
        event.preventDefault()

        //Llamamos la mutation al dar Enter para dar de alta
        this.props.mutate({
            //Llenamos las variables
            variables:{
                title: this.state.title
            },
            //refetchQueries nos permite ejecutar el query de un
            //componente a parte, en este caso el de listar
            refetchQueries:[{ query }]
        })
        .then(()=> hashHistory.push('/'));
    }

    render(){
        return(
            <div>
                <Link to="/">
                    Back
                </Link>
                <h3>Create New Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>
                        Song Title:
                    </label>
                    <input 
                        onChange={event => this.setState({title:event.target.value})}
                        value={this.state.title}
                    />
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddSong ($title: String){
        addSong(title: $title){
            title
        }
    }
`;

export default graphql(mutation)(SongCreate);