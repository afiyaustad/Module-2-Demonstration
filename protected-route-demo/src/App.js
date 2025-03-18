import React,{Suspense,lazy} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./context/component/ProtectedRoute";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
const Profile = lazy(() => import("./Pages/Profile")); // Lazy load Profile
// const Profile=lazy(()=>import("./Pages/Profile"));
//Lazy load profile
function App(){
  return(
    <Router>
      <AuthProvider>
      <div>
        <h1>
          React Authentication
        </h1>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          <Route path="/profile" element={<ProtectedRoute><Suspense fallback={<h2>Loading Profile</h2>}>
          <Profile/></Suspense></ProtectedRoute>}/>
          <Route path="*"element={<h2>Page not found</h2>}/>
          
        </Routes>
      </div>
      </AuthProvider>
    </Router>
    
  )
}




export default App;
