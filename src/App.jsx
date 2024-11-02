import { useState } from "react";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar />
      <NewProject />
    </main>
  );
}

export default App;
