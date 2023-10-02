import { render, screen } from '@testing-library/react';
import Canvas from './Canvas';
import { act } from 'react-dom/test-utils';

describe('Canvas', () => {
    it('renders canvas', () => {
        const bindToSpy = jest.fn()
        const renderSpy = jest.fn()
        const redrawSpy = jest.fn()

        const spyAnimator = {
            bindTo: bindToSpy,
            render: renderSpy,
            redraw: redrawSpy
        }

        render(<Canvas animator={spyAnimator}/>)

        expect(bindToSpy).toHaveBeenCalled()
        expect(renderSpy).toHaveBeenCalled()
    })

    it('calls redraw when button is clicked', async() => {
        const bindToSpy = jest.fn()
        const renderSpy = jest.fn()
        const redrawSpy = jest.fn()

        const spyAnimator = {
            bindTo: bindToSpy,
            render: renderSpy,
            redraw: redrawSpy
        }

        render(<Canvas animator={spyAnimator}/>)

        await screen.findByText('X 1')

        redrawSpy.mockReset()

        const xButton = await screen.findByText('X 1')
        act(() => {
            xButton.click()

        })
        await screen.findByText('X 2')
        expect(redrawSpy).toHaveBeenCalledWith({x: 2})
    })
})