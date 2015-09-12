'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Search from 'components/Search.js';

describe('Search', () => {
    let SearchComponent;

    beforeEach(() => {
        SearchComponent = createComponent(Search);
    });

    it('should have its component name as default className', () => {
        expect(SearchComponent._store.props.className).toBe('Search');
    });
});
