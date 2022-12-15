import React from "react";
import { createContext } from "react";
import { API } from "../services/API";
import {
  iRegister,
  iRegisterResponse,
  iError,
  iLogin,
  iProduct,
} from "../types/types";
import { AxiosError } from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast, ToastContent } from "react-toastify";

interface iUserContext {
  register: (data: iRegister) => Promise<void>;
  login: (data: iLogin) => Promise<void>;
  logout: () => void;
}

interface iUserProps {
  children: React.ReactNode;
}

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iUserProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location)
    if (location.pathname === "/login" || location.pathname === "/cadastro")
      autoLogin();
      
  }, [location]);

  const logout: () => void = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("User");
    localStorage.removeItem("Cart");
    navigate("/login");
  };
  const autoLogin = async () => {
    try {
      const token = localStorage.getItem("Token");
      const response = await API.get<iProduct[]>("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(`auto-login completo com sucesso!`, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/home");
    } catch (error) {}
  };
  const login = async (data: iLogin) => {
    try {
      const response = await API.post<iRegisterResponse>("/login", data, {
        headers: { "Content-Type": "application/json" },
      });
      localStorage.setItem("Token", response.data.accessToken);
      localStorage.setItem("User", JSON.stringify(response.data.user.name));
      navigate("/home");
    } catch (error) {
      const typedError = error as AxiosError<iError>;
      toast.error<iError | undefined>(
        typedError.response?.data as ToastContent<iError | undefined>,
        {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };
  const register = async (data: iRegister) => {
    try {
      const response = await API.post<iRegisterResponse>("/users", data, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success(`Registrado com sucesso!`, {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/login");
    } catch (error) {
      const typedError = error as AxiosError<iError>;
      toast.error<iError | undefined>(
        typedError.response?.data as ToastContent<iError | undefined>,
        {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };
  return (
    <UserContext.Provider value={{ register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
