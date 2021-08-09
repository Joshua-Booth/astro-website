// Data
import skills from "../../data/skills.js";

function Skills({ data = skills }) {
  return (
    <section class="text-center mx-auto pt-3 mt-4 px-3">
      <h2 class="mt-5">
        Hey <span class="wave">👋🏻</span> I'm Josh!
      </h2>

      <h3 class="h4 mt-5">Here's what I'm skilled in</h3>

      <div class="text-center mx-auto pt-0 px-3">
        <div class="card-deck mt-4">
          {data.map((skill) => (
            <div class="card border-0 mb-5 py-4">
              <img
                class="card-img-top p-4"
                src={`/assets/images/${skill.image.src}`}
                alt={skill.image.alt}
              />
              <div class="card-body">
                <h4 class="h5 card-title font-weight-bold">{skill.title}</h4>
                <p class="card-text col-12 col-sm-8 col-md-12 mx-auto px-0">
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
