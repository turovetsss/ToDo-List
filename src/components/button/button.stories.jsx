import React from 'react';

import { Button } from './button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        primary: true,
        label: 'Label',
        id: 'some-button',
        children: <span>Test</span>,
    },
    parameters: {
        pseudo: { hover: true },
        viewport: {
            width: '83',
            height: '40',
        },
    },
};

export const Secondary = {
    args: {
        label: 'Button',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
