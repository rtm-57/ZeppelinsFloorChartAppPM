// All button positions and types based on the Python GUI layout
const buttonPositions = [
    // Regular Buttons
    { id: "AB 4", x: 435, y: 50, type: "regular" },
    { id: "AB 5", x: 435, y: 125, type: "regular" },
    { id: "AB 6", x: 435, y: 200, type: "regular" },
    { id: "AB 7", x: 435, y: 275, type: "regular" },
    { id: "AB 8", x: 435, y: 350, type: "regular" },
    { id: "AB 3", x: 500, y: 425, type: "regular" },
    { id: "AB 2", x: 560, y: 425, type: "regular" },
    { id: "AB 1", x: 620, y: 425, type: "regular" },
    { id: "BB 1", x: 690, y: 50, type: "regular" },
    { id: "BB 2", x: 690, y: 350, type: "regular" },
    { id: "BT 7", x: 690, y: 125, type: "regular" },
    { id: "BT 5", x: 780, y: 75, type: "buttonv" },
    { id: "BT 4", x: 850, y: 75, type: "buttonv" },
    { id: "BT 3", x: 920, y: 75, type: "buttonv" },
    { id: "BT 2", x: 990, y: 75, type: "buttonv" },
    { id: "CT 1", x: 1070, y: 150, type: "regular" },
    { id: "CT 2", x: 1070, y: 225, type: "regular" },
    { id: "CT 3", x: 1070, y: 300, type: "regular" },
    { id: "GT 1", x: 1100, y: 25, type: "regular" },
    { id: "GT 2", x: 1030, y: 25, type: "regular" },
    { id: "GT 3", x: 960, y: 25, type: "regular" },
    { id: "GT 4", x: 890, y: 25, type: "regular" },
    { id: "GT 5", x: 820, y: 25, type: "regular" },
    { id: "RT 9", x: 1140, y: 200, type: "regular" },
    { id: "RT 10", x: 1140, y: 300, type: "regular" },
    { id: "RB 1", x: 1425, y: 100, type: "regular" },
    { id: "RB 2", x: 1425, y: 175, type: "regular" },
    { id: "RB 3", x: 1425, y: 250, type: "regular" },
    { id: "RB 4", x: 1425, y: 325, type: "regular" },
    { id: "ZB 1", x: 1425, y: 450, type: "regular" },
    { id: "ZB 2", x: 1425, y: 525, type: "regular" },
    { id: "ZB 3", x: 1425, y: 600, type: "regular" },
    { id: "ZB 4", x: 1425, y: 675, type: "regular" },
    { id: "ZT 5", x: 1240, y: 450, type: "buttonv" },
    { id: "ZT 6", x: 1240, y: 525, type: "buttonv" },
    { id: "ZT 7", x: 1240, y: 600, type: "buttonv" },
    { id: "ZT 8", x: 1240, y: 675, type: "buttonv" },
    { id: "ZT 1", x: 1335, y: 450, type: "buttonv" },
    { id: "ZT 2", x: 1335, y: 525, type: "buttonv" },
    { id: "ZT 3", x: 1335, y: 600, type: "buttonv" },
    { id: "ZT 4", x: 1335, y: 675, type: "buttonv" },
    // Circular Buttons
    { id: "AT 2", x: 610, y: 325, type: "circular" },
    { id: "BT 6", x: 760, y: 120, type: "circular" },
    { id: "BT 1", x: 1070, y: 75, type: "circular" },
    { id: "RT 1", x: 1400, y: 25, type: "circular" },
    { id: "RT 2", x: 1320, y: 25, type: "circular" },
    { id: "BT 8", x: 690, y: 270, type: "circular" },
    // Diamond Buttons
    { id: "AT 3", x: 505, y: 50, type: "diamond" },
    { id: "AT 1", x: 600, y: 50, type: "diamond" },
    { id: "RT 6", x: 1240, y: 100, type: "diamond" },
    { id: "RT 7", x: 1240, y: 200, type: "diamond" },
    { id: "RT 8", x: 1240, y: 300, type: "diamond" },
    { id: "RT 3", x: 1335, y: 100, type: "diamond" },
    { id: "RT 4", x: 1335, y: 200, type: "diamond" },
    { id: "RT 5", x: 1335, y: 300, type: "diamond" },
    { id: "AT 4", x: 505, y: 125, type: "diamond" },
    { id: "AT 7", x: 600, y: 175, type: "diamond" },
    { id: "AT 5", x: 505, y: 250, type: "diamond" },
    { id: "AT 6", x: 505, y: 350, type: "diamond" },
    { id: "AT 8", x: 600, y: 250, type: "diamond" },
];

