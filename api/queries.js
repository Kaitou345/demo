export const productListingQuery = `/posts?populate=*&fields[0]=title&fields[1]=usd_price&fields[2]=bdt_price&fields[3]=category&fields[4]=featured&fields[4]=trending&sort[0]=createdAt:desc`;
export const productDetailsQuery = (id) => `/posts/${id}?populate=*`;
export const tagsQuery = `/posts?populate=*&fields[0]=title&fields[1]=usd_price&fields[2]=bdt_price&fields[3]=featured&fields[4]=trending&sort[0]=createdAt:desc`;
export const relatedPostQuery = (category) =>
  `/posts?populate=*&fields[0]=title&fields[1]=usd_price&fields[2]=bdt_price&category[username][$eq]=${category}&sort[0]=createdAt:desc&pagination[pageSize]=3`;
export const siteInfoQuery = "/site-info";
