const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async index(req, res){
        const { page = 1} = req.query;
        const user = await User.paginate({}, {page, limit:2});

        return res.json(user);
    },

    async detail(req, res){
        const user = await User.findById(req.params.id);

        return res.json(user);
    },

    async store(req, res){
        const user = await User.create(req.body);

        return res.json(user);
    },

    async update(req, res){
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new:true
        });

        return res.json(user);
    },

    async destroy(req, res){
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new:true
        });

        return res.json(user);
    },
};
