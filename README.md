# api_frutsworld

Desarrollo de archivos de config. de Backend para futuro proyecto de frontEnd con react y node.js:

   Desarrolladores:

   - Jose F. Henriquez Garcia
    
```yml
version: '3'
services:
  db_fw:
    image: 'mariadb:10.11.2'
    container_name: db_frutsworld
    environment:
      - MARIADB_ROOT_PASSWORD=17574886
      - MARIADB_USER=fw_user
      - MARIADB_PASSWORD=password
    ports:
      - 3306:3306
    volumes:
      - mslq_vol:/var/lib/mysql
  api_fw:
    build:
      dockerfile: Dockerfile.dev
      context: ./api_frutsworld
    command: npm run dev
    volumes:
      - /app/node_modules
      - ./api_frutsworld:/app
    ports:
      - 5000:5000
    environment:
      - MSQLUSER=fw_user
      - MSQLHOST=db_fw
      - MSQLDATABASE=fw_dbase
      - MSQLPASSWORD=password
      - MSQLPORT=3306
volumes:
  mslq_vol:
