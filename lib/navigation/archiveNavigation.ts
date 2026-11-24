import {
  createNavigation,
  type NavigationItem,
} from "@dark-sloth/navigation";

export const archiveNavigationItems: NavigationItem[] = [
  {
    id: "home",
    label: "Archive Home",
    target: { id: "archive.home" },
  },
  {
    id: "collections",
    label: "Collections",
    target: { id: "archive.collections" },
  },
  {
    id: "records",
    label: "Records",
    target: { id: "archive.records" },
  },
  {
    id: "recoveries",
    label: "Recoveries",
    target: { id: "archive.recoveries" },
  },
  {
    id: "books",
    label: "Books",
    target: { id: "archive.books" },
  },
  {
    id: "creator",
    label: "Creator Engine",
    target: { id: "archive.creator" },
  },
  {
    id: "publishing",
    label: "Publishing Studio",
    target: { id: "archive.publishing" },
  },
  {
    id: "studios",
    label: "Studios",
    target: { id: "archive.studios" },
  },
  {
    id: "identity",
    label: "Archive ID",
    target: { id: "archive.identity" },
  },
  {
    id: "platform",
    label: "Platform",
    target: { id: "archive.platform" },
  },
];

export function createArchiveNavigation(
  navigate: (targetId: string) => void,
) {
  return createNavigation(
    {
      navigate(target) {
        navigate(target.id);
      },
    },
    archiveNavigationItems,
  );
}
