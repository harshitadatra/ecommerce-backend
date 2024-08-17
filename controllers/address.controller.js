const User = require("../models/user.model");

const getAddressHandler = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);

    const { address } = user;

    return res.status(200).json({
      address,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Could not get message!Please try again later",
    });
  }
};

const postAddressHandler = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    const { address } = req.body;
    const updatedAddressArray = [...user.address, address];
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          address: updatedAddressArray,
        },
      },
      { new: true }
    );

    res.status(200).json({ address: updatedUser.address });
  } catch (e) {
    return res.status(500).json({
      message: "Couldn't post address.Please try again later.",
    });
  }
};
const updateAddressHandler = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    const { addressId } = req.params;
    const { address } = req.body;

    const updatedAddress = user.address.map((addressItem) =>
      addressItem.id === addressId ? address : addressItem
    );

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          address: updatedAddress,
        },
      },
      { new: true }
    );

    return res.status(200).json({ address: updatedUser.address });
  } catch (e) {
    return res.status(500).json({
      message: "Counld't update address.Please try again later",
    });
  }
};

const deleteAddressHandler = async (res, req) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    const { addressId } = req.params;
    let addressArray = user.address;

    if (!addressArray.find((addressItem) => addressId === addressItem.id)) {
      return res.status(400).json({
        message: "Couldn't find address",
      });
    }

    addressArray = addressArray.filter(
      (addressItem) => addressItem.id !== addressId
    );

    const updateUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          address: addressArray,
        },
      },
      { new: true }
    );
    return res.status(200).json({ address: updateUser.address });
  } catch (e) {
    return res.status(500).json({
      message: "couldn't delete address.Please try again later",
    });
  }
};

module.exports = {
  getAddressHandler,
  postAddressHandler,
  updateAddressHandler,
  deleteAddressHandler,
};
