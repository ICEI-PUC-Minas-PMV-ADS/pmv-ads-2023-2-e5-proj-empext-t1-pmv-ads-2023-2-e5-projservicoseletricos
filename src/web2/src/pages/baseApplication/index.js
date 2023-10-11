import Header from "../../components/header";
import useAuth from "../../context/auth";
import { MainApplication } from "./styles";
import Footer from "../../components/footer";
import { Navigate, Outlet } from "react-router";

export default function BaseApplication() {
  const { user, token } = useAuth();

  if (user || token) {
    return (
      <MainApplication>
        <Header />
        <Outlet />
        <Footer />
      </MainApplication>
    );
  } else {
    return <Navigate to="/login" state={{ needRedirect: true }} />;
  }
}
