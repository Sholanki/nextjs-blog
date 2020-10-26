import '../styles/global.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

export default function App({ Component, pageProps }) {
  <React.Fragment>
  <Router>
    <NavigationBar />
	<Switch>
	return <Component {...pageProps} />
	</Switch>
  </Router>
</React.Fragment>
}
