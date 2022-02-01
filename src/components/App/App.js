import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import PageNotFound from '../PageNotFound/PageNotFound';
import { CurrectUserContext } from '../../context/CurrentUserContext';

function App() {

  const currentUser = ({ name: 'Человек', email: 'somemail@yay.com' });
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  const history = useHistory();

  /** Login/Logout */
  function onLogin() {
    console.log('login clicked')
    setIsLoggedIn(true);
    history.push('/profile');
  };

  function onLogout() {
    console.log('logout clicked')
    setIsLoggedIn(false);
    history.push('/');
  };

  /** Functions to redirect */
  function toSignin() {
    history.push('/signin')
  };
  function toSignup() {
    history.push('/signup')
  };
  function goBack() {
    history.goBack();
  };

  return (
    <CurrectUserContext.Provider value={currentUser}>
      <div className='app'>

        <Switch>
          <Route exact path='/'>
            <Header />
            <Navigation isLoggedIn={isLoggedIn} />
            <Main />
            <Footer />
          </Route>

          <Route path='/movies'>
            <Header />
            <Navigation isLoggedIn={isLoggedIn} />
            <Movies />
            <Footer />
          </Route>

          < Route path='/saved-movies'>
            <Header />
            <Navigation isLoggedIn={isLoggedIn} />
            <SavedMovies />
            <Footer />
          </Route>

          <Route path='/profile'>
            <Header />
            <Navigation isLoggedIn={isLoggedIn} />
            < Profile
              onLogout={onLogout}
              currentUser={currentUser}
            />
          </Route>

          <Route path='/signin'>
            <Header onlyLogo={true} />
            <Login
              onLogin={onLogin}
              toSignup={toSignup}
            />
          </Route>

          <Route path='/signup'>
            <Header onlyLogo={true} />
            <Register toSignin={toSignin} />
          </Route>

          <Route path='*'>
            <PageNotFound goback={goBack} />
          </Route>

        </Switch>
        
      </div>

    </CurrectUserContext.Provider>
  );
}

export default App;
