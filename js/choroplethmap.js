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
      L.choropleth(data, {
            valueProperty: 'TOWERS',
            scale: ['#F2E6FF', '#8000FF'],
            steps: 5,
            mode: 'e',
            style: {
                  color: '#fff',
                  weight: 1.5,
                  fillOpacity: 0.8,
            },
            onEachFeature: function (feature, layer) {
                  layer.bindPopup('Number of cell towers: ' + feature.properties.TOWERS)
            },
      }).addTo(map)
}

addGeoJson('geojson/tartu_city_districts_edu.geojson')

function defaultMapSettings() {
      map.setView([58.373523, 26.716045], 12)
}
