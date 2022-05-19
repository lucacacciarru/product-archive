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
import { ProductModalForm } from "../ProductModalForm";
import { useEditProductModal } from "./useEditProductModal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
};

export const EditProductModal: React.FC<Props> = ({ isOpen, onClose, id }) => {
  const { productInfo, isDisableConfirmButton, onClick, setProductInfo } =
    useEditProductModal(id, onClose);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
      isCentered
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Stack boxSize="2xs" p="6" w="full">
            <Image
              src={productInfo.image}
              w="full"
              h="full"
              objectFit="contain"
            />
          </Stack>
          <ProductModalForm {...productInfo} setState={setProductInfo} />
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={onClick}
            isDisabled={isDisableConfirmButton}
            colorScheme="blue"
            mr={3}
          >
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
