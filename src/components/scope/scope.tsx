import { scopeAdmin, scopeUser } from "@/constants/scope";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Scope = ({ status }: { status: "admin" | "user" }) => {
  const scopeList = status === "admin" ? scopeAdmin : scopeUser;
  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "#485BA8",
        padding: "15px",
        borderRadius: "5px",
        opacity: "0.97",
      }}
      spacing={1}
    >
      {scopeList.map((scope) => (
        <Alert sx={{ widht: "100%" }} severity="info" key={scope.id}>
          {scope.text}
        </Alert>
      ))}
    </Stack>
  );
};

export default Scope;
