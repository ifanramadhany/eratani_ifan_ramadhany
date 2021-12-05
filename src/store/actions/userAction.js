import { CLEAR_SEARCH, GET_USERS, GET_USERS_BY_ID, CREATE_USER, DELETE_USER, EDIT_USER, SEARCH_FIRST_NAME, SEARCH_LAST_NAME, SEARCH_EMAIL } from "../keys";

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

export function clearAllSearch() {
  return {
    type: CLEAR_SEARCH,
  };
}

export function searchByFirstName(payload) {
  return {
    type: SEARCH_FIRST_NAME,
    payload,
  };
}

export function searchByLastName(payload) {
  return {
    type: SEARCH_LAST_NAME,
    payload,
  };
}

export function searchByEmail(payload) {
  return {
    type: SEARCH_EMAIL,
    payload,
  };
}

export function fetchUsers() {
  return async function (dispatch) {
    const dataUsers = require('../../MOCK_DATA.json');
    dispatch(getUsers(dataUsers))
  }
}
