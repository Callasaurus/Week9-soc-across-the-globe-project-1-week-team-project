import {fireEvent, render, screen} from '@testing-library/react';
import {test, expect} from '@jest/globals';
import {Header} from './Header.js';
import React from 'react'
import '@testing-library/jest-dom'

const testProps = {
    title: "School of Code Across the Globe",
    altText: "logo"
}

test("check the elements on the page exist in the right number and with correct text", () => {
    render(<Header/>)

    const actual = screen.getByText(testProps.title)
    expect(actual).toBeInTheDocument()

    const logo = screen.getByAltText(testProps.altText)
    expect(logo).toBeInTheDocument()

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(4)

})

test("buttons can all be clicked", () => {
    render(<Header/>)
    const buttonClick = screen.getAllByRole('button')
    buttonClick[0].click();
    buttonClick[1].click();
    buttonClick[2].click();
    buttonClick[3].click();

    fireEvent.click(buttonClick[0])
    fireEvent.click(buttonClick[1])
    fireEvent.click(buttonClick[2])
    fireEvent.click(buttonClick[3])
})