import "./App.css";
import { SectionsContainer, Section } from "react-fullpage";

function App() {
  let options = {
    activeClass: "active", // the class that is appended to the sections links
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
    arrowNavigation: true, // use arrow keys
    className: "SectionContainer", // the class name for the section container
    delay: 2000, // the scroll animation speed
    navigation: false, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
    sectionClassName: "Section", // the section class name
    sectionPaddingTop: "0", // the section top padding
    sectionPaddingBottom: "0", // the section bottom padding
    verticalAlign: false, // align the content of each section vertical
  };
  return (
    <SectionsContainer {...options}>
      <Section className="one">Page 1</Section>
      <Section className="two">Page 2</Section>
      <Section className="three">Page 3</Section>
    </SectionsContainer>
  );
}

export default App;
