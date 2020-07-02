import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from './../../components/AddCategory';

describe('Prueba en <AddCategory />', () => {

    const setCategories = jest.fn(); // () => { };
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe de mostrar el componente <AddCategory /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);

        expect();

    });

    test('NO debe de postear la informacion con submit ', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();

    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';

        //1.simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        //2.simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        //3.haber llamado el setCategories una vez
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        //4.value del input debe estar vacio
        expect(wrapper.find('input').prop('value')).toBe('');

    })




});
