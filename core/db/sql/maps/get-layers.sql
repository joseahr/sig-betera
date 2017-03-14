SELECT * 
FROM ${schema~}.Map_Layers ml
LEFT JOIN ${schema~}.Layers l ON l.id = ml.id_layer
WHERE id_map = ${id_map}