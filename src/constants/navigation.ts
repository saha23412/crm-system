import RouterPathname from "@/global-models/router-pathname";
import NavigationElement from "./../global-models/nav-element";

export const notAuthorizedNavigation: NavigationElement[] = [
  { href: RouterPathname.HOME, title: "Войти" },
];

export const authorizedNavigation: NavigationElement[] = [
  { href: RouterPathname.HOME, title: "Домашняя" },
  { href: RouterPathname.TASKS, title: "Задачки" },
  { href: RouterPathname.DASHBOARD, title: "Аналитика" },
];
