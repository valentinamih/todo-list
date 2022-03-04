import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Header} from "./Components/Header/Header";
import {Route,  withRouter} from 'react-router-dom'
import {Main} from "./Components/Main/Main";
import ListContainer from "./Components/List/ListContainer";
import {Switch} from "react-router";



function App () {
  return (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className={'app-wrapper-container'}>
            <Switch>
                <Route path='/main'  render={() => <Main />} />
                <Route path='/list' render={() => <ListContainer />} />
            </Switch>
        </div>
    </div>
  );
}

export let AppContainer = withRouter(App)

export default App;
