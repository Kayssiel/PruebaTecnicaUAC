const express = require('express');
const router = express.Router();

const pool = require('../database')

router.get('/add', (req, res) => {
    res.render('links/add')
})

router.post('/add', async (req, res) => {
    const { venta_id, fecha, cliente_id, total } = req.body;
    const newVenta={
        venta_id,
        fecha,
        cliente_id,
        total
    }
    await pool.query('INSERT INTO ventas set ?', [newVenta]);
    res.render('received')
})

router.get('/', async (req, res) =>{
    const links = await pool.query('SELECT * FROM ventas')
    console.log(links)
    res.render('links/list', { links })
})

module.exports = router;