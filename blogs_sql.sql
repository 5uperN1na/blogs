create table blogs (
id int auto_increment,
title varchar (100) not null,
content varchar (255) not null,
authorid int not null,
created_at timestamp default now(),
primary key(id),
foreign key (authorid) references authors(id)
);

create table acesstokens (
id int auto_increment,
authorid int not null,
token TEXT not null,
created_at timestamp default now(),
primary key(id),
foreign key (authorid) references authors(id)
);



UPDATE authors SET password = 123 where id = 4;

drop table blogs;

drop table blogtags;

create table authors (
id int auto_increment,
name varchar (50)not null,
email varchar (50) null,
created_at timestamp default now(),
primary key(id)
);

alter table authors add column banned char(1) default 'n' after password;



update authors set password = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpZCI6MTIsImlhdCI6MTU5NjY0Mjc4MH0.8FXiSRxrRViUtaJW7ETApd6JQ2L9GvBdFgPzDdflhA0" where id = 1;

select * from authors;
select * from blogs;
select * from tags;
select * from blogtags;

delete from blogtags where blogid = 36;

select * from blogs where id = 44;

delete from blogs where authorid = 15;

select * from blogs where authorid = 1;

delete from blogs where authorid = 1 && id = 1;

delete from authors where id = 14;
 
create table tags(
id int auto_increment,
name varchar (50)not null,
created_at timestamp default now(),
primary key(id)
);

create table blogtags(
blogid int not null,
tagid int not null,
primary key(blogid, tagid),
foreign key (blogid) references blogs(id),
foreign key (tagid) references tags(id)
);

select * from blogs where authorid = 1;

insert into blogtags (blogid, tagid) values
(6, 3);

select tags.id, tags.name from blogtags 
join tags on tagid = tags.id;
where blogid = 6;

drop table blogtags;

ALTER TABLE users CHANGE create_at created_at timestamp default now();

ALTER TABLE blogs
ADD COLUMN image_url varchar(100) AFTER content;


ALTER TABLE authors
ADD COLUMN role varchar(25) default "guest" AFTER password;

select * from authors;


ALTER TABLE blogs modify COLUMN image_url VARCHAR (255) default "https://i.ytimg.com/vi/froSxJ3T6jE/maxresdefault.jpg";

describe blogs;
insert into tags (name) values
("fitness"),
("wellness"),
("health");

insert into authors (name, email) values
("Bob", "bob@test.com"),
("Charles", "charles@test.com"),
("Georoge", "george@test.com")

insert into blogs (title, content, authorid)
("I can fly", "I believe I can fly, I belive I can touch the sky.", 1)
("Stuck on you", "Can't stop...won't stop...moving along and just..", 2);

insert into blogs (title, content, authorid) values
("Open", "This is just a place holder.", 1),
("Close", "This is just a place holder.", 2),
("Start", "This is just a place holder.", 3);

insert into blogs (id, title, content, image_url, authorid ) values
(2, "Fitness Classes vs. Gym", "Which would you rather do?" "https://fitathletic.com/wp-content/uploads/2019/12/Are-fitness-classes-better-than-gym.jpg", 2),
(6, "Fitness Classes vs. Gym", "Which would you rather do?" "https://fitathletic.com/wp-content/uploads/2019/12/Are-fitness-classes-better-than-gym.jpg", 3),
(7, "Fitness Classes vs. Gym", "Which would you rather do?" "https://fitathletic.com/wp-content/uploads/2019/12/Are-fitness-classes-better-than-gym.jpg", 3);


update blogs set image_url = 
"https://i.ytimg.com/vi/froSxJ3T6jE/maxresdefault.jpg"
where id = 6;

select * from blogs;


select * from blogs;

CREATE TABLE SAMPLE_TABLE  
(COL1 integer,  
COL2 varchar(30),  
COL3 varchar(50),  
PRIMARY KEY (COL1, COL2));  

create table blogtags
(blogsid integer,
tagsid integer,
primary key (blogsid, tagsid));

CREATE TABLE table_name (
  col1 INT NOT NULL,
  col2 INT NOT NULL,
  PRIMARY KEY (col1, col2),
  FOREIGN KEY (col1) REFERENCES other_table1(id),  
  FOREIGN KEY (col2) REFERENCES other_table2(id)
);

create table blogtags(
blogsid int not null,
tagsid int not null,
primary key (blogsid, tagsid),
foreign key (blogsid) references blogs(id),
foreign key (tagsid) references tags(id)
);

SELECT id, authors.name FROM authors;

select * from blogs;
select * from authors;

SELECT blogs.*, authors.name, authors.email FROM blogs JOIN authors on authors.id=blogs.authorid;

DELETE FROM blogs WHERE id = 1;

SELECT blogs.* FROM blogs JOIN authors on authors.id=blogs.authorid;

select order_date, order_amount
from customers
join orders
   on customers.customer_id = orders.customer_id
where customer_id = 3

SELECT tags.id, tags.name from blogtags JOIN tags on tagid = tags.id;

select * from authors;

select * from blogtags;

select * from blogs;

delete from blogtags where blogid = 2 && tagid = 2;

INSERT INTO blogtags (blogid, tagid) VALUE (23, 3);



select * from tags;

delete from tags where id = 4;

select * from blogs;

select * from blogtags;



DELIMITER $$
CREATE PROCEDURE delete_blog (blog_id INT)
BEGIN
DELETE FROM blogs WHERE id = blog_id;
END $$
DELIMITER ;

CALL delete_blog (40);

DELIMITER $$
CREATE PROCEDURE get_blogtag(blog_id INT)
BEGIN
SELECT tags.id, tags.name 
FROM
blogtags 
JOIN 
tags on tagid = tags.id 
WHERE blogid = blog_id;
END $$
DELIMITER ;

CALL get_blogtag(35);

 SELECT tags.id, tags.name from blogtags JOIN tags on tagid = tags.id WHERE blogid = 35;
 select * from blogtags;
 
 select * from authors;