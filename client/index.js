import './style/style.css'

import React from 'react';
import ReactDOM from 'react-dom';

import {Router,Route,hashHistory,IndexRoute} from 'react-router';

//Apollo
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

//Componente padre
import App from './components/App'

//Componente de lista de canciones
import SongList from './components/SongList';

//Componente para agregar una cancion
import SongCreate from './components/SongCreate'

//Componente para ver los detalles de una cancion en especifico
import SongDetail from './components/SongDetail'

//Cliente de Apollo
const client = new ApolloClient({})

const Root = () => {
    //return <div > Lyrical </div>
    return (
        <ApolloProvider client={client}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={SongList} />
                    <Route path="songs/new" component={SongCreate} />
                    <Route path="songs/:id" component={SongDetail} />
                </Route>
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render( 
    <Root /> ,
    document.querySelector('#root')
);