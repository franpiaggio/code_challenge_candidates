import { useSelector } from "react-redux";
import { UserState } from "../state/initialState";
import { Text, Link, Badge, Box, Heading } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface CandidateInfoProps {
  propName: string;
  val: any;
}

const notVisible = ["id", "name", "location", "reason"];

function CandidateInfo({ propName, val }: CandidateInfoProps) {
  const columns = useSelector((state: UserState) => state.columns);
  const isValid = columns && columns[propName];

  if ((isValid && propName === "cv_bumeran") || propName === "cv_zonajobs") {
    return (
      <Badge margin={"2"} colorScheme='green' fontSize={"16"}>
        <Link href={val} isExternal>
          Curriculum <ExternalLinkIcon mx='2px' />
        </Link>
      </Badge>
    );
  }

  if (isValid && propName === "reason" && val) {
    return (
      <>
        <Heading fontSize={"20"}>Rejected reason</Heading>
        <Text pt='2' fontSize='md'>
          {val}
        </Text>
      </>
    );
  }

  if (isValid && !notVisible.includes(propName)) {
    return (
      <Badge margin={"2"} colorScheme='purple' fontSize={"16"}>
        <Box as='span' textTransform={"capitalize"}>
          {propName}
        </Box>
        : {val}
      </Badge>
    );
  }
  return null;
}

export default CandidateInfo;
