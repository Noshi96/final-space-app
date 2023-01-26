/* globals describe, it, expect  */

import { render } from '@testing-library/react'
import CharacterForm from './CharacterForm'

describe('CharacterForm', () => {
  it('renders form', () => {
    const cardDetailsModal = render(
      <CharacterForm isOpen closeModal={() => {}} />
    )
    expect(cardDetailsModal.container).toMatchSnapshot()
  })
})
