SELECT u.id, u.name, u.email, u.rol, u.gravatar, u.nombre, u.apellidos, valid_.valid, gg.*
-- Seleccionamos id, nombre, email, rol de la tabla usuarios
FROM Users u
LEFT JOIN LATERAL (
	SELECT u.id IN (
		SELECT id from users_not_valid_yet
	) AS valid
) valid_ ON TRUE
-- Grupos
LEFT JOIN LATERAL (
	SELECT array_agg(g.name) AS groups FROM user_groups ug
	LEFT JOIN groups g ON g.id = ug.group
	WHERE ug.id_user = u.id
) gg ON TRUE