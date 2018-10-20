/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function (sprite, x, y, ancho, alto, velocidad, rangoMov, direccion/*, parametro/s extra de ZombieConductor*/) {
  /* Completar constructor a partir de Enemigo */
  //Enemigo.call(/* ... */);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
}

/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;
/* Completar metodos para el movimiento y el ataque */

ZombieConductor.prototype.mover = function (direccion) {

  if (this.direccion == "vertical") {
    this.y += this.velocidad;
  }
  if (this.direccion == "horizontal") {
    this.x += this.velocidad;
  }

  /* Chequear si llega al limite y reiniciar su posicion */
  if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)) {
    this.x = this.rangoMov.desdeX;
  }
  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    this.velocidad > 0 ? this.y = this.rangoMov.desdeY : this.y = this.rangoMov.hastaY;
  }
}

ZombieConductor.prototype.atacar = function (jugador) {
  Jugador.sprite='imagenes/bomb-sprite-png.png';
  jugador.perderVidas(jugador.vidas);
}