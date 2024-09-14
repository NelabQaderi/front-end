"use client";

import { TextInput, Group, Button, PasswordInput } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import type { NextComponentType, NextPageContext } from "next";
import { useState } from "react";

interface Props {}

type UserSendData = {
  username: string;
  email: string;
  password: string;
};

const CreateUser: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [userData, setUserData] = useState<UserSendData>({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    // Send data to API

    const res = await fetch("http://localhost:3002/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (res.ok) {
      console.log("User created successfully!");
    } else {
      console.error("Error creating user:", await res.text());
    }
  };

  return (
    <div>
      <div>
        <TextInput
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
          label="Username"
          placeholder="Username"
        />
        <TextInput
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          type="email"
          label="Email"
          placeholder="Email"
        />
        <PasswordInput
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          mt="md"
          label="Password"
          placeholder="Password"
        />

        <Group justify="center" mt="xl">
          <Button
            onClick={() => {
              handleSubmit();
            }}
          >
            Sign In
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default CreateUser;

// "use client";

// import { TextInput, Group, Button } from "@mantine/core";
// import { randomId } from "@mantine/hooks";
// import type { NextComponentType, NextPageContext } from "next";

// interface Props {}

// const CreateUser: NextComponentType<NextPageContext, {}, Props> = (
//   props: Props
// ) => {
//   return (
//     <div>
//       <div>
//         <TextInput label="Name" placeholder="Name" />
//         <TextInput mt="md" label="Email" placeholder="Email" />

//         <Group justify="center" mt="xl">
//           <Button onClick={() => {}}>Set random values</Button>
//         </Group>
//       </div>
//     </div>
//   );
// };

// export default CreateUser;
