import pool from './../../../config/db.js';

const getAllItems = async () => {
    try {
        const query = 'SELECT * FROM tbl_items'

        const results = await pool.query(query)

        return ({ success: true, data: results.rows})
    } catch (error) {
        return ({ success: false, message: error})
    }
}

const getItembyId = async (id) => {
    try {
        const query = `SELECT * FROM tbl_items WHERE item_id = $1`
        const values = [id]

        const result = await pool.query(query,values)

        return ({ success: true, data: result.rows})
    } catch (err) {
        return({ success: false, message: err})
    }
}

const addItem = async (name, category, price) => {
    try {
        const query = `INSERT INTO tbl_items (item_name, item_category, item_price) VALUES ($1, $2, $3) RETURNING item_id`;

        const values = [name, category, price];

        const result = await pool.query(query, values);

        return { success: true, data: result.rows[0].id };
    } catch (error) {
        return { success: false, message: error };
    }
};

export default {
    getAllItems,
    getItembyId,
    addItem
}