import { GET_ERATANI_DATA } from "../keys";

const initialState = {
  erataniData: [],
}

export default function reducer (state = initialState, action) {
  const {type, payload} = action
  switch (type) {
    case GET_ERATANI_DATA:
      return { ...state, erataniData: payload }
    default:
      return state
  }
}