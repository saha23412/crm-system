import List from "@mui/material/List";
import NavCard from "./nav-card/nav-card";
import NavigationProps from "./model";

const Navigation: React.FC<NavigationProps> = ({ navElements }) => {
  return (
    <List sx={{ display: "flex", gap: "15px", width: "100%" }}>
      {navElements.map((navElement) => (
        <NavCard key={navElement.href} navElement={navElement} />
      ))}
    </List>
  );
};

export default Navigation;
