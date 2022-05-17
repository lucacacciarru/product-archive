import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { EditProductModal } from "../ActionProductModal";
import { Icon } from "../Icon";

export const ProductCardOption: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Box position="absolute" right="0" top="0" p="4" zIndex="dropdown">
        <Menu>
          <MenuButton>
            <Icon name="threeDots" size="8" />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={onOpen}>Edit</MenuItem>
            <MenuItem>Show page</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <EditProductModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
