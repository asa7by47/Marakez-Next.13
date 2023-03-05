import FirstInTheBussiness from "../Components/FirstInTheBussiness/FirstInTheBussiness";
import DevelopmentSlider from "../Components/DevelopmentSlider/DevelopmentSlider";
import Main from "../Components/Main/Main";
import Trending from "../Components/Trending/Trending";
import Gallery from "../Components/Gallery/Gallery";
import WhoWeAre from '../Components/WhoWeAre/WhoWeAre'
import Latest from "../Components/Latest/Latest";
import AboutUs from "../Components/About-Us/AboutUs";

export default function Home() {
  return (
    <>
      <Main />
      <DevelopmentSlider />
      <Trending />
      <Gallery />
      <WhoWeAre />
      <FirstInTheBussiness />
      <Latest />
      {/* <AboutUs /> */}
    </>
  );
}
