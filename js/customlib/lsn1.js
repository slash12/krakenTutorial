var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
});

var layer = new Konva.Layer();

var poly = new Konva.Line({
    // (x, y)
    points: [
        10, 20, //starting point
        198, 20, // top line
        198, 198, //right line
        150, 100, // first tentacle
        100, 200,
        50, 100,
        10, 200
    ],
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 5,
    closed: true
});

// add the shape to the layer
layer.add(poly);

// add the layer to the stage
stage.add(layer);