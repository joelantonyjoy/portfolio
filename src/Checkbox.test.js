import { fireEvent } from "@testing-library/react";

import {Checkbox} from './Checkbox';
import {render} from '@testing-library/react';


test("Selecting checkbox", () =>{
    const {getByLabelText} = render(<Checkbox/>);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
});