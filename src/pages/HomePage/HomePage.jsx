import style from './HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <title>Welcome</title>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Task manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}
