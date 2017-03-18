SELECT u.id, u.name, u.email, u.rol, valid_.valid
-- Seleccionamos id, nombre, email, rol de la tabla usuarios
FROM Users u
LEFT JOIN LATERAL (
	SELECT u.id IN (
		SELECT id from users_not_valid_yet
	) AS valid
) valid_ ON TRUE