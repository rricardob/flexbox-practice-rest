CREATE TABLE `categoria`  (
  `id_categoria` bigint NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(255) NULL,
  PRIMARY KEY (`id_categoria`)
);

CREATE TABLE `categoriaPost`  (
  `id_categoriaPost` bigint NOT NULL AUTO_INCREMENT,
  `nombre_categoriaPost` varchar(255) NULL,
  `estado_categoriaPost` int NULL COMMENT '1: activo 0: inactivo',
  PRIMARY KEY (`id_categoriaPost`)
);

CREATE TABLE `comentario`  (
  `id_comentario` bigint NOT NULL AUTO_INCREMENT,
  `fechareg_comentario` timestamp NULL,
  `descripcion_comentario` varchar(255) NULL,
  `id_post` bigint NULL,
  `id_usuario` bigint NULL,
  PRIMARY KEY (`id_comentario`)
);

CREATE TABLE `empresa`  (
  `id_empresa` bigint(255) NOT NULL AUTO_INCREMENT,
  `nom_empresa` varchar(255) NOT NULL,
  `ruc_empresa` varchar(255) NOT NULL,
  `email_empresa` varchar(255) NOT NULL,
  `telefono_empresa` varchar(255) NOT NULL,
  `fechareg_empresa` timestamp NOT NULL,
  `descripcion_empresa` varchar(255) NOT NULL,
  `logo_empresa` varchar(255) NOT NULL,
  `mision_empresa` varchar(255) NOT NULL,
  `vision_empresa` varchar(255) NOT NULL,
  `valores_empresa` varchar(255) NOT NULL,
  PRIMARY KEY (`id_empresa`)
);

CREATE TABLE `perfil`  (
  `id_perfil` bigint NOT NULL AUTO_INCREMENT,
  `desc_perfil` varchar(255) NOT NULL,
  `tipo_perfil` int NOT NULL COMMENT '1: administrador 2: posteador 3: usuario',
  `estado` int NOT NULL COMMENT '1: activo 0: inactivo',
  PRIMARY KEY (`id_perfil`)
);

CREATE TABLE `post`  (
  `id_post` bigint NOT NULL AUTO_INCREMENT,
  `titulo_post` varchar(255) NULL,
  `fechareg_post` timestamp NULL,
  `id_usuario` bigint NULL,
  `descripcion_post` varchar(255) NULL,
  `imagen_post` varchar(255) NULL,
  `id_categoriaPost` bigint NULL,
  PRIMARY KEY (`id_post`)
);

CREATE TABLE `producto`  (
  `id_producto` bigint(255) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(255) NOT NULL,
  `codigo_producto` varchar(255) NOT NULL,
  `detalle_producto` varchar(255) NOT NULL,
  `precio_producto` double NOT NULL,
  `fechareg_producto` timestamp NOT NULL,
  `id_unidadMedida` bigint(255) NULL,
  `id_categoria` bigint(255) NULL,
  PRIMARY KEY (`id_producto`)
);

CREATE TABLE `proveedor`  (
  `id_proveedor` bigint NOT NULL AUTO_INCREMENT,
  `razonsoc_proveedor` varchar(255) NOT NULL,
  `nombre_proveedor` varchar(255) NOT NULL,
  `ruc_proveedor` varchar(11) NOT NULL,
  `email_proveedor` varchar(255) NOT NULL,
  `telefono_proveedor` int(255) NOT NULL,
  `contacto_proveedor` varchar(255) NOT NULL,
  `fechareg_proveedor` timestamp NOT NULL,
  `logo_proveedor` varchar(255) NOT NULL,
  `web_proveedor` varchar(255) NOT NULL,
  `direccion_proveedor` varchar(255) NULL,
  `estado_proveedor` int(255) NULL COMMENT '1: activo 0: inactivo',
  PRIMARY KEY (`id_proveedor`)
);

CREATE TABLE `unidadMedida`  (
  `id_unidadMedida` bigint NOT NULL AUTO_INCREMENT,
  `nombre_unidadMedida` varchar(255) NOT NULL,
  `codigo_unidadMedida` varchar(255) NOT NULL,
  `fechareg_unidadMedida` timestamp NOT NULL,
  PRIMARY KEY (`id_unidadMedida`)
);

CREATE TABLE `usuario`  (
  `id_usuario` bigint NOT NULL AUTO_INCREMENT,
  `cod_usuario` varchar(255) NOT NULL,
  `nom_usuario` varchar(255) NOT NULL,
  `ape_usuario` varchar(255) NOT NULL,
  `email_usuario` varchar(255) NOT NULL,
  `password_usuario` varchar(255) NOT NULL,
  `fechareg_usuario` timestamp NOT NULL,
  `id_perfil` bigint(255) NOT NULL,
  PRIMARY KEY (`id_usuario`)
);

ALTER TABLE `categoria` ADD `fechareg_categoria` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ;
ALTER TABLE `comentario` ADD CONSTRAINT `fk_post` FOREIGN KEY (`id_post`) REFERENCES `post` (`id_post`);
ALTER TABLE `comentario` ADD CONSTRAINT `fk_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);
ALTER TABLE `post` ADD CONSTRAINT `fk_categoriaPost` FOREIGN KEY (`id_categoriaPost`) REFERENCES `categoriaPost` (`id_categoriaPost`);
ALTER TABLE `producto` ADD CONSTRAINT `fk_unidaMedida` FOREIGN KEY (`id_unidadMedida`) REFERENCES `unidadMedida` (`id_unidadMedida`);
ALTER TABLE `producto` ADD CONSTRAINT `fk_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`);
ALTER TABLE `usuario` ADD CONSTRAINT `fk_perfil` FOREIGN KEY (`id_perfil`) REFERENCES `perfil` (`id_perfil`);

