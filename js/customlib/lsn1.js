var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
});

var layer = new Konva.Layer();

var krakenHead = new Konva.Line({
    // (x, y)
    points: [
        150, 200,
        200, 200, //base line
        250, 100,
        180, 20,
        100, 100
    ],
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 1,
    closed: true
});

krakenHead.move({
    x: 350,
    y: 75
})

var krakenRightTen = new Konva.Line({
    // (x, y)
    points: [
        100, 225,
        150, 200,
        225, 325,
        260, 300,
        275, 325,
        220, 350,
        140, 230,
        100, 225,
    ],
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 1,
    closed: true
});

krakenRightTen.move({
    x: 220,
    y: -65
})

var krakenLeftTen = new Konva.Line({
    // (x, y)
    points: [
        200, 225,
        210, 200,
        250, 250,
        340, 140,
        390, 190,
        350, 180,
        250, 280,
        200, 225
    ],
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 1,
    closed: true
});

krakenLeftTen.move({
    x: 365,
    y: 25
})

var krakenDright = new Konva.Line({
    // (x, y)
    points: [
        200, 225,
        225, 225,
        200, 275,
        150, 340,
        130, 385,
        120, 330,
        180, 280,
        200, 225
    ],
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 1,
    closed: true
});

krakenDright.move({
    x: 295,
    y: 50
})

var krakenDleft = new Konva.Line({
    // (x, y)
    points: [
        200, 225,
        225, 225,
        225, 285,
        300, 330,
        300, 370,
        280, 340,
        200, 285,
        200, 225
    ],
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 1,
    closed: true
});

krakenDleft.move({
    x: 330,
    y: 50
})

// add the shape to the layer
layer.add(krakenHead);
layer.add(krakenRightTen);
layer.add(krakenLeftTen);
layer.add(krakenDright);
layer.add(krakenDleft);

// add the layer to the stage
stage.add(layer);