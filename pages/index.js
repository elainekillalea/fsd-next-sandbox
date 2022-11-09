import Link from 'next/link'
import Card from '../components/ui/Card'
import classes from '../components/meetups/MeetupItem.module.css'

function HomePage() {

    return (
        <div>
            <div className={classes.content}>
                <Card>
                    <Link href='/'>Home</Link>
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
        </div>
   );
}

export default HomePage;