import Heading from '../Layout/Heading';
import Layout from '../Layout/Layout';
import Link from 'next/link';
import Title from '../Title';
import { supabaseClient } from '../../lib/client';

type Props = {
  title?: string;
  layoutTitle?: string;
  pageName: string;
};

const handleLogout = async () => {
  try {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
  } catch (error: any) {
    alert(error.error_description || error.message);
  }
};

const Page: React.FunctionComponent<Props> = ({
  children,
  layoutTitle = 'This is the default title',
  pageName,
}) => (
  <>
    <Layout title={layoutTitle} />
    <Heading text="WMS" />
    <main>
      <div className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
        <main
          role="main"
          className="w-full lg:w-5/6 flex-grow pt-1 px-3"
        >
          <div className="flex-column">
            <Link href="/">
              <a>New Orders</a>
            </Link>
            {'  |  '}
            <Link href="/notstarted">
              <a>Not Started</a>
            </Link>
            {'  |  '}
            <Link href="/wip">
              <a>Work In Progress</a>
            </Link>
            {'  |  '}
            <Link href="/completed">
              <a>Completed</a>
            </Link>
            {'  |  '}
            <Link href="/cancelled">
              <a>Cancelled</a>
            </Link>
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}
            >
              Logout
            </button>
            {
              window.location.href.split('?')[1] ? localStorage.setItem("url", window.location.href.split('?')[1]) : ''
            }
            <a  href="/api/zendex/auth"> Get Access Token</a>
          </div>
          <div className="bg-white shadow-md rounded my-6">
            <Title text={pageName} />

            {children}
          </div>
        </main>
        <div className="w-fixed w-full flex-shrink flex-grow-0 px-2"></div>
      </div>
    </main>
  </>
);

export default Page;
