const express = require('express');
const router = express.Router();
const {guest} = require('../models')

 
/* GET home page. */
router.get('/guests', async(req, res) => {
  let data = await guest.findAll()
  res.json(data)
});

router.post('/addGuests',async(req,res)=>{
  try {
    const {fullName,company} = req.body
    let data = await guest.create({
        fullName,
        company
    })
    res.json(data)
  } catch (error) {
    res.json(error)
  }
  
})

router.delete('/removeGuests/:id',async(req,res)=>{
  try {
    const {id} = req.params
    await guest.destroy({
      where : {id : id}
    })
    res.json('sukses hapus')
  } catch (error) {
    res.json(error)
  }
})

router.put('/updateGuests/:id',async(req,res)=>{
  try {
    const {fullName,company} = req.body
    const {id} = req.params
    const data = await guest.update(
      {
        fullName,
        company
      },
      {where : {id:id}}
    )
    res.json(data)
  } catch (error) {
    res.json(error)
  }
})

module.exports = router;
