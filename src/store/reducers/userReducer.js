import { GET_USERS, GET_USERS_BY_ID, CREATE_USER, DELETE_USER, EDIT_USER } from "../keys";

const initialState = {
  users: [],
  usersById: {}
}

export default function reducer (state = initialState, action) {
  const {type, payload} = action
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload }
    case GET_USERS_BY_ID:
      return { ...state, usersById: payload }
    case CREATE_USER:
      let newUsers = state.users.map(el => el)
      newUsers.push(payload)
      return { ...state, users: newUsers }
    case DELETE_USER:
      let deleteUser = state.users.filter(el => el.id !== payload)
      return { ...state, users: deleteUser }
    case EDIT_USER:
      let editUser = state.users.filter(el => el.id !== payload.id)
      editUser.push(payload)
      return { ...state, users: editUser }
    default:
      return state
  }
}