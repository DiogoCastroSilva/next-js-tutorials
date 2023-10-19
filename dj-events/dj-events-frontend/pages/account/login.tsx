import { ChangeEvent, FormEvent, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import Link from 'next/link';
import { Layout } from '@/components/layout';
import styles from '@/styles/AuthForm.module.css';
import useAuth from '@/hooks/use-auth';

export default function LoginPage() {
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(form);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Layout title="User Login">
      <div className={styles.auth}>
        <h1>
          <FaUser /> Log In
        </h1>
        <ToastContainer />
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleOnChange}
            />
          </div>
          <input type="submit" value="login" className="btn" />
        </form>
        <p>
          Don't have an account? <Link href="/account/register">Register</Link>
        </p>
      </div>
    </Layout>
  );
}
