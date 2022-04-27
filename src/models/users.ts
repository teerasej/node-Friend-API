import mongoose, { PassportLocalDocument, PassportLocalSchema } from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

interface User extends PassportLocalDocument {
    _id: string
    username: string
    password: string
    profileImagePath: string
}


const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: String,
    password: String,
    profileImagePath: String,
}) as PassportLocalSchema

UserSchema.plugin(passportLocalMongoose)

export default mongoose.model<User>('Users', UserSchema)
