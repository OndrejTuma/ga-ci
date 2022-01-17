import React from 'react'
import HelloWorld from './HelloWorld'
import { render } from '@testing-library/react'

test('renders HelloWorld component', () => {
  const { getByTestId } = render(<HelloWorld />)

  expect(getByTestId('hello-world')).toBeInTheDocument()
})
