'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Atest from 'components/Atest.js';

describe('Atest', () => {
    let AtestComponent;

    beforeEach(() => {
        AtestComponent = createComponent(Atest);
    });

    it('should have its component name as default className', () => {
    	// expect('Atest').toBe('Atest');
        expect(AtestComponent._store.props.className).toBe('Atest');
    });
});
