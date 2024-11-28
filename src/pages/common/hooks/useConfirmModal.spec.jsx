import { renderHook, act } from '@testing-library/react';
import { test } from 'node_modules/vitest/dist/index';

import useConfirmModal from './useConfirmModal';

test('호출 시 initialValue 인자를 지정하지 않는 경우 isModalOpened 상태가 false로 설정된다.', () => {
  const { result } = renderHook(useConfirmModal);

  expect(result.current.isModalOpened).toBe(false);
});

test('호출 시 initialValue 인자를 boolean 값으로 지정하는 경우 해당 값으로 isModalOpened 상태가 설정된다.', () => {
  const { result } = renderHook(() => useConfirmModal(true));

  expect(result.current.isModalOpened).toBe(true);
});

test('훅의 toggleIsModalOpened()를 호출하면 isModalOpened 상태가 toggle된다.', () => {
  const { result } = renderHook(useConfirmModal);

  act(() => {
    result.current.toggleIsModalOpened();
  });

  expect(result.current.isModalOpened).toBe(true);
});
