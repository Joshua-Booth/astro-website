// Components
import Image from "./Image";
import SiteLink from "./SiteLink";
import ProjectLink from "./ProjectLink";

// Data
import portfolio from "../../data/portfolio.js";

function Portfolio({ data = portfolio }) {
  return (
    <section class="container section">
      <h2 class="text-center mb-5">Portfolio</h2>

      {data.map((item, index) => (
        <div
          key={index}
          class="row align-items-center h-100 text-center text-lg-left pt-5 mb-5"
        >
          <Image image={item.image} link={item.website} />

          <div class="col-lg-5 mx-auto py-3">
            <h3 class="h3">
              {item.name}{" "}
              {item.tag && (
                <span class="badge badge-pill badge-primary badge-sm align-middle">
                  {item.tag}
                </span>
              )}
            </h3>
            <p class="mb-5 color-gray">{item.description}</p>

            <SiteLink link={item.website} label={item.name} />

            <ProjectLink link={item.project} label={item.name} />
          </div>
        </div>
      ))}

      <div class="text-center mt-5 pt-5">
        <a href="/work" class="btn btn-outline-primary">
          See more
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
