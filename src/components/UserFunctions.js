import axios from 'axios'

export const register = newUser => {
  return axios
    .post('https://backend-0flu.onrender.com/users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      role:newUser.role
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('https://backend-0flu.onrender.com/users/login', {
      email: user.email,
      password: user.password,
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('https://backend-0flu.onrender.com/users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
