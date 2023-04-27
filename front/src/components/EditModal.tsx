import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import useCandidatesContext from "../context/CandidatesContext";
import { useToast } from "@chakra-ui/react";

interface EditModalProps {
  isOpen: boolean;
  selected: string | null;
  onClose: () => void;
}

function EditModal({ isOpen, selected, onClose }: EditModalProps) {
  const [value, setValue] = useState("");
  const toast = useToast();
  const { rejectCandidate, isLoading } = useCandidatesContext();

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleClose = () => {
    setValue("");
    onClose();
  };

  const handleSave = async () => {
    if (!selected || !value || value?.trim() === "") {
      toast({
        title: "Type a reason",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    rejectCandidate(selected, value, handleClose);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Reject a candidate</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb='8px'>Reason</Text>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder='Type a reason...'
            size='sm'
          />
        </ModalBody>
        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={handleClose}>
            Close
          </Button>
          <Button
            disabled={!value || value.length === 0}
            colorScheme='blue'
            onClick={handleSave}
            isLoading={isLoading}
            loadingText='Submitting'
          >
            Save changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditModal;
