/** Functions requiring own api domain */
export const base_url = `https://api.movie.project.nomoredomains.work`;

/** General */
function _returnResultStatus(res) {
    if (res.ok) {
        return res.json();
    } return Promise.reject(`Не получилось: ${res.status} ${res.statusText}`);
}

/** User functions */

/** Auth functions */
export const register = (name, email, password) => {
    return fetch(`${base_url}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password }),
    })
        .then((res) => _returnResultStatus(res))
}

export const login = (email, password) => {
    return fetch(`${base_url}/signin`, {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
        .then((res) => _returnResultStatus(res))
}

export const logout = () => {
    return fetch(`${base_url}/signout`, {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
    })
        .then((res) => _returnResultStatus(res))
}


export const tokenCheck = () => {
    return fetch(`${base_url}/users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        }
    })
        .then((res) => _returnResultStatus(res))
}

/** User information functions */
export const getUserInfo = () => {
    return fetch(`${base_url}/users/me`, {
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
    })
        .then((res) => _returnResultStatus(res))
}

export const setUserInfo = ({ name, email }) => {
    return fetch(`${base_url}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then((res) => _returnResultStatus(res))
}

/** Movies functions */
export const getMovies = () => {
    return fetch(`${base_url}/movies`, {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        credentials: 'include'
    })
    .then((res) => _returnResultStatus(res))
}

export const addMovie = (movie) => {
    return fetch(`${base_url}/movies`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: (`https://api.nomoreparties.co/${movie.image.url}`),
            trailer: movie.trailerLink,
            thumbnail: (`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`),
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN
        })
    })
    .then((res) => _returnResultStatus(res))
}

export const deleteMovie = (movieId) => {
    return fetch(`${base_url}/movies/${movieId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        }
    })
    .then((res) => _returnResultStatus(res))
}
