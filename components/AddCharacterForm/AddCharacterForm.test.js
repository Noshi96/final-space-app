/* globals describe, it, expect  */

import { render } from '@testing-library/react'
import AddCharacterForm from './AddCharacterForm'

describe('AddCharacterForm', () => {
  it('renders form', () => {
    const cardDetailsModal = render(
      <AddCharacterForm isOpen closeModal={() => {}} />
    )
    expect(cardDetailsModal.container).toMatchSnapshot()
  })
})
