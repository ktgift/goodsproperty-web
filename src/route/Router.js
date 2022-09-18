import { Route, Routes} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}

export default Router;