import React, { useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControlLabel,
  Checkbox,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: new Date().toISOString().split("T")[0],
      type: "income",
      description: "Salary",
      value: "2000",
    },
    {
      id: 2,
      date: new Date().toISOString().split("T")[0],
      type: "expense",
      description: "Groceries",
      value: "100",
    },
    // Add more dummy data...
  ]);
  const [showIncome, setShowIncome] = useState(true);
  const [showExpense, setShowExpense] = useState(true);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    date: new Date().toISOString().split("T")[0],
    type: "income",
    description: "",
    value: "0",
  });

  const handleShowIncomeChange = (event) => {
    if (!event.target.checked && !showExpense) {
      // Ensure at least one filter is selected
      return;
    }
    setShowIncome(event.target.checked);
  };

  const handleShowExpenseChange = (event) => {
    if (!event.target.checked && !showIncome) {
      // Ensure at least one filter is selected
      return;
    }
    setShowExpense(event.target.checked);
  };

  const handleAddTransaction = () => {
    // Validate each field before adding the transaction
    if (
      newTransaction.date &&
      newTransaction.type &&
      newTransaction.description &&
      newTransaction.value
    ) {
      setTransactions([newTransaction, ...transactions]);
      setOpenAddDialog(false);
    }
  };

  const handleNewTransactionChange = (event) => {
    const { name, value } = event.target;

    if (name === "value") {
      // Validate value to ensure it's not negative
      if (parseFloat(value) < 0) {
        // Don't update the state if value is negative
        return;
      }
      setNewTransaction((prevTransaction) => ({
        ...prevTransaction,
        [name]: value,
      }));
    } else {
      setNewTransaction((prevTransaction) => ({
        ...prevTransaction,
        [name]: value,
      }));
    }
  };

  const handleEditTransaction = (id) => {
    // Implement edit functionality here
    console.log("Edit transaction with id:", id);
  };

  const handleDeleteTransaction = (id) => {
    // Implement delete functionality here
    console.log("Delete transaction with id:", id);
  };

  return (
    <Container>
      <FormControlLabel
        control={
          <Checkbox
            checked={showIncome}
            onChange={handleShowIncomeChange}
            color="primary"
          />
        }
        label="Income"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showExpense}
            onChange={handleShowExpenseChange}
            color="primary"
          />
        }
        label="Expense"
      />
      <Button
        variant="contained"
        onClick={() => setOpenAddDialog(true)}
        sx={{ marginLeft: "auto", marginTop: 1 }}
      >
        Add Transaction
      </Button>
      <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)}>
        <DialogTitle>Add New Transaction</DialogTitle>
        <DialogContent>
          <TextField
            name="date"
            label="Date"
            type="date"
            value={newTransaction.date}
            onChange={handleNewTransactionChange}
            sx={{ marginBottom: 2 }}
            fullWidth
            required
          />
          <FormControl fullWidth sx={{ marginBottom: 2 }} required>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              id="type-select"
              name="type"
              value={newTransaction.type}
              onChange={handleNewTransactionChange}
              label="Type"
            >
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="expense">Expense</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="description"
            label="Description"
            value={newTransaction.description}
            onChange={handleNewTransactionChange}
            sx={{ marginBottom: 2 }}
            fullWidth
            required
          />
          <TextField
            name="value"
            label="Value (LKR)"
            type="number"
            value={newTransaction.value}
            onChange={handleNewTransactionChange}
            sx={{ marginBottom: 2 }}
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddDialog(false)}>Cancel</Button>
          <Button onClick={handleAddTransaction} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper} sx={{ width: "80%", marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Value (LKR)</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{`${transaction.value}.00`}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleEditTransaction(transaction.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteTransaction(transaction.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TransactionsTable;
