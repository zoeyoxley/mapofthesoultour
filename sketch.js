const key = 'pk.eyJ1IjoiemFyb21pIiwiYSI6ImNrbTJkN3QwZjRtMzgycHBtZ2lyNGl1eXoifQ.uQCxr7nLnjbOe0-z7WwaZw';

const options = {
  lat: 39.5,
  lng: -98,
  zoom: 3.3,
  style: 'mapbox://styles/zoeyoxley/cknow8nf72vmi18nwhrdhymox',
  pitch: 0,
}

const mappa = new Mappa('MapboxGL', key);
let mtMap;
let canvas;
let img;
let one;
let two;
function preload(){
  one = loadImage ('finallevi.png');
  two = loadImage ('finalrose.png');
    three = loadImage ('finalcotton.png');
    four = loadImage ('finalcamping.png');
  five = loadImage ('bobbydoddpsd.png');
  six = loadImage ('metlifestad.png');
  seven= loadImage ('fedexfinal.png');
  eight = loadImage ('finalrogers.png');
  nine = loadImage ('soldierfinal.png');
  ten  = loadImage ('paypay.png');
 eleven = loadImage ('twickenhamfinal.png');
  twelve = loadImage ('finaldekuip.png');
  thirteen = loadImage ('olympiafinal.png');
  fourteen = loadImage ('estadifinal.png');
  fifteen = loadImage ('kyocerafinal.png');
  sixteen = loadImage ('metdome.png');
  seventeen = loadImage ('finaltokyo.png');
  eighteen = loadImage ('seoulfinal.png');
  

  
 
 
}

function setup() {
  canvas = createCanvas(1000,1000);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
 
}


