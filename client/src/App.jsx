import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentsList from "./components/StudentsList";
// import MarkAttendance from "./components/MarkAttendance";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/students" element={<StudentsList />} />
                {/* <Route path="/mark" element={<MarkAttendance />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
