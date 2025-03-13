import type { Meta, StoryObj } from '@storybook/vue3';

import MyComponent from 'quasar-app-extension-common-component/src/component/MyComponent.vue';

const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  title: 'Test/MyComponent',
};

console.log(MyComponent);

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
