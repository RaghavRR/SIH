const express = require("express");

require("dotenv").config();
const cors = require("cors");

const adminRouter = require("./routes/Admins.Route");
const ambulanceRouter = require("./routes/Ambulances.Route");
const appointmentRouter = require("./routes/Appointments.Route");
const bedRouter = require("./routes/Beds.Route");
const doctorRouter = require("./routes/Doctors.Route");
const hospitalRouter = require("./routes/Hospitals.Route");
const nurseRouter = require("./routes/Nurses.Route");
const patientRouter = require("./routes/Patients.Route");
const paymentRouter = require("./routes/Payments.route");
const prescriptionRouter = require("./routes/Prescriptions.Route");
const reportRouter = require("./routes/Reports.Route");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
const corsOptions = {
  // origin: "http://localhost:5173",
  origin: (origin, callback) => {
    // Check if the origin is allowed
    const allowedOrigins = [
      "http://localhost:5173",
      "http://localhost:3000",
      "http://localhost:5000",
      
    ];
    const isAllowed = allowedOrigins.includes(origin);
    callback(null, isAllowed ? origin : false);
  },
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/admin", adminRouter);
app.use("/ambulances", ambulanceRouter);
app.use("/appointments", appointmentRouter);
app.use("/beds", bedRouter);
app.use("/doctors", doctorRouter);
app.use("/hospitals", hospitalRouter);
app.use("/nurses", nurseRouter);
app.use("/patients", patientRouter);
app.use("/payments", paymentRouter);
app.use("/prescriptions", prescriptionRouter);
app.use("/reports", reportRouter);



app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

const connection  = require("./configs/db.js");
 connection();