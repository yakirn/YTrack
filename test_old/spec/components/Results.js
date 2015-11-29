'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Results from 'components/Results.js';

describe('Results', () => {
    let ResultsComponent;

    beforeEach(() => {
        ResultsComponent = createComponent(Results);
    });

    it('should have its component name as default className', () => {
        expect(ResultsComponent._store.props.className).toBe('Results');
    });
});
