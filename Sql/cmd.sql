create database c;
use c;

create table country(
country_id int primary key,
country_name varchar(40)
);
insert into country values(1,'India'),(2,'USA'),(3,'UK'),(4,'Australia'),(5,'Canada');

create table state(
state_id int primary key,
state_name varchar(40),
country_id int,
foreign key(country_id) references country(country_id)
);
insert into state values(15,'AP',1),(27,'TG',1),(2,'TN',1),(23,'KN',1),(26,'MR',1);

create table city(
city_id int primary key,
city_name varchar(40),
state_id int,
foreign key(state_id) references state(state_id)
);
insert into city values(1,'Nellore',15),(2,'HYD',27),(3,'Chennai',2),(4,'Banglore',23),(5,'Mumbai',26);

create table student(
student_id int primary key,
student_name varchar(40),
age int,
city_id int,
foreign key(city_id) references city(city_id)
);
insert into student values(527,'Thanu',19,1),(515,'Anu',22,2),(502,'Akki',20,3),(523,'Vasu',21,4),(526,'sowmya',23,5);

show tables;
select * from country;
select * from state;
select * from city;
select * from student;
update country set country_name='INDIA' where country_id=1;
update state set state_name='TELANGANA' where state_id=27;
delete from student where city_id=5;
delete from student where student_id=526;
alter table city rename column city_id to c_id;
alter table student add marks int;
update student set marks=90 where student_id=527;
update student set marks=80 where student_id=515;
select min(age) from student;
select * from student where age between 19 and 20;
select * from student where student_name like 'T%';
select * from city order by city_name;
select distinct country_name from country;
select distinct state_name from state;
select * from city limit 2;
select * from student limit 3;
select * from student order by age desc;
select * from country where country_name='INDIA';
select * from state where state_name='AP';
select country_name,count(*) from country group by country_name having count(*)>=1;
select city_id, COUNT(*) AS num_students from student group by city_id;
select count(*) as total_students from student;
select count(*) AS total_cities from city;
select concat(city_id,' ',city_name) as city_id_name from city;
select country_name,state_name from country,state where country.country_id=state.country_id;
select country_name,state_name from country inner join state on country.country_id=state.country_id;
select state_name,city_name from state left join city on state.state_id=city.state_id;
select state_name,city_name from state right join city on state.state_id=city.state_id;
select state_name, city_name from state left join city on state.state_id = city.state_id union select state_name, city_name from state right join city on state.state_id = city.state_id;
select s.student_name as Name , c.city_name as City from student s inner join city c on s.city_id = c.c_id;