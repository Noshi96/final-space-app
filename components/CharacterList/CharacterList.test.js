/* globals describe, it, expect  */

import { render } from '@testing-library/react'
import CharacterList from './CharacterList'

describe('CharacterList', () => {
  const characters = [
    {
      id: 1,
      name: 'Gary Goodspeed',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      hair: 'Blonde',
      alias: [
        'The Gary (by Lord Commander and Invictus)',
        'Thunder Bandit(code name)',
        'Star Dragon(new code name)',
        'Primate(By Clarence)',
        'The Captain (self-proclaimed)',
        'Mommy (by the Dewinter children)',
        'Jerry by (Quinn)',
        'Gerald (by Quinn and the S.A.M.E.S)',
        'Humanoid trash (by Avocato)',
        'Generic Blonde Guy (by Ash)',
        'No-Good Thief (by Avocato/Invictus)',
        'Little Bastard (by Sheryl)',
        'Larry Tumbleweed (by Tribore)',
        'Harry Hoodseed (by Tribore)',
        'Leslie (by Tribore)',
        'Barry (by Tribore)',
        'The Fool Who Died A Thousand Deaths (by Invictus)'
      ],
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
  ]

  it('renders character list', () => {
    const characterList = render(<CharacterList characters={characters} />)
    expect(characterList.container).toMatchSnapshot()
  })
})
