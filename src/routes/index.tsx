import {Route, Routes, Navigate} from 'react-router-dom';
import Buckets from './Buckets';
import Resorts from './Resorts';
import Main from '@/pages/Main';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/resorts/*" element={<Resorts />} />
        <Route path="/buckets/*" element={<Buckets />} />
        <Route path="*" element={<Navigate to="/resorts" replace />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
