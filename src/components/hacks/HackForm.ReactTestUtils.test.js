import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import HackForm from './HackForm';

function setup(saving) {
    let props = {
        hack: {}, 
        saving : saving,
        errors: {}, 
        onSave: () => {},
        onChange: () => {}
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<HackForm {...props}/>);
    let output = renderer.getRenderOutput();

    
    return {
        props,
        output,
        renderer
    };
    
}

describe(
    'HackForm via React Test Utils', () => {
        it('renders form and H1', () => {
            const { output } = setup();
            expect(output.type).toBe('form');
            let [h1] = output.props.children;
            expect(h1.type).toBe('h1');
        });            
    
        it('save button is labled "Save" when not saving', () => {
            const {output} = setup(false);
            const submitButton = output.props.children[5];
            expect(submitButton.props.value).toBe('Save');
        });

        
        it('save button is labled "Saving" when saving', () => {
            const {output} = setup(true);
            const submitButton = output.props.children[5];
            expect(submitButton.props.value).toBe('Saving...');
        });
    }
);