// backend/customerController.js
import Customer from "./Customer.js"; // Adjust the path as needed

// Function to handle form submission
export const submitCustomerData = async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validate input
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Create a new customer entry
    const newCustomer = new Customer({ name, email, phone, message });
    await newCustomer.save();
    res.status(201).json({ message: "Customer data saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving customer data.", error });
  }
};
