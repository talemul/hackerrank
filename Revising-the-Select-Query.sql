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
faculty_information on advisor=employee_ID where (gender='M' and salary>15000) or  (gender='F' and salary>20000);
SELECT REPEAT(
    '* ', @NUMBER := @NUMBER + 1
) FROM information_schema.tables, (
    SELECT @NUMBER:=0
)t limit 20;

SELECT REPEAT(
    '* ', @NUMBER := @NUMBER - 1
) FROM information_schema.tables, (
    SELECT @NUMBER:=21
)t;

select h.hacker_id, h.name from Hackers as h
inner join Submissions as s on h.hacker_id = s.hacker_id
inner join Challenges as c on s.challenge_id = c.challenge_id
inner join Difficulty as d on c.difficulty_level = d.difficulty_level
where s.score = d.score
group by h.hacker_id, h.name 
having count(s.hacker_id) > 1 
order by count(h.hacker_id) desc, h.hacker_id;

select if(g.grade < 8, NULL, s.name) as name, g.grade, s.marks from  Students as s
inner join Grades as g on s.marks>=g.min_mark && s.marks<=g.max_mark
order by g.grade desc,
    case 
        when name is NULL then s.marks else name
    end;
    
    select 
        case
            when A + B <= C or A + C <= B or B + C <= A then "Not A Triangle"
            when A = B and B = C then "Equilateral"
            when A = B or B = C or A = C then "Isosceles"
            when A <> B and B <> C then "Scalene"
        end
        from TRIANGLES;
        
        select tmp.company_code, tmp.founder, (
    select count(distinct lead_manager_code) from Lead_Manager where tmp.company_code = Lead_Manager.company_code
), (
    select count(distinct senior_manager_code) from Senior_Manager where tmp.company_code = Senior_Manager.company_code
), (
    select count(distinct manager_code) from Manager where tmp.company_code = Manager.company_code
), (
    select count(distinct employee_code) from Employee where tmp.company_code = Employee.company_code
) from Company as tmp
    order by tmp.company_code;
    
    /*
Enter your query here.
*/ 

SET @range = 1000;

SELECT GROUP_CONCAT(R2.n SEPARATOR '&')
FROM (
        SELECT @ctr2:=@ctr2+1 "n"
        FROM information_schema.tables R2IS1,
        information_schema.tables R2IS2,
        (SELECT @ctr2:=1) TI
        WHERE @ctr2<@range
     ) R2
WHERE NOT EXISTS (
                SELECT R1.n
                FROM (
                    SELECT @ctr1:=@ctr1+1 "n"
                    FROM information_schema.tables R1IS1,
                    information_schema.tables R1IS2,
                    (SELECT @ctr1:=1) I1
                    WHERE @ctr1<@range
                ) R1
                WHERE R2.n%R1.n=0 AND R2.n>R1.n
        );
        
        
        select CITY,LENGTH(CITY) from STATION where LENGTH(CITY)= (select min(LENGTH(CITY)) from STATION) order by CITY limit 1;
select CITY,LENGTH(CITY) from STATION where LENGTH(CITY)= (select max(LENGTH(CITY)) from STATION) order by CITY limit 1;
select CITY from STATION where CITY like 'a%' or CITY like 'e%' or CITY like 'i%' or CITY like 'o%' or CITY like 'u%' group by CITY;

select sku, product_name from product where 
id not in(select product_id from INVOICE_ITEM) order by sku;
/*
Enter your query below.
Please append a semicolon ";" at the end of the query
*/
SELECT c.customer_name,FORMAT(i.total_price,6)  FROM customer c INNER JOIN invoice i ON
c.id=i.customer_id
WHERE i.total_price<=(SELECT (AVG(total_price)/100)*25 FROM invoice) order by i.total_price desc;
 

