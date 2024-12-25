import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import ProfilePage from "./pages/Profile/Profile";
import { WithAuth } from "./hoc/WithAuth/WithAuth";
import CreateExercisePage from "./pages/CreateExercise/CreateExercise";
import WorkoutsPage from "./pages/Workouts/Workouts";
import CreateWorkoutPage from "./pages/CreateWorkout/CreateWorkout";
import WorkoutDetails from "./pages/Workouts/WorkoutDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/login"} element={<LogIn />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route
          path={"/"}
          element={<WithAuth><ProfilePage /></WithAuth>}
        />
        <Route path={"/workouts/create-exercise"} element={<CreateExercisePage/>}/>
        <Route path={"/workouts"} element={<WorkoutsPage/>}/>
        <Route path={"/workouts/create"} element={<CreateWorkoutPage/>}/>
        <Route path={"/workouts/:id"} element={<WorkoutDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
