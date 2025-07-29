import "dotenv/config";
import express from "express";
import { connectDB } from "./utils/connectDB.js";
import Student from "./models/Student.model.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

// create student api
app.post("/create/student", async (req, res) => {
  try {
    const { name, age, email } = req.body;

    const student = new Student({
      name: name.toLowerCase(),
      age,
      email,
    });

    await student.save();

    return res
      .status(201)
      .json({ sucess: true, message: "Student created", data: student });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
});

// read all students
app.get("/get-all/students", async (req, res) => {
  try {
    const student = await Student.find();
    return res.status(200).json({
      success: true,
      message: "All student data fetched successfully",
      data: student,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
});

// get student data using student name
app.get("/student/:name", async (req, res) => {
  try {
    const { name } = req.params;

    const student = await Student.findOne({ name });

    if (!student) {
      return res
        .status(404)
        .json({ success: false, message: "No student found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Student found !", data: student });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
});

// update student data

// delete student data

app.get("/health", (req, res) => {
  return res.status(200).send({
    success: true,
    message: "All Ok",
  });
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});
