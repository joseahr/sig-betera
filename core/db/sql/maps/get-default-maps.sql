SELECT Maps.*, lay.*, blay.*, o.*, TRUE as default
FROM Maps
LEFT JOIN LATERAL (
    SELECT json_agg(ll) as layers
    FROM (
        SELECT ul.*, l.*, 'layer' as type, COALESCE(rl.rol::text, 'r'::text) AS rol
        FROM Map_Layers ul
        LEFT JOIN Layers l ON l.id = ul.id_layer
        LEFT JOIN Roles rl ON rl.id_user = ${id_user} AND rl.id_layer = ul.id_layer
        WHERE ul.id_map = Maps.id
    ) ll
) lay ON TRUE
LEFT JOIN LATERAL (
    SELECT json_agg(bbll) as baselayers
    FROM (
        SELECT bl.*, ul.*, 'base' as type
        FROM Map_Base_Layers ul
        LEFT JOIN Base_Layers bl ON bl.id = ul.id_base_layer
        WHERE ul.id_map = Maps.id
    ) bbll
) blay ON TRUE
LEFT JOIN LATERAL (
    SELECT json_agg(oo)::json AS orden
    FROM (
        SELECT *
        FROM map_layers_order
        WHERE id_map = Maps.id
    ) oo
) o ON TRUE
WHERE id IN (SELECT id FROM Default_Maps)