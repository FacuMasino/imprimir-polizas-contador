# Imprimir Pólizas Contador

Este proyecto solo fue creado con el fin de mostrar las estadisticas en forma de PNG/SVG en el readme de https://github.com/FacuMasino/imprimir-polizas-utility

Las mismas son tomadas de la base de datos Firestore la cuál se mantiene actualizada mediante la aplicación "Imprimir Pólizas" cada vez que el usuario realiza acciones de impresión/descarga.

Accediendo a los correspondientes endpoints devuelve una imagen PNG/SVG con el recuento de impresiones o descargas según corresponda:
- /stats-downloaded-policies.svg | png
- /stats-printed-policies.svg | png
- /stats-printed-docs.svg | png
- /stats-downloaded-docs.svg | png

Para la generación de los SVG se utiliza el servicio generador de badges https://shields.io/

Librerias utilizadas:
- express
- canvas
- firebase
