import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootswatch/dist/materia/bootstrap.css';

import { BrowserRouter } from 'react-router-dom';

// Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';

const apolloClient = new ApolloClient({
	uri: 'http://localhost:3100/'
});

const WithRouter = () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

const WithApollo = () => (
	<ApolloProvider client={apolloClient}>
		<ApolloHooksProvider client={apolloClient}>
			<WithRouter />
		</ApolloHooksProvider>
	</ApolloProvider>
);

ReactDOM.render(
	<React.StrictMode>
		<WithApollo />
	</React.StrictMode>,
	document.getElementById('root')
);
