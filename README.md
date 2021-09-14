# Magic 8 ball

## Descripción

Crea una aplicación web que te responda con una suerte aleatoria cada vez que se pregunte algo. Para obtener su suerte, el usuario podrá hacer click en el botón "What's my luck?". Las respuestas posibles las encontrarás en el archivo `luck.js`


## Tareas

Modificarás el archivo `luck.js` para completar las siguientes tareas (nota: puedes editar los otros archivos si así lo deseas: `index.html` ó `style.css`). Al finalizar las tareas, marca cada una como completada con una x, sigue el ejemplo de la primer tarea:

- [x] Clona el repositorio en tu computadora

- Al hacer click en el botón "What's my luck?" se debe mostrar un consejo en la bola mágica. Además se deberán ir agreando nuevos elementos a la lista de "historial" con cada nueva suerte.
  - [ ] Selecciona del DOM todos los elementos que necesites
  - [ ] Agrega un evento al elemento que sea necesario
  - [ ] En el callback del evento deberás utilizar la función "randomAdvice"
  - [ ] Al elemento con id `log`, agrega cada nueva "suerte" como si fuera un historial de todas las veces que haz pedido tu suerte. Cada que agregues una nueva línea NO borres las anteriores.
  - [ ] Agrega comentarios explicando las líneas de código que agregues

- Puntos extra (+5pts)
  - [ ] En el archivo `index.html` descomenta las líneas con el formulario y el input "ownLuck"
  - [ ] Haz funcionar el input "ownLuck", dónde lo que sea que agregue el usuario se mostrará de inmediato en la bola mágica. Opcionalmente agregalo al historial o borra todo del historial! lo que decidas ;)