export async function fetchNotifications() {
  const response = await fetch(
    "/api/evaluation-service/notifications",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjc2FpbWwyMzEwNUBnbWFpbC5jb20iLCJleHAiOjE3ODI0NTMyOTgsImlhdCI6MTc4MjQ1MjM5OCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImJjNzM5ZGFmLWFmNWEtNDEzNi1hNDczLWM1OTgyZjk2MmY4YSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImF5dXNoaSBzaGFybWEiLCJzdWIiOiJjZTk2M2JhYi03ZmEzLTRlN2QtOWMyZC0xMDNhYzQ5YTcwM2EifSwiZW1haWwiOiJjc2FpbWwyMzEwNUBnbWFpbC5jb20iLCJuYW1lIjoiYXl1c2hpIHNoYXJtYSIsInJvbGxObyI6IjIzMDE5MjE1MzAwNjIiLCJhY2Nlc3NDb2RlIjoieHhrSm5rIiwiY2xpZW50SUQiOiJjZTk2M2JhYi03ZmEzLTRlN2QtOWMyZC0xMDNhYzQ5YTcwM2EiLCJjbGllbnRTZWNyZXQiOiJUamt6d0FIcHBybnJmYkRYIn0.9yNCHcG4gZO7r4RV1MfrNb35DJe3HALJQHKd2Hxomb8",
        clientID: "ce963bab-7fa3-4e7d-9c2d-103ac49a703a",
        clientSecret: "TjkzwAHpprnrfbDX",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch notifications");
  }

  const data = await response.json();
  console.log("API Response:", data);
  return data.notifications;
}