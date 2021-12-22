import multer from "multer"
import express from "express"

import {
  protect,
  auth,
  isNotVerified
} from '../middleware/auth.js'

import {
  
    getProfile,
    updateProfile
  
  } from "../controllers/usersController.js"

const router = express.Router()

router.get('/find:id', auth, getProfile)     
router.get('/:id', auth, updateProfile )

export default router
