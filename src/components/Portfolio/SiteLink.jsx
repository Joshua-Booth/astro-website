function SiteLink({ link, label }) {
  return (
    <>
      {link && (
        <a
          href={link}
          className="btn btn-outline-primary mt-4 mr-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${label}`}
        >
          Visit site
        </a>
      )}
    </>
  );
}

export default SiteLink;
