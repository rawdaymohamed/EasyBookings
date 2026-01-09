import Hotel from "../models/hotel.model.js";
import { createError } from "../utils/createError.js";
export const create = async (req, res, next) => {
  try {
    const newHotel = new Hotel(req.body);
    const savedHotel = await newHotel.save();
    return res.status(201).json({ data: savedHotel });
  } catch (error) {
    return next(createError("Can't create hotel", 500));
  }
};

export const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const hotelExists = await Hotel.findOne({ _id: id });
    if (!hotelExists)
      return res.status(404).json({ message: "Hotel not found" });
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    return res.status(201).json({ data: updatedHotel });
  } catch (error) {
    // console.log(error)
    return next(createError("Can't edit hotel", 500));
  }
};
export const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedHotel = await Hotel.findByIdAndDelete(id);
    if (!deletedHotel)
      return res.status(404).json({ message: "Hotel not found" });
    return res.status(201).json({ message: "Hotel deleted successfully" });
  } catch (error) {
    return next(createError("Can't remove hotel", 500));
  }
};
export const get = async (req, res, next) => {
  try {
    const { id } = req.params;
    const retrievedHotel = await Hotel.findById(id);
    return res.status(201).json({ data: retrievedHotel });
  } catch (error) {
    return next(createError("Can't get hotel", 500));
  }
};
export const getAll = async (req, res, next) => {
  try {
    const hotels = await Hotel.find({});

    return res.status(201).json({ data: hotels });
  } catch (error) {
    console.log("error:", error);
    // return res.status(500).json({ error: error });
    return res.status(500).json({
      message: error.message,
      stack: error.stack,
      raw: error,
    });
    // return next(createError("Can't get hotels", 500));
  }
};
export const getCountByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    return res.status(201).json({ data: list });
  } catch (error) {
    return next(createError("Can't get hotels", 500));
  }
};
export const getCountByType = async (req, res, next) => {
  try {
    const hotels = await Hotel.find({});
    return res.status(201).json({ data: hotels });
  } catch (error) {
    return next(createError("Can't get hotels", 500));
  }
};
