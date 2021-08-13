import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Background, ContentsBtn, Header, Logo, LogOutBtn, MyMovieBtn, NavBar } from '@src/main.styles'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Picker</title>
        <meta name="description" content="Movie Picker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Background>

        <Header>
          <Logo>Movie Picker</Logo>
          <NavBar>
            <ContentsBtn></ContentsBtn>
            <MyMovieBtn></MyMovieBtn>
            <LogOutBtn></LogOutBtn>
          </NavBar>
        </Header>

      </Background>
    </div>
  )
}
