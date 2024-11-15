const express = require("express");
// const { PrismaClient } = require('@prisma/client');
require("dotenv").config();

const { PrismaClient: PrismaClient1 } = require("./prisma/generated/client1");
const { PrismaClient: PrismaClient2 } = require("./prisma/generated/client2");
const { PrismaClient: PrismaClient3 } = require("./prisma/generated/client3");

const app = express();
const PORT = process.env.PORT || 8082;

// Route ที่แสดงข้อความ "Hello World"
app.get("/", (req, res) => res.send("Hello World"));

// Route ที่เชื่อมต่อฐานข้อมูล 2 ตัวและดึงข้อมูลจากทั้งสองฐานข้อมูล
app.get("/example", async (req, res) => {
  try {
    const db1Data = await new PrismaClient1().modelPSQL1.findMany();
    const db2Data = await new PrismaClient2().modelPSQL2.findMany();
    const db3Data = await new PrismaClient3().modelPSQL3.findMany();
    
    return res.json({
      db1: db1Data,
      db2: db2Data,
      db3: db3Data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

// เริ่มต้นเซิร์ฟเวอร์ที่พอร์ตที่กำหนด
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

// Export app เพื่อใช้ใน project อื่นๆ
module.exports = app;
