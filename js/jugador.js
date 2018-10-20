/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 10,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  cambiarSprite: function (direccion) {
    this.sprite = 'imagenes/auto_rojo_' + direccion + '.png'
    if(direccion=='izquierda'||direccion=='derecha'){
      this.ancho = 30;
      this.alto = 15;
    } 
    if(direccion=='arriba'||direccion=='abajo'){
      this.ancho = 15;
      this.alto = 30;
    } 
  },
  moverse: function (movX, movY) {
    this.x = this.x + movX;
    this.y = this.y + movY;
  },
  perderVidas: function (potencia) {
    this.vidas=this.vidas-potencia;
  }
}
