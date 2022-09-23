import { Route, Routes } from "react-router-dom";
import ResortsPage from "pages/resort/Resorts";
import ResortPage from "pages/resort/Resort";

const Resorts = () => {

  return (
      <Routes>
          <Route path="/resorts" element={<ResortsPage />}>
              <Route path="about" element={<ResortPage />} />
          </Route>
      </Routes>
  )
}

export default Resorts
