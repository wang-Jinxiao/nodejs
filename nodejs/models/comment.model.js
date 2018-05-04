var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var  CommentSchema = new Schema({
	newsId:ObjectId,
	logId:ObjectId,
	name:String,
	date:{type:Date,default:Date.now},
	desc:String
});
CommentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Comment',CommentSchema);
