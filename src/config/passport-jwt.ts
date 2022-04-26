import passport from "passport"
import passportJWT from "passport-jwt"
import { jwtSecret, jwtSession } from '../config/jwt'
import User from '../models/users'

const ExtractJwt = passportJWT.ExtractJwt
const Strategy = passportJWT.Strategy

var params = {
    secretOrKey: jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

export default function() {
    var strategy = new Strategy(params, function (payload, done) {
        console.log('payload:', payload)
        var user = User.findById(payload.id, function (err, user) {
            if (err) {
                return done(new Error("UserNotFound"), null)
            } else if (payload.expire <= Date.now()) {
                return done(new Error("TokenExpired"), null)
            } else {
                return done(null, user)
            }
        })
    })
    passport.use(strategy)
    return {
        initialize: function () {
            return passport.initialize()
        },
        authenticate: function () {
            return passport.authenticate("jwt", jwtSession)
        }
    }
}