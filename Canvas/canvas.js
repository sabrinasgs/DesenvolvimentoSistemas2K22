var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var x = 200;
var y = 100;
var dx = 4;
var dy = 0;

function animate (){ 
 requestAnimationFrame(animate);

 c.clearRect(0,0,innerWidth,innerHeight); //Apaga toda a tela

 c.fillStyle = '#d22200'; //Escolhe a cor
 c.fillRect(x, 200, 200, 200); //Posiciona X e Y

 if((x + 200) > innerWidth ){
   dx =- dx
 }
 else if (x<0) dx=-dx
 x = x+dx;


}
animate();


/*
function GerarCorHexadecimal() {
    return '#' + parseInt((Math.random() * 0xFFF))
        .toString(16)
        .padStart(3, '0');
} 

//Desafio 1 
for (var i = 0; i < 10; i++) {
    //auxX = x + auxX; //Reposiciona em X

    //Quadrado
    c.fillStyle = GerarCorHexadecimal() //Escolhe a cor
    c.fillRect(auxX, 200, 25, 25); //Posiciona em X, Y e depois o tamanho

    //Linha
    c.beginPath(); //Inicio do comando
    c.moveTo(auxX, Math.random()*100); //Inicio da linha
    c.lineTo(Math.random()*500, 100); //Final da linha
    c.strokeStyle = "purple"; //Definição da cor
    c.stroke(); //Executa o desenho

    //Circulo
    c.beginPath();
    c.arc(auxX, 400, 20, 0, Math.PI * 2, false);
    c.strokeStyle = "red";
    c.stroke();

}
//Desafio 2
for (var i = 0; i < 10; i++) {

    auxX = Math.random()*500 + Math.random()*50; //Reposiciona em X
    auxY = Math.random()*150 + Math.random()*300; //Reposiciona em Y

    //Quadrado
    c.fillStyle = GerarCorHexadecimal(); //Escolhe a cor
    c.fillRect(auxX, auxY, 25, 25); //Posiciona em X, Y e depois o tamanho

    //Linha
    c.beginPath(); //Inicio do comando
    c.moveTo(auxX-Math.random()*50, x+auxX); //Ini­cio da linha
    c.lineTo(auxX-Math.random()*50, y+auxY); //Final da linha
    c.strokeStyle = "purple"; //Definição da cor
    c.stroke(); //Executa o desenho

    //Circulo
    c.beginPath();
    c.arc(auxX, auxY*Math.random(), 20, 0, Math.PI * 2, false);
    c.strokeStyle = "red";
    c.stroke();
}
//Desafio 3
for (var i = 0; i < 10; i++) {

    auxX = Math.random() * 500 + Math.random() * 50; //Reposiciona em X
    auxY = Math.random() * 150 + Math.random() * 300; //Reposiciona em Y

    //Quadrado
    c.fillStyle = GerarCorHexadecimal(); //Escolhe a cor
    c.fillRect(auxX, auxY, 25, 25); //Posiciona em X, Y e depois o tamanho

    //Linha
    c.beginPath(); //Inicio do comando
    c.moveTo(auxX - Math.random() * 50, x + auxX); //Inicio da linha
    c.lineTo(auxX - Math.random() * 50, y + auxY); //Final da linha
    c.strokeStyle = GerarCorHexadecimal(); //Definição da cor
    c.stroke(); //Executa o desenho

    //Circulo
    c.beginPath();
    c.arc(auxX, auxY * Math.random() * 5, 20, 0, Math.PI * 2, false);
    c.strokeStyle = GerarCorHexadecimal();
    c.stroke();
}
//Desafio 4
//Circulo
c.beginPath();
c.arc(x, y, Math.random()*20, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();

var canvas = document.getElementById( 'arkhamCity' );
var c = canvas.getContext( '2d' );

//Centro
c.transform( 1 , 0 , 0 , -1 , canvas.width * 0.5 , canvas.height * 0.5 ); // Fonte https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform
c.save( ); 

c.fillStyle = 'blue';
c.fillRect( -2 , -2 , 4 , 4 );

// marks a simple axis 
c.beginPath( );
c.moveTo( canvas.width * -0.5, 0 );
c.lineTo( canvas.width * 0.5, 0 );
c.moveTo( 0, canvas.width * -0.5 );
c.lineTo( 0, canvas.width * 0.5 );
c.strokeStyle = '#F5F5F5';
c.stroke( );

c.scale( 1, -1 ); // makes y-axis increasing downwards so text can be written upright
c.font = '15px Arial';
var authorName = '@Design_By_Day';
var authorNameMeasured = c.measureText( authorName );
c.fillStyle = '#10C4C4'; 
c.textBaseline = 'bottom'; 
c.fillText( authorName, ( authorNameMeasured.width * -0.5 ), ( canvas.height * 0.5 - 25 ) ); // posições atribuidas pelo autor
c.restore( ); 

var pencil = {
  'thickness': 1, //espessura da linha
  'color': {
    'black': '#000000',
    'blue': 'blue',
    'pink': 'pink',
    'orange': 'orange',
    'green': '#58f721',
    'red': '#fb4b4b',
    'purple': '#c07eff'
  }
};

a = 40; // algo do batmam

var graph = {
  'step': 0.5, 
  plot: function( curveObject ) {
      c.beginPath( );
      c.lineWidth = pencil.thickness;
      c.strokeStyle = curveObject.pencilColor; // allows stroke to have a custom color
      for( var i = curveObject.lowerLimit ; i <= curveObject.upperLimit ; i += this.step  ) {

        switch( curveObject.inequalityFor ) {

          case 'x_axis':
            c.lineTo( i , curveObject.func( i ) ); //f(x)
            break;

          case 'y_axis':
            c.lineTo( curveObject.func( i ) , i ); //f(y)
            break;

          default:
            console.log( 'Curve object is missing inequalityFor property or has a value other than x_axis and y_axis' );

        };
          c.stroke( );
    };
  },
  clear: function( ) {
      c.clearRect( canvas.width * -0.5 , canvas.height * -0.5 , canvas.width , canvas.height );
  }
};

var curve_1 = {
  'inequalityFor': 'y_axis',
  func: function( y ) {
    return - 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
  },
  'lowerLimit': -1 * ( ( 3 * Math.sqrt( 33 ) ) / 7 ) * a,
  'upperLimit': 0,
  'pencilColor': pencil.color.black
};

var curve_2 = {
  'inequalityFor': 'y_axis',
  func: function( y ) {
    return 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
  },
  'lowerLimit': -1 * ( ( 3 * Math.sqrt( 33 ) ) / 7 ) * a,
  'upperLimit': 0,
  'pencilColor': pencil.color.black
};

var curve_3 = {
    'inequalityFor': 'x_axis',
    func: function( x ) {
      return a * ( -( ( ( 3 * Math.sqrt( 33 ) ) - 7 ) * Math.pow( x , 2 ) ) / ( 112 * Math.pow( a , 2 ) ) + ( Math.abs( x / a ) / 2) + ( Math.sqrt( 1 - ( Math.pow( ( Math.abs( Math.abs( x / a ) - 2 ) - 1 ) , 2 ) ) ) ) - 3 );
    },
    'lowerLimit': -4 * a,
    'upperLimit': 4 * a,
    'pencilColor': pencil.color.blackk
  };
  
  var curve_4 = {
    'inequalityFor': 'y_axis',
    func: function( y ) {
      return 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
    },
    'lowerLimit': 0,
    'upperLimit': ( ( 6 * Math.sqrt( 10 ) ) / 7 ) * a,
    'pencilColor': pencil.color.black
  };
  
  var curve_5 = {
    'inequalityFor': 'y_axis',
    func: function( y ) {
      return - 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
    },
    'lowerLimit': 0,
    'upperLimit': ( ( 6 * Math.sqrt( 10 ) ) / 7 ) * a,
    'pencilColor': pencil.color.black
  };
  
  var curve_6 = {
    'inequalityFor': 'x_axis',
    func: function( x ) {
      return a * ( 9 - 8 * ( Math.abs( x / a ) ) );
    },
    'lowerLimit': 0.75 * a,
    'upperLimit': a,
    'pencilColor': pencil.color.black
  };
  
  var curve_7 = {
    'inequalityFor': 'x_axis',
    func: function( x ) {
      return a * ( 9 - 8 * ( Math.abs( x / a ) ) );
    },
    'lowerLimit': -a,
    'upperLimit': -0.75 * a,
    'pencilColor': pencil.color.black
  };
  
  var curve_8 = {
    'inequalityFor': 'x_axis',
    func: function( x ) {
      return 3 * a * ( Math.abs( x / a ) + 0.25 );
    },
    'lowerLimit': 0.5 * a,
    'upperLimit': 0.75 * a,
    'pencilColor': pencil.color.black};
  
  var curve_9 = {
    'inequalityFor': 'x_axis',
    func: function( x ) {
      return 3 * a * ( Math.abs( x / a ) + 0.25 );
    },
    'lowerLimit': -0.75 * a,
    'upperLimit': -0.5 * a,
    'pencilColor': pencil.color.black};
  
  var curve_10 = {
    'inequalityFor': 'x_axis',
    func: function( x ) {
      return 2.25 * a;
    },
    'lowerLimit': -0.5 * a,
    'upperLimit': 0.5 * a,
    'pencilColor': pencil.color.black
  };
  

var curve_11 = {
    'inequalityFor': 'x_axis',
    func: function( x ) {
      return a * ( ( Math.abs( x / a ) / -2 ) - ( ( 3 * Math.sqrt( 10 ) / 7 ) * ( Math.sqrt( 4 - Math.pow( ( Math.abs( x / a ) - 1 ) , 2 ) ) ) )  + ( 6 * Math.sqrt( 10 ) / 7 ) + 1.5 );
    },
    'lowerLimit': a,
    'upperLimit': 3 * a,
    'pencilColor': pencil.color.black
  };
  
  var curve_12 = {
    'inequalityFor': 'x_axis',
    func: function( x ) {
      return a * ( ( Math.abs( x / a ) / -2 ) - ( ( 3 * Math.sqrt( 10 ) / 7 ) * ( Math.sqrt( 4 - Math.pow( ( Math.abs( x / a ) - 1 ) , 2 ) ) ) )  + ( 6 * Math.sqrt( 10 ) / 7 ) + 1.5 );
    },
    'lowerLimit': -3 * a,
    'upperLimit': -a,
    'pencilColor': pencil.color.black
  };
  
  function drawBatLogo( curveArray ) {
    for( var i = 0; i < curveArray.length; i++ ) {
      graph.plot( curveArray[i] );
    };
  };
  
  drawBatLogo( [curve_1, curve_2, curve_3, curve_4, curve_5, curve_6, curve_7, curve_8, curve_9, curve_10, curve_11, curve_12] );
  
  function drawCoracao() {
      
      c.beginPath();
      c.moveTo(300-75, 300-40);
      c.bezierCurveTo(300-75, 300-37, 300-70, 300-25, 300-50, 300-25);
      c.bezierCurveTo(300-20, 300-25, 300-20, 300-62.5, 300-20, 300-62.5);
      c.bezierCurveTo(300-20, 300-80, 300-40, 300-102, 300-75, 300-120);
      c.bezierCurveTo(300-110, 300-102, 300-130, 300-80, 300-130, 300-62.5);
      c.bezierCurveTo(300-130, 300-62.5, 300-130, 300-25, 300-100, 300-25);
      c.bezierCurveTo(300-85, 300-25, 300-75, 300-37, 300-75, 300-40);
      c.fill();
  }

drawCoracao()

c.fillStyle = "blue";
c.beginPath();
c.moveTo(108 + 300, 0.0);
c.lineTo(141 + 300, 70);
c.lineTo(218 + 300, 78.3);
c.lineTo(162 + 300, 131);
c.lineTo(175 + 300, 205);
c.lineTo(108 + 300, 170);
c.lineTo(41.2 + 300, 205);
c.lineTo(55 + 300, 131);
c.lineTo(1 + 300, 78);
c.lineTo(75 + 300, 68);
c.lineTo(108 + 300, 0);
c.closePath();
c.fill();



// gambiarra pra ver se funfa 
/////////<img src="bah.png"></img>
// Minha intenção era colocar a imagem e botar a função Random pra ver se funcionava 
// Pois, não quer aparecer os elementos do novo desafio ( batman, coração e estrela )
// Porém colocando a imagem, fica tudo branco ;-;
// Shoraste?
// Bom, mas eu tentei fazer 
// De qualquer forma, parabénssssss igor :3
*/