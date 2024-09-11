import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layouts/MainLayout';
import Login from "./pages/Login";
import useAuthStatus from './hooks/useAuthStatus';

function App() {
  const { isAuthenticated } = useAuthStatus();
  return (
    <>
      {isAuthenticated ? (
        <Layout>
          <div>
            <h2>Welcome to My Website!</h2>
            <p>This is the main content area.</p>
          </div>
        </Layout>
      ) : (
        <Login />
      )}
    </>
  )
}
export default App;
