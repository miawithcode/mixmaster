import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';

const HomeLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  return (
    <>
      <Navbar />
      <section className="page">
        {isLoading ? <Loader /> : <Outlet />}
      </section>
    </>
  );
};
export default HomeLayout;
