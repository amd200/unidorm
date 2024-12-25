import useGetData from "../../hooks/useGetData";
import { GET_ALL_PROPERTIES, GET_ERROR, GET_SPECIFIC_PROPERTIE } from "../type";

export const getAllProperties = () => async (dispatch) => {
  try {
    const response = await useGetData("api/properties?populate=*");
    dispatch({ type: GET_ALL_PROPERTIES, payload: response.data });
  } catch (e) {
    console.log(e);
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getSpecificPropertie = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`api/properties/${id}?populate=*`);
    dispatch({ type: GET_SPECIFIC_PROPERTIE, payload: response.data.attributes });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
