CREATE DATABASE IF NOT EXISTS dbExports;

USE dbExport;

CREATE TABLE T_Product (
    ID_Producto INT(11) NOT NULL AUTO INCREMENT,
    Nombre VARCHAR(45) DEFAULT NULL,
    Precio_Unitario FLOAT(40) DEFAULT NULL,
    PRIMARY KEY (ID_Producto)
);

DESCRIBE T_Product;

INSERT INTO T_Product VALUES
    (1, 'Papaya', 30),
    (2, 'Manzana', 60),
    (3, 'Banana', 15),
    (4, 'Fresa', 65);