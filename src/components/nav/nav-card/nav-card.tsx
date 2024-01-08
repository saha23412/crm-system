"use client";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavCardProps from "./model";

const NavCard: React.FC<NavCardProps> = ({ navElement }) => {
  const pathname = usePathname();
  const checkPathname = pathname === navElement.href;
  return (
    <Link href={navElement.href}>
      <Typography
        sx={{
          fontSize: "1rem",
          borderBottom: `1px solid ${checkPathname ? "white" : "transparent"}`,
        }}
      >
        {navElement.title}
      </Typography>
    </Link>
  );
};

export default NavCard;
