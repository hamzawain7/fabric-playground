import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {FabricPlayground} from './fabric-playground';
import ConfirmDeletePanel from '@Panels/confirm-delete-panel';

export default {
  title: 'wip/FabricPlayground',
  component: FabricPlayground,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof FabricPlayground>;

const Template: ComponentStory<typeof FabricPlayground> = (args) => {
  return <FabricPlayground {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
