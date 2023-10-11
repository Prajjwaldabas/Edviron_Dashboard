const Section = require('../models/sections.js')
const Students = require('../models/students.js')
const Fines = require('../models/fines.js')
const Transactions = require('../models/transactions.js')
const Invoices = require('../models/invoices.js')

const Dues = require('../models/dues.js');
const Payments = require('../models/payments.js');




module.exports.section = async (req,res)=>{
    try {
        const sections = await Section.find();
        res.json(sections);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch sections.' });
      }

}
module.exports.students = async (req,res)=>{
    try {
        const students = await Students.find();
        res.json(students);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch sections.' });
      }

}
module.exports.fines = async (req,res)=>{
    try {
        const fines = await Fines.find();
        res.json(fines);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch sections.' });
      }

}
module.exports.transactions = async (req,res)=>{
    try {
        const transactions = await Transactions.find();
        res.json(transactions);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch sections.' });
      }

}


module.exports.invoices = async (req, res) => {
    try {
      const invoices = await Invoices.find({}); 
      // console.log(invoices);
      res.json(invoices);
    } catch (error) {
      console.error('Error fetching invoices:', error);
      res.status(500).json({ error: 'Failed to fetch invoices.' });
    }
  }



  module.exports.findFeeDefaulters = async (req, res) => {
    try {
        // Step 1: Find all dues
        const allDues = await Dues.find({});
        console.log("All Dues:", allDues);

        // Step 2: Find all payments
        const allPayments = await Payments.find({});
        console.log("All Payments:", allPayments);

        // Step 3: Identify unpaid dues
        const unpaidDues = allDues.filter(due => {
            // Check if due and payment are defined before calling 'equals'
            if (due && due._id) {
                const isPaid = allPayments.some(payment => payment && payment.due && payment.due.equals(due._id));
                return !isPaid;
            }
            return false;
        });

        console.log("Unpaid Dues:", unpaidDues);
        res.json({ unpaidDues });
    } catch (error) {
        console.error('Error finding fee defaulters:', error);
        res.status(500).json({ error: 'Failed to find fee defaulters.' });
    }
};







