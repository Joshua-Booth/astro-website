function ProjectLink({ link, label }) {
  return (
    <>
      {link && (
        <a
          href={link}
          class="btn btn-primary mt-4 ml-2 ml-lg-1"
          aria-label={`Learn more about ${label}`}
        >
          Learn More
        </a>
      )}
    </>
  );
}

export default ProjectLink;
