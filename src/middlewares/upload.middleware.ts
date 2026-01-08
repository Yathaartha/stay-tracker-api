import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir: string = "uploads/profiles";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix: string =
      Date.now() + "-" + Math.round(Math.round(Math.random() * 1e9));

    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|webp/;
    const extName = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    if (extName) return cb(null, true);
    cb(new Error("Only images are allowerd (jpeg, jpg, png, webp)"));
  },
});

