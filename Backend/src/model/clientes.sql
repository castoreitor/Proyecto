SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- volcado de datos para tabla `Cliente`

DROP TABLE IF EXISTS `Cliente`;
CREATE TABLE IF NOT EXISTS `Cliente`(
  `ID_Cliente` INT PRIMARY KEY AUTO_INCREMENT,
  `Nombre` VARCHAR(50) NOT NULL,
  `Apellido` VARCHAR(50) NOT NULL,
  `Correo_electronico` VARCHAR(100) NOT NULL UNIQUE,
  `Telefono` VARCHAR(20) NOT NULL,
  `Contraseña` VARCHAR(255) NOT NULL
);
INSERT INTO `Cliente` (
    `Nombre`,
    `Apellido`,
    `Correo_electronico`,
    `Telefono`,
    `Contraseña`
  )
VALUES 
  ('su', 'su', 'usuario@supersu.com', '1111', 'superusuario'),
  ('bruno', 'oidor', 'bruno@gmail.com', '1234', '1234'),
  ('max', 'benitez', 'max@gmail.com', '2345', '2345'),
  ('milo', 'oidor', 'milo@gmail.com', '3456', '3456'),
  ('paco', 'benitez', 'paco@gmail.com', '4567', '4567'),
  ('elmo', 'benitez', 'elmo@gmail.com', '5678', '5678'),
  ('otto', 'castro', 'otto@gmail.com', '6789', '6789');

DROP TABLE IF EXISTS `Producto`;
CREATE TABLE IF NOT EXISTS `Producto` (
  `ID_Producto` INT PRIMARY KEY,
  `Nombre` VARCHAR(50) NOT NULL,
  `Categoria` VARCHAR(50) NOT NULL,
  `Descripcion` VARCHAR(255) NOT NULL,
  `Precio_unitario` DECIMAL(10,2) NOT NULL,
  `Stock` INT NOT NULL
);

INSERT INTO `Producto` (
    `ID_Producto`,
    `Nombre`,
    `Categoria`,
    `Descripcion`,
    `Precio_unitario`,
    `Stock`
)
VALUES 
  (1, 'lomo','carnes', 'lomo de carne de res 1kg', 20.00, 10);  -- Sin comillas para valores numéricos

COMMIT;
