import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductManagement from "./pages/products/management";
import CategoryManagement from "./pages/categorys/management";
import SubcategorysManagement from "./pages/subcategorys/management";
import Login from "./pages/login";
import SignIn from "./pages/signIn";
import EditProducts from "./pages/products/edit";
import EditCategorys from "./pages/categorys/edit";
import RegisterProduct from "./pages/products/register";
import RegisterCategorys from "./pages/categorys/register";
import RegisterSubCategorys from "./pages/subcategorys/register";
import EditSubcategorys from "./pages/subcategorys/edit";
import EditUser from "./pages/user";
import ReportsProducts from "./pages/reportProducts";
import ProductList from "./pages/products/list";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={< Home />} />
        <Route path="/sobre" element={< Sobre />} /> 
        <Route path="/contato" element={< Contato />} />
        <Route path="/products" element={<ProductManagement />} />
        <Route path="/products/list" element={<ProductList />} />
        <Route path="/categorys" element={<CategoryManagement />} />
        <Route path="/subcategorys" element={<SubcategorysManagement />} />
        <Route path="/products/register" element={<RegisterProduct />} />
        <Route path="/categorys/register" element={<RegisterCategorys />} />
        <Route path="/subcategorys/register" element={<RegisterSubCategorys />} />
        <Route path="/products/edit/:id" element={<EditProducts />} />
        <Route path="/categorys/edit/:id" element={<EditCategorys />} />
        <Route path="/subcategorys/edit/:id" element={<EditSubcategorys />} />
        <Route path="/user" element={<EditUser />} />
        <Route path="/products/report" element={<ReportsProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
