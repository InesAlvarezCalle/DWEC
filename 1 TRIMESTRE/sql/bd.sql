CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE biblioteca(
    id_biblioteca INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    direccion VARCHAR(100),
    codigo_postal INT,
    telefono CHAR(9),
    correo_electronico VARCHAR(100)
);

CREATE TABLE material(
    id_material INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    numero_ejemplares INT NOT NULL
);

CREATE TABLE libro(
    id_material INT PRIMARY KEY,
    autor VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_material) REFERENCES material(id_material)
);

CREATE TABLE revista(
    id_material INT PRIMARY KEY,
    fecha_publicacion DATE NOT NULL,
    FOREIGN KEY (id_material) REFERENCES material(id_material)
);

CREATE TABLE peliculas(
    id_material INT PRIMARY KEY,
    director VARCHAR(100) NOT NULL,
    genero VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_material) REFERENCES material(id_material)
);

CREATE TABLE persona(
    id_persona INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    dni VARCHAR(10) UNIQUE NOT NULL
);

CREATE TABLE socio(
    id_persona INT PRIMARY KEY,
    FOREIGN KEY (id_persona) REFERENCES persona(id_persona)
);

CREATE TABLE administrador(
    id_persona INT PRIMARY KEY,
    cargo ENUM("Administrador", "Ajudant") DEFAULT "Administrador",
    FOREIGN KEY (id_persona) REFERENCES persona(id_persona)
);

CREATE TABLE prestamos(
    id_prestamo INT PRIMARY KEY AUTO_INCREMENT,
    id_socio INT NOT NULL,
    id_material INT NOT NULL,
    FOREIGN KEY (id_socio) REFERENCES socio(id_persona),
    FOREIGN KEY (id_material) REFERENCES material(id_material)
);