// client/src/pages/Home.jsx

import useAuth from "../hooks/useAuth";

function Home() {
  const { auth, logout } = useAuth();

  return (
    <div className="home-container">
      <h1>Welcome to UmojaFund</h1>

      {/* Logged-in view */}
      {auth ? (
        <div>
          <p>You are logged in as:</p>
          <h3>{auth.name}</h3>
          <p>{auth.email}</p>

          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        </div>
      ) : (
        /* Logged-out view */
        <div>
          <p>You are not logged in.</p>
          <a href="/login" className="btn">Login</a>
          <a href="/register" className="btn">Register</a>
        </div>
      )}
    </div>
  );
}

export default Home;
