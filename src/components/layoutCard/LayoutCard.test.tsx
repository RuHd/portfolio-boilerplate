import {render, screen} from '@testing-library/react'
import LayoutCard from './LayoutCard'

describe('Layout Card', () => {
    it("Renderiza um cartão container", ()=> {
        render(
            <LayoutCard arialLabel='Cartão'>
                <h2>teste</h2>
            </LayoutCard>
        )
        expect(screen.getByRole('region')).toBeInTheDocument()
    })

    it('Tem opção de hover', ()=> {
        render(
            <LayoutCard arialLabel='Cartão' hasHover={true}>
                <h2>teste</h2>
            </LayoutCard>
        )

        expect(screen.getByRole("region")).toHaveClass('hover:scale-105')
    })
})