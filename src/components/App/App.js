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
import * as mainApi from '../../utils/MainApi';
import * as movieApi from '../../utils/MovieApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({ email: '', name: '', id: '' });
  const [movies, setMovies] = React.useState([]);
  const [noMoviesFound, setNoMoviesFound] = React.useState(false);
  const [noSavedMovies, setNoSavedMovies] = React.useState(false);
  const [errorOnSearch, setErrorOnSearch] = React.useState(false);
  const [errorOnSubmit, setErrorOnSubmit] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);

  const history = useHistory();

  /** Auth */
  function onLogin({ email, password }) {
    mainApi.login(email, password)
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser({ email: res.email, name: res.name, id: res._id });
        localStorage.setItem('token', true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(`Login error: ${err}`)
        setErrorOnSubmit(true);
      })
  };

  function onLogout() {
    mainApi.logout();
    setIsLoggedIn(false);
    setCurrentUser({ email: '', name: '', id: '' });
    localStorage.clear();
    history.push('/');
  };


  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.tokenCheck()
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser({ email: res.email, name: res.name, id: res._id });
        })
        .catch((err) => {
          console.log(`token error: ${err}`);
          setIsLoggedIn(false);
        })
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);


  /** Functions with new user info */
  function onEdit(newUserInfo) {
    mainApi.setUserInfo(newUserInfo)
      .then((res) => {
        setCurrentUser({ email: res.email, name: res.name, id: res._id });
      })
      .catch((err) => console.log(err))
  }

  function register({ name, email, password }) {
    setIsLoading(true);

    mainApi.register(name, email, password)
      .then(() => {
        setIsLoading(false);
        onLogin({ email, password });
      })
      .catch((err) => {
        console.log(`Login error: ${err}`)
        setErrorOnSubmit(true);
        setIsLoading(false);
      })
  }

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

  /** MovieSearch */

  function searchMovie(movieName) {
    setIsLoading(true)

    movieApi.getBeatfilmMovies()
      .then((movieData) => {
        const result = movieData.filter(
          (item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase())
        )
        if (result.length === 0) {
          setNoMoviesFound(true);
          setMovies([]);
        } else {
          setNoMoviesFound(false);
          setMovies(result);
          localStorage.setItem('moviesArray', JSON.stringify(result))
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`setMovies err: ${err}`);
        setErrorOnSearch(true);
        setIsLoading(false);
      })
  }

  React.useEffect(() => {
    if (isLoggedIn) {
      getSavedMovies();
      const storageMovies = localStorage.getItem('moviesArray');
      if (storageMovies) {
        setMovies(JSON.parse(storageMovies));
      }
    }
  }, [isLoggedIn])

  /** Handler for saving movies/removing from saved */
  function handleCardSave(card) {
    mainApi.addMovie(card)
      .then((newCard) => {
        setSavedMovies(savedMovies => ([newCard, ...savedMovies]))
      })
      .catch((err) => console.log(`handleCardSave err: ${err}`))
  };

  function handleCardRemoveMovies(card) {
    const cardToRemove = savedMovies.find((item) => (item.movieId === card.id && item.owner === currentUser.id));//movies

    mainApi.deleteMovie(cardToRemove._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(item => item._id !== cardToRemove._id))
      })
      .catch((err) => console.log(err))
  };

  function isSaved(card) {
    return savedMovies.some((item) => item.movieId === card.id && item.owner === currentUser.id)
  };

  function handleCardRemoveSavedMovies(card) {
    const cardToRemove = savedMovies.find((item) => (item.movieId === card.movieId && item.owner === currentUser.id));//saved-movies

    mainApi.deleteMovie(cardToRemove._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(item => item._id !== cardToRemove._id))
      })
      .catch((err) => console.log(err))
  };


  /** Get saved movies */

  function getSavedMovies() {
    mainApi.getMovies()
      .then((res) => {
        if (res.length === 0) {
          setNoSavedMovies(true);
        } else {
          setSavedMovies(res);
          setNoSavedMovies(false)
        }
      })
      .catch((err) => console.log(`getSavedMovies: ${err}`))
  }
  function searchInSavedMovies(movieName) {
    setIsLoading(true);
    mainApi.getMovies()
      .then((movieData) => {
        const result = movieData.filter(
          (item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase())
        )
        if (result.length === 0) {
          setNoSavedMovies(true);
          setSavedMovies([]);
        } else {
          setNoSavedMovies(false);
          setSavedMovies(result);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`setSavedMovies err: ${err}`);
        setErrorOnSearch(true);
        setIsLoading(false);
      })
  }

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

          <ProtectedRoute path='/movies' isLoggedIn={isLoggedIn}>
            <Header />
            <Navigation isLoggedIn={isLoggedIn} />
            <Movies
              onSubmitSearch={searchMovie}
              movies={movies}
              isLoading={isLoading}
              noMovies={noMoviesFound}
              errorCaught={errorOnSearch}
              onCardSave={(movie) => { handleCardSave(movie) }}
              onCardRemove={handleCardRemoveMovies}
              isSaved={isSaved}
            />
            <Footer />
          </ProtectedRoute>

          < ProtectedRoute path='/saved-movies' isLoggedIn={isLoggedIn}>
            <Header />
            <Navigation isLoggedIn={isLoggedIn} />
            <SavedMovies
              onSubmitSearch={searchInSavedMovies}
              savedMovies={savedMovies}
              isLoading={isLoading}
              noMovies={noSavedMovies}
              errorCaught={errorOnSearch}
              onCardRemove={handleCardRemoveSavedMovies}
              isSaved={isSaved}
            />
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute path='/profile' isLoggedIn={isLoggedIn}>
            <Header />
            <Navigation isLoggedIn={isLoggedIn} />
            < Profile
              onLogout={onLogout}
              onEdit={onEdit}
            />
          </ProtectedRoute>


          <Route path='/signin'>
            <Header onlyLogo={true} />
            <Login
              onLogin={onLogin}
              toSignup={toSignup}
              error={errorOnSubmit}
            />
          </Route>

          <Route path='/signup'>
            <Header onlyLogo={true} />
            <Register
              onRegister={register}
              toSignin={toSignin}
              isLoading={isLoading}
              errorOnSubmit={errorOnSubmit}
            />
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
