DROP DATABASE if EXISTS farmacia;
CREATE DATABASE IF NOT EXISTS farmacia;
USE farmacia;

CREATE TABLE empleados(CodEmpleado int PRIMARY KEY AUTO_INCREMENT,nombre varchar(15)not null,apellidoP varchar(15)not null, apellidoM varchar(15)not null, carnet varchar(10) not null,email varchar(20)not null, telefono varchar(15)not null,direccion varchar(30)not null,nivelA varchar(10)not null, state boolean not null default 0);

CREATE TABLE categorias(id int PRIMARY KEY AUTO_INCREMENT, codPr varchar(15)not null, categoria varchar(15)not null, descripcion varchar(15)not null);

CREATE TABLE producto(idPro int PRIMARY KEY AUTO_INCREMENT,codProducto varchar(15)not null,composicionPro varchar(30)not null, cantidadPro varchar(15)not null,precio decimal(6,2)not null,fechaVen date NOT null, NumeroLote varchar(15)not null,marca varchar(15)not null,descripcion varchar(50)not null,CategoriaProd int not null, FOREIGN KEY (CategoriaProd)REFERENCES categorias(id));

CREATE TABLE ventas(
    idVenta int PRIMARY key AUTO_INCREMENT, 
    idProducto int, 
    idEmpleado int,
    cantidadVend int not null, 
    precioU decimal(6,2)not null, 
    total decimal(8,2)not null, 
    fecha Timestamp not null Default current_timestamp,
    FOREIGN KEY (idEmpleado) REFERENCES empleados(CodEmpleado) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (idProducto) REFERENCES producto(idPro) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO empleados(nombre,apellidoP,apellidoM,carnet,email,telefono,direccion,nivelA, state) VALUES 
("Juanito","Condori","Perez","25252326","juan@gamil.com","78986532","calle monte blanco","A", true);

INSERT INTO categorias(codPr, categoria, descripcion) VALUES("001","1","categoria numero 1");

INSERT INTO producto(codProducto,composicionPro,cantidadPro,precio,fechaVen,NumeroLote,marca,descripcion,CategoriaProd)VALUES("001","600mg","100",40.60,"05/10/2024","10","Mentisan","iboprofeno para el resfrio","1");

INSERT INTO ventas (idProducto, idEmpleado, cantidadVend,precioU,total) VALUES(1,1,1,1.6, 1.6);