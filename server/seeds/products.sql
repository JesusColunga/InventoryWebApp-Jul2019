
INSERT INTO authors (firstName, lastName) values ('Jane', 'Austen');

INSERT INTO Products
  (user_id, description, product_type, family, existence, unit_measure, cost, price, notes)
  values ("A9TIM-1000", "1,000 Timbres Aspel", "P", "Asp", 1, "Srvc", 1000, 1400, "Servicio de Timbrado Aspel");

SELECT * FROM Products;



-----


INSERT INTO `project3`.`Products` (`user_id`, `description`, `product_type`, `family`, `existence`, `unit_measure`, `cost`, `price`, `notes`) VALUES ('A9TIM-1000', '1,000 Timbres Aspel', 'P', 'Asp', '1', 'Srvc', '1000', '1400', 'Servicio de Timbrado Aspel');

-----

{
         user_id:      "A9TIM-1000",
         description:  "1,000 Timbres Aspel",
         product_type: "P",
         family:       "Asp",
         existence:    1,
         unit_measure: "Srvc",
         cost:         1000,
         price:        1400,
         notes:        "Servicio de Timbrado Aspel"
}
