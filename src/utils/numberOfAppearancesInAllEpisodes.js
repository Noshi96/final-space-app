export const numberOfAppearancesInAllEpisodes = (episodes) => {
  const countedCharacters = {}
  episodes.forEach((episode) => {
    episode.characters.forEach((singleUrl) => {
      countedCharacters[singleUrl.split('/').at(6)]
        ? countedCharacters[singleUrl.split('/').at(6)]++
        : (countedCharacters[singleUrl.split('/').at(6)] = 1)
    })
  })
  return countedCharacters
}
