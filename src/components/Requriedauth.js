import { Navigate } from "react-router-dom";

export default function Requriedauth({ children }) {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate replace to="/" />;
}