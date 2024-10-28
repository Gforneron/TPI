-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-10-2024 a las 16:20:22
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `startech`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `curso_id` int(11) NOT NULL,
  `nombre_curso` varchar(100) NOT NULL,
  `orientacion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `curso`
--

INSERT INTO `curso` (`curso_id`, `nombre_curso`, `orientacion`) VALUES
(1, '1ro 1ra', 'Tecnica'),
(2, '1ro 2da', 'Tecnica'),
(3, '1ro 3ra', 'Tecnica'),
(4, '1ro 4ta', 'Tecnica'),
(5, '2do 1ra', 'Tecnica'),
(6, '2do 2da', 'Tecnica'),
(7, '2do 3ra', 'Tecnica'),
(8, '2do 4ta', 'Tecnica'),
(9, '3ro 1ra', 'Tecnica'),
(10, '3ro 2da', 'Tecnica'),
(11, '3ro 3ra', 'Tecnica'),
(12, '3ro 4ta', 'Tecnica'),
(13, '4to 1ra', 'Tecnica'),
(14, '4to 2da', 'Tecnica'),
(15, '4to 3ra', 'Tecnica'),
(16, '4to 4ta', 'Tecnica'),
(17, '5to 1ra', 'Tecnica'),
(18, '5to 2da', 'Tecnica'),
(19, '5to 3ra', 'Tecnica'),
(20, '5to 4ta', 'Tecnica'),
(21, '6to 1ra', 'Tecnica'),
(22, '6to 2da', 'Tecnica'),
(23, '6to 3ra', 'Tecnica'),
(24, '6to 4ta', 'Tecnica'),
(25, '7mo 1ra', 'Tecnica'),
(26, '7mo 2da', 'Tecnica'),
(27, '7mo 3ra', 'Tecnica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso_materia`
--

