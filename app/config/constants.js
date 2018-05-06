export const bgRotate = -54.9;
export const USER_KEY = 'converze_tk';

const database_name = 'converze.db';
const database_version = '1.0';
const database_displayname = 'RefDB';
const database_size = 200000;

const openCB = () => console.log('DB Opened');
const errorCB = error => {
    console.log('DB Error', error);
    return false
};

export let db = SQLite.openDatabase(database_name, database_version, database_displayname, database_size, openCB, errorCB);

export const API_BASE = "";
export const loginAPI = "";
export const registerAPI = "";
export const profileAPI = "";
