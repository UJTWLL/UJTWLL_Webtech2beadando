const express = require('express');
const router = express.Router();
const car_controller = require('./controller/car');
const user_controller = require("./controller/user")


function middleware(req, res, next) {
    
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [username, password] = Buffer.from(b64auth, 'base64').toString().split(':')
    
    user_controller.get_user(username).exec(function (err, user) {
        if (username && password && username === user.username && password === user.password) {
            return next()
        }
        //res.set('WWW-Authenticate', 'Basic realm="401"')
        //res.status(401).send('Authentication required.')
        return next()
    })
}
router.get('/', middleware, function (req, res, next) {
    res.json({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO ANGULAR' });
});

router.post('/car', middleware, car_controller.car_get_all);
router.get('/car/:id', middleware, car_controller.car_details);
router.post('/car/add', middleware, car_controller.car_create);
router.put('/car/:id', middleware, car_controller.car_update);
router.post('/car/delete/:id', middleware, car_controller.car_delete);

module.exports = router;