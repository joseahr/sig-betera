SELECT m.*, lay.*, blay.*, orden.*
FROM User_Maps um
LEFT JOIN Maps m ON m.id = um.id_map
LEFT JOIN LATERAL (
    SELECT json_agg(ll) as layers
    FROM (
        SELECT ul.*, l.*, 'layer' as type, COALESCE(rl.rol::text, 'r'::text) AS rol
        FROM Map_Layers ul
        LEFT JOIN Layers l ON l.id = ul.id_layer
        LEFT JOIN Roles rl ON rl.id_user = ${id_user} AND rl.id_layer = ul.id_layer
        WHERE ul.id_map = m.id
    ) ll
) lay ON TRUE
LEFT JOIN LATERAL (
    SELECT json_agg(bbll) as baselayers
    FROM (
        SELECT ul.*, bl.*, 'base' as type
        FROM Map_Base_Layers ul
        LEFT JOIN Base_Layers bl ON bl.id = ul.id_base_layer
        WHERE ul.id_map = m.id
    ) bbll
) blay ON TRUE
LEFT JOIN LATERAL (
	SELECT json_agg(oo)::json AS orden
	FROM (
		SELECT id_layer, layer_type, position FROM map_layers_order WHERE id_map = m.id
	) oo
) orden ON TRUE
WHERE um.id_user = ${id_user}