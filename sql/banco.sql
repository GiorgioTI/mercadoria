CREATE DATABASE estoque;

CREATE TABLE `mercadoria` (  
  `id_merc` int(11) NOT NULL AUTO_INCREMENT,
  `cod_merc` int(200) NOT NULL,
  `name_merc` varchar(200) COLLATE utf8_unicode_ci NOT NULL,  
  `tipo_merc` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `quant_merc` int(200) COLLATE utf8_unicode_ci NOT NULL,
  `preco_merc` decimal(10,2) NOT NULL, 
  `tipo_neg_merc` varchar(200) COLLATE utf8_unicode_ci NOT NULL,  
  PRIMARY KEY (`id_merc`)  
 );