const Dev = require('../models/Dev'); 

module.exports = {
    async store(req, res) {
        console.log(req.params.devId);
        console.log(req.headers.user);

        //pega o ID do usuario logado..
        const {user} = req.headers;
        //pega o id do usuario que vai receber o like
        const {devId} = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev) {
            return res.status(400).json({ error: 'Dev not exists'});
        }
        
        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
}; 