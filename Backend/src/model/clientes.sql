SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
DROP TABLE IF EXISTS `Cliente`;
CREATE TABLE IF NOT EXISTS `Cliente` (
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
VALUES (
    'bruno',
    'oidor',
    'bruno@gmail.com',
    '1234',
    '1234'
  ),
  (
    'max',
    'benitez',
    'max@gmail.com',
    '2345',
    '2345'
  ),
  (
    'milo',
    'oidor',
    'milo@gmail.com',
    '3456',
    '3456'
  ),
  (
    'paco',
    'benitez',
    'paco@gmail.com',
    '4567',
    '4567'
  ),
  (
    'elmo',
    'benitez',
    'elmo@gmail.com',
    '5678',
    '5678'
  ),
  (
    'otto',
    'castro',
    'otto@gmail.com',
    '6789',
    '6789'
  );
COMMIT;