import Head from 'next/head'
import Timer from '../Components/Timer'
import Quote from '../Components/Quote'

const ImpromptuTimer = () => {
  return (
    <div className='container'>
      <Head>
        <title>Impromptu Timer</title>
        <link rel='icon' href='/timerpic.png' />
      </Head>

      <main>
        <Timer />
        <Quote />
      </main>

      <footer>
        {/* <a href='https://github.com/emilygracekz'>
          <img src='/github.png' alt='github' className='logo' />
        </a> */}
      </footer>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .header {
          margin-top: 10px;
          color: var(--black);
        }
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .p {
          font-size: 20px;
        }
        .footer {
          height: 5em;
          margin-bottom: 15px;
        }
        .logo {
          height: 2em;
          margin-bottom: 10px;
        }
        .logo:hover {
          opacity: 50%;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: var(--purple);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        * {
          box-sizing: border-box;
        }
        :root {
          --purple: #778bd9;
          --white: #f0f6f7;
          --lightPink: #fc9292;
          --darkPink: #e06c77;
          --lightBlue: #7facd6;
          --darkBlue: #33539e;
          --lightGray: #d3d4d7;
          --darkGray: #86817c;
          --black: #181533;
        }
      `}</style>
    </div>
  )
}

export default ImpromptuTimer
