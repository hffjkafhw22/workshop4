var fs = require('fs');

module.exports = function(req, res) {
    let userobj = {
        "userid": req.body.userid,
        "username":req.body.username,
        "userid": req.body.userid,
        "userbirthdate": req.body.userbirthdate,
        "useremai": req.body.useremai,
        "userpassword": req.body.userpassword

    }

    let uArray = [];
    fs.readFile('server/data/extendedUsers.json', 'utf8', function(err, data){
        if (err) throw err;
        uArray = JSON.parse(data);
        uArray.push(userobj);
        console.log(userobj);

        uArrayjson = JSON.stringify(uArray);
        fs.writeFile('server/data/extendedUsers.json', uArrayjson, 'utf-8', function(err) {
            if(err) throw err;
            res.send(uArray);
        });
    });
}