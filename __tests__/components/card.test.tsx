import { Card } from '@/app/components/card'
import { cartasArray } from '@/app/data/cartas'
import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/navigation'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}))

describe('Card', () => {
  const card = cartasArray[0]
  let pushSpy: jest.SpyInstance

  beforeEach(() => {
    pushSpy = jest.spyOn(useRouter(), 'push')
  })

  it('should render the card with content', () => {
    render(<Card carta={card} />)

    expect(screen.getByText(card.japanese)).toBeDefined()
    expect(screen.getByText(`${card.id}. ${card.silaba}`)).toBeDefined()
    expect(screen.getByText(card.english)).toBeDefined()
  })

  it('should call router.push when clicked', () => {
    render(<Card carta={card} />)
    screen.getByRole('article').click()

    expect(pushSpy).toHaveBeenCalledWith(`/poem/name/${card.silaba}`)
  })
})