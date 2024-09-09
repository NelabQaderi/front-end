"use client";

import { useEffect, useState } from "react";

type UserResponse = {
  message: string;
  user: {
    id: string;
    username: string;
    email: string;
    password: string;
  };
};

export default function GetUserData() {
  const [usersData, setUsersData] = useState<UserResponse | null>(null);

  useEffect(() => {
    const d = async () => {
      const getUserDataFromAPI = async () => {
        const userData = await fetch(
          "http://localhost:3002/api/search_user/john.doe@example.com",
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        const res = await userData.json();

        return res;
      };
      const c = await getUserDataFromAPI();
      setUsersData(c);
    };

    d();
  }, []);

  return (
    <div>
      hi
      <h1>hi {usersData?.user.username}</h1>
      <h1>hi {usersData?.user.email}</h1>
      <h1>hi {usersData?.user.password}</h1>
    </div>
  );
}
