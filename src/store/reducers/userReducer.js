import { CLEAR_SEARCH, GET_USERS, GET_USERS_BY_ID, CREATE_USER, DELETE_USER, EDIT_USER, SEARCH_FIRST_NAME, SEARCH_LAST_NAME, SEARCH_EMAIL } from "../keys";

const initialState = {
  users: [],
  usersById: {},
  usersOrigin: [],
}

export default function reducer (state = initialState, action) {
  const {type, payload} = action
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload, usersOrigin: payload }
    case GET_USERS_BY_ID:
      return { ...state, usersById: payload }
    case CREATE_USER:
      let newUsers = state.usersOrigin.map(el => el)
      newUsers.push(payload)
      return { ...state, users: newUsers, usersOrigin: newUsers }
    case DELETE_USER:
      let deleteUser = state.usersOrigin.filter(el => el.id !== payload)
      return { ...state, users: deleteUser, usersOrigin: deleteUser }
    case EDIT_USER:
      let editUser = state.usersOrigin.filter(el => el.id !== payload.id)
      editUser.push(payload)
      return { ...state, users: editUser, usersOrigin: editUser }
    case SEARCH_FIRST_NAME:
      let result = [];
      let data = state.users
      data.forEach((list) => {
        if (list.first_name.toLocaleLowerCase().search(payload.toLocaleLowerCase()) > -1) {
          result.push(list);
        }
      });
      return { ...state, users: result }
    case SEARCH_LAST_NAME:
      let resultLastName = [];
      let lastName = state.users
      lastName.forEach((list) => {
        if (list.last_name.toLocaleLowerCase().search(payload.toLocaleLowerCase()) > -1) {
          resultLastName.push(list);
        }
      });
      return { ...state, users: resultLastName }
    case SEARCH_EMAIL:
      let resultEmail = [];
      let email = state.users
      email.forEach((list) => {
        if (list.email.toLocaleLowerCase().search(payload.toLocaleLowerCase()) > -1) {
          resultEmail.push(list);
        }
      });
      return { ...state, users: resultEmail }
    case CLEAR_SEARCH:
      return { ...state, users: state.usersOrigin }
    default:
      return state
  }
}