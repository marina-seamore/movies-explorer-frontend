/** Functions requiring beatfilm movies api domain */
export const beatfilmURL = `https://api.nomoreparties.co/beatfilm-movies`;

/** General */
function _returnResultStatus(res) {
    if (res.ok) {
        return res.json();
    } return Promise.reject(`Не получилось: ${res.status}${res.statusText} type:${res.type} and ${res.headers}`);
}

export const getBeatfilmMovies = () => {
    return fetch(beatfilmURL, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then((res) => _returnResultStatus(res))
}
