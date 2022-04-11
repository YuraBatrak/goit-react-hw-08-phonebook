import { useState } from 'react';
import { useLogInUserMutation } from '../../../redux/authorization/operations';
import s from './LoginView.module.css';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [logInUser] = useLogInUserMutation();

  const resetState = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    logInUser({ email, password });
    resetState();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="email"
        name="email"
        placeholder="Email"
        required
        value={email}
        onChange={handleChange}
      />
      <input
        className={s.input}
        type="password"
        name="password"
        placeholder="Password"
        required
        value={password}
        onChange={handleChange}
      />
      <button className={s.form_button} type="submit">
        Login
      </button>
    </form>
  );
}
