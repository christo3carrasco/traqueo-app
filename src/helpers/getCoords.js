export const getCoords = (latitude, longitude) => {
  const earthRadius = 6378137;
  const radiusInMeters = 222;

  const latRadius = radiusInMeters / earthRadius;
  const lngRadius =
    radiusInMeters / (earthRadius * Math.cos((Math.PI * latitude) / 180));

  const minLat = latitude - (latRadius * 180) / Math.PI;
  const maxLat = latitude + (latRadius * 180) / Math.PI;
  const minLng = longitude - (lngRadius * 180) / Math.PI;
  const maxLng = longitude + (lngRadius * 180) / Math.PI;

  const urlCoords =
    `https://www.openstreetmap.org/export/embed.html` +
    `?bbox=${minLng},${minLat},${maxLng},${maxLat}&layer=mapnik` +
    `&marker=${latitude},${longitude}`;
  return urlCoords;
};
