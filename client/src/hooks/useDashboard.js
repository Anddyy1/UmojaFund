import { useState, useEffect } from "react";
import axios from "axios";

export default function useDashboard() {
  const [data, setData] = useState({
    totalRaised: 0,
    activeCampaigns: 0,
    totalBackers: 0,
    successRate: 0,
    recentContribs: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/dashboard");
      setData(res.data);
      setError(null);
    } catch (err) {
      console.error("Dashboard fetch error:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData, setData };
}
