import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

it('The TextFiled has the classname which is injected as a prop.', async () => {
  await render(<TextField className={'test-class'} />);

  expect(screen.getByPlaceholderText('텍스트를 입력해 주세요.')).toHaveClass(
    'test-class',
  );
});
