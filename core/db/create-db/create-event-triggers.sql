BEGIN;
CREATE EVENT TRIGGER delete_layer_event ON sql_drop WHEN TAG IN ('DROP TABLE') EXECUTE PROCEDURE public.delete_layer();
CREATE EVENT TRIGGER insert_layer_event ON ddl_command_end WHEN TAG IN ('CREATE TABLE') EXECUTE PROCEDURE public.insert_layer();
CREATE EVENT TRIGGER rename_layer_event ON ddl_command_end WHEN TAG IN ('ALTER TABLE') EXECUTE PROCEDURE public.rename_layer();
COMMIT;