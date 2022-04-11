import { useState } from 'react';
import s from './LoginView/LoginView.module.css';
import { useRegisterUserMutation } from '../../redux/authorization/operations';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [registerUser] = useRegisterUserMutation();

  const resetState = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    registerUser({ name, email, password });
    resetState();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        name="name"
        placeholder="Name"
        required
        value={name}
        onChange={handleChange}
      />
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
        Register
      </button>
    </form>
  );
}
