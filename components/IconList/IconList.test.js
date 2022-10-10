/* globals describe, expect, it */

import { render } from '@testing-library/react'
import IconList from './IconList'

describe('Icon', () => {
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
      'Weapons: Laser sword',
    ],
    img_url:
      'https://finalspaceapi.com/api/character/avatar/gary_goodspeed.png',
  }
  const countOccurrence = 22

  it('renders IconList', () => {
    const iconList = render(
      <IconList
        origin={singleCharacter.origin}
        status={singleCharacter.status}
        species={singleCharacter.species}
        occurrence={countOccurrence}
      />
    )
    expect(iconList.container).toMatchSnapshot()
  })
})
