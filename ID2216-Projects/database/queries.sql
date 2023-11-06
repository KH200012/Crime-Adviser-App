-- This is an example query
-- The result is all the criminal records of district no.1 in 2016

SELECT year, district, crime, value FROM data AS da
LEFT JOIN year AS y
ON da.year_id = y.year_id
LEFT JOIN district AS d
ON d.district_id = da.district_id
LEFT JOIN crime AS c
ON c.crime_id = da.crime_id
WHERE year = 2016 AND d.district_id = 1;
