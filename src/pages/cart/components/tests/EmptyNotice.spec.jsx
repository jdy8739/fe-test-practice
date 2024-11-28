import { screen } from '@testing-library/react';
import React from 'react';

import EmptyNotice from '@/pages/cart/components/EmptyNotice';
import render from '@/utils/test/render';

const spy = vi.fn();

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');

  return { ...original, useNavigate: () => spy };
});

it('should call useNavigate when users click "홈으로 가기" for the root page.', async () => {
  const { user } = await render(<EmptyNotice />);

  await user.click(screen.getByText('홈으로 가기'));

  expect(spy).toHaveBeenNthCalledWith(1, '/');
});
