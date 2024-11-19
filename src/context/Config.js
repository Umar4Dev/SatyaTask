import React, { createContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const ConfigContext = createContext();

const ConfigProvider = ({ children }) => {
  const [initialState, setInitialState] = useState({});
  const [status, setStatus] = useState("initial");

  useEffect(() => {
    const getConfig = async () => {
      try {
        setStatus("loading");
        const res = await axios.get("/config/appConfig.json");
        setInitialState(res.data);
        setStatus("success");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };

    getConfig();
  }, []);

  const value = useMemo(() => {
    return {
      ...initialState,
      status,
    };
  }, [initialState, status]);

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

ConfigProvider.propTypes = {
  children: PropTypes.node,
};

export { ConfigContext, ConfigProvider };
