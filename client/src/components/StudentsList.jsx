// import React, { useEffect, useState } from "react";
// import axios from 'axios'
// // import { getStudents } from "../api";


// const API_URL = "http://127.0.0.1:8000/api/";


// const StudentsList = () => {
//     const [students, setStudents] = useState([]);

//     const getStudents = async () => {
//         const response = await axios.get(`${API_URL}students/`);
//         console.log(response.data);
//         return response.data;
//     };

//     useEffect(() => {
//         getStudents().then(data => setStudents(data));
//     }, []);

//     return (
//         <div>
//             <h2>Student List</h2>
//             <ul>
//                 {students.map(student => (
//                     <li key={student.id}>{student.name} - {student.roll_number} - {student.department}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default StudentsList;







import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

const StudentsList = () => {
    const [students, setStudents] = useState([]);

    const getStudents = async () => {
        try {
            const response = await axios.get(`${API_URL}students/`);
            setStudents(response.data);
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    useEffect(() => {
        getStudents();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-5xl font-semibold mb-4">Student List</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border px-4 py-2">ID</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Roll Number</th>
                            <th className="border px-4 py-2">Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length > 0 ? (
                            students.map((student) => (
                                <tr key={student.id} className="text-center border hover:bg-gray-100">
                                    <td className="border px-4 py-2">{student.id}</td>
                                    <td className="border px-4 py-2">{student.name}</td>
                                    <td className="border px-4 py-2">{student.roll_number}</td>
                                    <td className="border px-4 py-2">{student.department}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="border px-4 py-2 text-center">No students found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentsList;
