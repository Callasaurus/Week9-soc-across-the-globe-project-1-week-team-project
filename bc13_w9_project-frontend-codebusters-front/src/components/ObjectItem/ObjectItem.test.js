import React from "react";
import {expect} from '@jest/globals';
import {render, screen} from '@testing-library/react'
import { ObjectItem } from "./ObjectItem";
import '@testing-library/jest-dom'


describe('Object item', () => {
    it ('Should render image', () => {
        render(<ObjectItem/>);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    });
    
    it('Should get the 3 buttons', () => {
        render(<ObjectItem/>);

        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(3);
    });

    it('Should click all 3 buttons', () => {
        render(<ObjectItem/>);

    const buttonClick = screen.getAllByRole('button');

    buttonClick[0].click();
    buttonClick[1].click();
    buttonClick[2].click();
    });

});

