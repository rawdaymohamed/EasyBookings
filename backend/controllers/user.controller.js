import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import { createError } from "../utils/createError.js";

export const edit = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) return next(createError("User not found", 404));

        if (req.body.username || req.body.email) {
            const existingUser = await User.findOne({
                $or: [{ username: req.body.username }, { email: req.body.email }],
                _id: { $ne: id },
            });
            if (existingUser) return next(createError("Username or email already exists", 400));
        }

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true, runValidators: true });
        return res.status(200).json({ data: updatedUser });
    } catch (error) {
        return next(createError("Can't edit user", 500));
    }
};


export const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) return next(createError("User not found", 404));

        return res.status(200).json({ message: "User removed successfully" });
    } catch (error) {
        return next(createError("Can't remove user", 500));
    }
};

export const get = async (req, res, next) => {
    try {
        const { id } = req.params;
        const retrievedUser = await User.findById(id).select("-password");
        if (!retrievedUser) return next(createError("User not found", 404));

        return res.status(200).json({ data: retrievedUser });
    } catch (error) {
        return next(createError("Can't get user", 500));
    }
};

export const getAll = async (req, res, next) => {
    try {
        const users = await User.find({}).select("-password");
        return res.status(200).json({ data: users });
    } catch (error) {
        return next(createError("Can't get users", 500));
    }
};
