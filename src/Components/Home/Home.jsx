import homeImg from "../../assets/home.png";
import "./home.css";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { UseGetAxios } from "../../Hooks/UseGetAxios";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { LoadingSpinner } from "../../Utils/LoadingSpinner";

export function Home() {
  useDocumentTitle("Home | PureFitness");
  const {
    isLoading,
    serverData: { categories },
  } = UseGetAxios("api/categories");

  return (
    <>
      {isLoading && (
        <div className="loader">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && (
        <>
          <section className="sec-introduction txt-center flex-column">
            <div className="intro-container">
              <h1 className="l-sp-2 intro-heading">
                Give Your Workout A <br /> New Style!{" "}
              </h1>
              <p className="heading-5 txt-gray l-height-lg">
                Welcome to Pure Fitness. We deliver best products for your
                fitness journey. <br />
                All products needed for your journey are available within us{" "}
                <br />
                with affordable prices.
              </p>
              <Link to="/products" className="link btn bg-theme txt-white">
                Shop Now &#8594;
              </Link>
            </div>
            <img className="home-image" src={homeImg} alt="logo" />
          </section>

          <h2 className="title txt-center txt-theme txt-gray">
            Featured Categories
          </h2>

          <section className="featured-category flex-box">
            {categories?.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </section>
        </>
      )}
    </>
  );
}