const linePoints1 = [
        //Outline
        { start: { x: 430, y: 25 }, end: { x: 780, y: 25 } },
        { start: { x: 780, y: 25 }, end: { x: 780, y: 62 } },
        { start: { x: 780, y: 62 }, end: { x: 1175, y: 62 } },
        { start: { x: 1175, y: 62 }, end: { x: 1175, y: 25 } },
        { start: { x: 1175, y: 25 }, end: { x: 1500, y: 25 } },
        { start: { x: 1500, y: 25 }, end: { x: 1500, y: 715 } },
        { start: { x: 1500, y: 715 }, end: { x: 1230, y: 715 } },
        { start: { x: 1230, y: 715 }, end: { x: 1230, y: 400 } },
        { start: { x: 1230, y: 400 }, end: { x: 1125, y: 400 } },
        { start: { x: 1125, y: 400 }, end: { x: 1125, y: 62 } },
        { start: { x: 1500, y: 400 }, end: { x: 680, y: 400 } },
        { start: { x: 680, y: 400 }, end: { x: 680, y: 460 } },
        { start: { x: 680, y: 460 }, end: { x: 430, y: 460 } },
        { start: { x: 430, y: 460 }, end: { x: 430, y: 25 } },
        
        
        //Bar including BB2
        { start: { x: 680, y: 400 }, end: { x: 680, y: 25 } },
]

const linePoints2 = [
        //Outline
        { start: { x: 430, y: 25 }, end: { x: 780, y: 25 } },
        { start: { x: 780, y: 25 }, end: { x: 780, y: 62 } },
        { start: { x: 780, y: 62 }, end: { x: 1175, y: 62 } },
        { start: { x: 1175, y: 62 }, end: { x: 1175, y: 25 } },
        { start: { x: 1175, y: 25 }, end: { x: 1500, y: 25 } },
        { start: { x: 1500, y: 25 }, end: { x: 1500, y: 715 } },
        { start: { x: 1500, y: 715 }, end: { x: 1230, y: 715 } },
        { start: { x: 1230, y: 715 }, end: { x: 1230, y: 400 } },
        { start: { x: 1230, y: 400 }, end: { x: 1125, y: 400 } },
        { start: { x: 1125, y: 400 }, end: { x: 1125, y: 62 } },
        { start: { x: 1125, y: 400 }, end: { x: 680, y: 400 } },
        { start: { x: 680, y: 400 }, end: { x: 680, y: 460 } },
        { start: { x: 680, y: 460 }, end: { x: 430, y: 460 } },
        { start: { x: 430, y: 460 }, end: { x: 430, y: 25 } },
        

]

