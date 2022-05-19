import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

const NAV_HEIGHT = "28";

export const AppLayout: React.FC = () => {
  return (
    <>
      <NavBar navHeight={NAV_HEIGHT} />
      <Box pt={NAV_HEIGHT} px="16">
        <Outlet />
      </Box>
    </>
  );
};
