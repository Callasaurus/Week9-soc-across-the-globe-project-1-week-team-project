import { render, screen } from '@testing-library/react'
import {test, expect} from '@jest/globals'
import React from 'react'
import '@testing-library/jest-dom'
import {StartPage} from './StartPage';



test('renders logo', () => {
    //ARRANGE
  render(<StartPage />);
 
    //ACT
    const logo = screen.getByAltText('logo')

    //ASSERT
    expect(logo).toBeInTheDocument()
});


test('renders title', () => {
    //ARRANGE
  render(<StartPage />);

    //ACT
    const title = screen.getByText('Choose Your Language', {exact:false});

    //ASSERT
    expect(title).toBeInTheDocument();
   
});

describe('renders language buttons', () => {
it ('renders flags', () => {
    //ARRANGE
  render(<StartPage />);
 
    //ACT
    const flagElement = screen.getAllByRole('button');

    //ASSERT
    expect(flagElement).toHaveLength(4);
});

it('buttons click', () => {
    //ARRANGE
    render(<StartPage />);
    
    //ACT
    const buttonClick = screen.getAllByRole('button');
    buttonClick[0].click();
    buttonClick[1].click();
    buttonClick[2].click();
    buttonClick[3].click();
    
    //ASSERT
    expect(buttonClick).toHaveLength(4);
})});
