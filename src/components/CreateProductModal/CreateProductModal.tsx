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
import { useCreateProductModal } from "./useCreateProductModal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateProductModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { productInfo, setProductInfo, isDisableConfirmButton, onClick } =
    useCreateProductModal(onClose);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
      isCentered
      size="2xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Product</ModalHeader>
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
            isDisabled={isDisableConfirmButton}
            colorScheme="blue"
            mr={3}
            onClick={onClick}
          >
            Create
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
