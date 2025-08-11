import React, { useEffect, useState } from "react";

interface Stats {
  users: number;
  orders: number;
  revenue: number;
  messages: number;
}

interface Activity {
  id: number;
  action: string;
  time: string;
}

const Dashboard: React.FC = () => {
  const [stats] = useState<Stats>({
    users: 120,
    orders: 45,
    revenue: 75600,
    messages: 12,
  });

  const [recentActivity] = useState<Activity[]>([
    { id: 1, action: "New User Registered", time: "2 mins ago" },
    { id: 2, action: "Order #1023 Completed", time: "15 mins ago" },
    { id: 3, action: "New Support Ticket Created", time: "30 mins ago" },
  ]);
  // const Dashboard: React.FC = () => {
  // const [stats, setStats] = useState<Stats>({
  //   users: 120,
  //   orders: 45,
  //   revenue: 75600,
  //   messages: 12,
  // });

  // const [recentActivity, setRecentActivity] = useState<Activity[]>([
  //   { id: 1, action: "New User Registered", time: "2 mins ago" },
  //   { id: 2, action: "Order #1023 Completed", time: "15 mins ago" },
  //   { id: 3, action: "New Support Ticket Created", time: "30 mins ago" },
  // ]);

  useEffect(() => {
    // Example: Fetch stats from API (TypeScript-safe)
    // fetch("/api/admin/stats")
    //   .then((res) => res.json())
    //   .then((data: Stats) => setStats(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Admin Dashboard</h1>

      {/* ✅ Stats Cards */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <div style={cardStyle("#0d6efd")}>
          <h3>Total Users</h3>
          <p style={numberStyle}>{stats.users}</p>
        </div>
        <div style={cardStyle("#198754")}>
          <h3>Orders</h3>
          <p style={numberStyle}>{stats.orders}</p>
        </div>
        <div style={cardStyle("#ffc107", "black")}>
          <h3>Revenue</h3>
          <p style={numberStyle}>₹{stats.revenue}</p>
        </div>
        <div style={cardStyle("#dc3545")}>
          <h3>Messages</h3>
          <p style={numberStyle}>{stats.messages}</p>
        </div>
      </div>

      {/* ✅ Recent Activity Table */}
      <div
        style={{
          background: "white",
          padding: "15px",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "10px" }}>Recent Activity</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={thTdStyle}>#</th>
              <th style={thTdStyle}>Action</th>
              <th style={thTdStyle}>Time</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((item) => (
              <tr key={item.id}>
                <td style={thTdStyle}>{item.id}</td>
                <td style={thTdStyle}>{item.action}</td>
                <td style={thTdStyle}>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ✅ Inline CSS helper functions
function cardStyle(bgColor: string, textColor: string = "white"): React.CSSProperties {
  return {
    background: bgColor,
    color: textColor,
    padding: "15px",
    borderRadius: "8px",
    flex: "1",
    minWidth: "180px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };
}

const numberStyle: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: "bold",
  marginTop: "5px",
};

const thTdStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

export default Dashboard;
