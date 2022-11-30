import {render, screen} from '@testing-library/react';
import {test, expect} from '@jest/globals';
import { FilterBar } from './FilterBar';
import React from 'react'
import '@testing-library/jest-dom'

test("displays appropriate elements", () => {
    
    render(<FilterBar/>); 

    const inputs = screen.getAllByRole('textbox') 
    expect(inputs).toHaveLength(2) 
    
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(5)

    expect(buttons[0]).toHaveTextContent('Get translation')
    expect(buttons[1]).toHaveTextContent('Search')
    expect(buttons[2]).toHaveTextContent('Get All')
    expect(buttons[3]).toHaveTextContent('Sort by week')
    expect(buttons[4]).toHaveTextContent('Show favourites')
    
    buttons[0].click();
    buttons[1].click();
    buttons[2].click();
    buttons[3].click();
    buttons[4].click();
});

