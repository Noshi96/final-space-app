import Header from '../Header/Header'

export default function Layout ({ title, children }) {
  return (
    <>
      <Header title={title} />
      {children}
    </>
  )
}
