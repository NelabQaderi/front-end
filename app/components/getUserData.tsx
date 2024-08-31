"use client";

export default function GetUserData() {
  const getUserDataFromAPI = async () => {
    const userData = await fetch(
      "http://localhost:3001/login/get-user-info/GetUserData",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const response = await userData.json();

    console.log(response);
  };
  getUserDataFromAPI();

  return <div>User Data</div>;
}

// body: JSON.stringify({username, password}),
