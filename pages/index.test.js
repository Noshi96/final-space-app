/* globals describe, it, expect  */
/* eslint-env jest */

import { render, waitFor } from '@testing-library/react'
import Home from './index.page'

describe('Home', () => {
  const characters = [
    {
      id: '1',
      name: 'Gary Goodspeed',
      imgUrl:
        'https://finalspaceapi.com/api/character/avatar/gary_goodspeed.png',
    },
  ]

  it('should render Home page', async () => {
    const { container } = render(<Home characters={characters} />)
    await waitFor(() => {
      expect(container).toMatchSnapshot()
    })
  })
})
