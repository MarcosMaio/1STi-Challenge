import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Title from '@/components/Title.component'
import React from 'react'

describe('Home', () => {
  it('renders a heading', () => {
    const titleText = 'Previsão do Tempo'
    render(<Title title={titleText} />)

    const heading = screen.getByRole('heading', {
      name: /previsão do tempo/i,
    })

    expect(heading).toBeInTheDocument()
  })
})