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
			}
		]
	};
};