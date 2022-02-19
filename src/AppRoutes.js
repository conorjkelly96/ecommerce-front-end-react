import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Product } from "./pages/Product";
import { Tag } from "./pages/Tag";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />}></Route>
      <Route path="/category" element={<Category />} exact={true}></Route>
      <Route path="/product" element={<Product />} exact={true}></Route>
      <Route path="/tag" element={<Tag />} exact={true}></Route>
    </Routes>
  );
};
