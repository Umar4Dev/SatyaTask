import React, { useState, useEffect } from "react";
import AppLayout from "../layout/AdminLayout/AppLayout";
import AdminLogin from "../../components/containers/Admin/AdminLogin";

import { Routes, Route } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import useConfig from "../../hooks/useConfig";
import * as Storage from "../../store/localStorage";
import { useNavigate } from "react-router";
import Dashboard from "../containers/Admin/Dashboard";


function AdminRoutes() {
  const [loading, setLoading] = useState(true);
  // const { admin, updateUserContext } = useAuth();
  const navigate = useNavigate();

  const config = useConfig();

  const checkSession = () => {
    setLoading(true);
    let session = Storage.get(config.sessionKey);
    session = JSON.parse(session);
    if (session) {
      // updateUserContext(session);
      setLoading(false);
    } else {
      //  navigate("/");
      setLoading(false);
    }
  };

  const hasLoaded = /* config.status === "success" || config.status === "error" */ true;

  useEffect(() => {
    if (!hasLoaded) return;
    checkSession();

    // eslint-disable-next-line
  }, [hasLoaded, config]);

  const admin = true;

  return (
    <>
      {
        /* hasLoaded && */
        /* !loading && */
        admin ? (
          <>
            <AppLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                
              </Routes>
            </AppLayout>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<AdminLogin />} />
         
          </Routes>
        )
      }
    </>
  );
}

export default AdminRoutes;
