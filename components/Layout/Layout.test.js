/* globals describe, expect, it */

import { render } from '@testing-library/react'
import Layout from './Layout'

describe('Layout', () => {
  it('should render Layout', () => {
    const { container } = render(<Layout />)
    expect(container).toMatchSnapshot()
  })
})
