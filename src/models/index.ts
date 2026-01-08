import Availability from "./Availability.js";
import Booking from "./Booking.js";
import Listing from "./Listing.js";
import Notification from "./Notification.js";
import Payment from "./Payment.js";
import Review from "./Review.js";
import User from "./User.js";
import UserProfile from "./UserProfile.js";

Availability.belongsTo(Listing, {
  foreignKey: "listingId",
  as: "listing",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Booking.belongsTo(Listing, {
  foreignKey: "listingId",
  as: "listing",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Booking.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Booking.hasMany(Notification, {
  foreignKey: "bookingId",
  as: "notifications",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Booking.hasOne(Review, {
  foreignKey: "bookingId",
  as: "review",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Listing.belongsTo(User, {
  foreignKey: "hostId",
  as: "host",
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
});

Listing.hasMany(Booking, {
  foreignKey: "listingId",
  as: "bookings",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Listing.hasMany(Availability, {
  foreignKey: "listingId",
  as: "availabilities",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Notification.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Notification.belongsTo(Booking, {
  foreignKey: "bookingId",
  as: "booking",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Payment.hasOne(Booking, {
  foreignKey: "paymentId",
  as: "booking",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Review.belongsTo(Booking, {
  foreignKey: "bookingId",
  as: "booking",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Review.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

User.hasOne(UserProfile, {
  foreignKey: "userId",
  as: "profile",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

User.hasMany(Listing, {
  foreignKey: "hostId",
  as: "listings",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

User.hasMany(Booking, {
  foreignKey: "userId",
  as: "bookings",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

User.hasMany(Notification, {
  foreignKey: "userId",
  as: "notifications",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

User.hasMany(Review, {
  foreignKey: "userId",
  as: "reviews",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

UserProfile.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export {
  User,
  UserProfile,
  Listing,
  Availability,
  Booking,
  Notification,
  Payment,
  Review,
};

