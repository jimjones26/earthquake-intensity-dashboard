import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ fetch }) => {
  // initial call to USGS GeoJSON realtime feed for last 24 hours
  const earthquakeDataUrl: string = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson';

  const earthquakeDataRes: Response = await fetch(earthquakeDataUrl);

  // return data fetch response to data object
  return {
    rawEarthquakeData: await earthquakeDataRes.json()
  }
};

/*
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson
*/