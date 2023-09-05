-- Create the users table
CREATE TABLE users (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    password VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    type VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    active TINYINT DEFAULT 1
);

-- Create the addUser stored procedure
DELIMITER //
CREATE PROCEDURE addUser(
    IN userEmail VARCHAR(255),
    IN userPassword VARCHAR(255),
    IN userType VARCHAR(255),
    IN userActive TINYINT
)
BEGIN
    INSERT INTO users (email, password, type, active)
    VALUES (userEmail, userPassword, userType, userActive);
END;
//
DELIMITER ;

-- Call the addUser stored procedure to insert a new user
CALL addUser('example@email.com', 'password123', 'user', 1);
