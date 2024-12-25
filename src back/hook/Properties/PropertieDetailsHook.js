import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificPropertie } from "../../redux/actions/propertiesAction";

function PropertieDetailsHook(id) {
  const dispatch = useDispatch();
  const propertie = useSelector((state) => state.properties.properties);
  const loading = useSelector((state) => state.properties.loading);

  useEffect(() => {
    dispatch(getSpecificPropertie(id));
  }, [dispatch, id]);

  return [propertie, loading];
}

export default PropertieDetailsHook;
