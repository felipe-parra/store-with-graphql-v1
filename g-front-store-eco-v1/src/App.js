import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MessageForm from './pages/MessageForm';
import MessageList from './pages/MessageList';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/messages" component={MessageList} />
					<Route exact path="/messages/new" component={MessageForm} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
