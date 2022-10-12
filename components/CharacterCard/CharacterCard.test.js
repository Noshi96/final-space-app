/* globals describe, it, expect  */

import { render } from '@testing-library/react'
import CharacterCard from './CharacterCard'

describe('CharacterCard', () => {
  const singleCharacter = {
    id: 1,
    name: 'Gary Goodspeed',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    hair: 'Blonde',
    origin: 'Earth',
    abilities: [
      'Piloting',
      'Marksmanship',
      'Hand-to-hand combat',
      'Weapons: Blasters',
      'Weapons: Black hole gun (briefly)',
      'Weapons: Robot arm',
      'Weapons: Laser gun',
      'Weapons: Laser sword'
    ],
    img_url:
      'https://finalspaceapi.com/api/character/avatar/gary_goodspeed.png'
  }

  it('renders character card', () => {
    const characterCard = render(
      <CharacterCard
        key={singleCharacter.id}
        name={singleCharacter.name}
        imgUrl={singleCharacter.img_url}
        id={singleCharacter.id}
        singleCharacter={singleCharacter}
      />
    )
    expect(characterCard.container).toMatchSnapshot()
  })
})
