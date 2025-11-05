import { render, screen, waitFor } from '@testing-library/react';
import Timer from '@/components/Timer';

describe('Timer Component', () => {
  it('renders the timer heading', () => {
    render(<Timer />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it('displays the initial counter value', () => {
    render(<Timer />);
    expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
  });

  it('increments the counter over time', async () => {
    jest.useFakeTimers();
    render(<Timer />);
    
    expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
    
    jest.advanceTimersByTime(1000);
    await waitFor(() => {
      expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();
    });
    
    jest.advanceTimersByTime(2000);
    await waitFor(() => {
      expect(screen.getByText(/counter: 2/i)).toBeInTheDocument();
    });
    
    jest.useRealTimers();
  });
});
