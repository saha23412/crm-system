import ButtonCustom from "../../ui/button/button";
import ButtonPanelProps from "./model";

const ButtonPanel: React.FC<ButtonPanelProps> = ({ children, onClick }) => {
  return (
    <ButtonCustom
      onClick={onClick}
      sx={{
        width:"100%",
        backgroundColor: "primary.light",
        "&:hover": {
          backgroundColor: "#c0c0c0",
          transition: "ease .5s",
        },
        transition: "ease .5s",
        borderRadius: 1,
      }}
    >
      {children}
    </ButtonCustom>
  );
};

export default ButtonPanel;
