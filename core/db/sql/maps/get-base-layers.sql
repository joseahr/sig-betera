SELECT mbl.*, bl.* 
FROM ${schema~}.Map_Base_Layers mbl
LEFT JOIN ${schema~}.Base_Layers bl ON bl.id = mbl.id_base_layer
WHERE id_map = ${id_map}