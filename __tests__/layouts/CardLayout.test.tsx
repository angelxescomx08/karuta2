import { CardLayout } from "@/app/layouts/CardLayout"
import { render, screen } from "@testing-library/react"

describe('CardLayout', () => {
  it('Should render the CardLayout component', () => {
    render(
      <CardLayout>
        <div>Card Layout</div>
      </CardLayout>
    )
    expect(screen.getByRole('main')).toBeDefined()
    expect(screen.getByText('Card Layout')).toBeDefined()
  })
})