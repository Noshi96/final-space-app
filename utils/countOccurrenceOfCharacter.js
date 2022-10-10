export const countOccurrenceOfCharacter = (episodes, characterId) =>
  episodes.filter((singleEpisode) =>
    singleEpisode.characters.some(
      (singleUrl) => Number(singleUrl.split('/').at(6)) === Number(characterId)
    )
  ).length
