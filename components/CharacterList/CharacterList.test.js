/* globals describe, it, expect  */

import { render } from '@testing-library/react'
import CharacterList from './CharacterList'

describe('CharacterList', () => {
  const characters = [
    {
      id: '1',
      name: 'Gary Goodspeed',
      imgUrl:
        'https://finalspaceapi.com/api/character/avatar/gary_goodspeed.png',
    },
  ]

  it('renders character list', () => {
    const characterList = render(<CharacterList characters={characters} />)
    expect(characterList.container).toMatchSnapshot()
  })
})
