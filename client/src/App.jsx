import { Route, Routes, useMatch } from "react-router-dom";
import Home from "./pages/Student/Home";
import CourseList from "./pages/Student/CourseList";
import CourseDetail from "./pages/Student/CourseDetail";
import MyEnrollments from "./pages/Student/MyEnrollments";
import Player from "./pages/Student/Player";
import Educator from "./pages/Educator/Educator";
import Dashboard from "./pages/Educator/Dashboard";
import AddCourse from "./pages/Educator/AddCourse";
import MyCourses from "./pages/Educator/MyCourses";
import StudentsEnrolled from "./pages/Educator/StudentsEnrolled";
import Loading from "./components/Student/Loading";
import Navbar from "./components/Student/Navbar";

const App = () => {
  const isEducatorRoute = useMatch("/educator/*");

  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator />}>
          <Route path="/educator" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="students-enrolled" element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
