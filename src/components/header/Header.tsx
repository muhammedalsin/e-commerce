import Link from 'next/link'
import styles from "./header.module.css";
import Navbar from './Navbar';
import { cookies } from 'next/headers';
import { verifyTokenForPage } from '@/utils/verifyToken';
import LogoutButton from './LogoutButton';

const Header = () => {
  const token = cookies().get("jwtToken")?.value || "";
  const payload = verifyTokenForPage(token);

  return (
    <header className={styles.header}>
      <Navbar isAdmin={payload?.isAdmin || false} />
      <div className={styles.right}>
        {payload ? (
          <>
            <div className='text-blue-800 font-bold md:text-xl capitalize'>
              {payload?.username}
            </div>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link className={styles.btn} href="/login">Giriş Yap</Link>
            <Link className={styles.btn} href="/register">Kayıt Ol</Link>
          </>
        )}
      </div>
    </header>
  )
}

export default Header