export const BASE_URL = import.meta.env.BASE_URL;

export const withBase = (path = "") => {
  const normalizedBase = BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}/`;
  const normalizedPath = String(path).replace(/^\/+/, "");
  return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase;
};

export const normalizePathname = (pathname = "/") => {
  const baseNoTrailingSlash =
    BASE_URL.length > 1 && BASE_URL.endsWith("/")
      ? BASE_URL.slice(0, -1)
      : BASE_URL;

  if (
    baseNoTrailingSlash &&
    baseNoTrailingSlash !== "/" &&
    pathname.startsWith(baseNoTrailingSlash)
  ) {
    const stripped = pathname.slice(baseNoTrailingSlash.length);
    return stripped || "/";
  }

  return pathname;
};
