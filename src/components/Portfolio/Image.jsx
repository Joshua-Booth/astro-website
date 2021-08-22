function Image({ image, link }) {
  const ConditionalWrap = ({ children, condition, wrapper }) =>
    condition ? wrapper(children) : children;

  return (
    <div className="col-lg-6 p-lg-0">
      <ConditionalWrap
        condition={!!link}
        wrapper={(children) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={image.alt}
          >
            {children}
          </a>
        )}
      >
        <img
          className="img-fluid"
          src={`/assets/images/${image.src}`}
          alt={image.alt}
        />
      </ConditionalWrap>
    </div>
  );
}

export default Image;
