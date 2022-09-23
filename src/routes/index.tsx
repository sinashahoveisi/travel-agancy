import {Route, Routes, Navigate} from 'react-router-dom';
import Buckets from './Buckets';
import Resorts from './Resorts';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/resorts/*" element={<Resorts />} />
      <Route path="/buckets/*" element={<Buckets />} />
      <Route path="*" element={<Navigate to="/resorts" replace />} />
    </Routes>
  );
};

export default MyRoutes;
