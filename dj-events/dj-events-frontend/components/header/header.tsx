import Link from 'next/link';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import styles from '@/styles/Header.module.css';
import Search from '@/components/search/search';
import useAuth from '@/hooks/use-auth';

export default function Header() {
  const { auth, logout } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">DJ Events</Link>
      </div>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/events">Events</Link>
          </li>
          {auth && (
            <>
              <li>
                <Link href="/events/add">Add Event</Link>
              </li>
              <li>
                <Link href="/account/dashboard">Dashboard</Link>
              </li>
            </>
          )}
          {auth ? (
            <li>
              <Link href="/account/login" className="btn-secondary btn-icon">
                <FaSignInAlt /> Login
              </Link>
            </li>
          ) : (
            <li>
              <button className="btn-secondary btn-icon" onClick={logout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
