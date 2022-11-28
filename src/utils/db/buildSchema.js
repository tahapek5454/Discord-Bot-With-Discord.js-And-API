import mongoose from "mongoose";

const {Schema} = mongoose
// mongosu içinden kolay erisim olması açısından schemayı çektim
const pollSchema = new Schema({
    userName:{
        type: String,
    },
    score:{
        type: Number,
    }
})
// Veri tabanımıza ekleyecegimiz objenin şemasını oluşturduk
const pollResponseSchema = mongoose.model("PollResponse", pollSchema)
// bu modeli PollResponse collection ismimizi girdik
export default pollResponseSchema