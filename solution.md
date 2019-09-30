## Solution for lesson 6
SELECT * 
FROM pirate 
ORDER BY 
case when pirate.nationality = "fr" then name end desc,
name asc;
