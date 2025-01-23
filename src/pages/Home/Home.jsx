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
  const sliderImage = [
    "chair-3.png",
    "chair-2.png",
    "chair-1.png",
    "chair-5.png",
  ];

  return (
    <>
      <Hero />
      <Slider />
      <Category />
      <KitchenSection />
      <Banner />
      <MultiSlider sliderImage={sliderImage} />
      <InstagramSection />
    </>
  );
};

export default Home;
