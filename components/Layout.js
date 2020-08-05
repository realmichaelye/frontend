import Navbar from './Navbar.js';

export default ({ children }) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}
