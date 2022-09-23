import { Route, Routes } from "react-router-dom";
import Buckets from "./Buckets";
import Resorts from "./Resorts";

const MyRoutes = () => {

  return (
      <Routes>
          <Route path="/resorts" element={<Resorts />} />
          <Route path="/buckets" element={<Buckets />} />
      </Routes>
  )
}

export default MyRoutes
