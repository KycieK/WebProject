INSERT INTO sportevents (name, preciseDate, duration, eventDescription, sportType, maxAmountofPlayer, createdAt, updatedAt) 
VALUES 
('Football Match 1', '2023-04-01 15:00:00', 2, 'A friendly match between two local teams', 'Football', 22, NOW(), NOW()),
('Basketball Tournament', '2023-04-10 10:00:00', 5, 'A weekend tournament with prizes for the top teams', 'Basketball', 40, NOW(), NOW()),
('Volleyball Training', '2023-04-05 18:00:00', 1, 'A weekly training session for intermediate players', 'Volleyball', 15, NOW(), NOW()),
('Tennis Lessons', '2023-04-08 09:00:00', 2, 'Individual and group lessons for all skill levels', 'Tennis', 10, NOW(), NOW()),
('Hockey Match', '2023-04-12 19:00:00', 3, 'A competitive match between two local teams', 'Hockey', 18, NOW(), NOW()),
('Rugby Scrimmage', '2023-04-02 14:00:00', 2, 'A friendly scrimmage between two rugby teams', 'Rugby', 30, NOW(), NOW()),
('Football Training', '2023-04-06 17:00:00', 1, 'A weekly training session for beginner and intermediate players', 'Football', 20, NOW(), NOW()),
('Basketball Pickup Game', '2023-04-03 19:00:00', 2, 'A casual pickup game for players of all levels', 'Basketball', 10, NOW(), NOW()),
('Volleyball Tournament', '2023-04-09 12:00:00', 6, 'A regional tournament for top-level teams', 'Volleyball', 24, NOW(), NOW()),
('Tennis Match', '2023-04-07 16:00:00', 3, 'A competitive match between two players', 'Tennis', 2, NOW(), NOW());

INSERT INTO users (fullname, email, password, token, createdAt, updatedAt) 
VALUES 
('John Doe', 'johndoe@example.com', 'password123', 'token123', NOW(), NOW()),
('Jane Smith', 'janesmith@example.com', 'letmein', 'token456', NOW(), NOW()),
('Bob Johnson', 'bobjohnson@example.com', 'mypassword', 'token789', NOW(), NOW()),
('Sarah Williams', 'sarahwilliams@example.com', 'iloveyou', 'token012', NOW(), NOW()),
('Mike Davis', 'mikedavis@example.com', 'secret', 'token345', NOW(), NOW()),
('Emily Jones', 'emilyjones@example.com', 'mypassword123', 'token789', NOW(), NOW()),
('Tom Brown', 'tombrown@example.com', '123456', 'token012', NOW(), NOW()),
('Alice Johnson', 'alicejohnson@example.com', 'password456', 'token345', NOW(), NOW()),
('David Lee', 'davidlee@example.com', 'abcdefg', 'token678', NOW(), NOW()),
('Linda Martinez', 'lindamartinez@example.com', 'qwerty', 'token901', NOW(), NOW());
