import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const getMatchOptions = ({ context }) => ({
    customSnapshotIdentifier: props => {
        return props.defaultIdentifier.replace('storyshots-test-js-storyshots-', '');
    },
});

initStoryshots({
    framework: 'react',
    test: imageSnapshot({
        storybookUrl: 'http://localhost:6006',
        // https://github.com/storybookjs/storybook/issues/23603
        beforeScreenshot: (page, { context: { parameters } }) => {
            const viewport = parameters?.viewport;

            page.setViewport({
                width: parseInt(viewport?.width || '1024', 10),
                height: parseInt(viewport?.height || '720', 10),
            });

            return new Promise(resolve =>
                page.waitForNetworkIdle().then(() => {
                    resolve();
                }),
            );
        },
        getMatchOptions,
    }),
});
