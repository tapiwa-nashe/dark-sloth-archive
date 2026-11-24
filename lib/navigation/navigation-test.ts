import {
  createNavigation,
  type NavigationTarget,
} from "@dark-sloth/navigation";

const visited: string[] = [];

const navigation = createNavigation(
  {
    navigate(target: NavigationTarget) {
      visited.push(target.id);
    },
  },
  [
    {
      id: "records",
      label: "Records",
      target: {
        id: "records",
      },
    },
    {
      id: "books",
      label: "Books",
      target: {
        id: "books",
      },
    },
  ],
);

navigation.navigateById("records");

if (visited[0] !== "records") {
  throw new Error("Navigation integration test failed.");
}

console.log("Navigation integration: PASS");
