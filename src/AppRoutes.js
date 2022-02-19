import { Route, Routes } from "react-router-dom";
import { Category } from "./pages/Category";

import { Home } from "./pages/Home";
import { Item } from "./pages/Item";
import { Tag } from "./pages/Tag";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />}></Route>
      <Route path="/category" element={<Category />} exact={true}></Route>
      <Route path="/item" element={<Item />} exact={true}></Route>
      <Route path="/tag" element={<Tag />} exact={true}></Route>
    </Routes>
  );
};
