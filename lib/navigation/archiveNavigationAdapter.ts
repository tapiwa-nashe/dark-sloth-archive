import type {
  NavigationAdapter,
  NavigationTarget,
} from "@dark-sloth/navigation";

const routes: Record<string, string> = {
  home: "/",
  collections: "/collections",
  records: "/records",
  recoveries: "/recoveries",
  books: "/books",
  creator: "/creator",
  publishing: "/publishing",
  studios: "/studios",
  identity: "/identity",
  platform: "/platform",
};

export const archiveNavigationAdapter: NavigationAdapter = {
  navigate(target: NavigationTarget) {
    const href = routes[target.id];

    if (!href) {
      throw new Error(
        `Unknown Archive navigation target: ${target.id}`,
      );
    }

    window.location.assign(href);
  },
};
