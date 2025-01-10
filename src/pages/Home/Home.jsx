import {
  Banner,
  Category,
  Hero,
  InstagramSection,
  KitchenSection,
  MultiSlider,
  Slider,
} from "../../components";

const Home = () => {
  return (
    <>
      <Hero />
      <Slider />
      <Category />
      <KitchenSection />
      <Banner />
      <MultiSlider />
      <InstagramSection />
    </>
  );
};

export default Home;
