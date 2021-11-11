import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Btn from "./components/Btn";
import "./styles.css";

const history = createBrowserHistory({ forceRefresh: true });

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <h2>{"React buttons"}</h2>
        <Btn
          {...{
            variant: "green",
            label: "test label",
            onClick: () => alert("clicked")
          }}
        />
        <Btn
          {...{
            variant: "red",
            label: "test label",
            href: "!#"
          }}
          upperCase
        />
        <Btn
          {...{
            variant: "secondary-red",
            label: "test label",
            href: "!#"
          }}
          upperCase
        />
      </div>
    </Router>
  );
};
export default App;
