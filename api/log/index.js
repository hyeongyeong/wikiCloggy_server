const express = require('express');

const router = express.Router();
const logCtrl = require('./log.controller');
const Log = require('../../models/log');
const fs = require ('fs');

// add user history or delete
router.post('/', logCtrl.create);
router.post('/files/:id', logCtrl.uploadFile);
router.delete('/:id', logCtrl.delete);

// fetch log, get log info from server
// user = user_code , id = _id
router.get('/list/:user', logCtrl.get);
router.get('/details/:id', logCtrl.getDetail);

// 데이터 양이 많아질 경우 page 로 불러오는 데이터 양을 한정해야함. - 추후 수정 예정

// for test in web
// /api/log/upload
router.get('/upload', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('testLog.html', null, function(error, data) {
    if(error) {
      res.writeHead(404);
      res.write('File not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
});

module.exports = router;
