let map = L.map('map').setView([58.373523, 26.716045], 12)
const osm =
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'OpenStreetMap contributors',
      })
osm.addTo(map)

async function addGeoJson(url) {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data.features[0])
}

addGeoJson('geojson/tartu_city_celltowers_edu.geojson')

function defaultMapSettings() {
      map.setView([58.373523, 26.716045], 12)
}
