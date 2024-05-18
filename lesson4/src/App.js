import React, { useLayoutEffect, useState } from "react";
import MainPage from "./pages/MainPage/MainPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const [promptValue, setPromptValue] = useState({
    name: "",
    lastName: "",
  });

  useLayoutEffect(() => {
    const nameValue = prompt("name ");
    const lastNameValue = prompt("last name");
    if (nameValue !== null && lastNameValue !== null) {
      setPromptValue({ name: nameValue, lastName: lastNameValue });
    }
  }, []);
  if (promptValue.name === "John" && promptValue.lastName === "Johns") {
    return (
      <>
        <MainPage user={promptValue} />
      </>
    );
  } else {
    return (
      <div>
        <ErrorPage user={promptValue} />
      </div>
    );
  }
}

export default App;
