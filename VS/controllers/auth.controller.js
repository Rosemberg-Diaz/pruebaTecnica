import express from "express";
import {sequelize} from "../database/database.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { Users } from "../models/Users.js"
import { jwtTokens } from "../utils/jwt-helpers.js";

export const authUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        const users = await Users.findOne({ where: { email,} });
        if(users == null) return res.send("Email is incorrect")
        if(password != users.password) return res.send("Password is incorrect")
        let tokens = jwtTokens(users);
        res.cookie('refresh_token', tokens.refreshToken,{httpOnly: true})
        res.send ({
            token: tokens.accessToken
        }) 
    }catch (error){
        return res.send({message: error.message});
    }
}

export const refreshTokenAuth = async (req,res) => {
    try{
        const refreshToken = req.cookies.refresh_token;
        if (refreshToken == null) return res.send("Token null");
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,(error,user)=>{
            if(error) return res.send(error.message)
            let tokens = jwtTokens(user);
            res.cookie('refresh_token', tokens.refreshToken,{httpOnly: true})
            res.json(tokens);    
        })
    }catch(error){
        res.send(error.message)
    }
    
}

export const deleteAuth = async (req,res) => {
    try{
        res.clearCookie('refresh_yoken');
        return res.send("Token deleted")
    }catch(error){
        res.send(error.message)
    }
}