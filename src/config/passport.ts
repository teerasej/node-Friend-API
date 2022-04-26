import express from 'express'
import passport from 'passport'
import * as passportLocal from 'passport-local'
import User from '../models/users'

const LocalStrategy = passportLocal.Strategy;

const router = express.Router()

router.use(passport.initialize())
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

export default router

