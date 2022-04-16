import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Meeting Games and Icebreaking!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Meeting Games and Icebreaking!" />
        <p className="description">
          <br><a href="https://www.brightful.me/blog/what-are-the-free-alternatives-to-kahoot/">What are The Best Free Alternatives to Kahoot</a>
<br><a href="https://www.brightful.me/blog/best-online-pictionary-games-to-play-with-remote-workers/">Best online pictionary games to play with remote workers</a>
<br><a href="https://www.brightful.me/blog/best-free-online-escape-rooms/">Best 11 Free Online Escape Rooms</a>
<br><a href="https://www.brightful.me/blog/what-are-the-best-online-trivia-games-for-zoom/">What are The Top 10 Best Online Trivia Games for Zoom?</a>
<br><a href="https://www.brightful.me/blog/the-best-online-trivia-games-to-play-with-your-remote-team/">The Best Online Trivia Games to Play With Your Remote Team</a>
<br><a href="https://www.brightful.me/blog/looking-for-a-jackbox-alternative-here-are-some-of-your-options/">Looking for a Jackbox Alternative? Here are Some of Your Options</a>
<br><a href="https://www.brightful.me/blog/5-minute-team-building-activities/">5 Absolutely Perfect 5-minute Team Building Activities</a>
<br><a href="https://www.brightful.me/blog/how-to-play-pictionary/">How to Play Pictionary? The Definitive Step by Step Guide</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