CREATE TABLE `curso_materia` (
  `curso_materia_id` int(11) NOT NULL,
  `curso_id` int(11) DEFAULT NULL,
  `materia_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `curso_materia`
--

INSERT INTO `curso_materia` (`curso_materia_id`, `curso_id`, `materia_id`) VALUES
(1, 25, 1),
(2, 25, 2),
(3, 25, 3),
(4, 25, 4),
(5, 25, 5),
(6, 25, 6),
(7, 25, 7),
(8, 25, 8),
(9, 25, 9),
(10, 25, 10),
(11, 26, 1),
(12, 26, 2),
(13, 26, 3),
(14, 26, 4),
(15, 26, 5),
(16, 26, 6),
(17, 26, 7),
(18, 26, 8),
(19, 26, 9),
(20, 26, 10),
(21, 27, 1),
(22, 27, 2),
(23, 27, 3),
(24, 27, 4),
(25, 27, 5),
(26, 27, 6),
(27, 27, 7),
(28, 27, 8),
(29, 27, 9),
(30, 27, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `materia_id` int(11) NOT NULL,
  `nombre_materia` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`materia_id`, `nombre_materia`) VALUES
(1, 'Matemáticas Séptimo\r\n'),
(2, 'ingles tecnico Séptimo\r\n'),
(3, 'Marco Jurídico y derechos del trabajo'),
(4, 'Asistencia 2'),
(5, 'Autogestión'),
(6, 'Hardware 4'),
(7, 'Prácticas Profesionalizantes 2'),
(8, 'Programación'),
(9, 'Redes 3'),
(10, 'Arduino 3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nota`
--

CREATE TABLE `nota` (
  `nota_id` int(11) NOT NULL,
  `persona_id` int(11) DEFAULT NULL,
  `materia_id` int(11) DEFAULT NULL,
  `curso_id` int(11) DEFAULT NULL,
  `nota` decimal(5,2) NOT NULL,
  `cuatrimestre` int(11) NOT NULL,
  `informe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `nota`
--

INSERT INTO `nota` (`nota_id`, `persona_id`, `materia_id`, `curso_id`, `nota`, `cuatrimestre`, `informe`) VALUES
(46, 45888806, 4, 25, 2.00, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `persona_id` int(255) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `tipo_usuario_id` int(11) DEFAULT NULL,
  `curso_id` int(11) DEFAULT NULL,
  `foto_perfil` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`persona_id`, `nombre`, `correo`, `contrasena`, `tipo_usuario_id`, `curso_id`, `foto_perfil`) VALUES
(22222222, 'alumnado', 'alumnado@gmail.com', '$2a$08$bMxDgXABv2X9xxs3O/ro/OswoUXW3WJ0IO2MPSzY8hftUrvdHoC9.', 3, NULL, 'user_predeterminado.jpg'),
(33333333, 'administrador', 'administrador@gmail.com', '$2a$08$ehQLcIux3p9dXws2n.epqeXia357jKNn2F2Pm0K83xYLd7m0wwHUC', 2, NULL, 'user_predeterminado.jpg'),
(44102385, 'Pablo Abdala', 'abdala@gmail.com', '$2a$08$DbVVwS4e1LQM8ShC8lDKnuwlksePEnlMvjQ2LSAYHmqX4goCC4HdG', 1, 25, 'user_predeterminado.jpg'),
(44256478, 'Mia Alvarez', 'alvarez@gmail.com', '$2a$08$5irEJsHzeFqKWq6mO579FuTAiAP4TmvTBPjSTYQQT8gGOl0W8DA1i', 1, 25, 'user_predeterminado.jpg'),
(44399517, 'Tomas Avanzatti', 'avanzatti@gmail.com', '$2a$08$nuiIf98bAHFjYWmndAw0CeC3tBaLJd23pRQvI1zPl1ivh8xaVbBie', 1, 25, 'user_predeterminado.jpg'),
(44518269, 'Pablo Celen', 'celen@gmail.com', '$2a$08$icoJO8kcQ9C9DcBmn6hPH.YyRno6NWda.WWUnaU5OrlfkhGuwJpmy', 1, 25, 'user_predeterminado.jpg'),
(44626914, 'Eros Colivoro', 'colivoro@gmail.com', '$2a$08$DH3G.dkp4jel4eU4/dvYUOaHHVi1zWMRtDExIxsFDx77tHgI9OqOq', 1, 25, 'user_predeterminado.jpg'),
(44735192, 'Agustin Colman', 'colman@gmail.com', '$2a$08$X4Bo4bMBM/gNdpTDW1NRK.KTV5kZ7aABzpCV5BpbfAHV.sqjHZUda', 1, 25, 'user_predeterminado.jpg'),
(44899451, 'Lucas Curra', 'curra@gmail.com', '$2a$08$S7stHxYBydndIh3M1HIgbeLk/IpGbfO0XbGgNK9pzYh39T4IMiTAe', 1, 25, 'user_predeterminado.jpg'),
(45103786, 'Tiziano Degiovanni', 'degiovanni@gmail.com', '$2a$08$vNTem.uJzFL5EPNXqKNEcuGvVrmOglODuWMJ69d7t6K/K.s/1s1/G', 1, 25, 'user_predeterminado.jpg'),
(45245398, 'Lucas Diaz', 'diaz@gmail.com', '$2a$08$jZt8.SsXHgIYO/ukgzaSZ.TNfhqIIz4EVzB/FdIbV7fPpW3C.Yrzm', 1, 25, 'user_predeterminado.jpg'),
(45362771, 'Micaela Gaudelli', 'gaudelli@gmail.com', '$2a$08$47EgXJsXGY/aks5ctJDtcu1/QZwf35YMfl3zwJyu4w9Mjkc62TtUm', 1, 25, 'user_predeterminado.jpg'),
(45487650, 'Abril Martinez', 'abrilmartinez@gmail.com', '$2a$08$q7l19F2xyOaC/iTzu7dAw.WV9Fe2zEBCcoa7BXgQcsIkzbMi9W75i', 1, 25, 'user_predeterminado.jpg'),
(45508329, 'Agustin Martinez', 'agustinmartinez@gmail.com', '$2a$08$9N6svmF2iHgkSJdSFjlwtOnbw61XDp4DFkSyDvxjMmKm.WfZ.GpBu', 1, 25, 'user_predeterminado.jpg'),
(45689214, 'Antonio Martinez', 'antoniomartinez@gmail.com', '$2a$08$aTozkVrLbnq0CgcK7CPN9udOisT/u.VNJLjyLEuUjNfMkuPnL.rzu', 1, 25, 'user_predeterminado.jpg'),
(45742930, 'Mariano Olivera', 'olivera@gmail.com', '$2a$08$n.tjkmG3j.IByfEH5.f2ju1kbd/vwn420NsiOyMA7t7BzsFClrofO', 1, 25, 'user_predeterminado.jpg'),
(45852481, 'Julio Quintana', 'quintana@gmail.com', '$2a$08$bQ.uzUD7VGTfkDkmuAMsM.hFd6en2sKA5B.lsppCuAvqmdFTvh9xK', 1, 25, 'user_predeterminado.jpg'),
(45888806, 'Gonzalo Forneron', 'gonzalo@gmail.com', '$2a$08$s5tGtk.KcqV7ziPyhPgEzuKImfya2fTe9mJIT4yVb6MMDhUKcGdmi', 2, 25, 'foto_perfil-1729884332749.jpg'),
(45913672, 'Yuliana Ramirez', 'ramirez@gmail.com', '$2a$08$dp9LEu40lO7oqYeAhlnrY.JDjdvrP1rOCWfGXCCusjdupy1rggyTm', 1, 25, 'user_predeterminado.jpg'),
(46045183, 'Mario Rivero', 'rivero@gmail.com', '$2a$08$Xi.jdir.6OjbnJ3nTE/bxu6ecSc7TOXEkddZAz/Is0zCGrrfAv9pm', 1, 25, 'user_predeterminado.jpg'),
(46112590, 'Santiago Sanchez', 'sanchez@gmail.com', '$2a$08$hYWgZj5qnSGd9dowU/L/LOlXpVQq98LqArwriiaREmp2A4iXpXPxS', 1, 25, 'user_predeterminado.jpg'),
(46235467, 'Valentina Suarez', 'suarez@gmail.com', '$2a$08$xfhIwD9qWPiKb3WhdumjpOvz2eD74GsDbHsEIyuILCWIly.0bdiSe', 1, 25, 'user_predeterminado.jpg'),
(46348712, 'Florencia Vergara', 'vergara@gmail.com', '$2a$08$jPcXY7e.dvR0IWkVIXobuu2AgbJ2ijG0y7TndL1atX4olAsxL842a', 1, 25, 'user_predeterminado.jpg'),
(46470563, 'Jennifer Yapura', 'yapura@gmail.com', '$2a$08$qovrcm6wgr.J5IRZIUWG7.ilH/IX7KQsdNam21TUG1zBuFKcnVLWm', 1, 25, 'user_predeterminado.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `tipo_usuario_id` int(11) NOT NULL,
  `rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`tipo_usuario_id`, `rol`) VALUES
(1, 'alumno'),
(2, 'administrador'),
(3, 'alumnado');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`curso_id`);

