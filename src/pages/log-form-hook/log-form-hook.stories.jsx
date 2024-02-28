import { LogFormHook } from './log-form-hook';

export default {
    title: 'Pages/LogFormHook',
    component: LogFormHook,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export const Primary = {
    args: {},
    parameters: {
        viewport: {
            width: '1920',
            height: '1080',
        },
    },
};
