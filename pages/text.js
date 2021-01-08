import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import DefaultLayout from 'layouts/DefaultLayout'

export default function HomePage() {
  return (
    <div className="HomePage" style={{ height: '100%' }}>
      <Head>
        <title>Worldview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout title="WorldView">
        <div>
          <Card style={{ width: 350, paddling: 4 }}>
            <CardActionArea>
              <Image
                src="/3678428.jpg"
                alt="Photo by Nur Andi Ravsanjani Gusma from Pexels"
                layout="fill"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Wikipedia Terrorism Reports
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Wikipedia has reported 3,234 Terrorism related incidents between 2000 and today
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                  This is an up to date public dataset, and can only be accessed by anyone users
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link href="/world?events=WITR-2000&show=MAP">
                <Button size="small" color="primary">
                  Since 2000
                </Button>
              </Link>
              <Button size="small" color="primary">
                Last Three Months
              </Button>
              <Button size="small" color="primary">
                This Month
              </Button>
            </CardActions>
          </Card>
          <Card style={{ width: 350 }}>
            <CardActionArea>
              <CardContent>
                <Image
                  src="/155901.jpg"
                  alt="Photo by Nur Andi Ravsanjani Gusma from Pexels"
                  layout="fill"
                />

                <Typography gutterBottom variant="h5" component="h2">
                  Global Terrorism Database
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Global Terrorism Database has reported 175,522 Terrorism related incidents between
                  1970 and 2018
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a historical research dataset, and can only be accessed by authorized
                  users
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link href="/world?events=GLTD-1970&show=GLOBE">
                <Button size="small" color="primary">
                  Since 1970
                </Button>
              </Link>
              <Link href="/world?events=GLTD-2000&show=GLOBE">
                <Button size="small" color="primary">
                  Between 2000 and 2018
                </Button>
              </Link>
              <Link href="/world?events=GLTD-2018&show=MAP">
                <Button size="small" color="primary">
                  Latest Year (2018)
                </Button>
              </Link>
            </CardActions>
          </Card>
        </div>
      </DefaultLayout>
    </div>
  )
}
