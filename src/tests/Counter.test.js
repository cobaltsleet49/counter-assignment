import { render, screen } from '@testing-library/react' // Render and screen access imports
import userEvent from '@testing-library/user-event'; // Simulate user clicks
import Counter from '../components/Counter' // Counter component

beforeEach(() => {
  render(<Counter />); // Render the Counter component
});

test('renders counter message', () => {
  const counterMessage = screen.getByRole('heading', { name: 'Counter' }); // Check for the 'Counter' header
  expect(counterMessage).toBeInTheDocument(); // Verify the header is found
});

test('should render initial count with value of 0', () => {
  const countValue = screen.getByTestId('count'); // Find the element containing data-testid=count
  expect(countValue.textContent).toBe('0'); // Verify initial count value is 0
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByRole('button', { name: '+' }); // Find the increment button
  userEvent.click(incrementButton); // Simulate clicking the increment button

  const countValue = screen.getByTestId('count'); // Get count value
  expect(countValue.textContent).toBe('1'); // Verify count is incremented
});

test('clicking - decrements the count', () => {
  // Same logic as increment, except check that 'count' is decremented
  const incrementButton = screen.getByRole('button', { name: '-' });
  userEvent.click(incrementButton); 

  const countValue = screen.getByTestId('count'); 
  expect(countValue.textContent).toBe('-1'); 
});
