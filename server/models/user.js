// user schema
import mongoose from "mongoose";
import bcrypt from "bcrypt";
//validator for validating email

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

// function is called after doc is saved to the database
userSchema.post("save", function (doc, next) {
  console.log(`new user was created & saved`, doc);
  next();
});

// function is called before doc is saved to the database
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("user", userSchema);

export { User };
