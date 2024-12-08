import React, { useEffect, useState } from 'react';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValidForm =
      fullName.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '' &&
      confirmPassword.trim() !== '' &&
      password === confirmPassword;

    setIsFormValid(isValidForm);
  }, [fullName, email, password, confirmPassword]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    alert('Form submitted successfully!');
  };

  return (
    <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
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
          onClick={handleSubmit}
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
