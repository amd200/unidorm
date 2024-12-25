import React from "react";
import { GET_ALL_PROPERTIES, GET_ERROR, GET_SPECIFIC_PROPERTIE } from "../type";

const inital = {
  properties: [],
  errors: [],
  loading: true,
};
const propertiesReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
        loading: false,
      };
      case GET_SPECIFIC_PROPERTIE:
        return {
          ...state,
          properties: action.payload,
          loading: false,
        }
    case GET_ERROR:
      return {
        ...state,
        errors: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default propertiesReducer;
