function CertificationsSection() {
  const certifications = [
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA Deep Learning Institute",
      date: "Dec 2025",
      logoImageSrc: "/images/nvidialogo.png",
      logoImageAlt: "NVIDIA",
      contentAlign: "center",
      logoText: "",
      logoAriaLabel: "",
      certificateImageSrc: "/images/nvidia.jpg",
      certificateImageAlt: "NVIDIA - Fundamentals of Deep Learning certificate",
      certificateUrl: "https://learn.nvidia.com/certificates?id=0m_HibBASWaii8Ygk_Qsjw",
    },
    ...Array.from({ length: 5 }, (_, index) => ({
      title: "New Certification",
      issuer: "Issuer",
      date: "Date",
      logoText: "LOGO",
      logoAriaLabel: `Placeholder logo ${index + 1}`,
      certificateImageSrc: "",
      certificateImageAlt: "",
      certificateUrl: "",
      placeholder: true,
    })),
  ];

  return (
    <section id="certifications" className="contentSection certificationsSection">
      <div className="contentSection__inner certificationsSection__inner">
        <h2 className="contentSection__title">Certifications</h2>

        <div className="certificationsGrid" role="list">
          {certifications.map((certification, index) => (
            <article
              key={`${certification.title}-${certification.issuer}-${certification.date}-${index}`}
              className={`certCard${certification.placeholder ? " certCard--placeholder" : ""}`}
              role="listitem"
            >
              <div className="certCard__body">
                <div className="certCard__thumb" aria-label="Certificate image">
                  {certification.certificateImageSrc ? (
                    <img
                      src={certification.certificateImageSrc}
                      alt={certification.certificateImageAlt || certification.title}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : certification.logoImageSrc ? (
                    <img
                      className="certCard__thumbLogo"
                      src={certification.logoImageSrc}
                      alt={certification.logoImageAlt || ""}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="certCard__thumbPlaceholder">Certificate</span>
                  )}
                </div>

                <div
                  className={`certCard__content${
                    certification.contentAlign === "center"
                      ? " certCard__content--center"
                      : ""
                  }`}
                >
                  {certification.logoImageSrc ? (
                    <img
                      className="certCard__headerLogo"
                      src={certification.logoImageSrc}
                      alt={certification.logoImageAlt || ""}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}

                  <h3 className="certCard__title">{certification.title}</h3>
                  <p className="certCard__meta">Issued By: {certification.issuer}</p>
                  <p className="certCard__meta">{certification.date}</p>

                  {certification.certificateUrl ? (
                    <a
                      className="certCard__link"
                      href={certification.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate
                    </a>
                  ) : (
                    <span className="certCard__link certCard__link--disabled">
                      View Certificate
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;
