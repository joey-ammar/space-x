import "./App.module.css";
import Nav from "./components/Nav/Nav";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import Aux from "./hoc/Aux";
import HeaderSyntax from "./components/HeaderSyntax/HeaderSyntax";
import CrewMission from "./components/crewMission/crewMission";
import VideoSpace from "./components/VideoSpace/VideoSpace";
import Dragon from "./components/Dragon/Dragon";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Aux>
      <BackgroundImage>
        <Nav />
        <HeaderSyntax />
      </BackgroundImage>
      <CrewMission />
      <VideoSpace />
      <Dragon />
      <Footer />
    </Aux>
  );
}

export default App;
