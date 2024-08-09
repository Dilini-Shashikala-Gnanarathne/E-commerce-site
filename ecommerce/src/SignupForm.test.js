// src/components/SignupForm.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SignupForm from './pages/Signup';
import axios from 'axios';

jest.mock('axios');

describe('SignupForm', () => {
  beforeEach(() => {
    axios.post.mockClear();
  });

  test('renders SignupForm component', () => {
    render(<SignupForm />);
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  });

  test('shows error when role is invalid', () => {
    render(<SignupForm />);
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'dilini' } });
    fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: 'susl@gmail.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: '1234qwer' } });
    fireEvent.change(screen.getByLabelText(/Role/i), { target: { value: 'viewer' } });
    fireEvent.click(screen.getByText(/Sign Up/i));
    expect(screen.getByText(/Role must be either admin or viewer/i)).toBeInTheDocument();
  });

  test('calls addUser API and resets form on success', async () => {
    Axios.post.mockResolvedValue({});
    render(<SignupForm />);
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'dilini' } });
    fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: 'susl@gmail.com' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: '1234qwer' } });
    fireEvent.click(screen.getByText(/Sign Up/i));
    await screen.findByText(/Sign Up/i); // waits for form to be reset
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/api/createUser', expect.any(Object));
  });
});
