import { style } from './css-in-js/index.ts'

export const colors = {
	blue1: '#99c1f1',
	blue2: '#62a0ea',
	blue3: '#3584e4',
	blue4: '#1c71d8',
	blue5: '#1a5fb4',
	green1: '#8ff0a4',
	green2: '#57e389',
	green3: '#33d17a',
	green4: '#2ec27e',
	green5: '#26a269',
	yellow1: '#f9f06b',
	yellow2: '#f8e45c',
	yellow3: '#f6d32d',
	yellow4: '#f5c211',
	yellow5: '#e5a50a',
	orange1: '#ffbe6f',
	orange2: '#ffa348',
	orange3: '#ff7800',
	orange4: '#e66100',
	orange5: '#c64600',
	red1: '#f66151',
	red2: '#ed333b',
	red3: '#e01b24',
	red4: '#c01c28',
	red5: '#a51d2d',
	purple1: '#dc8add',
	purple2: '#c061cb',
	purple3: '#9141ac',
	purple4: '#813d9c',
	purple5: '#613583',
	brown1: '#cdab8f',
	brown2: '#b5835a',
	brown3: '#986a44',
	brown4: '#865e3c',
	brown5: '#63452c',
	light1: '#ffffff',
	light2: '#f6f5f4',
	light3: '#deddda',
	light4: '#c0bfbc',
	light5: '#9a9996',
	dark1: '#77767b',
	dark2: '#5e5c64',
	dark3: '#3d3846',
	dark4: '#241f31',
	dark5: '#000000',
}

export const gaps = {
	extra_narrow: '0.25rem',
	narrower: '0.5rem',
	narrow: '0.75rem',
	normal:  '1rem',
	wide: '1.25rem',
	wider: '1.5rem',
	extra_wide: '2rem',
};

export const full_height = style({ 'min-height': '100dvh' });
export const flex = style({ 'display': 'flex' });
export const flex_gap_normal = style({ 'gap': gaps.normal });
export const flex_vertically = style({ 'flex-direction': 'column' });
export const rounded = style({'border-radius': gaps.extra_narrow});
export const pad_narrower = style({'padding': gaps.narrower});
export const bold = style({'font-weight': 'bold'});
export const pointer = style({'cursor': 'pointer'});
export const center = style({'text-align': 'center'});
export const justify_center = style({'justify-content': 'center'});
