# Reto-JWT-node-js

Modifique la aplicación desarrollada en los tutoriales anteriores para que involucre autenticación usando JWT. Para esto debe:

Modificar el servidor / backend para conectarse con una base de datos (tipo SQL o MongoDB) la cual contiene los usuarios y contraseñas de la aplicación. Implemente un mecanismo adicional para no tener que almacenar las contraseñas como texto plano ya que es considerada una mala práctica en el diseño de sistemas de autenticación.
Cree un total de 3 roles en la aplicación dentro de un esquema de autorización adecuado para el acceso de diferentes niveles de información. Al menos 1 de los roles debe estar en la capacidad de modificar información y persistirla para el consumo por parte de los demás roles.

Implementación:

Se usó el esqueleto proveido por el profesor Jhonatan Alarcón para la realización de dicho taller: https://github.com/jhonatan89/express-basic/tree/jwt-white-label

Para la conexión a la base de datos se utilizó mongodb on cloud, la conexión a la base de datos ya está establecida por parte del servidor por lo que no toca modificar nada.

Se realizaron las pruebas postman para probar el correcto funcionamiento de la aplicación.

Se generaron tokens con JWT y se manejó la seguridad y cifrado con bcrypt

Hay 3 metodos, el de obtener los productos, el de crear productos y el de modificar productos.

Los administradores pueden usar cualquiera de los 3 metodos

Los empleados solo pueden modificar y obtener los productos, mas no crear los productos

Los usuarios normales solo pueden observar los productos.
