import RouterPathname from "./global-models/router-pathname";
export { default } from "next-auth/middleware";

export const config = {
  matcher: [`${RouterPathname.HOME}`, `${RouterPathname.DASHBOARD}`],
};
