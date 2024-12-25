import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperties } from "../../redux/actions/propertiesAction";
function PropertiesPageHook() {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.properties);
  const loading = useSelector((state) => state.properties.loading);
  useEffect(() => {
    dispatch(getAllProperties());
  }, [dispatch]);

  useEffect(() => {
    if (loading === false) {
      console.log(properties);
    }
  }, [properties, loading]);

  return [properties, loading];
}

export default PropertiesPageHook;
