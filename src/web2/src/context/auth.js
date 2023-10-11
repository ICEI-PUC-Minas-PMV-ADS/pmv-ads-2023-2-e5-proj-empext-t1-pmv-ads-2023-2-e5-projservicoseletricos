import http from "../services/http";
import React, { useState, createContext, useContext } from "react";


const authContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(localStorage.getItem("token"));

  async function login(reqData) {
    const { data } = await http.post("api/Usuarios/Autenticacao", reqData);
    localStorage.setItem("user", JSON.stringify(data && data.dbusuario));
    setUser(data && data.dbusuario);
    localStorage.setItem("token", data && data.jwtToken);
    setToken(data && data.jwtToken);
  }

  async function signUp(reqData) {
    const { data } = await http.post("api/Usuarios/", reqData);
    return data;
  }

  async function logout() {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <authContext.Provider
      value={{
        user,
        login,
        signUp,
        logout,
        token,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export default function useAuth() {
  return useContext(authContext);
}
