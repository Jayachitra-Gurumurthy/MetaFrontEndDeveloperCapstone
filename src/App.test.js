import { render, screen } from '@testing-library/react';
import App from './App';
import ReserveTable from './components/ReserveTable';


//Test for inital page load 
test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByText('Little Lemon - Chicago');
  expect(linkElement).toBeInTheDocument();
}
);

test('Renders the BookingForm heading', () => {
    render(<ReserveTable availableTimes= {{availableTimes:['15:00','16:00']}} />);
    const headingElement = screen.getByText("Table Reservation Form");
    expect(headingElement).toBeInTheDocument();
})


 