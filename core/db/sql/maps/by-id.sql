SELECT m.*, lay.*, blay.*, orden.*
FROM Maps m
LEFT JOIN LATERAL (
    SELECT json_agg(ll) as layers
    FROM (
        SELECT ul.*, l.*, 'layer' as type
        FROM Map_Layers ul
        LEFT JOIN Layers l ON l.id = ul.id_layer 
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
		SELECT id_layer, layer_type, position, COALESCE(l.name, bl.name) AS name
		FROM map_layers_order mo
		LEFT JOIN Layers l ON l.id = mo.id_layer AND mo.layer_type = 'layer'
		LEFT JOIN Base_Layers bl ON bl.id = mo.id_layer AND mo.layer_type = 'base'
		WHERE mo.id_map = m.id
	) oo
) orden ON TRUE
WHERE m.id = ${id}