import Comment from "../models/Comment.js";
import News from "../models/News.js";

const createComment= async(req,res,next)=>{

    try {
        const { desc,slug, parent, replyOnUser} = req.body;

        const news = await News.findOne({slug: slug});

        if(!news){
            const error = new Error("News was not found");
            return next(error)
        }

        const newComment = new Comment({
            user: req.user._id,
            desc,
            news:news._id,
            parent,
            replyOnUser,
        })
        const savedComment = await newComment.save();
        return res.json(savedComment);
    } catch (error) {
        next(error)
    }
}

const updateComment= async(req,res,next)=>{

    try {
        const { desc } = req.body;

        const comment = await Comment.findById(req.params.commentId);

        if(!comment){
            const error = new Error("Comment was not found");
            return next(error)
        }
        
        comment.desc = desc || comment.desc;

        const updatedComment = await comment.save();
        return res.json(updatedComment);
    } catch (error) {
        next(error)
    }
}


const deleteComment= async(req,res,next)=>{

    try {

        const comment = await Comment.findByIdAndDelete(req.params.commentId);
        await Comment.deleteMany({parent: comment._id})

        if(!comment){
            const error = new Error("Comment was not found");
            return next(error)
        }

        return res.json({
            message : 'Comment is deleted successfully'
        });
    } catch (error) {
        next(error)
    }
}

export {createComment,updateComment, deleteComment}