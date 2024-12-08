import React, { useEffect, useState } from 'react';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from '../components/Alert';
import { signUp } from '../services/AuthService';

export const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isValidForm =
      fullName.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '' &&
      confirmPassword.trim() !== '' &&
      password === confirmPassword;

    setIsFormValid(isValidForm);
  }, [fullName, email, password, confirmPassword]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signUp(fullName, email, password);
      setAlert({ message: 'Cadastrado com sucesso!', type: 'success' });
      setTimeout(() => {
        navigate('/signin');
      }, 1000);
    } catch (error) {
      setAlert({ message: 'Erro ao realizar o cadastro.', type: 'error' });
    }
  };

  const closeAlert = () => {
    setAlert(null);
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
        {/* Full Name Field */}
        <InputField
          type="text"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        {/* Email Field */}
        <InputField
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* Password Field */}
        <InputField
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* Confirm Password Field */}
        <InputField
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {/* Submit Button */}
        <Button
          text="Sign Up"
          disabled={!isFormValid}
          type="submit"
        />
      </form>
      <p className="mt-4 text-white text-lg">
        Already have an account?{' '}
        <Link to="/signin">
          <span className="ml-1 text-purple-500 hover:text-sky-500">Login here</span>
        </Link>
      </p>
    </div>
  );
};
