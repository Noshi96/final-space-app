/* globals describe, it, expect  */

import { render } from '@testing-library/react'
import CharacterCard from './CharacterCard'

describe('CharacterCard', () => {
  const singleCharacter = {
    id: '1',
    name: 'Gary Goodspeed',
    imgUrl: 'https://finalspaceapi.com/api/character/avatar/gary_goodspeed.png',
  }

  it('renders character list', () => {
    const characterCard = render(
      <CharacterCard
        key={singleCharacter.id}
        name={singleCharacter.name}
        imgUrl={singleCharacter.img_url}
      />
    )
    expect(characterCard.container).toMatchSnapshot()
  })
})
