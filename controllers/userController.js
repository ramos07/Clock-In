import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'

const authUser = asyncHandler( async(req, res) => {
    const { username, password } = req.body

    const user = await User.findOne({ username })

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            username: user.username,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Invalid username or password")
    }
})

const registerUser = asyncHandler( async(req, res) => {
    const { name, username, password, isAdmin } = req.body

    const userExists = await User.findOne({ username })

    if(userExists){
        res.status(400)
        throw new Error('User already exists!')
    }

    const user = await User.create({
        name,
        username,
        password,
        isAdmin
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            username: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error("Invalid user data")
    }
})

const getUserProfile = asyncHandler( async(req, res) => {
    const user = await User.findById(req.user._id)

    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            username: user.username,
            isAdmin: user.isAdmin,
        })
    }else{
        res.status(404)
        throw new Error('User not found')
    }
})

export { authUser, getUserProfile, registerUser}