import { Route, Routes } from 'react-router-dom';
import EventDetail from './EventDetail';

export const EventRoute = () => {
    return (
        <Routes>
            <Route path="/:id" element={<EventDetail />} />
        </Routes>
    );
};
