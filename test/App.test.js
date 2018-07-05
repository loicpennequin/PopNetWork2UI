import React from 'react';
import AppContainer from '../src/components/containers/AppContainer.jsx';
import renderer from 'react-test-renderer';

test('App should render something', () => {
    const app = renderer.create(<AppContainer />);

    expect(app).not.toBe(null);
});
