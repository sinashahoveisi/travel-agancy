import {Route, Routes} from 'react-router-dom';
import ResortsPage from '@/pages/resort/Resorts';
import ResortPage from '@/pages/resort/Resort';

const Resorts = () => {
  return (
    <Routes>
      <Route path=":id/:title" element={<ResortPage />} />
      <Route path="/" element={<ResortsPage />} />
    </Routes>
  );
};

export default Resorts;
