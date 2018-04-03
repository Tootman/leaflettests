myApp = new Vue({
    el: '#app',
    data: function() {return {
        map: null,
        tileLayer: null,
        popup: null,
        testVar1:{name:"Barry", age:26},
        geojsonFeatures: { "type": "FeatureCollection", "myprop": "hello", "myProp2": [{ "name": "Jimmy", "age": 25 }, { "name": "Freddy", "age": 26 }], "features": [{ "type": "Feature", "geometry": { "type": "Point", "coordinates": [0.3, 51] }, "properties": { "prop0": "value0" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [0.35, 51.2] }, "properties": { "prop0": "value0" } }, { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [
             [0.3, 51.1],    [0.3, 51.2],  [0.2, 51.4],   [0.1, 51.3]    ] }, "properties": { "prop0": "value0", "prop1": 0, "prop2": [{ "subprop1": "val2", "sb2": "val2b" }, { "subprop2": "val2", "sb2": "val2b" }] } }, { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [
              [ [0.3, 51],   [0.4, 51],  [0.4, 51.1],    [0.4, 51.1],     [0.3, 51]    ] ] }, "properties": { "prop0": "value0", "prop1": { "this": "that", "p2": "val2" } }, "myProp": "x" }] },
        myVar: "Jimmy!"
    }},
    mounted() { /* Code to run when app is mounted */
        this.initMap();
    },
    methods: {
        initMap() {
            this.map = L.map('mapid').setView([51.505, -0.09], 12);
            this.tileLayer = L.tileLayer(
                'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png', {
                    maxZoom: 20,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
                }
            ).addTo(this.map);

            var marker1 = L.marker([51.5, -0.09]).addTo(this.map).bindPopup("<b>Hello world1!</b><br>I am a popup.").openPopup();
            var marker2 = L.marker([51.45, -0.09]).addTo(this.map).bindPopup("<b>Hello world2!</b><br>I am a popup.").openPopup();
            var marker3 = L.marker([51.5, -0.15]).addTo(this.map).bindPopup("<b>Hello world!3</b><br>I am a popup.").openPopup();
            var myMarkers = L.layerGroup([marker1, marker2]);
            // var myMarkers2 = L.layerGroup([marker3]);

            // this.geoJSONFeatures = { "type": "FeatureCollection", "myprop": "hello", "myProp2": [{ "name": "Jimmy", "age": 25 }, { "name": "Freddy", "age": 26 }], "features": [{ "type": "Feature", "geometry": { "type": "Point", "coordinates": [0.3, 51] }, "properties": { "prop0": "value0" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [0.35, 51.2] }, "properties": { "prop0": "value0" } }, { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [
            //  [0.3, 51.1],    [0.3, 51.2],  [0.2, 51.4],   [0.1, 51.3]    ] }, "properties": { "prop0": "value0", "prop1": 0, "prop2": [{ "subprop1": "val2", "sb2": "val2b" }, { "subprop2": "val2", "sb2": "val2b" }] } }, { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [
             // [ [0.3, 51],   [0.4, 51],  [0.4, 51.1],    [0.4, 51.1],     [0.3, 51]    ] ] }, "properties": { "prop0": "value0", "prop1": { "this": "that", "p2": "val2" } }, "myProp": "x" }] };
             //L.geoJSON(geoJSONFeatures).addTo(this.map);

            var geoLayer = L.geoJSON(this.$data.geoJSONFeatures);
            //geoLayer.addTo(this.map);
            //geoLayer.addTo(this.map);
            //console.log ("Var :" + this.myVar);
            //console.log("var2: " + this.testVar1);
            console.log("geo: " + geoLayer);

            // not working!
           // geol.addTo(this.map);

            var overlayMaps = {
                Markers: myMarkers,
                Layer2: marker3,
                Layer3: geoLayer
            };

            L.control.layers(overlayMaps).addTo(this.map);
            

            // map event callback working - but popup.openOn /openPopup is undefined so not working
            
            /*
            popup = L.popup();
             this.map.on("click", function(event) {
                popup.setLatLng(event.latlng)
                popup.setContent("You clicked the map at " + event.latlng.toString())
                console.log("clicked!: " + event.latlng.toString());
                popup.openOn(this.map);
                //this.map.openPopup(popup);
                // do some stuff…
            });
            */

            
             
        }


    }
})