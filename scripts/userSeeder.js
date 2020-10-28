/**
 * Seeder script to insert users into database
 */

import dotenv from 'dotenv'
import users from '../data/users.js'

import User from '../models/userModel.js'

import connectDB from '../config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany()

        await User.insertMany(users)

        console.log('Data imported')
        process.exit()

    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

importData()