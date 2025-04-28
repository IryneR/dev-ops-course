-- Institutions table
CREATE TABLE IF NOT EXISTS Institutions
(
  institution_id   INT AUTO_INCREMENT PRIMARY KEY,
  institution_name VARCHAR(255)                    NOT NULL,
  institution_type ENUM ('School', 'Kindergarten') NOT NULL,
  address          VARCHAR(255)                    NOT NULL
  );

-- Classes table
CREATE TABLE IF NOT EXISTS Classes
(
  class_id       INT AUTO_INCREMENT PRIMARY KEY,
  class_name     VARCHAR(100)                                                      NOT NULL,
  institution_id INT                                                               NOT NULL,
  direction      ENUM ('Mathematics', 'Biology and Chemistry', 'Language Studies') NOT NULL,
  FOREIGN KEY (institution_id) REFERENCES Institutions (institution_id)
  );

-- Children table
CREATE TABLE IF NOT EXISTS Children
(
  child_id       INT AUTO_INCREMENT PRIMARY KEY,
  first_name     VARCHAR(100),
  last_name      VARCHAR(100),
  birth_date     DATE,
  year_of_entry  INT,
  age            INT,
  institution_id INT,
  class_id       INT,
  FOREIGN KEY (institution_id) REFERENCES Institutions (institution_id),
  FOREIGN KEY (class_id) REFERENCES Classes (class_id)
  );

-- Parents table
CREATE TABLE IF NOT EXISTS Parents
(
  parent_id   INT AUTO_INCREMENT PRIMARY KEY,
  first_name  VARCHAR(100),
  last_name   VARCHAR(100),
  child_id    INT,
  tuition_fee DECIMAL(10, 2),
  FOREIGN KEY (child_id) REFERENCES Children (child_id)
  );

INSERT INTO Institutions (institution_name, institution_type, address)
VALUES ('Sunrise School', 'School', '123 School Street'),
       ('Little Explorers Kindergarten', 'Kindergarten', '456 Kinder Lane'),
       ('Bright Future Academy', 'School', '789 Academy Blvd');

INSERT INTO Classes (class_name, institution_id, direction)
VALUES ('1-A', 1, 'Mathematics'),
       ('2-B', 3, 'Biology and Chemistry'),
       ('KG-1', 2, 'Language Studies');

INSERT INTO Children (first_name, last_name, birth_date, year_of_entry, age, institution_id, class_id)
VALUES ('Andriy', 'Kovalchuk', '2015-04-15', 2021, 9, 1, 1),
       ('Olha', 'Bondarenko', '2018-10-30', 2023, 6, 2, 3),
       ('Yaroslav', 'Shevchenko', '2014-02-20', 2020, 10, 3, 2);

INSERT INTO Parents (first_name, last_name, child_id, tuition_fee)
VALUES ('Oksana', 'Kovalchuk', 1, 1500.00),
       ('Dmytro', 'Bondarenko', 2, 1000.00),
       ('Iryna', 'Shevchenko', 3, 1800.00);

SELECT c.first_name as chils_first_name, c.last_name as child_last_name, i.institution_name, cl.direction FROM Children c
                                                                                                                 LEFT JOIN Institutions i on i.institution_id = c.institution_id
                                                                                                                 LEFT JOIN Classes cl on i.institution_id = cl.institution_id;

SELECT p.first_name as parent_first_name,
       p.last_name  as parent_last_name,
       c.first_name as child_first_name,
       c.last_name  as child_last_name,
       p.tuition_fee
FROM Parents p
       LEFT JOIN Children c on c.child_id = p.child_id;

SELECT i.institution_name, i.address, COUNT(i.institution_id)
FROM Institutions i
       LEFT JOIN Children c on i.institution_id = c.institution_id
GROUP BY i.institution_id;

docker exec -i 8c918f8c1da6 mysqldump -u root SchoolDB > SchoolDB_backup.sql

docker exec -i 8c918f8c1da6 mysql -u root -e "CREATE DATABASE IF NOT EXISTS SchoolDB_Copy;"

docker exec -i 8c918f8c1da6 mysql -u root SchoolDB_Copy < SchoolDB_backup.sql

docker exec -i 8c918f8c1da6 mysql -u root -e "USE SchoolDB_Copy; SHOW TABLES;"

docker exec -i 8c918f8c1da6 mysql -u root -prootpass -e "SELECT COUNT(*) FROM SchoolDB_Copy.Children;"



