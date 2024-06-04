SELECT * FROM cars.modelos;CREATE DATABASE `cars` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
SELECT `modelos`.`id_modelo`,
    `modelos`.`nombre_modelo`,
    `modelos`.`unidades_totales`,
    `modelos`.`unidades_alquiladas`,
    `modelos`.`personas`,
    `modelos`.`puertas`,
    `modelos`.`cambio`,
    `modelos`.`maletas`,
    `modelos`.`tipo`,
    `modelos`.`precioDia`
FROM `cars`.`modelos`;
