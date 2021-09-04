var pool = require('./bd');

async function insertContacto(obj) {
    try {
        var query = "insert into contacto set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { insertContacto }