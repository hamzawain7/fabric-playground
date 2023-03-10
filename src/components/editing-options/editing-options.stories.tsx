import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {EditingOptions} from "./editing-options";

export default {
    title: 'Undefined/EditingOptions',
    component: EditingOptions,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof EditingOptions>;

const Template: ComponentStory<typeof EditingOptions> = (args) => <EditingOptions {...args} />;

export const Default = Template.bind({});
Default.args = {};
