import React from 'react';
import './App.css';
import Navbar from './components/reusable/Navbar'
import Footer from './components/reusable/Footer'
import Movie from './components/Movie/Movie'
import Home from './components/pages/Home'
import Genre from './components/pages/Genre'
import Country from './components/pages/Country'
import SearchForm from './components/Movie/SearchForm'
import Movies from './components/pages/Movies'
import Tvseries from './components/pages/Tvseries'
import AZlist from './components/pages/AZlist'
import Release from './components/pages/Release'
import Mostwatched from './components/pages/Mostwatched'
import store from './Redux/Stores/Store';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { Provider } from 'react-redux';

const Notfound = ({ location }) => (
  <div>
  sorry could not find a match for <code>{location.pathname}</code> please try a different path </div>

)

function App() {
  return (
    <Provider store={store}>

   <Router>
    <div className="App bg-dark text-light">
    <Navbar />
    <Switch>
{/* <Redirect from= "/home" to = "/" /> */}
<Route path="/home" exact component={Home} />
{/* <Route exact path="/movie/:id" component={Movie} /> */}
<Route exact path="/" component={SearchForm} />
<Route path="/genre" exact component={Genre} />
<Route path="/Country" exact  component={Country} />
<Route path="/Movies" exact  component={Movies} />
<Route path="/Tvseries" exact  component={Tvseries} />
<Route path="/AZlist" exact  component={AZlist} />
<Route path="/Release" exact  component={Release} />
<Route path="/Mostwatched" exact  component={Mostwatched} />
<Route component={Notfound} />

</Switch>



    <Footer />
    </div>
    </Router>
    </Provider>

  );
}

export default App;