--
-- Indices de la tabla `curso_materia`
--
ALTER TABLE `curso_materia`
  ADD PRIMARY KEY (`curso_materia_id`),
  ADD KEY `curso_id` (`curso_id`),
  ADD KEY `materia_id` (`materia_id`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`materia_id`);

--
-- Indices de la tabla `nota`
--
ALTER TABLE `nota`
  ADD PRIMARY KEY (`nota_id`),
  ADD KEY `materia_id` (`materia_id`),
  ADD KEY `curso_id` (`curso_id`),
  ADD KEY `nota_ibfk_1` (`persona_id`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`persona_id`),
  ADD KEY `curso_id` (`curso_id`),
  ADD KEY `tipo_usuario_id` (`tipo_usuario_id`);

--
-- Indices de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`tipo_usuario_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `curso`
--
ALTER TABLE `curso`
  MODIFY `curso_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `curso_materia`
--
ALTER TABLE `curso_materia`
  MODIFY `curso_materia_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `materia_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `nota`
--
ALTER TABLE `nota`
  MODIFY `nota_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `tipo_usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `curso_materia`
--
ALTER TABLE `curso_materia`
  ADD CONSTRAINT `curso_materia_ibfk_1` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`curso_id`),
  ADD CONSTRAINT `curso_materia_ibfk_2` FOREIGN KEY (`materia_id`) REFERENCES `materia` (`materia_id`);

--
-- Filtros para la tabla `nota`
--
ALTER TABLE `nota`
  ADD CONSTRAINT `nota_ibfk_1` FOREIGN KEY (`persona_id`) REFERENCES `persona` (`persona_id`),
  ADD CONSTRAINT `nota_ibfk_2` FOREIGN KEY (`materia_id`) REFERENCES `materia` (`materia_id`),
  ADD CONSTRAINT `nota_ibfk_3` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`curso_id`);

--
-- Filtros para la tabla `persona`
--
ALTER TABLE `persona`
  ADD CONSTRAINT `persona_ibfk_1` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`curso_id`),
  ADD CONSTRAINT `persona_ibfk_2` FOREIGN KEY (`tipo_usuario_id`) REFERENCES `tipo_usuario` (`tipo_usuario_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
