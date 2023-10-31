/*
Design shows the following data:

Upper right summary
- Number of earthquakes
    Object.metadata.count
- Average frequency
    Not sure how to calculate this?
- Maximum magnitude
    Max of Object.features.object.mag
- Minimum magnitude
    Min of Object.features.object.mag

List items
- Magnitude
    Object.features.object.mag / Object.features.object.magType
- Time
    Object.features.object.properties.time (milliseconds since the epoch, UTC)
- Location
    Object.features.object.place
- Coordinates
    Object.features.object.geometry.object.coordinates (long(arr index 0) lat(arr index 1))
- Distanced
    Object.features.object.properties.dmin
- Depth
    Object.features.object.geometry.object.coordinates.depth (arr index 2) (in km)

Chart
- Intensity, points
    Aggregate of Object.features.object.properties.cdi
- Magnitude, points
    Aggregate of Object.features.object.properties.mag
- Depth, miles
    Aggregate of Object.features.object.geometry.object.coordinates.depth (arr index 2)
- Distance, miles
    Aggregate of Object.features.object.properties.dmin
- Buildings destroyed

- Roads destroyed

- People injured

- People deaths

*/

/*
URL to api data point descriptions
https://earthquake.usgs.gov/data/comcat/index.php#dmin
*/