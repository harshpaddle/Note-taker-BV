DROP DATABASE IF EXISTS notes_db;
CREATE DATABASE notes_db;

USE notes_db;

CREATE TABLE notes(
  id INT(10) NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  textarea TEXT(300) NOT NULL,
  primary key(id)
);

INSERT INTO notes
 (title, textarea)
VALUES ("Note-taker", "Must finish the note-taker homework before saturday night"),
 ("Update portfolio", "been a while since updated the updated portfolio"),
 ("Update portfolio", "been a while since updated the updated portfolio"),
 ("Update portfolio", "been a while since updated the updated portfolio");