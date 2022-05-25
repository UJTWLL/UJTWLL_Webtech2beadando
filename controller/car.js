const Product = require('../models/car');

exports.car_create = function (req, res, next) {
    Product.findOne({ licensePlateNumber: req.body.licensePlateNumber }, function (err, p) {
        if (err) return err;
        return p
    }).exec(function (err, existingProduct) {
        if (existingProduct && existingProduct.licensePlateNumber === req.body.licensePlateNumber) {
            return next(err)
        } else {
            let product = new Product(
                {
                    licensePlateNumber: req.body.licensePlateNumber,
                    brand: req.body.brand,
                    type: req.body.type,
                    horsepower: req.body.horsepower,
                    price: req.body.price
                }
            );
            product.save(function (err, object) {
                if (err) {
                    return next(err);
                }
                res.json({ id: object.id })
            })
        }
    })

};

exports.car_get_all = function (req, res, next) {
    Product.find({}, function (err, product) {
        if (err) return next(err);
        res.json(product);
    })
};

exports.car_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.json(product);
    })
};


exports.car_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.json('Car updated!');
    });
};

exports.car_delete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json('Car deleted successfully!');
    })
};