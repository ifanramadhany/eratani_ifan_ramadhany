import { GET_USERS, GET_USERS_BY_ID, CREATE_USER, DELETE_USER, EDIT_USER } from "../keys";

export function getUsers(payload) {
  return {
    type: GET_USERS,
    payload
  }
}

export function getUserById(payload) {
  return {
    type: GET_USERS_BY_ID,
    payload
  }
}

export function createNewUser(payload) {
  return {
    type: CREATE_USER,
    payload,
  };
}

export function deleteUser(payload) {
  return {
    type: DELETE_USER,
    payload,
  };
}

export function editUser(payload) {
  return {
    type: EDIT_USER,
    payload,
  };
}

export function fetchUsers() {
  return async function (dispatch) {
    const dataUsers = require('../../MOCK_DATA.json');
    dispatch(getUsers(dataUsers))
  }
}