const linePoints4 = [
    //Outline
    { start: { x: 430, y: 25 }, end: { x: 780, y: 25 } },
    { start: { x: 780, y: 25 }, end: { x: 780, y: 62 } },
    { start: { x: 780, y: 62 }, end: { x: 1175, y: 62 } },
    { start: { x: 1175, y: 62 }, end: { x: 1175, y: 25 } },
    { start: { x: 1175, y: 25 }, end: { x: 1500, y: 25 } },
    { start: { x: 1500, y: 25 }, end: { x: 1500, y: 715 } },
    { start: { x: 1500, y: 715 }, end: { x: 1230, y: 715 } },
    { start: { x: 1230, y: 715 }, end: { x: 1230, y: 400 } },
    { start: { x: 1230, y: 400 }, end: { x: 1125, y: 400 } },
    { start: { x: 1125, y: 400 }, end: { x: 1125, y: 62 } },
    { start: { x: 1125, y: 400 }, end: { x: 680, y: 400 } },
    { start: { x: 680, y: 400 }, end: { x: 680, y: 460 } },
    { start: { x: 680, y: 460 }, end: { x: 430, y: 460 } },
    { start: { x: 430, y: 460 }, end: { x: 430, y: 25 } },
    
    //Bar including BB2
    { start: { x: 680, y: 400 }, end: { x: 680, y: 25 } },
    
    //3 servers on dining
    { start: { x: 1500, y: 282 }, end: { x: 1310, y: 282 } },
    { start: { x: 1310, y: 282 }, end: { x: 1310, y: 170 } },
    { start: { x: 1310, y: 170 }, end: { x: 1125, y: 170 } },
    { start: { x: 1500, y: 495 }, end: { x: 1400, y: 495 } },
    { start: { x: 1400, y: 495 }, end: { x: 1400, y: 400 } },
    { start: { x: 1400, y: 400 }, end: { x: 1310, y: 400 } },
    { start: { x: 1310, y: 400 }, end: { x: 1310, y: 640 } },
    { start: { x: 1310, y: 640 }, end: { x: 1230, y: 640 } },
    
    

    
];
const linePoints5 = [
    //Outline
    { start: { x: 430, y: 25 }, end: { x: 780, y: 25 } },
    { start: { x: 780, y: 25 }, end: { x: 780, y: 62 } },
    { start: { x: 780, y: 62 }, end: { x: 1175, y: 62 } },
    { start: { x: 1175, y: 62 }, end: { x: 1175, y: 25 } },
    { start: { x: 1175, y: 25 }, end: { x: 1500, y: 25 } },
    { start: { x: 1500, y: 25 }, end: { x: 1500, y: 715 } },
    { start: { x: 1500, y: 715 }, end: { x: 1230, y: 715 } },
    { start: { x: 1230, y: 715 }, end: { x: 1230, y: 400 } },
    { start: { x: 1230, y: 400 }, end: { x: 1125, y: 400 } },
    { start: { x: 1125, y: 400 }, end: { x: 1125, y: 62 } },
    { start: { x: 1125, y: 400 }, end: { x: 680, y: 400 } },
    { start: { x: 680, y: 400 }, end: { x: 680, y: 460 } },
    { start: { x: 680, y: 460 }, end: { x: 430, y: 460 } },
    { start: { x: 430, y: 460 }, end: { x: 430, y: 25 } },
        
    //Bar including BB2
    { start: { x: 680, y: 400 }, end: { x: 680, y: 25 } },
    
    //3 servers on dining
    { start: { x: 1500, y: 282 }, end: { x: 1310, y: 282 } },
    { start: { x: 1310, y: 282 }, end: { x: 1310, y: 170 } },
    { start: { x: 1310, y: 170 }, end: { x: 1125, y: 170 } },
    { start: { x: 1500, y: 495 }, end: { x: 1400, y: 495 } },
    { start: { x: 1400, y: 495 }, end: { x: 1400, y: 400 } },
    { start: { x: 1400, y: 400 }, end: { x: 1310, y: 400 } },
    { start: { x: 1310, y: 400 }, end: { x: 1310, y: 640 } },
    { start: { x: 1310, y: 640 }, end: { x: 1230, y: 640 } },
    
    //Cove
    { start: { x: 910, y: 62 }, end: { x: 910, y: 400 } },
    
    
    
];
const linePoints6 = [
    //Outline
    { start: { x: 430, y: 25 }, end: { x: 780, y: 25 } },
    { start: { x: 780, y: 25 }, end: { x: 780, y: 62 } },
    { start: { x: 780, y: 62 }, end: { x: 1175, y: 62 } },
    { start: { x: 1175, y: 62 }, end: { x: 1175, y: 25 } },
    { start: { x: 1175, y: 25 }, end: { x: 1500, y: 25 } },
    { start: { x: 1500, y: 25 }, end: { x: 1500, y: 715 } },
    { start: { x: 1500, y: 715 }, end: { x: 1230, y: 715 } },
    { start: { x: 1230, y: 715 }, end: { x: 1230, y: 400 } },
    { start: { x: 1230, y: 400 }, end: { x: 1125, y: 400 } },
    { start: { x: 1125, y: 400 }, end: { x: 1125, y: 62 } },
    { start: { x: 1125, y: 400 }, end: { x: 680, y: 400 } },
    { start: { x: 680, y: 400 }, end: { x: 680, y: 460 } },
    { start: { x: 680, y: 460 }, end: { x: 430, y: 460 } },
    { start: { x: 430, y: 460 }, end: { x: 430, y: 25 } },
    
    //Bar including BB2
    { start: { x: 680, y: 400 }, end: { x: 680, y: 25 } },
    
    //4 servers on dining
    { start: { x: 1500, y: 220 }, end: { x: 1410, y: 220 } },
    { start: { x: 1410, y: 220 }, end: { x: 1410, y: 180 } },
    { start: { x: 1410, y: 180 }, end: { x: 1125, y: 180 } },
    { start: { x: 1500, y: 370 }, end: { x: 1210, y: 370 } },
    { start: { x: 1210, y: 370 }, end: { x: 1210, y: 180 } },
    { start: { x: 1500, y: 560 }, end: { x: 1400, y: 560 } },
    { start: { x: 1400, y: 560 }, end: { x: 1400, y: 400 } },
    { start: { x: 1400, y: 400 }, end: { x: 1310, y: 400 } },
    { start: { x: 1310, y: 400 }, end: { x: 1310, y: 640 } },
    { start: { x: 1310, y: 640 }, end: { x: 1230, y: 640 } },
    
    //Cove
    { start: { x: 910, y: 62 }, end: { x: 910, y: 400 } },
    

    
];
const linePoints7 = [
    //Outline
    { start: { x: 430, y: 25 }, end: { x: 780, y: 25 } },
    { start: { x: 780, y: 25 }, end: { x: 780, y: 62 } },
    { start: { x: 780, y: 62 }, end: { x: 1175, y: 62 } },
    { start: { x: 1175, y: 62 }, end: { x: 1175, y: 25 } },
    { start: { x: 1175, y: 25 }, end: { x: 1500, y: 25 } },
    { start: { x: 1500, y: 25 }, end: { x: 1500, y: 715 } },
    { start: { x: 1500, y: 715 }, end: { x: 1230, y: 715 } },
    { start: { x: 1230, y: 715 }, end: { x: 1230, y: 400 } },
    { start: { x: 1230, y: 400 }, end: { x: 1125, y: 400 } },
    { start: { x: 1125, y: 400 }, end: { x: 1125, y: 62 } },
    { start: { x: 1125, y: 400 }, end: { x: 680, y: 400 } },
    { start: { x: 680, y: 400 }, end: { x: 680, y: 460 } },
    { start: { x: 680, y: 460 }, end: { x: 430, y: 460 } },
    { start: { x: 430, y: 460 }, end: { x: 430, y: 25 } },
    
    //Bar including BB2
    { start: { x: 680, y: 400 }, end: { x: 680, y: 25 } },
    
    //3 servers on dining
    { start: { x: 1500, y: 282 }, end: { x: 1310, y: 282 } },
    { start: { x: 1310, y: 282 }, end: { x: 1310, y: 170 } },
    { start: { x: 1310, y: 170 }, end: { x: 1125, y: 170 } },
    { start: { x: 1500, y: 495 }, end: { x: 1400, y: 495 } },
    { start: { x: 1400, y: 495 }, end: { x: 1400, y: 400 } },
    { start: { x: 1400, y: 400 }, end: { x: 1310, y: 400 } },
    { start: { x: 1310, y: 400 }, end: { x: 1310, y: 640 } },
    { start: { x: 1310, y: 640 }, end: { x: 1230, y: 640 } },
    
    //Cove
    { start: { x: 910, y: 62 }, end: { x: 910, y: 400 } },
    
    //Addition
    { start: { x: 430, y: 238 }, end: { x: 680, y: 238 } },
    
];
const linePoints8 = [
    //Outline
    { start: { x: 430, y: 25 }, end: { x: 780, y: 25 } },
    { start: { x: 780, y: 25 }, end: { x: 780, y: 62 } },
    { start: { x: 780, y: 62 }, end: { x: 1175, y: 62 } },
    { start: { x: 1175, y: 62 }, end: { x: 1175, y: 25 } },
    { start: { x: 1175, y: 25 }, end: { x: 1500, y: 25 } },
    { start: { x: 1500, y: 25 }, end: { x: 1500, y: 715 } },
    { start: { x: 1500, y: 715 }, end: { x: 1230, y: 715 } },
    { start: { x: 1230, y: 715 }, end: { x: 1230, y: 400 } },
    { start: { x: 1230, y: 400 }, end: { x: 1125, y: 400 } },
    { start: { x: 1125, y: 400 }, end: { x: 1125, y: 62 } },
    { start: { x: 1125, y: 400 }, end: { x: 680, y: 400 } },
    { start: { x: 680, y: 400 }, end: { x: 680, y: 460 } },
    { start: { x: 680, y: 460 }, end: { x: 430, y: 460 } },
    { start: { x: 430, y: 460 }, end: { x: 430, y: 25 } },
    
    //Bar including BB2
    { start: { x: 680, y: 400 }, end: { x: 680, y: 25 } },
    
    //4 servers on dining
    { start: { x: 1500, y: 220 }, end: { x: 1410, y: 220 } },
    { start: { x: 1410, y: 220 }, end: { x: 1410, y: 180 } },
    { start: { x: 1410, y: 180 }, end: { x: 1125, y: 180 } },
    { start: { x: 1500, y: 370 }, end: { x: 1210, y: 370 } },
    { start: { x: 1210, y: 370 }, end: { x: 1210, y: 180 } },
    { start: { x: 1500, y: 560 }, end: { x: 1400, y: 560 } },
    { start: { x: 1400, y: 560 }, end: { x: 1400, y: 400 } },
    { start: { x: 1400, y: 400 }, end: { x: 1310, y: 400 } },
    { start: { x: 1310, y: 400 }, end: { x: 1310, y: 640 } },
    { start: { x: 1310, y: 640 }, end: { x: 1230, y: 640 } },
    
    
    //Cove
    { start: { x: 910, y: 62 }, end: { x: 910, y: 400 } },

    
    //Addition
    { start: { x: 430, y: 238 }, end: { x: 490, y: 238 } },
    { start: { x: 490, y: 238 }, end: { x: 490, y: 325 } },
    { start: { x: 490, y: 325 }, end: { x: 580, y: 325 } },
    { start: { x: 580, y: 325 }, end: { x: 580, y: 238 } },
    { start: { x: 580, y: 238 }, end: { x: 680, y: 238 } },
    
];
const linePoints9 = [
    //Outline
    { start: { x: 430, y: 25 }, end: { x: 780, y: 25 } },
    { start: { x: 780, y: 25 }, end: { x: 780, y: 62 } },
    { start: { x: 780, y: 62 }, end: { x: 1175, y: 62 } },
    { start: { x: 1175, y: 62 }, end: { x: 1175, y: 25 } },
    { start: { x: 1175, y: 25 }, end: { x: 1500, y: 25 } },
    { start: { x: 1500, y: 25 }, end: { x: 1500, y: 715 } },
    { start: { x: 1500, y: 715 }, end: { x: 1230, y: 715 } },
    { start: { x: 1230, y: 715 }, end: { x: 1230, y: 400 } },
    { start: { x: 1230, y: 400 }, end: { x: 1125, y: 400 } },
    { start: { x: 1125, y: 400 }, end: { x: 1125, y: 62 } },
    { start: { x: 1125, y: 400 }, end: { x: 680, y: 400 } },
    { start: { x: 680, y: 400 }, end: { x: 680, y: 460 } },
    { start: { x: 680, y: 460 }, end: { x: 430, y: 460 } },
    { start: { x: 430, y: 460 }, end: { x: 430, y: 25 } },
    
    //Bar excluding BB2
    { start: { x: 750, y: 400 }, end: { x: 750, y: 320 } },
    { start: { x: 750, y: 320 }, end: { x: 680, y: 320 } },

    //4 servers on dining
    { start: { x: 1500, y: 220 }, end: { x: 1410, y: 220 } },
    { start: { x: 1410, y: 220 }, end: { x: 1410, y: 180 } },
    { start: { x: 1410, y: 180 }, end: { x: 1125, y: 180 } },
    { start: { x: 1500, y: 370 }, end: { x: 1210, y: 370 } },
    { start: { x: 1210, y: 370 }, end: { x: 1210, y: 180 } },
    { start: { x: 1500, y: 560 }, end: { x: 1400, y: 560 } },
    { start: { x: 1400, y: 560 }, end: { x: 1400, y: 400 } },
    { start: { x: 1400, y: 400 }, end: { x: 1310, y: 400 } },
    { start: { x: 1310, y: 400 }, end: { x: 1310, y: 640 } },
    { start: { x: 1310, y: 640 }, end: { x: 1230, y: 640 } },
    
    
    //Cove
    { start: { x: 910, y: 62 }, end: { x: 910, y: 400 } },

    
    //Addition
    { start: { x: 430, y: 320 }, end: { x: 490, y: 320 } },
    { start: { x: 490, y: 320 }, end: { x: 490, y: 415 } },
    { start: { x: 490, y: 415 }, end: { x: 600, y: 415 } },
    { start: { x: 600, y: 415 }, end: { x: 600, y: 320 } },
    { start: { x: 600, y: 320 }, end: { x: 680, y: 320 } },
    { start: { x: 680, y: 320 }, end: { x: 680, y: 25 } },
    { start: { x: 430, y: 170 }, end: { x: 490, y: 170 } },
    { start: { x: 490, y: 170 }, end: { x: 490, y: 198 } },
    { start: { x: 490, y: 198 }, end: { x: 570, y: 198 } },
    { start: { x: 570, y: 198 }, end: { x: 570, y: 150 } },
    { start: { x: 570, y: 150 }, end: { x: 680, y: 150 } },

];

