Const subwayLine = {
red: [’South Station’, ‘Park Street’, ‘Kendall’, ‘Central’, ‘Harvard’, ‘Porter’, ’Davis’, ‘Alewife’ ],
green: [‘Government Center’, ‘Park Street’, ‘Boylston’, ‘Arlington’,’Copley’,’Hynes’,’Kenmore’],
orange: [’North Station’, ‘Haymarket’, ‘Park Street’, ’State’, ‘Downtown Crossing’, ‘Chinatown’, ‘Back Bay’, ‘Forest Hills’]

Function travelOnOneLine(line, station){
let stops  = 0;
for(let i=0;i<line.length;i++){
if(startLine[i] !== station){
stops ++
}
}
return stops;
};

function(startLine, startStation, endLine, endStation){
let stops = 0;
if(startLine == endLine){travelOnOneLine(startLine, endStation);}
Else{
for(let i =0;i<;I++){
if(startLine[i] !== ‘Park Street’){ stops++}
}
}
return stops; 
}
};