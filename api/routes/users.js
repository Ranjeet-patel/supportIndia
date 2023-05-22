import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
  getSocial,
  postSocial,
  search
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);
router.get("/:id/social", getSocial);
router.post("/:id/social/edit", postSocial);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);
router.get('/search/:key', search)
export default router;
