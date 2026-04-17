import { withBase } from "../utils/paths";

function CertificationsSection() {
  const certifications = [
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      date: "Dec 2025",
      logoImageSrc: withBase("images/nvidialogo.png"),
      logoImageAlt: "Deep Learning",
      contentAlign: "center",
      certificateImageSrc: withBase("images/nvidia.jpg"),
      certificateImageAlt: "NVIDIA - Fundamentals of Deep Learning certificate",
      certificateUrl: "https://learn.nvidia.com/certificates?id=0m_HibBASWaii8Ygk_Qsjw",
    },
    {
      title: "Docker Foundations Professional",
      issuer: "Docker",
      date: "Oct 2025",
      logoImageSrc: withBase("images/dockerlogo.png"),
      logoImageAlt: "Docker",
      contentAlign: "center",
      certificateImageSrc: withBase("images/docker.jpg"),
      certificateImageAlt: "Docker - Docker Foundations Professional certificate",
      certificateUrl:
        "https://www.linkedin.com/learning/certificates/4550bfbcb246e8b4a6a643065f8c47af5533fd43891041f6a17467f254dc9cd4",
    },
    {
      title: "Ubuntu Linux Professional",
      issuer: "Canonical",
      date: "Oct 2025",
      logoImageSrc: withBase("images/ubuntulogo.png"),
      logoImageAlt: "Ubuntu",
      contentAlign: "center",
      certificateImageSrc: withBase("images/canonical.jpg"),
      certificateImageAlt: "Canonical - Ubuntu Linux Professional certificate",
      certificateUrl:
        "https://www.linkedin.com/learning/certificates/417575a522ea921943bfcd0bca249733f56dba2a7d1c8ff155230f4f759d69f4",
    },
    {
      title: "Career Essentials in GitHub Professional",
      issuer: "GitHub",
      date: "Apr 2026",
      logoImageSrc: withBase("images/githublogo.png"),
      logoImageAlt: "GitHub",
      contentAlign: "center",
      certificateImageSrc: withBase("images/github.jpg"),
      certificateImageAlt: "GitHub - Career Essentials in GitHub Professional certificate",
      certificateUrl:
        "https://www.linkedin.com/learning/certificates/8bf8cc02d830cd5bdece7a02e5aa2bc7f3468a8ba28e947a906a4637953ef714?trk=share_certificate",
    },
    {
      title: "C++ Programming Professional",
      issuer: "OpenEDG",
      date: "Apr 2026",
      logoImageSrc: withBase("images/clogo.png"),
      logoImageAlt: "C++",
      contentAlign: "center",
      certificateImageSrc: withBase("images/cplus.jpg"),
      certificateImageAlt: "OpenEDG - C++ Programming Professional certificate",
      certificateUrl:
        "https://www.linkedin.com/learning/certificates/d1cb2bb3bb27978271cd616fc917786fdf0be1c2ff86f497e6cdd7ff81076424?trk=share_certificate",
    },
    {
      title: "Programming with Python Professional",
      issuer: "OpenEDG",
      date: "Apr 2026",
      logoImageSrc: withBase("images/python.png"),
      logoImageAlt: "Python",
      contentAlign: "center",
      certificateImageSrc: withBase("images/pythoncert.jpg"),
      certificateImageAlt: "OpenEDG - Programming with Python Professional certificate",
      certificateUrl: "https://www.linkedin.com/learning/certificates/ac1f84ac8847d79181363f622c8151fbaca534a2dacc85645665a6f7668e59b6?trk=share_certificate",
    },
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
                      className="certCard__thumbImage"
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
