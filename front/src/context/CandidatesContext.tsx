import { ReactNode, createContext, useContext, useEffect } from "react";
import { User } from "../state/initialState";
import useCandidates from "../hooks/useCandidates";

interface CandidatesContextType {
  candidates: User[] | null;
  approveCandidate: (id: string) => void;
  rejectCandidate: (
    id: string,
    reason: string,
    handleClose: () => void
  ) => void;
  isLoading: boolean;
}

interface CandidatesProviderProps {
  children: ReactNode;
}

const CandidatesContext = createContext<CandidatesContextType>({
  candidates: null,
  approveCandidate: () => {},
  rejectCandidate: () => {},
  isLoading: false,
});

export const CandidatesProvider = ({ children }: CandidatesProviderProps) => {
  const { candidates, approveCandidate, rejectCandidate, isLoading } =
    useCandidates();
  return (
    <CandidatesContext.Provider
      value={{ candidates, approveCandidate, rejectCandidate, isLoading }}
    >
      {children}
    </CandidatesContext.Provider>
  );
};

const useCandidatesContext = () => useContext(CandidatesContext);

export default useCandidatesContext;
