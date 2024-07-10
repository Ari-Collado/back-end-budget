//current dummy data to test on postman, obtained via chat GPT
let transactions = [
    {
      id: 1,
      item_name: "Salary",
      amount: 5000,
      date: new Date().toLocaleDateString(), // Current date in human-readable format
      from: "Employer",
      category: "Income",
      notes: "Monthly salary"
    },
    {
      id: 2,
      item_name: "Grocery Shopping",
      amount: 150,
      date: new Date('2024-06-15').toLocaleDateString(), // Specific date in human-readable format
      from: "Supermarket",
      category: "Food",
      notes: "Weekly groceries"
    },
    {
      id: 3,
      item_name: "Cat Food",
      amount: 30,
      date: new Date('2024-06-10').toLocaleDateString(), // Specific date in human-readable format
      from: "Pet Store",
      category: "Pets",
      notes: "Monthly cat food"
    },
    {
      id: 4,
      item_name: "Savings Deposit",
      amount: 1000,
      date: new Date('2024-06-05').toLocaleDateString(), // Specific date in human-readable format
      from: "Bank",
      category: "Savings",
      notes: "Monthly savings"
    },
    {
      id: 5,
      item_name: "Dinner Out",
      amount: 75,
      date: new Date('2024-06-20').toLocaleDateString(), // Specific date in human-readable format
      from: "Restaurant",
      category: "Food",
      notes: "Dinner with friends"
    }
  ];
  
  module.exports = transactions;
  