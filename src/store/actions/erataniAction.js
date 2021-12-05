import { GET_ERATANI_DATA } from "../keys";
import apiEratani from "../../apis/apiEratani";

export function getEratani(payload) {
  return {
    type: GET_ERATANI_DATA,
    payload,
  };
}

export function fetchErataniData() {
  return async function (dispatch) {
    try {
      const data = await apiEratani({
        method: "POST",
        url: "/getAboutFarmer",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      dispatch(getEratani(data));
      console.log(data);
    } catch (err) {
      console.log(err.response);
    }
  };
}
