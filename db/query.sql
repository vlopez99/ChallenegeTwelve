SELECT *
FROM department
ORDER BY name ASC

SELECT department_id, title, department.name as name, salary
FROM role INNER JOIN depertment ON role.department_id = department.id;