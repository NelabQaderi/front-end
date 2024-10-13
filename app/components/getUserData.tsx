"use client";

import { Button, Grid, TextInput } from "@mantine/core";
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
  const [userEmail, setUserEmail] = useState("");
  const [username, setUserUsername] = useState("");

  // const [reload, setReload] = useState(true);
  // const [userEmail, setUserEmail] = useState("");

  const getUserDataFromAPI = async () => {
    const userData = await fetch(
      `http://localhost:3002/api/search_user/${userEmail}/${username}`,
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

  // function setUsersEmail(value: string): void {
  //   throw new Error("Function not implemented.");
  // }

  const handleClick = async () => {
    const c = await getUserDataFromAPI();
    setUsersData(c);
  };

  return (
    <div>
      <Grid>
        <Grid.Col span={{ col: 12, lg: 8, sm: 12 }}>
          <TextInput
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Enter your Email"
          />
        </Grid.Col>
        <Grid.Col span={{ col: 12, lg: 8, sm: 12 }}>
          <TextInput
            onChange={(e) => setUserUsername(e.target.value)}
            placeholder="Enter your Name"
          />
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={{ col: 12, lg: 4, sm: 12 }}>
          <Button onClick={handleClick}>Search</Button>
        </Grid.Col>
      </Grid>

      <h1>{usersData?.user.username}</h1>
      <h1>{usersData?.user.email}</h1>
      <h1>{usersData?.user.password}</h1>
    </div>
  );
}
