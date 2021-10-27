# Lyrics
Aplicación de búsqueda de letras, que tiene dos secciones:

1. Buscar: una pantalla con un formulario que consta de dos entradas de texto: "artista" y "título de la canción".
Después de completar ambas entradas y enviar, una pantalla que contiene la letra de la canción debe ser presentado.
Las letras deben recuperarse de la https://lyricsovh.docs.apiary.io/ Rest API.
Se debe mostrar un mensaje de error apropiado si no se puede recuperar la letra por cualquier razón.
Debajo del formulario de búsqueda, incluya una sección de "Búsqueda anterior" que muestre al artista y título de la canción de la última letra recuperada con éxito después de una búsqueda (solo si hubo un búsqueda exitosa previa). Esta sección solo debe mostrar 1 elemento, el usuario debe podrá tocarlo para ver la letra en una nueva pantalla.

2. Historial: una pantalla que enumera las canciones recuperadas previamente. El usuario debe poder toca cualquier canción para ver su letra en una nueva pantalla.
