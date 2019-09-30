DROP DATABASE IF EXISTS dB_schema;

CREATE DATABASE dB_schema;
USE dB_schema;

CREATE TABLE Products (
    product_name VARCHAR(255),
    category VARCHAR(255),
    product_description VARCHAR(255),
    image VARCHAR(255),
	product_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
);
INSERT INTO Products (product_name, category, product_description, image)
	VALUES
	('Tissot', 'Leather', 'Made with care and genuine leather. It is mechanically powered and holds up to 80 hours of energy.', 'img/tissot.png'),
	('G-Shock', 'Rubber', 'Great watch for outdoor activity, but still classy enough to integrate with your nice outfits. Made with resin band and is 100 meters water resistant.', 'img/gshock.png'),
	('Citizen', 'Steel', 'Absolutely stunning in black. Stainless steel band with diamond accents inside the face.', 'img/citizenblack.png'),
	('Gucci', 'Leather', 'Sleek and stylish. Runs on Ronda quartz movement with a leather strap.', 'img/gucci.jpg'),
	('Movado', 'Steel', 'Flashy, but shows class and elegance. Uses Swiss quartz movement and glass is made from sapphire.', 'img/movado.jpg'),
	('Daniel Wellington', 'Leather', 'Black and simple design. Utilizes Japanese quartz movement along with a leather band.', 'img/dw.png'),
	('Holzkern', 'Wood', 'This vibrant and beautiful wooden watch is unique. Made of teak wood and stainless blue steel.', 'img/wood.jpg'),
	('Bulova', 'Steel', 'Classic Bulova watch. Gold stainless steel band with swarovski crystals around the face.', 'img/bulova.jpeg'),
	('MVMT', 'Leather', 'Glass case made of hardened mineral crystal for enhanced durability.', 'img/mvmt.jpg'),
	('Seiko', 'Rubber', 'Made with rose gold plating. Chronograph and uses japanese quartz movement.', 'img/seiko.jpg'),
	('Tag Heuer', 'Steel', 'Stay classy with this Tag Heuer. Uses Swiss quartz movement and dial is made of sapphire.', 'img/tag.jpg'),
	('Rolex', 'Steel', 'One of Conor McGregor\'s favorites. Classic stainless steel 18k gold. Uses automatic movement.', 'img/greenrolex.webp')
    ;
    
CREATE TABLE Prices (
	price_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    price INT,
    FOREIGN KEY (price_id) REFERENCES Products(product_id)
);
INSERT INTO Prices (price)
	VALUES
    (225),
    (130),
    (300),
    (1100),
    (895),
    (200),
    (279),
    (415),
    (95),
    (500),
    (1950),
    (35000)
    ;

CREATE TABLE Contacts (
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(255),
    user_name VARCHAR(15),
	message VARCHAR(255),
    contact_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	FOREIGN KEY (contact_id) REFERENCES Products(product_id)
);
INSERT INTO Contacts (firstname, lastname, email, user_name, message)
	VALUES
	('Bob', 'Mayor', 'bobmayer@hotmail.com', 'Bobmayer3', 'Hi, I am interested in buying a watch from you'),
	('Dustin', 'Poirer', 'diamond3@gmail.com', 'diamondmma', 'So fashionable!'),
	('Javier', 'Cox', 'coxdude@gmail.com', 'javecox44', 'Do you ship to Chicago?'),
	('Johnny', 'Griffin', 'grif@yahoo.com', 'jgrif12', 'Conor is awesome and so are your watches!'),
	('Khabib', 'Nurmagomedov', 'khabibtime@gmail.com', 'defnotkhabib', 'This is number one website for watches'),
	('Tony', 'Ferguson', 'anklepicks@yahoo.com', 'fergytime77', 'I just have to get one of your watches!'),
	('Jon', 'Jones', 'jonnybones@gmail.com', '3yepoke', 'One of the best places to buy a watch from'),
	('Conor', 'McGregor', 'champchamp2@gmail.com', 'doublechamp', 'Had to buy one of my own proper watches'),
	('Nate', 'Diaz', 'realchamp@yahoo.com', 'diaz229', 'Surprise surprise, told you I would buy one'),
	('Max', 'Holloway', 'blessedmma@gmail.com', 'blessedholloway', 'It is what it is, proper watches are what it is')
	;
SELECT * FROM Products;