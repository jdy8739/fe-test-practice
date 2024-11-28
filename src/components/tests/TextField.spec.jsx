import { screen } from '@testing-library/react';
import { vi } from 'node_modules/vitest/dist/index';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

describe('These are TextFiled tests', () => {
  test('The TextFiled has the classname which is injected as a prop.', async () => {
    await render(<TextField className={'test-class'} />);

    expect(screen.getByPlaceholderText('텍스트를 입력해 주세요.')).toHaveClass(
      'test-class',
    );
  });

  it('should be a TextField which has a placholder saying "텍스트를 입력해 주세요."', async () => {
    await render(<TextField />);

    const textField = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    expect(textField).toBeInTheDocument();
  });

  it('should change placeholder as injected placeholder prop.', async () => {
    await render(<TextField placeholder={'상품명을 입력해 주세요.'} />);

    const textField = screen.getByPlaceholderText('상품명을 입력해 주세요.');

    expect(textField).toBeInTheDocument();
  });

  it('should call the function injected as onChange prop when users type some text.', async () => {
    const spy = vi.fn();

    const { user } = await render(<TextField onChange={spy} />);

    const textField = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.type(textField, 'test');

    expect(spy).toHaveBeenCalledWith('test');
  });

  it('should call then function injected as onEnter prop when user type Enter.', async () => {
    const spy = vi.fn();

    const { user } = await render(<TextField onChange={spy} />);

    const textField = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.type(textField, 'test{Enter}');

    expect(spy).toHaveBeenCalledWith('test');
  });

  it('should call then function injected as onFocus prop when input blurred.', async () => {
    const spy = vi.fn();

    const { user } = await render(<TextField onFocus={spy} />);

    const textField = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.click(textField);

    expect(spy).toHaveBeenCalledWith();
  });
});
