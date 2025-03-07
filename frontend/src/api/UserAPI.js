const login = (userObject) => {
    return fetch('http://localhost:8000/get-token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
    }).then(res => res)
};

const getLoggedInUser = (token) => {
    return fetch('http://localhost:8000/current_user/', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`
        }
    }).then(res => res)
};

const signupUser = (userObject) => {
    return fetch('http://localhost:8000/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObject)
    }).then(res => res)
};

export { login, getLoggedInUser, signupUser }

