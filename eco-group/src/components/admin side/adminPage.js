import React, { useEffect, useState } from 'react';
import "./adminPage.css";

const AdminPage = () => {
  const [bhawans, setBhawans] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
};

  useEffect(() => {
    fetch('http://localhost:8080/api/bhawan/all')
      .then(response => response.json())
      .then(data => {
        setBhawans(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching bhawans:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id='adminpage'>

      <h1>Admin Page</h1>
      <table>
        <thead>
          <tr>
            <th>Bhawan Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bhawans.map((bhawan) => (
            <tr key={bhawan._id}>
              <td>{bhawan.bhawanName}</td>
              <td>{bhawan.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
};

export default AdminPage;