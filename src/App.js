import "./App.module.css";
import Nav from "./components/Nav/Nav";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import Aux from "./hoc/Aux";
import HeaderSyntax from "./components/HeaderSyntax/HeaderSyntax";

function App() {
  return (
    <Aux>
      <BackgroundImage>
        <Nav />
        <HeaderSyntax />
      </BackgroundImage>
    </Aux>
  );
}

export default App;
