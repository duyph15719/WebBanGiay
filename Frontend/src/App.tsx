import { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { listCategory } from './api/Categories';
import { list } from './api/Product';
import AdminLayout from './layouts/AdminLayout';
import WebLayout from './layouts/webLayout';
import { ICategori } from './models/Categories';
import { IProduct } from './models/Products';
import ErrorsWeb from './pages/404/errorsWeb';
import Categories from './pages/admin/Categories/Categories';
import CategoriesAdd from './pages/admin/Categories/CategoriesAdd';
import CategoriesEdit from './pages/admin/Categories/CategoriesEdit';
import Dashbroad from './pages/admin/dashbroad';
import Producs from './pages/admin/Products/Producs';
import ProductAdd from './pages/admin/Products/ProductAdd';
import ProductEdit from './pages/admin/Products/ProductEdit';
import Login from './pages/User/login';
import ManagerAccount from './pages/User/managerAccount';
import Signup from './pages/User/Signup';
import Cart from './pages/Website/Cart/Cart';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<ICategori[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data)
    }
    getProducts();
  }, []);
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategories(data)
    }
    getCategories();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<WebLayout />} >
          <Route path='cart' element={<Cart />} />
         
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashbroad />} />
          <Route path="products">
            <Route index element={<Producs product={products} />} />
            <Route path="add" element={<ProductAdd />} />
            <Route path=":id/edit" element={<ProductEdit />} />
          </Route>
          <Route path="categories">
            <Route index element={<Categories categories={categories} />} />
            <Route path="add" element={<CategoriesAdd />} />
            <Route path=":id/edit" element={<CategoriesEdit />} />
          </Route>
          <Route path="user">
            <Route index element={<ManagerAccount />} />
            <Route path="add" element={<CategoriesAdd />} />
            <Route path=":id/edit" element={<CategoriesEdit />} />
          </Route>
          <Route path="*" element={<ErrorsWeb />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
