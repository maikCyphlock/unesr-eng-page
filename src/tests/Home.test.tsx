import {describe, test,expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Home from '../pages/Home'
import React from 'react';

describe("Home page", () => {
    test("Should show title", () => {
        render(<Home/>);

        expect(screen.getByText(/Universidad Simón Rodriguez/i)).toBeDefined()
    })
})