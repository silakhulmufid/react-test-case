/**
 * Creates a slug from a given string.
 *
 * @param title - The title from which to create the slug.
 * @returns A slugified version of the title.
 *
 * @example
 * createSlug('Hello World!') // 'hello-world'
 *
 * @remarks
 * The slug is created by first converting the title to lowercase and removing any
 * non-alphanumeric characters, then collapsing any runs of hyphens into a single
 * hyphen. The slug is also trimmed of any leading or trailing hyphens.
 */
export const createSlug = (title = ""): string => {
  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
  return slug
}

export default createSlug
