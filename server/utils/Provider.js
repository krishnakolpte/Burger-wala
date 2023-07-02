/** @format */

import GoogleStrategy from "passport-google-oauth20/lib/strategy.js";
import passport from "passport";
import { User } from "../models/userModel.js";

export const connectPassport = () => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLINT_ID,
                clientSecret: process.env.GOOGLE_CLINT_SECRATE,
                callbackURL: process.env.GOOGLE_CALLBACK_URL,
            },
            async function (accessToken, refreshToken, profile, done) {
                try {
                    const user = await User.findOne({
                        googleId: profile.id,
                    });

                    if (!user) {
                        const newUser = await User.create({
                            googleId: profile.id,
                            name: profile.displayName,
                            photo: profile.photos[0].value,
                        });
                        return done(null, newUser);
                    } else {
                        return done(null, user);
                    }
                } catch (error) {
                    return done(error, false);
                }
            }
        )
    );
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser(async (id, done) => {
        const user = await User.findById(id);
        done(null, user);
    });
};
