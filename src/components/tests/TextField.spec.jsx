import { screen } from '@testing-library/react';
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

  it('should change placeholder as injected placeholder prop"', async () => {
    await render(<TextField placeholder={'상품명을 입력해 주세요.'} />);

    const textField = screen.getByPlaceholderText('상품명을 입력해 주세요.');

    expect(textField).toBeInTheDocument();
  });
});
