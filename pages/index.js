import Link from 'next/link'
import Card from '../components/ui/Card'
import classes from '../components/meetups/MeetupItem.module.css'
import useUser from '@auth0/nextjs-auth0';

function HomePage() {

    return (

        <div>
            <div className={classes.content}>
                <Card>
                    <Link href='/profile'>Profile</Link>
                </Card>
            </div>
            <div className={classes.content}>
                <Card>
                    <Link href='/login-page'>Login Page</Link>
                </Card>
            </div>
            <div className={classes.content}>
                <Card>
                    <Link href='/new-meetup'>Add New Meetup</Link>
                </Card>
            </div>
            <div className={classes.content}>
                <Card>
                    <Link href='/calendar-page'>Calendar</Link>
                </Card>
            </div>
            <div className={classes.content}>
                <Card>
                    <Link href='/meetup-list'>Meetups</Link>
                </Card>
            </div>
            <div className={classes.content}>
                <Card>
                    <a href="/api/auth/login">Login</a>
                </Card>
            </div>
            <div className={classes.content}>
                <Card>
                    <a href="/api/auth/logout">Logout</a>
                </Card>
            </div>
        </div>
   );
}

export default HomePage;