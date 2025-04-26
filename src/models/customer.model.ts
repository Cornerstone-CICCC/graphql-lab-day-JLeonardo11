import mongoose, {Schema} from "mongoose";

const customerSchema = new Schema({
firstName: {type: String, required: true},
lastName:{type: String, required:true},
email:{type:String, required:true}

})

export const Customer = mongoose.model("Customer", customerSchema,)

