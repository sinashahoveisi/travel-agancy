import {Route, Routes} from 'react-router-dom';
import BucketsPage from '@/pages/bucket/Buckets';

const Buckets = () => {
  return (
    <Routes>
      <Route path="/" element={<BucketsPage />} />
    </Routes>
  );
};

export default Buckets;
