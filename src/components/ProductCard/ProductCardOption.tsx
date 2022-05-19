import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { EditProductModal } from "../EditProductModal";
import { Icon } from "../Icon";

type Props = {
  id: string;
};

export const ProductCardOption: React.FC<Props> = ({ id }) => {
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
            <MenuItem>
              <Link to={`/${id}`}>Show details</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <EditProductModal id={id} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
