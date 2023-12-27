const mongoose = require('mongoose'); 
const slug = require('mongoose-slug-updater'); 
// const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Item = new Schema({
    name: { type: String ,required:true },
    description: { type: String },
    image: { type: String },
    price: {type: String },
    slug: { type: String, slug: 'name', unique: true },
},{ 
    timestamps :true,
});

// Add plugins
mongoose.plugin(slug); 
// Item.plugin(mongooseDelete,{ 
//     deletedAt:true,
//     overrideMethods:'all',
// });

module.exports = mongoose.model('Item', Item);