let serverCount = 0;
// Show and hide modal logic
function showModal() {
    document.getElementById('serverModal').style.display = 'flex';
}

function hideModal() {
    document.getElementById('serverModal').style.display = 'none';
    document.getElementById('canvas-container').style.display = 'block';
}

// Drawing the layout
function drawFloorLayout() {
    const canvas = document.getElementById('floorCanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '16px Arial';
    ctx.fillStyle = 'black';
    
}

// Button timer logic


const buttonTimers = {};


function createButtons() {
    const controlsDiv = document.getElementById('controls');
    buttonPositions.forEach((button) => {
        const btn = document.createElement('button');
        btn.className = button.type === 'diamond' ? 'diamond-button' 
                    : button.type === 'circular' ? 'circular-button' 
                    : button.type === 'buttonv' ? 'vert-button' 
                    : 'station-button'; // Assign appropriate styles
        btn.id = button.id;
        btn.innerText = button.id;
        btn.style.left = `${button.x}px`;
        btn.style.top = `${button.y}px`;

        toggleTimer(btn, button.id);
        controlsDiv.appendChild(btn);
    });

    // Load button states
    loadState();
}
let pressCounts = {};
let undoStack = [];

function toggleTimer(btn, id) {
    if (!pressCounts[id]) pressCounts[id] = 0;

    btn.addEventListener("click", () => {
        // Save the current state before changing it
        undoStack.push({
            id: id,
            pressCount: pressCounts[id],
            color: btn.style.backgroundColor
        });

        pressCounts[id]++;
        btn.innerText = `${id}`;

        if (pressCounts[id] === 1) {
            btn.style.backgroundColor = "purple";
        } else if (pressCounts[id] === 2) {
            btn.style.backgroundColor = "green";
            const startTime = Date.now();
            const timer = setInterval(() => updateButtonColor(btn, Date.now() - startTime), 1000);
            buttonTimers[id] = { startTime, timer, active: true };
        } else if (pressCounts[id] === 3) {
            btn.style.backgroundColor = "lightgray";
            const timerData = buttonTimers[id];
            if (timerData && timerData.timer) clearInterval(timerData.timer);
            buttonTimers[id] = { startTime: null, timer: null, active: false };
            pressCounts[id] = 0; // Reset count
        }
    });
}

document.getElementById('undoButton').addEventListener('click', () => {
    if (undoStack.length > 0) {
        const lastState = undoStack.pop();
        const btn = document.getElementById(lastState.id);
        if (btn) {
            // Restore the previous state
            pressCounts[lastState.id] = lastState.pressCount;
            btn.style.backgroundColor = lastState.color;
            btn.innerText = `${lastState.id}`;
        }
    } else {
        alert("Nothing to undo!");
    }
});

function positionUndoButton(x, y) {
    const undoButton = document.getElementById('undoButton');
    undoButton.style.left = `${x}px`;
    undoButton.style.top = `${y}px`;
}

// Position the Undo button on the grid
positionUndoButton(580, 650);



// Initialize button timers with restored state
function initializeButtonTimer(btn, id, startTime, active) {
    if (active) {
        const elapsed = Date.now() - startTime;
        updateButtonColor(btn, elapsed);

        const timer = setInterval(() => {
            const currentElapsed = Date.now() - startTime;
            updateButtonColor(btn, currentElapsed);
        }, 1000);

        buttonTimers[id] = { startTime, timer, active: true };
    } else {
        buttonTimers[id] = { startTime: null, timer: null, active: false };
        btn.style.backgroundColor = "lightgray";
    }
}

// Function to update button color based on elapsed time
function updateButtonColor(btn, elapsed) {
    const seconds = Math.floor(elapsed / 1000);
    if (seconds < 600) {
        btn.style.backgroundColor = "green";
    } else if (seconds < 2100) {
        btn.style.backgroundColor = "yellow";
    } else if (seconds < 5400) {
        btn.style.backgroundColor = "orange";
    } else {
        btn.style.backgroundColor = "red";
    }
}

//Drawing Lines
function drawLines(serverCount) {
    const canvas = document.getElementById('floorCanvas');
    const ctx = canvas.getContext('2d');
    if (serverCount == 4){
        const linesToDraw = linePoints4.slice(0, 100); // Get the first `serverCount` pairs
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawFloorLayout(); // Redraw the floor layout
    
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
    
        linesToDraw.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y); // Line start point
            ctx.lineTo(line.end.x, line.end.y); // Line end point
            ctx.stroke();
            ctx.closePath();
        });
    }
    else if (serverCount == 7){
        const linesToDraw = linePoints7.slice(0, 100); // Get the first `serverCount` pairs
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawFloorLayout(); // Redraw the floor layout
    
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
    
        linesToDraw.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y); // Line start point
            ctx.lineTo(line.end.x, line.end.y); // Line end point
            ctx.stroke();
            ctx.closePath();
        });
    }
    else if (serverCount==5){
        const linesToDraw = linePoints5.slice(0, 100); // Get the first `serverCount` pairs
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawFloorLayout(); // Redraw the floor layout
    
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
    
        linesToDraw.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y); // Line start point
            ctx.lineTo(line.end.x, line.end.y); // Line end point
            ctx.stroke();
            ctx.closePath();
        });
    }
    else if (serverCount == 6){
        const linesToDraw = linePoints6.slice(0, 100); // Get the first `serverCount` pairs
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawFloorLayout(); // Redraw the floor layout
    
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
    
        linesToDraw.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y); // Line start point
            ctx.lineTo(line.end.x, line.end.y); // Line end point
            ctx.stroke();
            ctx.closePath();
        });
    }
    else if (serverCount == 8){
        const linesToDraw = linePoints8.slice(0, 100); // Get the first `serverCount` pairs
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawFloorLayout(); // Redraw the floor layout
    
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
    
        linesToDraw.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y); // Line start point
            ctx.lineTo(line.end.x, line.end.y); // Line end point
            ctx.stroke();
            ctx.closePath();
        });
    }
    else if (serverCount == 9){
        const linesToDraw = linePoints9.slice(0, 100); // Get the first `serverCount` pairs
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawFloorLayout(); // Redraw the floor layout
    
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
    
        linesToDraw.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y); // Line start point
            ctx.lineTo(line.end.x, line.end.y); // Line end point
            ctx.stroke();
            ctx.closePath();
        });
    }
    else if (serverCount == 1){
        const linesToDraw = linePoints1.slice(0, 100); // Get the first `serverCount` pairs
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawFloorLayout(); // Redraw the floor layout
    
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
    
        linesToDraw.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y); // Line start point
            ctx.lineTo(line.end.x, line.end.y); // Line end point
            ctx.stroke();
            ctx.closePath();
        });
    }
    else if (serverCount == 2){
        const linesToDraw = linePoints2.slice(0, 100); // Get the first `serverCount` pairs
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        drawFloorLayout(); // Redraw the floor layout
    
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
    
        linesToDraw.forEach(line => {
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y); // Line start point
            ctx.lineTo(line.end.x, line.end.y); // Line end point
            ctx.stroke();
            ctx.closePath();
        });
    }
}

