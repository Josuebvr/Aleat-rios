class OverlayMap {
    constructor(tileSize) {
      this.tileSize = tileSize;
    }
  
    getTile(coord, zoom, ownerDocument) {
      var div = ownerDocument.createElement('div');
      div.style.width = this.tileSize.width + 'px';
      div.style.height = this.tileSize.height + 'px';
      div.style.fontSize = '10px';
      div.style.borderStyle = 'solid';
      div.style.borderWidth = '1px';
      div.style.borderColor = '#333';
      return div;
    }
  }
  
  var map;
  
  function initMap() {
    var mapOptions = {
      center: {lat: -3.716816, lng: -38.519115},
      zoom: 3,
    };
  
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    // Chama o método para adicionar os marcadores depois de inicializar o mapa
    console.log('Iniciando a leitura do arquivo XLSX');
    readExcel('https://docs.google.com/spreadsheets/d/1EB3kqVZnBmeJFvGh01lLX7R3E-SwZ40RgGqyhAEyaKQ/edit?usp=sharing');
  }
  
  function addMarkers(map, coordinates) {
    // Adiciona um marcador para cada conjunto de coordenadas
    console.log('Adicionando marcadores ao mapa');
    coordinates.forEach(function(coordinate) {
      var marker = new google.maps.Marker({
        position: {lat:coordinate.lat, lng:coordinate.lng},
        map: map
      });
    });
    console.log('Marcadores adicionados ao mapa');
  }
  
  function readExcel(filePath) {
    fetch(filePath)
      .then(response => response.arrayBuffer())
      .then(buffer => {
        var workbook = XLSX.read(buffer, {type: 'array'});
        var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
  
        // Cria um array de coordenadas
        var coordinates = [];
        for (var cell in firstSheet) {
          if (cell[0] === 'A') {
            var latitude = firstSheet[cell].v;
          } else if (cell[0] === 'B') {
            var longitude = firstSheet[cell].v;
            if (typeof latitude === 'number' && typeof longitude === 'number') {
              coordinates.push({lat: latitude, lng: longitude});
              console.log("A");
            }
          }
        }
      coordinates = coordinates.map(c => {
          c.lat = parseFloat(c.lat);
          c.lng = parseFloat(c.lng);
          return c;
      });
          console.log(coordinates);
          console.log('Arquivo XLSX lido com sucesso');
    
          // Adiciona os marcadores ao mapa
          addMarkers(map, coordinates);
      })
      .catch(error => console.log(error));
  }
  
  window.onload = function() {
     initMap();
     console.log(map);
  }