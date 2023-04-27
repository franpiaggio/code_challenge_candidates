import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { UserState } from "../state/initialState";
import CandidateCard from "../components/CandidateCard";
import Filters from "../components/Filters";
import { useMemo, useState } from "react";
import { filterByText, filterByType } from "./utils";
import { Box, Flex, Heading, Spinner, useDisclosure } from "@chakra-ui/react";
import EditModal from "../components/EditModal";
import useCandidatesContext from "../context/CandidatesContext";

export type FilterType = "rejected" | "approved" | null;

function Candidates() {
  const candidates = useSelector((state: UserState) => state.candidates);
  const { approveCandidate, isLoading } = useCandidatesContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filterType, setFilterType] = useState<FilterType>(null);
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [selected, setSelected] = useState<string | null>(null);

  const filteredList = useMemo(
    () =>
      candidates
        .filter((item) => filterByText(item, searchFilter))
        .filter((item) => filterByType(item, filterType)),
    [filterType, searchFilter, candidates]
  );

  const handleOpenModal = (id: string) => {
    setSelected(id);
    onOpen();
  };

  const handleCloseModal = () => {
    setSelected(null);
    onClose();
  };

  return (
    <Layout>
      <Filters
        selected={filterType}
        setSearchFilter={setSearchFilter}
        onFilterSelect={setFilterType}
      />
      {isLoading && (
        <Box
          position={"fixed"}
          left='0'
          top='0'
          width='100vw'
          height='100vh'
          zIndex={"3"}
          background='rgba(0,0,0,0.2)'
        >
          <Flex align={"center"} justify={"center"} height='100%'>
            <Spinner />
          </Flex>
        </Box>
      )}
      {!filteredList.length ? (
        <Heading size='lg'>No candidates found.</Heading>
      ) : (
        filteredList.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            onReject={handleOpenModal}
            onApprove={approveCandidate}
          />
        ))
      )}
      <EditModal
        selected={selected}
        isOpen={isOpen}
        onClose={handleCloseModal}
      />
    </Layout>
  );
}

export default Candidates;
