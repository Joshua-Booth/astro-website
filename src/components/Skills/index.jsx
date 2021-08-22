// Data
import skills from "../../data/skills.js";

function Skills({ data = skills }) {
  return (
    <section className="text-center mx-auto pt-3 mt-4 px-3">
      <h2 className="mt-5">
        Hey <span className="wave">👋🏻</span> I'm Josh!
      </h2>

      <h3 className="h4 mt-5">Here's what I'm skilled in</h3>

      <div className="text-center pt-0 px-3">
        <div className="card-deck mx-auto mt-4">
          {data.map((skill) => (
            <div className="card border-0 mb-5 py-4">
              <img
                className="card-img-top p-4"
                src={`/assets/images/${skill.image.src}`}
                alt={skill.image.alt}
              />
              <div className="card-body mx-md-5">
                <h4 className="h5 card-title font-weight-bold">
                  {skill.title}
                </h4>
                <p className="card-text col-12 col-sm-8 col-md-12 mx-auto px-0">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
