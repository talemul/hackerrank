Select * from CITY where CountryCode='USA' and population>100000;
Select name from CITY where CountryCode='USA' and population>120000;

Select name from CITY ;
Select * from CITY where ID=1661;
Select * from CITY where COUNTRYCODE='JPN';
Select NAME from CITY where COUNTRYCODE='JPN';
SELECT CITY, STATE FROM STATION;
SELECT CITY FROM STATION where ID % 2=0 group by CITY;

select * from ((select N,'Inner' from BST where N in (select DISTINCT  P from BST) and p is not null)union(select N,'Root' from BST where P is null)union(select a.N,'Leaf' from BST a left join BST b on a.N=b.p where b.N is null)) d order by d.N ;

select concat(Name,'(',SUBSTR(OCCUPATION,1,1),')') from OCCUPATIONS order by Name;
select concat('There are a total of ',count(*),' ',LOWER(occupation),'s.') from OCCUPATIONS group by OCCUPATION order by count(*),OCCUPATION;
/*
Enter your query below.
Please append a semicolon ";" at the end of the query
*/
Select roll_number,name  from student_information inner join
faculty_information on advisor=employee_ID where (gender='M' and salary>15000) or  (gender='F' and salary>20000)
