DROP DATABASE IF EXISTS laboratorio1;
CREATE DATABASE laboratorio1;
USE laboratorio1;
CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE productos(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL, 
    precio DECIMAL(10, 2) NOT NULL, 
    descripcion VARCHAR(255)
);

INSERT INTO users (username, password) VALUES
('admin', 'admin123'),
('maria_dev', 'pass1234'),
('carlos87', 'securepass'),
('ana_test', 'qwerty2025');

INSERT INTO productos (nombre, precio, descripcion) VALUES
('Laptop HP Pavilion 14"', 15999.99, 'Laptop de 14 pulgadas con procesador Intel i5 y 8GB RAM'),
('Mouse Logitech M185', 349.00, 'Mouse inalámbrico óptico con receptor USB'),
('Teclado Mecánico Redragon Kumara', 899.00, 'Teclado mecánico con retroiluminación roja'),
('Monitor Samsung 24"', 2999.00, 'Monitor LED Full HD 1920x1080'),
('Disco Duro Externo Seagate 1TB', 1250.50, 'Almacenamiento portátil USB 3.0'),
('Memoria USB Kingston 64GB', 220.00, 'Memoria flash USB 3.1 de alta velocidad'),
('Audífonos Sony WH-CH510', 899.99, 'Audífonos Bluetooth con micrófono integrado'),
('Impresora Epson EcoTank L3250', 4299.00, 'Impresora multifuncional con sistema de tinta continua'),
('Silla Gamer Cougar Armor One', 4999.00, 'Silla ergonómica para gamers con soporte lumbar'),
('Router TP-Link Archer C80', 1699.00, 'Router inalámbrico Wi-Fi AC1900 con 4 antenas'),
('Cámara Web Logitech C920', 1999.00, 'Cámara Full HD 1080p con micrófonos estéreo'),
('Smartphone Samsung Galaxy A15', 4799.00, 'Teléfono Android con pantalla Super AMOLED de 6.5"'),
('Tablet Lenovo Tab M10', 3899.00, 'Tablet de 10.1 pulgadas con 64GB de almacenamiento'),
('Disco SSD Kingston 480GB', 999.00, 'Unidad de estado sólido SATA III 2.5"'),
('Fuente de Poder EVGA 600W', 1399.00, 'Fuente de poder certificada 80 Plus White'),
('Gabinete NZXT H510', 1899.00, 'Gabinete ATX con panel lateral de vidrio templado'),
('Tarjeta Gráfica NVIDIA GTX 1660', 5299.00, 'GPU con 6GB GDDR5 ideal para gaming'),
('Procesador AMD Ryzen 5 5600', 4499.00, 'CPU de 6 núcleos con socket AM4'),
('Memoria RAM Corsair 16GB DDR4', 1399.00, 'Módulo DDR4 a 3200MHz compatible con la mayoría de placas'),
('Micrófono Blue Snowball', 1890.00, 'Micrófono USB cardioide para streaming y podcasting');


