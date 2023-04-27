import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CandidatesProvider } from "./context/CandidatesContext";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./setup/theme";

import store from "./state/store";
import ChallengeInfo from "./views/ChallengeInfo";
import Candidates from "./views/Candidates";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <CandidatesProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/'>
                <Route index element={<Candidates />} />
                <Route index path='about' element={<ChallengeInfo />} />
                <Route path='*' element={<Candidates />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CandidatesProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
