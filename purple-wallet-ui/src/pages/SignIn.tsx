import React, { useEffect, useState } from 'react';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = email.trim() !== '' && password.trim() !== '';
    setIsFormValid(isValid);
  }, [email, password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
      <Logo/>
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
      <p className='text-white text-2xl'>Don't have an account? 
        <Link to="/signup">
        <span className='ml-1 text-purple-500 hover:text-sky-500'>Register here</span>
        </Link>
      </p>
    </div>
  );
};
