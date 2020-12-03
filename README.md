# E-COMMERCE Menu App

Proyecto creado para el curso de React de [CoderHouse](http://www.coderhouse.com)

Esta aplicacion web esta basada en un e-commerce donde un usuario puede navegar por el menu de comidas y bebidas de un restaurant para agregarlos a un carrito y realizar el pedido.

## Tecnologias utilizadas

1. Front-end
* `react`
* `react-router-dom`
2. Desing
* `materialize`
* `sweetalert`
3. Firebase
* `firestore`

## Objetivo
### Orientada en Mobile First

El objetivo de este proyecto es la *simplicidad* de la interfaz para brindarle al usuario una experiencia simple y directa, donde el objetivo es agregar al carrito y realizar el pedido.

## Funcionalidades

* Desde el titulo "Menu" se puede acceder al listado de productos.
* El listado se puede filtrar por *bebidas* y *comidas* desde el filtro de categorias, cuando se hace click en el boton "x" se limpia el filtro y se vuelven a mostrar todos los productos.
* Haciendo click en la foto o en el boton *ver producto* se entra a los detalles del producto.
* En el detalle se ve un breve descripcion del producto, su precio y se pueden agregar mas unidades de ese articulo. Tambien hay un boton de back para volver a la pantalla anterior.  
* Cuando se agregan items al carrito se agrega con las cantidades solicitadas en el detalle.
* Los items sin stock **no se pueden agregar al carrito** y su foto aparece en blanco y negro.
* El stock de los productos depende de la compra, el stock es descontado una vez comprado el producto.

## Carrito

En el carrito se podran ver los items agregados con su cantidad deseada, la cual se puede modificar yendo nuevamente al detalle del productos, el precio total del productos y el precio total del pedido.

## Checkout

En el carrito se encuentra el boton checkout el cual nos direcciona al formulario para corfirmar la orden. Este nos pide:

* Nombre del usuario
* Telefono
* Mail
* Confirmacion de Mail

Todos los campos son obligatorios, el mail esta validado con Regex y cuando la corfirmacion del mail es correcta se activa el boton para finalizar el pedido, se dispara la alerta (*swetalert*). Esto actualiza el stock en Firestore.

## Demo

Accede al video de la demo [aquí](https://youtu.be/KMIiaTROGX4)

