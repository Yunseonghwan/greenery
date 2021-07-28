import React from "react";
import Navigation from "./navigation";
import { RecoilRoot } from "recoil";
import { theme } from "./styles";
import "./styles/init.css";

function App() {
  return (
    <RecoilRoot>
      <React.Suspense fallback={null}>
        <Navigation />
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
