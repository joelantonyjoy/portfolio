import {render} from "@testing-library/react";
import App from './App'

test("renders an h1", () => {
    const {getByText} =  render(<App/>);
    const h1 = getByText(/Hello React App/);
    expect(h1).toHaveTextContent(
        "Hello React App"
    );
});