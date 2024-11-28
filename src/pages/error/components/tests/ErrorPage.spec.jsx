import { screen } from '@testing-library/react';
import React from 'react';

import ErrorPage from '@/pages/error/components/ErrorPage';
import render from '@/utils/test/render';

const spy = vi.fn();

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');

  return { ...original, useNavigate: () => spy };
});

it('should call useNavigate when users click "뒤로 가기" for just before the current page', async () => {
  const { user } = await render(<ErrorPage />);

  const button = await screen.getByRole('button', { name: '뒤로 이동' });

  await user.click(button);

  expect(spy).toHaveBeenNthCalledWith(1, -1);
});
