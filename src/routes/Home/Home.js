import AboutUs from "../../components/AboutUs/AboutUs";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <section className="page">
      <Hero />
      <AboutUs />
      <FeaturedProducts />
    </section>
  );
};

export default Home;
