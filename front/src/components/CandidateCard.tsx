import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
  Collapse,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { User } from "../state/initialState";
import CandidateInfo from "./CandidateInfo";

interface CandidateCardProps {
  candidate: User;
  onReject: (id: string) => void;
  onApprove: (id: string) => void;
}

function CandidateCard({ candidate, onReject, onApprove }: CandidateCardProps) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Card marginBottom={"3"}>
      <CardHeader>
        <Flex align={"center"}>
          <Heading size='md' marginRight={"3"}>
            {candidate.name}
          </Heading>
          {!candidate.reason ? (
            <>
              <Badge colorScheme='green' fontSize='16' padding='1'>
                Approved
              </Badge>
              <Button
                marginLeft={"auto"}
                marginRight='5'
                onClick={() => onReject(candidate.id)}
              >
                Reject
              </Button>
            </>
          ) : (
            <>
              <Badge colorScheme='red' fontSize='16' padding='1'>
                Rejected
              </Badge>
              <Button
                marginLeft={"auto"}
                marginRight='5'
                onClick={() => onApprove(candidate.id)}
              >
                Approve
              </Button>
            </>
          )}
        </Flex>
        <Text fontSize={"16"}>{candidate.location}</Text>
      </CardHeader>
      <CardBody margin='0' paddingTop={"0"}>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Collapse in={isOpen} animateOpacity>
              <Divider orientation='horizontal' />
              <>
                <Heading size='md'>Information</Heading>
                <Box pt='2' fontSize='sm'>
                  {Object.entries(candidate).map(([key, val]) => (
                    <CandidateInfo key={key} propName={key} val={val} />
                  ))}
                </Box>
              </>
            </Collapse>
          </Box>
          <Button variant='ghost' onClick={onToggle}>
            {isOpen ? "Close" : "View more"}
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CandidateCard;
