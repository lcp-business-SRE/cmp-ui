import type { Meta, StoryObj } from '@storybook/vue3';

import Test from '../node_modules/quasar-app-extension-common-component/src/component/Test.vue';

const meta: Meta<typeof Test> = {
  component: Test,
  title: 'Test/Test',
};

console.info(meta);

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
