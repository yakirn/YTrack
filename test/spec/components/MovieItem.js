'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import MovieItem from 'components/MovieItem.js';

describe('MovieItem', () => {
    let MovieItemComponent;

    beforeEach(() => {
        MovieItemComponent = createComponent(MovieItem);
    });

    it('should have its component name as default className', () => {
        expect(MovieItemComponent._store.props.className).toBe('MovieItem');
    });
});
