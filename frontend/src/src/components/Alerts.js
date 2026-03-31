import React, { useEffect, useState } from "react";
import API from "../api";

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    try {
      const res = await API.get("/alerts");
      setAlerts(res.data.alerts || []);
    } catch (err) {
      console.log("Error fetching alerts", err);
    }
  };

  return (
    <div className="card">
      <h2>📢 Alerts</h2>
      {alerts.length === 0 ? (
        <p>No alerts</p>
      ) : (
        alerts.map((a, index) => (
          <div key={index} className="item">
            <p><b>Vehicle:</b> {a.vehicle_number}</p>
            <p><b>Event:</b> {a.event_type}</p>
            <p><b>Zone:</b> {a.geofence_name}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Alerts;
