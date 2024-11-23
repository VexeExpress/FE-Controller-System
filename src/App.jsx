import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './layouts/MainLayout';
import Login from "./pages/Login";
import useAuthStatus from './hooks/useAuthStatus';
import Dashboard from './pages/Dashboard'
import './styles/css/global.css'
function App() {
  const { isAuthenticated } = useAuthStatus();
  return (
    <>

      <MainLayout>
        <Dashboard/>
      </MainLayout>

      {/* {isAuthenticated ? (
        <Layout>
          <div>
            <h2>Welcome to My Website!</h2>
            <p>This is the main content .</p>
          </div>
        </Layout>
      ) : (
        <Login />
      )} */}
    </>
  )
}
export default App;
