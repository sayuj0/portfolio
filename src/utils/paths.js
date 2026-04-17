export const BASE_URL = import.meta.env.BASE_URL;

/**
 * Prefixes a path with Vite's deployment base path.
 * Useful for assets and section links that must work both locally and on hosted paths.
 * @param {string} [path]
 * @returns {string}
 */
export const withBase = (path = "") => {
  const normalizedBase = BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}/`;
  const normalizedPath = String(path).replace(/^\/+/, "");
  return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase;
};

/**
 * Removes the base path prefix from a browser pathname so app logic can work
 * with stable section ids regardless of deployment subpath.
 * @param {string} [pathname]
 * @returns {string}
 */
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
