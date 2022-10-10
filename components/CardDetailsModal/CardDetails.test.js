/* globals describe, it, expect  */

import { render } from '@testing-library/react'
import CardDetailsModal from './CardDetailsModal'

describe('CardDetailsModal', () => {
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

  it('renders details modal', () => {
    const cardDetailsModal = render(
      <CardDetailsModal
        isOpen={true}
        closeModal={() => {}}
        id={singleCharacter.id}
        singleCharacter={singleCharacter}
      />
    )
    expect(cardDetailsModal.container).toMatchSnapshot()
  })
})
