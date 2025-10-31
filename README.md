# Para lanzar
npm start

# Si se quiere depurar, lanzar la configuración que hay en la carpeta .vscode
desde run and debug seleccionar la configuración Debug con ts-node

# montar una instancia de docker en local 
docker run -d -p 27017:27017 --name mongo-local mongo:latest

creamos la bbdd testdb e con la coleccion users e importamos en json (desde compass)

# TODOs
# tests unitarios
Voy a usar vitest, que es similar a jest

# cucumber con gerking
# trabajar con excels en node.js