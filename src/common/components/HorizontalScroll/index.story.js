import React from 'react';
import { storiesOf } from '@storybook/react';

import Tags from '@blocks/Tags';

import StorybookPadding from '@components/StorybookPadding';
import StorybookDescription from '@components/StorybookDescription';

import { newsTags } from '@stubs';

import HorizontalScroll from './index';

storiesOf('Components/HorizontalScroll', module).addWithJSX('General', () => (
  <StorybookPadding>
    <StorybookDescription title="Компонент растягивается на ширину родителя, сам принимает другой компонент который вероятнее всего будет больше родителя и создает горизонтальный скролл." />
    <StorybookDescription title="Также добавляет drag n drop чтобы пользователи у которых нет тачпада, но есть мышка могли увидеть контент" />
    <div style={{ width: '300px' }}>
      <HorizontalScroll>
        <Tags tags={newsTags} />
      </HorizontalScroll>
    </div>
  </StorybookPadding>
));
