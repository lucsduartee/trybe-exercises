SELECT "This is SQL Exercise, Practice and Solution";
SELECT 12 AS 'num1', 13 AS 'num1', 14 AS 'num3';
SELECT 10 + 15;
SELECT 10 + 15 * (20 - 2);

SELECT * FROM Scientists.Scientists;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;
SELECT * FROM Scientists.Scientists ORDER BY Name;
SELECT * FROM Scientists.Scientists ORDER BY Name DESC;
SELECT
	CONCAT("O projeto ", Name ," precisou de ", Hours ," horas para ser concluído.")
	FROM Scientists.Projects;
SELECT * FROM Scientists.Projects ORDER BY Hours LIMIT 3;
SELECT DISTINCT Project FROM Scientists.AssignedTo;
SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Scientists.Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;
SELECT * FROM Scientists.Projects ORDER BY Hours ASC LIMIT 5;
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') as resultado FROM Scientists;


