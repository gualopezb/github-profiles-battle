// eslint-disable-next-line import/prefer-default-export
export async function fetchPopularRepos(language) {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`,
  );

  const res = await fetch(endpoint);
  const data = await res.json();
  if (!data.items) {
    throw new Error(data.message);
  }
  return data.items;
}
