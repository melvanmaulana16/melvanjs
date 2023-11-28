const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/siswa')

router.get('/siswa', usercontroller.index)

router.get('/showsiswa/:id', usercontroller.show)

  router.post('/addsiswa', usercontroller.store)

  router.put('/updatesiswa/:id', usercontroller.update)

  router.delete('/deletesiswa/:id', usercontroller.delete)

  module.exports = router