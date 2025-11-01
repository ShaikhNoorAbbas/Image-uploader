import express from "express";
import path from "path";
import mongoose, { Mongoose } from "mongoose";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

let app = express();

// Configuration of Claudinary
cloudinary.config({
  cloud_name: "dtflwgaec",
  api_key: "255237959211577",
  api_secret: "ZFQUAgw6NYlYohT6iDnnQsGiNBA", // Click 'View API Keys' above to copy your API secret
});

// setting static files and setting View engine
app.use(express.static(path.join(path.resolve(), "public")));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connecting to mongoDB
mongoose
  .connect("mongodb+srv://sample:sample@learning.cavmn17.mongodb.net/", {
    dbName: "learning",
  })
  .then(() => console.log(`Connected to MongoDB Database`))
  .catch((error) => console.log("Caught an Error: ", error));

// Routes
app.get("/", (req, res) => {
  res.render("index", { url: null });
});
// Disk Storeage from multer
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const imageSchema = new mongoose.Schema({
  filename: String,
  public_id: String,
  imgUrl: String,
});

const File = mongoose.model("cloudinary", imageSchema);
// Image Route from multer
app.post("/upload", upload.single("file"), async function (req, res, next) {
  const file = req.file.path;
  const cloudinaryRes = await cloudinary.uploader.upload(file, {
    folder: "learning",
  });
  const db = await File.create({
    filename: file,
    public_id: cloudinaryRes.public_id,
    imgUrl: cloudinaryRes.secure_url,
  });
  res.render("index", { url: cloudinaryRes.secure_url });
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});
//Port
let port = 1000;
app.listen(port, () => console.log(`Server is Running on port: ${port}`));
