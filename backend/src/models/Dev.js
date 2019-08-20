const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user:{
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: false,
    },
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    //Envia automaticamente o createdAt e updatedAt
    timestamps: true,
});

module.exports = model('Dev', DevSchema);
