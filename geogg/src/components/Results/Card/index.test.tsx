import React from 'react'
import renderer from 'react-test-renderer'
import ResultCard from '.'

test('Search result card renders', () => {

    const component = renderer.create(
        <ResultCard name="Test" /> 
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

})