document.getElementById('submitServers').addEventListener('click', () => {
    const input = parseInt(document.getElementById('serverCount').value, 10);
    if (input >= 4 && input <= 9) {
        serverCount = input;
        hideModal();
        drawLines(serverCount);
    } else {
        alert(`Please enter a valid number between 4 and 9.`);
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    resetProgram();
});

function resetProgram() {
    serverCount = 0;
    pressCounts = {}; // Clear press counts

    const canvas = document.getElementById('floorCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const controlsDiv = document.getElementById('controls');
    controlsDiv.innerHTML = '';

    document.getElementById('canvas-container').style.display = 'none';

    // Recreate buttons and redraw the floor layout
    createButtons();
    drawFloorLayout();
    showModal();

    // Reset the note boxes
    resetNoteBoxes(); 
}



document.getElementById('resetButton').addEventListener('click', () => {
    if (confirm("Are you sure you want to reset? This will clear all progress.")) {
        resetProgram();
    }
    else{
        
    }
});

function positionResetButton(x, y) {
    const resetButton = document.getElementById('resetButton');
    resetButton.style.left = `${x}px`; // Set X position
    resetButton.style.top = `${y}px`; // Set Y position
}

// Call this function during initialization or as needed
positionResetButton(460, 650); // Example: Place the Reset button at (300, 500)

function positionFirstCutButton(x, y) {
    const firstCutButton = document.getElementById('firstCutButton');
    firstCutButton.style.left = `${x}px`; // Set X position
    firstCutButton.style.top = `${y}px`; // Set Y position
}

// Set the button's position on the grid
positionFirstCutButton(460, 550); // Place "First Cut" button at (100, 500)

function positionSecondCutButton(x, y) {
    const secondCutButton = document.getElementById('secondCutButton');
    secondCutButton.style.left = `${x}px`; // Set X position
    secondCutButton.style.top = `${y}px`; // Set Y position
}

// Set the button's position on the grid
positionSecondCutButton(460, 600); // Place "First Cut" button at (100, 500)


document.getElementById('firstCutButton').addEventListener('click', () => {
    deleteSpecificLabels(1);
});

document.getElementById('secondCutButton').addEventListener('click', () => {
    deleteSpecificLabels(2);
});

function deleteSpecificLabels(cut) {
    const canvas = document.getElementById('floorCanvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw the floor layout
    drawFloorLayout();

    // Draw the custom lines based on the cut type
    drawCustomLines(cut);

    // Clear specific text boxes
    clearCutTextBoxes(cut);
}

function clearCutTextBoxes(cut) {
    if (cut === 1) {
        // Clear specific text boxes for the First Cut
        document.getElementById('svr4').value = '';
        document.getElementById('svr5').value = '';
        document.getElementById('svr6').value = '';
        document.getElementById('svr8').value = '';
        document.getElementById('svr9').value = '';
    } else if (cut === 2) {
        // Clear specific text boxes for the Second Cut
        document.getElementById('svr3').value = '';
        document.getElementById('svr5').value = '';
        document.getElementById('svr6').value = '';
        document.getElementById('svr8').value = '';
        document.getElementById('svr9').value = '';
        document.getElementById('svr7').value = '';
        document.getElementById('svr4').value = '';
    }
}


function drawCustomLines(cut) {
    if (cut === 1) {
        drawLines(1); // Draw lines for the first cut
    } else if (cut === 2) {
        drawLines(2); // Draw lines for the second cut
    }
}

// Function to save the app state to localStorage
function saveState() {
    const shift = "PM";
    const state = {
        notes: document.getElementById('notes').value,
        timers: Object.entries(buttonTimers).reduce((acc, [id, timerData]) => {
            if (timerData) {
                acc[id] = {
                    startTime: timerData.startTime,
                    active: timerData.active,
                };
            }
            return acc;
        }, {}),
        serverCount: serverCount,
        serverNames: [...document.querySelectorAll('textarea[id^="svr"]')].map(el => el.value),
        reservations: [...document.querySelectorAll('textarea[id^="res"]')].map(el => el.value),
        pressCounts: pressCounts, // Save press counts
    };
    localStorage.setItem(`appState-${shift}`, JSON.stringify(state));
    console.log('State saved.');
}


// Function to load the app state from localStorage
function loadState() {
    const shift = "PM";
    const savedState = localStorage.getItem(`appState-${shift}`);
    if (savedState) {
        const state = JSON.parse(savedState);

        // Restore notes
        document.getElementById('notes').value = state.notes || '';

        // Restore button timers
        Object.keys(state.timers).forEach(id => {
            const timerData = state.timers[id];
            if (timerData) {
                const btn = document.getElementById(id);
                if (btn) initializeButtonTimer(btn, id, timerData.startTime, timerData.active);
            }
        });

        // Restore press counts
        pressCounts = state.pressCounts || {};
        Object.keys(pressCounts).forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.innerText = `${id}`;
            }
        });

        console.log('State loaded.');
    } else {
        console.log('No saved state found. Initializing defaults.');
    }
}

