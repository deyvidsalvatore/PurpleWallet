import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TransactionService } from "../services/TransactionService";

export const TransactionForm: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const [description, setDescription] = useState("");
  const [value, setValue] = useState<number>(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    if (type !== "input" && type !== "output") {
      setError("Invalid transaction type.");
    }
  }, [type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await TransactionService.save({
        description,
        type: type as "input" | "output",
        value,
      });

      alert("Transaction saved successfully!");
      setDescription("");
      setValue(0);
      navigate("/home");
    } catch (error) {
      console.error("Failed to save transaction", error);
      setError("Error saving transaction.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mt-6 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {type === "input" ? "Add Income" : type === "output" ? "Add Expense" : "Invalid Transaction Type"}
      </h2>

      {error && (
        <div className="bg-red-500 text-red-100 p-2 rounded mb-4 text-sm text-center">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Description Field */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="description">
            Description
          </label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter transaction description"
            required
          />
        </div>

        {/* Disabled Transaction Type (visible for context only) */}
        <div>
          <label className="block text-sm font-medium mb-1">Transaction Type</label>
          <input
            type="text"
            value={type ?? ""}
            className="w-full px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 text-gray-400 focus:outline-none"
            disabled
          />
        </div>

        {/* Value Field */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="value">
            Value
          </label>
          <input
            id="value"
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full px-3 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter transaction amount"
            min="0"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Save Transaction
          </button>
        </div>
      </form>
    </div>
  );
};
