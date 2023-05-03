import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, '이름 입력 필수'],
        maxlength : [20, "이름은 20자를 넘을 수 없다"],
    },
    email : {
        type : String,
        required : [true, "이메일 입력 필수"],
        maxlength : [100, "이메일은 100글자를 넘을 수 없다"]
    },
    image_url : {
        type : String,        
    }
})

export default mongoose.models.Item || mongoose.model('profile', ProfileSchema);