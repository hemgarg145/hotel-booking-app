import Hotel from "../models/hotelModel.js";
import User from "../models/user.js";

export const registerHotel = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body;
    const owner = req.user._id;

    // Check if hotel already exists
    const existingHotel = await Hotel.findOne({ owner });
    if (existingHotel) {
      return res.status(400).json({ success: false, message: "Hotel already registered" });
    }

    // Create new hotel
    await Hotel.create({ name, address, contact, city, owner });

    // Update user role
    await User.findByIdAndUpdate(owner, { role: "hotelOwner" });

    // Send success response
    res.status(201).json({ success: true, message: "Hotel registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
