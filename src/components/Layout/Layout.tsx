import Header from '../Header/Header';

interface ILayoutProps {
  children?: JSX.Element;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