function draw() {

  
  clear();
  stroke(200,30,220);
  strokeWeight(3);
  textSize(18);
  textAlign(CENTER, CENTER);
  const dallas= myMap.latLngToPixel(32.77965264529317,-96.75964415073395);
  const orlando = myMap.latLngToPixel( 28.5390742, -81.4027404);
  const santa = myMap.latLngToPixel(37.24725,-121.58793);
  const pasa = myMap.latLngToPixel(34.161327, -118.167648);
  const atl = myMap.latLngToPixel(33.770163586, -84.388998444);
  const east = myMap.latLngToPixel(40.813778, -74.074310);
   const land = myMap.latLngToPixel(38.904663048 ,-76.858663232);
  const chi = myMap.latLngToPixel(41.85749657, -87.6166642);
  const tor = myMap.latLngToPixel(43.638164114 ,-79.386831786);
  const jap = myMap.latLngToPixel(33.6 ,130.41667);
  const lon = myMap.latLngToPixel(51.453664852 ,-0.33833198);
  const neth = myMap.latLngToPixel(51.8896664413 ,4.52061625086);
  const germ = myMap.latLngToPixel(52.508831298 ,13.236999052);
  const spa = myMap.latLngToPixel(41.3420486318, 2.0720663784);
  const osak = myMap.latLngToPixel(34.6682656603 ,135.472293111);
  const sait = myMap.latLngToPixel(35.7677635956 ,139.418964991);
  const tok = myMap.latLngToPixel(35.7033921864 ,139.751145329);
  const seo = myMap.latLngToPixel(37.5095312952 ,127.070316385);
  
  
  
  
  
  
  if(dist(east.x,east.y,mouseX,mouseY)<40){  
    
    fill(147,112,219,50);
    ellipse(east.x, east.y, 40, 40);
    fill(255);
    image(six,east.x,east.y,300,300);
     
    text('MetLife Stadium',east.x,east.y);
    
  }else{
    fill(147,112,219,80);
    ellipse(east.x, east.y, 40, 40);
    fill(255);
    text('6',east.x,east.y);
  }
    if(dist(orlando.x,orlando.y,mouseX,mouseY)<40){  
    
    fill(147,112,219,50);
    ellipse(orlando.x, orlando.y, 40, 40);
    fill(255);
      image(four, orlando.x, orlando.y, 300,300);
    text('Camping World Stadium',orlando.x,orlando.y);
   
  }else{
   fill(147,112,219,80);
    ellipse(orlando.x, orlando.y, 40, 40);
    fill(255);
    text('4',orlando.x,orlando.y);
  }
  
  if(dist(atl.x,atl.y,mouseX,mouseY)<40){  
    
    fill(147,112,219,80);
    ellipse(atl.x, atl.y, 40, 40);
    fill(255);
    image(five, atl.x, atl.y, 300,300);
    text('Bobby Dodd Stadium',atl.x,atl.y);
    
  }else{
    fill(147,112,219,80);
    ellipse(atl.x, atl.y, 40, 40);
    fill(255);
    text('5',atl.x,atl.y);
  }
  
  if(dist(dallas.x,dallas.y,mouseX,mouseY)<40){ 
    
    fill(147,112,219,80);
    ellipse(dallas.x, dallas.y, 40, 40);
    fill(255);
    image(three, dallas.x, dallas.y, 300,300);
    text('Cotton Bowl Stadium',dallas.x,dallas.y);
    
  }else{
   fill(147,112,219,80);
    ellipse(dallas.x, dallas.y, 40, 40);
    fill(255);
    text('3',dallas.x,dallas.y);
  }
  
  if(dist(pasa.x,pasa.y,mouseX,mouseY)<40){  
    
    fill(147,112,219,80);
    ellipse(pasa.x, pasa.y, 40, 40);
    fill(255);
    image(two, pasa.x, pasa.y, 300,300);
    text('Rose Bowl',pasa.x,pasa.y);
    //image(two,pasa.x,pasa.y,300,300);
    
  }else{
  fill(147,112,219,80);
    ellipse(pasa.x, pasa.y, 40, 40);
    fill(255);
    text('2',pasa.x,pasa.y);
  }
  

  
  if(dist(santa.x,santa.y,mouseX,mouseY)<40){  
    fill(147,112,219,80);
    ellipse(santa.x, santa.y, 40, 40);
    fill(255);
    image(one, santa.x, santa.y, 300,300);
    text('Levis Stadium',santa.x,santa.y);

   
  }else{
  fill(147,112,219,80);
    ellipse(santa.x, santa.y, 40, 40);
    fill(255);
    text('1',santa.x,santa.y);
  }
    if(dist(land.x,land.y,mouseX,mouseY)<40){  
    fill(147,112,219,80);
    ellipse(land.x, land.y, 40, 40);
    fill(255);
      image(seven, land.x, land.y, 300,300);
    text('FedExField',land.x,land.y);
      
  }else{
   fill(147,112,219,80);
    ellipse(land.x, land.y, 40, 40);
    fill(255);
    
    text('7',land.x,land.y);
  }
    if(dist(chi.x,chi.y,mouseX,mouseY)<40){  
    fill(147,112,219,80);
    ellipse(chi.x, chi.y, 40, 40);
    fill(255);
      image(nine, chi.x, chi.y, 300,300);
    text('Soldier Field',chi.x,chi.y);
     
  }else{
  fill(147,112,219,80);
    ellipse(chi.x, chi.y, 40, 40);
    fill(255);
    text('9',chi.x,chi.y);
  }
   if(dist(tor.x,tor.y,mouseX,mouseY)<40){  
    
    fill(147,112,219,80);
    ellipse(tor.x, tor.y, 40, 40);
    fill(255);
     image(eight, tor.x, tor.y, 300,300);
    text('Rogers Centre',tor.x,tor.y);
     
  }else{
    fill(147,112,219,80);
    ellipse(tor.x, tor.y, 40, 40);
    fill(255);
    text('8',tor.x,tor.y);
  }
   
    if(dist(jap.x,jap.y,mouseX,mouseY)<40){  
    
    fill(147,112,219,80);
    ellipse(jap.x, jap.y, 40, 40);
    fill(255);
      image(ten, jap.x, jap.y, 300,300);
    text('Fukuoka PayPay Dome',jap.x,jap.y);
      
  }else{
    fill(147,112,219,80);
    ellipse(jap.x, jap.y, 40, 40);
    fill(255);
    text('10',jap.x,jap.y);
  }


    if(dist(germ.x,germ.y,mouseX,mouseY)<40){  
    
    fill(147,112,219,80);
    ellipse(germ.x, germ.y, 40, 40);
    fill(255);
      image(thirteen, germ.x, germ.y, 300,300);
    text('Olympiastadion',germ.x,germ.y);
  }else{
    fill(147,112,219,80);
    ellipse(germ.x, germ.y, 40, 40);
    fill(255);
    text('13',germ.x,germ.y);
  
}
  
    if(dist(neth.x,neth.y,mouseX,mouseY)<40){  
    
    fill(147,112,219,80);
    ellipse(neth.x, neth.y, 40, 40);
    fill(255);
      image(twelve, neth.x, neth.y, 300,300);
    text('De Kuip',neth.x,neth.y);
  }else{
    fill(147,112,219,80);
    ellipse(neth.x, neth.y, 40, 40);
    fill(255);
    text('12',neth.x,neth.y);

  
}
    if(dist(spa.x,spa.y,mouseX,mouseY)<40){  
    
    fill(147,112,219,80);
    ellipse(spa.x, spa.y, 40, 40);
    fill(255);
      image(fourteen, spa.x, spa.y, 300,300);
    text('Estadi Olimpic Lluis Companys',spa.x,spa.y);
  }else{
    fill(147,112,219,80);
    ellipse(spa.x, spa.y, 40, 40);
    fill(255);
    text('14',spa.x,spa.y);
  
}
   if(dist(lon.x,lon.y,mouseX,mouseY)<40){  
    
    fill(147,112,219,80);
    ellipse(lon.x, lon.y, 40, 40);
    fill(255);
      image(eleven, lon.x, lon.y, 300,300);
    text('Twickenham Stadium',lon.x,lon.y);
      
  }else{
    fill(147,112,219,80);
    ellipse(lon.x, lon.y, 40, 40);
    fill(255);
    text('11',lon.x,lon.y);
  
}
    if(dist(osak.x,osak.y,mouseX,mouseY)<40){  
    
    fill(147,112,219,80);
    ellipse(osak.x, osak.y, 40, 40);
    fill(255);
      image(fifteen, osak.x, osak.y, 300,300);
    text('Kyocera Dome',osak.x,osak.y);
  }else{
    fill(147,112,219,80);
    ellipse(osak.x, osak.y, 40, 40);
    fill(255);
    text('15',osak.x,osak.y);

  
}
  if(dist(sait.x,sait.y,mouseX,mouseY)<40){  
    
    fill(147,112,219,80);
    ellipse(sait.x, sait.y, 40, 40);
    fill(255);
    image(sixteen, sait.x, sait.y, 300,300);
    text('Metlife Dome',sait.x,sait.y);
  }else{
    fill(147,112,219,80);
    ellipse(sait.x, sait.y, 40, 40);
    fill(255);
    text('16',sait.x,sait.y);
  
}
    if(dist(tok.x,tok.y,mouseX,mouseY)<40){  
    
    fill(147,112,219,800);
    ellipse(tok.x, tok.y, 40, 40);
    fill(255);
      image(seventeen, tok.x, tok.y, 300,300);
    text('Tokyo Dome',tok.x,tok.y);
  }else{
    fill(147,112,219,80);
    ellipse(tok.x, tok.y, 40, 40);
    fill(255);
    text('17',tok.x,tok.y);
    
  
}
    if(dist(seo.x,seo.y,mouseX,mouseY)<40){  
    
    fill(147,112,219,80);
    ellipse(seo.x, seo.y, 40, 40);
    fill(255);
      image(eighteen, seo.x, seo.y, 300,300);
    text('Seoul Olympic Stadium',seo.x,seo.y);
  }else{
    fill(147,112,219,80);
    ellipse(seo.x, seo.y, 40, 40);
    fill(255);
    text('18',seo.x,seo.y);
  
}

}
  


