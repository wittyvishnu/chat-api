import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Tollywood Heroes
  {
    email: "mahesh.babu@example.com",
    fullName: "Mahesh Babu",
    password: "123456",
    profilePic: "https://wallpapersok.com/images/hd/mahesh-babu-hd-sarkaru-vaari-paata-due90tuilc36nmsl.jpg",
  },
  {
    email: "allu.arjun@example.com",
    fullName: "Allu Arjun",
    password: "123456",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOy9bkkWkoONDORuWA-1dmOb1wTnHTZ14ZQ&s",
  },
  {
  email: "priyanka.mohan@example.com",
  fullName: "Priyanka Arul Mohan",
  password: "123456",
  profilePic: "https://w0.peakpx.com/wallpaper/575/319/HD-wallpaper-priyanka-mohan-saree-lover-telugu-actress.jpg",
},
  {
    email: "prabhas.raju@example.com",
    fullName: "Prabhas Raju",
    password: "123456",
    profilePic: "https://pbs.twimg.com/profile_images/1689727766235930624/S6qpEIqB_400x400.jpg",
  },
  {
    email: "ntr.jr@example.com",
    fullName: "N. T. Rama Rao Jr.",
    password: "123456",
    profilePic: "https://i.pinimg.com/736x/99/b2/7d/99b27d5d90646aec8b47403e05fd9cb3.jpg",
  },
  {
    email: "ram.charan@example.com",
    fullName: "Ram Charan",
    password: "123456",
    profilePic: "https://cinetown.s3.ap-south-1.amazonaws.com/people/profile_img/1713505215.jpeg",
  },
  // Tollywood Heroines
  {
    email: "samantha.ruth@example.com",
    fullName: "Samantha Ruth Prabhu",
    password: "123456",
    profilePic: "https://assets.vogue.in/photos/67a6013ade63a3c544f5012f/3:4/w_2560%2Cc_limit/Samatha%2520Ruth%2520Prabhu.jpg",
  },
    {
    email: "nani.actor@example.com",
    fullName: "Nani",
    password: "123456",
    profilePic: "https://images.firstpost.com/wp-content/uploads/2018/02/Nani-825.jpg",
  },
 
  {
    email: "vijay.dev@example.com",
    fullName: "Vijay Deverakonda",
    password: "123456",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dI-VKQ_7Il4av5sk65rWORfgWa3EkZXBeA&s",
  },
  {
    email: "rashmika.mandanna@example.com",
    fullName: "Rashmika Mandanna",
    password: "123456",
    profilePic: "https://www.gethucinema.com/tmdb/scSz5mo0G0jTdT97otM3yIcsTZF.jpg",
  },
  {
    email: "pooja.hegde@example.com",
    fullName: "Pooja Hegde",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Pooja_Hegde_at_Acharya_press_meet_%282%29.jpg",
  },
   {
    email: "pawan.kalyan@example.com",
    fullName: "Pawan Kalyan",
    password: "123456",
    profilePic: "https://cdn.siasat.com/wp-content/uploads/2024/09/Pawan-Kalyan-1.jpg",
  },
  {
    email: "kajal.aggarwal@example.com",
    fullName: "Kajal Aggarwal",
    password: "123456",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzubRgdogMVBXs3E-Nk6GD6UK-OMcSVRhew&s",
  },
  {
    email: "tamanna.bhatia@example.com",
    fullName: "Tamanna Bhatia",
    password: "123456",
    profilePic: "https://i.pinimg.com/736x/a8/0c/58/a80c58f0dbf738de2e1301fbe3ee71ef.jpg",
  },

  
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
