import convert from "url-slug";

export const slugify = (value: string) => convert(value, {
  dictionary: { "'":"" }
})