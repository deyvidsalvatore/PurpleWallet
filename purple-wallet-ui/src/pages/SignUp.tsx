import React, { useState } from 'react';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
      <Logo />
      <form
        className="flex flex-col justify-center gap-4 w-full text-2xl"
        onSubmit={handleSubmit}
      >
        <InputField
          type="text"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
        />
        <InputField
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button onClick={() => {}} text="Sign Up" />
      </form>
      <p className='text-white text-2xl'>Already have an account? 
        <Link to="/signin">
          <span className='ml-1 text-purple-500 hover:text-sky-500'>Login here</span>
        </Link>
      </p>
    </div>
  );
};
