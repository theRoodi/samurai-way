import {create} from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';
import React from 'react';


describe('Profile status component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'ggwp'}/>)
        const instance = component.getInstance();
        if (instance) {
            expect(instance.props.status).toBe('ggwp')
        }
    })
    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus status={'ggwp'}/>)
        const instance = component.root;
        const span = instance.findByType('span')
        expect(span).not.toBeNull()
    })
    test('after creation input shouldnt be displayed', () => {
        const component = create(<ProfileStatus status={'ggwp'}/>)
        const instance = component.root;

        expect(() => {
            instance.findByType('input')
        }).toThrow()
    })
    test('after creation span should contains correct status', () => {
        const component = create(<ProfileStatus status={'ggwp'}/>)
        const instance = component.root;
        const span = instance.findByType('span')
        expect(span.children[0]).toBe('ggwp')
    })
    test('after click span should change to input', () => {
        const component = create(<ProfileStatus status={'ggwp'}/>)
        const instance = component.root;
        const span = instance.findByType('span')
        span.props.onDoubleClick()
        const input = instance.findByType('input')
        expect(input.props.value).toBe('ggwp')
    })
    test('callback should be called', () => {
        const callback = jest.fn()
        const component = create(<ProfileStatus status={'ggwp'} updateStatus={callback}/>)
        const instance = component.getInstance();
        if (instance) {
            // instance.deactivateMode()
        }
        expect(callback.mock.calls.length).toBe(1)
    })
})