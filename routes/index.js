var express = require('express');
var router = express.Router();
var {uploadCsv,importCsv} = require('../utils/csvHandler')
const {Graph} = require('../utils/graph')
const {shortestRoute,totalDistance, createGraph} = require('../services')
const multer = require('multer');
const Buffer = require('Buffer');

var routeInput 

//Upload path
const upload = multer({
    dest: '../uploads',
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

/* Post file */
router.post('/', upload.single('file'),(req,res)=>{
    res.redirect("/route")
})

router.get('/route',(req,res)=>{
    res.render('route')
})

router.post('/route',(req,res)=>{
    routeInput = req.body.route
    res.redirect("/result")

})

router.get('/result', (req,res)=>{
    const path = './uploads/Sample Input.csv'
    const data = importCsv(path)

    //Construct Graph
    const g = new createGraph(data)

    function calculateTotalDistance(route){
        let endNode
        let startNode = route[0]
        if(route[1] == undefined) endNode = ''
        else endNode = route[1]
        return totalDistance(g.adjacent,startNode,endNode)
    }
    let calculateDistance = calculateTotalDistance(routeInput)
    let result = {data : calculateDistance}
    
    res.status(200).json(result)
})

module.exports = router;
