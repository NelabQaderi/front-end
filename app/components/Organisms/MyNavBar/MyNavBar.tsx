"use client";

import { AppShell, Burger, Button, Group, Skeleton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function BasicAppShell({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar5
        <Button component="a" href="/" mt={5}>
          Home
        </Button>
        <Button component="a" href="/login" mt={5}>
          Login
        </Button>
        <Button component="a" href="/About" mt={5}>
          About
        </Button>
        <Button mt={5}>Hi</Button>
        <Button mt={5}>Hi</Button>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
