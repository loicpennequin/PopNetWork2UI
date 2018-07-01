import React from 'react';
import App from '../src/App.jsx';
import renderer from 'react-test-renderer';

test('App should render something', () => {
    const app = renderer.create(<App />);

    expect(app).not.toBe(null);
});
