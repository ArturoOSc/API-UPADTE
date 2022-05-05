const res = require('express/lib/response');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'mac',
    password: '',
    database: 'taskupdate',
    port: '5432'

})

const getUsers = async (req, res) => {
   const response = await pool.query('SELECT * FROM task ');
   res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM task WHERE id = $1', [id]);
    res.status(200).json(response.rows);
}

const createUser = async (req, res) => {
    const {name, email} = req.body;

   const response = await pool.query('INSERT INTO task (name, email) VALUES ($1, $2)', [name, email])
   console.log(response); 
   res.json({
       message: 'User Added Succesfully',
       body:{
            user: {name, email}
       }
   })
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const {name, email} = req.body;
    const response = await pool.query('UPDATE task SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        id
    ]);
    console.log(response);
    res.json('User updated successfully');
    
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM task WHERE id = $1', [id]);
    console.log(response);
    res.json(`User ${id} deleted successfully`);
}

module.exports ={
    getUsers,
    createUser,
    getUserById,
    deleteUser, 
    updateUser
}