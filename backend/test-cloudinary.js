// test.js — place in your backend folder, run with: node test.js
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dqrlxpngj",
  api_key: "138381783795314",
  api_secret: "MXmqcod4_3TwKzbN_g7sbi_yep4",
});

const testImage = "https://res.cloudinary.com/demo/image/upload/sample.jpg";

try {
  const result = await cloudinary.uploader.upload(testImage);
  console.log("SUCCESS:", result.secure_url);
} catch (err) {
  console.log("FAILED:", err);
}