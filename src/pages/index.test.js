/* globals describe, it, expect  */
/* eslint-env jest */

import { render, waitFor } from '@testing-library/react'
import Home from './index.page'

describe('Home', () => {
  it('should render Home page', async () => {
    const { container } = render(<Home />)
    await waitFor(() => {
      expect(container).toMatchSnapshot()
    })
  })
})
