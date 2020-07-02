import React from 'react';
import '@testing-library/jest-dom';
import { GifGrid } from './../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from './../../hooks/useFetchGifs';
jest.mock('./../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {

    const category = 'test';

    test('debe de mostrar el componente <GifGrid /> correctamente', () => {

        useFetchGifs.mockReturnValue({ data: [], loading: true });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/demo/test.jpg',
                title: 'cualquier cosa'
            },
            {
                id: 'ABC2',
                url: 'https://localhost/demo/test2.jpg',
                title: 'cualquier cosa 2'
            }
        ]

        useFetchGifs.mockReturnValue({ data: gifs, loading: false });
        const wrapper = shallow(<GifGrid category={category} />);

        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });


});
