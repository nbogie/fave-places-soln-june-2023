import { render, screen } from "../testUtils/testUtils";
import App from "./App";

//An example of using react-testing-library
describe("App component", async () => {
    test("Should have text 'Fave places' on it", () => {
        render(<App />);
        const elem = screen.getByText("Fave places");
        expect(elem).toBeInTheDocument();
    });
});
