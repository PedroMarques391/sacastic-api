import multer, { memoryStorage } from "multer";

export const upload = multer({
  storage: memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

// const storage = diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     const name = path.basename(file.originalname, ext);

//     cb(null, `${name}-${Date.now()}${ext}`);
//   },
// });
