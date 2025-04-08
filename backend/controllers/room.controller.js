import Room from "../models/room.model.js";
import Hotel from "../models/hotel.model.js";
import { createError } from "../utils/createError.js";

export const create  = async (req, res, next) => {
  const { hotelId } = req.params;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } });
    return res.status(201).json({ data: savedRoom });
  } catch (error) {
    return next(createError("Can't create room", 500));
  }
};

export const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const roomExists = await Room.findOne({ _id: id });
    if (!roomExists) return res.status(404).json({ message: "Room not found" });
    const updatedRoom = await Room.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    return res.status(201).json({ data: updatedRoom });
  } catch (error) {
    return next(createError("Can't edit room", 500));
  }
};
export const remove = async (req, res, next) => {
  try {
    const { id, hotelId } = req.params;
    const deletedRoom = await Room.findByIdAndDelete(id);
    if (!deletedRoom)
      return res.status(404).json({ message: "Room not found" });
    await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: deletedRoom._id } });
    return res.status(201).json({ message: "Room deleted successfully" });
  } catch (error) {
    return next(createError("Can't remove room", 500));
  }
};
export const get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const retrievedRoom = await Room.findById(id);
    return res.status(201).json({ data: retrievedRoom });
  } catch (error) {
    return next(createError("Can't get Room", 500));
  }
};
export const getAll = async (req, res, next) => {
  try {
    const rooms = await Room.find({});
    return res.status(201).json({ data: rooms });
  } catch (error) {
    return next(createError("Can't get rooms", 500));
  }
};
