"use client";

import { useEffect, useState } from "react";

type UserResponse = {
  id: string;
  username: string;
  email: string;
  password: string;
};

export default function GetUserData() {
  const [usersData, setUsersData] = useState<UserResponse>({
    id: "",
    username: "",
    email: "",
    password: "",
  });

  const [reload, setReload] = useState(true);

  useEffect(() => {
    const getUserDataFromAPI = async () => {
      const userData = await fetch(
        "http://localhost:3002/api/search_user/john.doe@example.com",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await userData.json();

      setUsersData({
        username: res?.username,
        email: res?.email,
        id: res?.id,
        password: res.password,
      });
    };
    getUserDataFromAPI();
    setReload(false);
  }, [reload]);

  return (
    <div>
      hi
      <h1>{usersData.username}</h1>
      <h1>{usersData.email}</h1>
      <h1>{usersData.password}</h1>
    </div>
  );
}
