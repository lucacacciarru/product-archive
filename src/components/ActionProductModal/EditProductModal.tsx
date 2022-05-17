import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { EditProductForm } from "./EditProductForm";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const EditProductModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Stack
            boxSize={"2xs"}
            p="6"
            w="full"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
              w="full"
              h="full"
              objectFit="contain"
            />
          </Stack>
          <EditProductForm />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
