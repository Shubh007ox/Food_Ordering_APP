import { Fragment } from "react";
import Mainheader from "./Components/UI/Mainheader";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Mainheader />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
