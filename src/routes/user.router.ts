import express from "express";
import {list, createUser ,deleteUser} from '../controllers/user.controller';

const router = express.Router();

router.route("/users").get(list);
router.route("/").post(createUser);
router.route("/users").delete(deleteUser);


export default router;