

var get = (req, res) => {  
    var host  = req.headers.host;
    var query = {}
    query.domain =host
    res.render('app', { }); 

   
 };


module.exports = {  get:get};