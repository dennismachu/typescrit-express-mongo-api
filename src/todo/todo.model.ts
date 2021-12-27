import * as mongoose from 'mongoose'
import Todo from './todo.interface';

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    done: {
        type: Boolean,
        default: false
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comments"
        }
    ]
}, {
    timestamps: true
})

// const TodoSchema = mongoose.model<Todo>("todo", TodoSchema)
export default mongoose.model<Todo>("todo", TodoSchema)

// export default TodoSchema;

// export default model<Post>('Post', PostSchema);