import classes from './MainNavigation.module.css';
import Link from 'next/link'
import HamMenu from "../generic/HamMenu"
import Button from "../generic/Button"

function MainNavigation() {
  function ordersCallback() {
    //pageHeaderCtx.setCartState(1, true, null)
  }

  function checkoutCallback() {
    // pageHeaderCtx.setCartState(2, true, true)
   }

   function toggleMenuHide() {
    // pageHeaderCtx.setCartState(2, true, true)
   }
  
  return (
    <header className={classes.header}>
      <HamMenu toggleMenuHide={toggleMenuHide} />
      <div >
        <Link href='/' className={classes.logo}>React Meetups</Link>
      </div>
      <Button text1="Checkout" maxWidth="75px" onClickHandler={checkoutCallback} />
      <Button text1="Your" text2="Orders" maxWidth="70px" onClickHandler={ordersCallback} />
    </header>
  );
}

export default MainNavigation;
