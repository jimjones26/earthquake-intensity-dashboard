import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	return {
		earthquakes: [
			{
				id: 1,
				intensity: 7.2,
				time: '24h 11m',
				location: 'Syracuse, Connecticut',
				coordinates: '-7.67733, 19.16687',
				distanced: '14.94 mi',
				depth: '1.94 mi'
			},
			{
				id: 2,
				intensity: 3.6,
				time: '22h 01m',
				location: '34th St W, Bradenton, USA',
				coordinates: '28.96065, -123.11716',
				distanced: '147 mi',
				depth: '62 mi'
			},
			{
				id: 3,
				intensity: 1.6,
				time: '11h 34m',
				location: 'H.G. Suite 113, Wardville',
				coordinates: '28.96065, -123.11716',
				distanced: '12.8 mi',
				depth: '1.22 mi'
			},
			{
				id: 4,
				intensity: 6.9,
				time: '14h 12m',
				location: 'Johnston Lock, East Halton',
				coordinates: '-7.67733, 19.16687',
				distanced: '144 mi',
				depth: '63 mi'
			},
			{
				id: 5,
				intensity: 1.6,
				time: '11h 34m',
				location: 'H.G. Suite 113, Wardville',
				coordinates: '28.96065, -123.11716',
				distanced: '12.18 mi',
				depth: '1.22 mi'
			},
			{
				id: 6,
				intensity: 1.6,
				time: '11h 34m',
				location: 'H.G. Suite 113, Wardville',
				coordinates: '28.96065, -123.11716',
				distanced: '12.18 mi',
				depth: '1.22 mi'
			},
			{
				id: 7,
				intensity: 4.2,
				time: '16h 23m',
				location: 'T.M. Suite 123, Adellaton',
				coordinates: '-19.50289, 175.41761',
				distanced: '166 mi',
				depth: '34 mi'
			},
			{
				id: 8,
				intensity: 1.6,
				time: '11h 34m',
				location: 'H.G. Suite 113, Wardville',
				coordinates: '28.96065, -123.11716',
				distanced: '12.18 mi',
				depth: '1.22 mi'
			},
			{
				id: 9,
				intensity: 1.6,
				time: '11h 34m',
				location: 'H.G. Suite 113, Wardville',
				coordinates: '28.96065, -123.11716',
				distanced: '12.18 mi',
				depth: '1.22 mi'
			},
			{
				id: 10,
				intensity: 7.2,
				time: '2h 19m',
				location: 'Casper Locks, Bashirianland',
				coordinates: '-7.67733, 19.16687',
				distanced: '16.94 mi',
				depth: '8.09 mi'
			},
			{
				id: 11,
				intensity: 1.6,
				time: '7h 22m',
				location: 'Micaela Cliffs, Thielshire',
				coordinates: '28.96065, -123.11716',
				distanced: '17.27 mi',
				depth: '1.62 mi'
			},
			{
				id: 12,
				intensity: 3.2,
				time: '13h 50m',
				location: 'W. Harbors, New Lauretta',
				coordinates: '-59.17503, 0.85927',
				distanced: '12.33 mi',
				depth: '2.93 mi'
			},
			{
				id: 13,
				intensity: 1.6,
				time: '6h 03m',
				location: 'B. Crescent, New Llewelly',
				coordinates: '28.96065, -123.11716',
				distanced: '17.27 mi',
				depth: '1.62 mi'
			},
			{
				id: 14,
				intensity: 7.2,
				time: '14h 12m',
				location: 'Johnston Lock, East Halton',
				coordinates: '-7.67733, 19.16687',
				distanced: '15.30 mi',
				depth: '9.31 mi'
			},
			{
				id: 15,
				intensity: 1.6,
				time: '11h 34m',
				location: 'H.G. Suite 113, Wardville',
				coordinates: '28.96065, -123.11716',
				distanced: '12.18 mi',
				depth: '1.22 mi'
			},
			{
				id: 16,
				intensity: 7.2,
				time: '24h 11m',
				location: 'Syracuse, Connecticut',
				coordinates: '-7.67733, 19.16687',
				distanced: '14.94 mi',
				depth: '1.94 mi'
			},
			{
				id: 17,
				intensity: 3.6,
				time: '22h 01m',
				location: '34th St W, Bradenton, USA',
				coordinates: '28.96065, -123.11716',
				distanced: '147 mi',
				depth: '62 mi'
			},
			{
				id: 18,
				intensity: 1.6,
				time: '11h 34m',
				location: 'H.G. Suite 113, Wardville',
				coordinates: '28.96065, -123.11716',
				distanced: '12.8 mi',
				depth: '1.22 mi'
			},
			{
				id: 19,
				intensity: 6.9,
				time: '14h 12m',
				location: 'Johnston Lock, East Halton',
				coordinates: '-7.67733, 19.16687',
				distanced: '144 mi',
				depth: '63 mi'
			},
			{
				id: 20,
				intensity: 1.6,
				time: '11h 34m',
				location: 'H.G. Suite 113, Wardville',
				coordinates: '28.96065, -123.11716',
				distanced: '12.18 mi',
				depth: '1.22 mi'
			},
			{
				id: 21,
				intensity: 1.6,
				time: '11h 34m',
				location: 'H.G. Suite 113, Wardville',
				coordinates: '28.96065, -123.11716',
				distanced: '12.18 mi',
				depth: '1.22 mi'
			},
			{
				id: 22,
				intensity: 4.2,
				time: '16h 23m',
				location: 'T.M. Suite 123, Adellaton',
				coordinates: '-19.50289, 175.41761',
				distanced: '166 mi',
				depth: '34 mi'
			},
			{
				id: 23,
				intensity: 1.6,
				time: '11h 34m',
				location: 'H.G. Suite 113, Wardville',
				coordinates: '28.96065, -123.11716',
				distanced: '12.18 mi',
				depth: '1.22 mi'
			},
			{
				id: 24,
				intensity: 1.6,
				time: '11h 34m',
				location: 'H.G. Suite 113, Wardville',
				coordinates: '28.96065, -123.11716',
				distanced: '12.18 mi',
				depth: '1.22 mi'
			},
			{
				id: 25,
				intensity: 7.2,
				time: '2h 19m',
				location: 'Casper Locks, Bashirianland',
				coordinates: '-7.67733, 19.16687',
				distanced: '16.94 mi',
				depth: '8.09 mi'
			},
			{
				id: 26,
				intensity: 1.6,
				time: '7h 22m',
				location: 'Micaela Cliffs, Thielshire',
				coordinates: '28.96065, -123.11716',
				distanced: '17.27 mi',
				depth: '1.62 mi'
			},
			{
				id: 27,
				intensity: 3.2,
				time: '13h 50m',
				location: 'W. Harbors, New Lauretta',
				coordinates: '-59.17503, 0.85927',
				distanced: '12.33 mi',
				depth: '2.93 mi'
			},
			{
				id: 28,
				intensity: 1.6,
				time: '6h 03m',
				location: 'B. Crescent, New Llewelly',
				coordinates: '28.96065, -123.11716',
				distanced: '17.27 mi',
				depth: '1.62 mi'
			},
			{
				id: 29,
				intensity: 7.2,
				time: '14h 12m',
				location: 'Johnston Lock, East Halton',
				coordinates: '-7.67733, 19.16687',
				distanced: '15.30 mi',
				depth: '9.31 mi'
			},
			{
				id: 30,
				intensity: 1.6,
				time: '11h 34m',
				location: 'H.G. Suite 113, Wardville',
				coordinates: '28.96065, -123.11716',
				distanced: '12.18 mi',
				depth: '1.22 mi'
			},
		]
	};
};