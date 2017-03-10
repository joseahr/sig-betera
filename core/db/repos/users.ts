import {IDatabase, IMain} from 'pg-promise';
import sqlProvider = require('../sql');

import * as bluebird from 'bluebird';
import * as bcrypt from 'bcrypt-nodejs';

const compare = bluebird.promisify(bcrypt.compare);
const hash = bluebird.promisify(bcrypt.hash);
const genSalt = bluebird.promisify(bcrypt.genSalt);

var sql = sqlProvider.users;


/*
 This repository mixes hard-coded and dynamic SQL,
 primarily to show a diverse example of using both.
 */

export class Repository {

    constructor(db:any, pgp: IMain) {
        this.db = db;
        this.pgp = pgp; // library's root, if ever needed;
    }

    // if you need to access other repositories from here,
    // you will have to replace 'IDatabase<any>' with 'any':
    private db:IDatabase<any>;

    private pgp:IMain;

        setVisibleMap( id_user : string, id_map : (string | number) ){
            return this.db.none("UPDATE User_Maps SET visible = true WHERE id_map = '${id_map#}' AND id_user = '${id_user#}'", 
                            {id_user, id_map});
        }
    
        deleteForgetToken( id_user : (string | number) ){
            return this.db.none("DELETE FROM users_change_password_token WHERE id = '${id_user#}'", {id_user});
        }

        createForgetToken( id_user : string ){
            return this.db.one(sql.createForgetToken, {id_user});
        }
    
        findIdByToken( token : string ){
            return this.db.oneOrNone(sql.findIdByToken, { token : this.pgp.as.value(token) } );
        }
        

        isValid( id : string ){
            return this.db.one(sql.isValid, { id_user : this.pgp.as.value(id) } )
                .then( (isValid : any) => isValid.valid);
        }
        
    
        getAllGroups(){
            return this.db.one(sql.getAllGroups)
                .then( (allGroups : any) => allGroups.groups);
        }
    
        validPassword( user : any, password :  string ){
            return compare(password, user.password);
        }
        
        genPassword( password : string ){
            return hash(password, null, null);
        }
    
        findBy( column : string, value : string ){
            return this.db.any(sql.findBy, {
                column: this.pgp.as.name(column),
                value: this.pgp.as.value(value)
            });
        }
        // Crear el enum de roles
        createRolesEnum(){
            return this.db.none(sql.createRolesEnum);
        }
        // Creates the table;
        create(){
            return this.db.none(sql.create);
        }
    
        // Crea la extensión "citext"(Case Insensitive text) para poder utilizar este tipo de dato en la columna e-mail
        // http://dba.stackexchange.com/a/74313
        createCitextExtension(){
            return this.db.none(sql.createCitextExtension);
        }
    
        init(){
            return this.db.tx('Demo-Users', t => t.map(sql.init, null, (row : any)=> row.id));
        }
    
        // Tries to find a user from id;
        find( id : string ){
            return this.db.oneOrNone('SELECT * FROM Users WHERE id = $1', id);
        }
    
        // Returns all user records;
        all(){
            this.db.any('SELECT * FROM Users');           
        }
    
        // Returns the total number of users;
        total(){
            return this.db.one('SELECT count(*) FROM Users', [], a => +a.count)
        }
}