// Function to initialize button timers
function initializeButtonTimer(btn, id, startTime, active) {
    if (active) {
        const elapsed = Date.now() - startTime;
        updateButtonColor(btn, elapsed);

        const timer = setInterval(() => {
            const currentElapsed = Date.now() - startTime;
            updateButtonColor(btn, currentElapsed);
        }, 1000);

        buttonTimers[id] = { startTime, timer, active: true };
    } else {
        buttonTimers[id] = { startTime: null, timer: null, active: false };
        btn.style.backgroundColor = "lightgray";
    }
}

// Function to clear the saved state
function resetState() {
    const shift = "PM"; // Change this to "PM" for the PM shift repository
    localStorage.removeItem(`appState-${shift}`);
    console.log('State cleared.');
    resetProgram(); // Call your existing reset logic
}

// Function to reset the note boxes
function resetNoteBoxes() {
    [...document.querySelectorAll('textarea[id^="svr"], textarea[id^="res"], #notes')].forEach(el => {
        el.value = ''; // Clear the text in each note box
    });
    console.log('Note boxes reset.');
}

// Autosave every 10 seconds
setInterval(saveState, 10000);

// Load the state or initialize defaults on page load
// Initialize the app on page load
window.onload = () => {
    createButtons();
    showModal();
};

// Attach the reset functionality to the reset button
document.getElementById('resetButton').addEventListener('click', () => {
    if (confirm("Are you sure you want to reset? This will clear all progress.")) {
        resetState();
    }
});