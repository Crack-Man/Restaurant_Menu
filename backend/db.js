import sqlite from "better-sqlite3"
export const db = sqlite('db.sqlite');

export default db;