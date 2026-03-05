import { Route, Routes } from 'react-router-dom';
import ProblemDetail from './ProblemDetail';

export const ProblemRoute = () => {
    return (
        <Routes>
            <Route path="/:category/:id" element={<ProblemDetail />} />
        </Routes>
    );
};
