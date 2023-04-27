import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCandidates, setColumns, updateCandidate } from "../state/userSlice";
import { UserState } from "../state/initialState";
import { getCandidatesApi, updateCandidateApi } from "../request/api";
import { useToast } from "@chakra-ui/react";

function useCandidates() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const candidates = useSelector((state: UserState) => state.candidates);
  const toast = useToast();
  const mountedRef = useRef(false);

  const fetchCandidates = useCallback(async () => {
    if (mountedRef.current) {
      return;
    }
    setIsLoading(true);
    mountedRef.current = true;
    try {
      const res = await getCandidatesApi();
      dispatch(setCandidates(res.candidates));
      dispatch(setColumns(res.columns));
    } catch (err) {
      console.log("Error fetching candidates");
      toast({
        title: "Error getting candidates, please reload the app.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const approveCandidate = useCallback(
    async (id: string) => {
      try {
        setIsLoading(true);
        const selected = candidates.filter((item) => item.id === id)[0];
        const res = await updateCandidateApi(selected);
        const updated = { ...res, reason: "" };
        dispatch(updateCandidate(updated));
        toast({
          title: "Candidate approved",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (err) {
        console.log("Error updating candidates");
        toast({
          title: "Error editing candidate",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setIsLoading(false);
      }
    },
    [candidates]
  );

  const rejectCandidate = useCallback(
    async (id: string, reason: string, handleClose: () => void) => {
      try {
        setIsLoading(true);
        const selected = candidates.filter((item) => item.id === id)[0];
        const res = await updateCandidateApi(selected);
        const updated = { ...res, reason: reason };
        dispatch(updateCandidate(updated));
        toast({
          title: "Candidate rejected.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        return updated;
      } catch (err) {
        toast({
          title: "Error editing candidate",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log("Error updating candidates");
      } finally {
        setIsLoading(false);
        handleClose();
      }
    },
    [candidates]
  );

  useEffect(() => {
    fetchCandidates();
  }, [fetchCandidates]);

  return { candidates, approveCandidate, rejectCandidate, isLoading };
}

export default useCandidates;
