import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import { Button } from "../components/Button";
import ErrorInput from "../components/ErrorInput";
import { TransactionService } from "../services/TransactionService";
import { signOut } from "../services/AuthService";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState<any[]>([]);
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState("");

  const getAllTransactions = async () => {
    try {
      const response = await TransactionService.findAll();
      console.log("API Response:", response);
      if (Array.isArray(response)) {
        const validTransactions = response.filter(transaction => transaction.type === "input" || transaction.type === "output");
        setTransactions(validTransactions);
        calculateBalance(validTransactions);
      } else {
        throw new Error("Invalid transaction data from server.");
      }
    } catch (error: any) {
      console.error("Error fetching transactions:", error);
      setError(error?.message || "Could not fetch transactions.");
    }
  };
  

  const calculateBalance = (transactions: any[]) => {
    const total = transactions.reduce((acc, transaction) => {
      return transaction.type === "input"
        ? acc + Number(transaction.value)
        : acc - Number(transaction.value);
    }, 0);

    setBalance(total);
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/signin");
    } catch (error) {
      console.error("Error during sign out", error);
      setError("Unable to sign out. Please try again.");
    }
  };

  return (
    <div className="home-container bg-gray-800 text-white min-h-screen flex flex-col items-center p-8">
      {error && <ErrorInput text={error} />}

      <header className="w-full flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold mr-2">Welcome to Purple Wallet</h1>
        <Button
          type="button"
          text="Sign Out"
          onClick={handleSignOut}
          size="sm"
        />
      </header>

      <section className="balance-section bg-gray-700 rounded-lg p-4 mb-4 w-full max-w-md">
        <h2 className="text-lg mb-2">Current Balance</h2>
        <div className="text-xl font-bold text-center">R$ {balance}</div>
      </section>

      <section className="transaction-section bg-gray-600 rounded-lg p-4 mb-4 w-full max-w-md h-48 overflow-auto">
        <h2 className="text-lg mb-2">Transactions</h2>
        {Array.isArray(transactions) && transactions.length ? (
          <ul className="transaction-list max-h-[10rem] overflow-auto">
            {transactions.map((transaction, index) => (
              <li
                key={index}
                className={`flex justify-between items-center py-1 px-2 rounded mb-2 ${
                  transaction.type === "input"
                    ? "bg-green-500"
                    : "bg-red-500"
                } text-white`}
              >
                <span>
                  {dayjs(transaction.created_at).format("DD/MM")} -{" "}
                  {transaction.description}
                </span>
                <span>R$ {transaction.value}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-sm text-gray-300 text-center">No transactions yet</div>
        )}
      </section>

      <footer className="w-full flex justify-around gap-2 mt-4">
        {/* Button for Income */}
        <Button
          type="button"
          text="Add Income"
          size="sm"
          icon="plus"
          onClick={() => navigate("/transaction/input")}
        />

        {/* Button for Expense */}
        <Button
          type="button"
          text="Add Expense"
          size="sm"
          icon="minus"
          onClick={() => navigate("/transaction/output")}
        />
      </footer>
    </div>
  );
};
