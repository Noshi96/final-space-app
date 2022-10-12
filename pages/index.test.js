/* globals describe, it, expect  */
/* eslint-env jest */

import { render, waitFor } from '@testing-library/react'
import Home from './index.page'

describe('Home', () => {
  const characters = [
    {
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
  ]

  const episodes = [
    {
      id: 1,
      name: 'Chapter 1',
      air_date: '02/15/2018',
      director: 'Mike Roberts',
      writer: 'Olan Rogers',
      characters: [
        'https://finalspaceapi.com/api/v0/character/1',
        'https://finalspaceapi.com/api/v0/character/2',
        'https://finalspaceapi.com/api/v0/character/3',
        'https://finalspaceapi.com/api/v0/character/5',
        'https://finalspaceapi.com/api/v0/character/6',
        'https://finalspaceapi.com/api/v0/character/9',
        'https://finalspaceapi.com/api/v0/character/11'
      ],
      img_url: 'http://finalspaceapi.com/api/episode/image/chapter1.jpg'
    }
  ]

  it('should render Home page', async () => {
    const { container } = render(
      <Home characters={characters} episodes={episodes} />
    )
    await waitFor(() => {
      expect(container).toMatchSnapshot()
    })
  })
})
