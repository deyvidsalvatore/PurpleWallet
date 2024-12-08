import React, { useEffect, useState } from "react";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { Logo } from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../components/Alert";
import { signIn } from "../services/AuthService";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isValid = email.trim() !== "" && password.trim() !== "";
    setIsFormValid(isValid);
  }, [email, password]);

  const closeAlert = () => {
    setAlert(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAlert(null);

    try {
      await signIn(email, password);
      setAlert({ message: "Login successful!", type: "success" });
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error: any) {
      console.error("Sign In Error:", error);
      setAlert({
        message: error?.response?.data?.message || "Login failed.",
        type: "error",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={closeAlert}
        />
      )}
      <Logo />
      <form
        className="flex flex-col justify-center gap-4 w-full text-2xl"
        onSubmit={handleSubmit}
      >
        <InputField
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button text="Sign In" disabled={!isFormValid} />
      </form>
      <p className="mt-4 text-white text-lg">
        Don't have an account?{" "}
        <Link to="/signup">
          <span className="ml-1 text-purple-500 hover:text-sky-500">Register here</span>
        </Link>
      </p>
    </div>
  );
};
