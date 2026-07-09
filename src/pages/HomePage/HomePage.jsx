import style from './HomePage.module.css'

const HomePage = () => {
  return (
    <>
      <title>Welcome</title>
      <div className={style.container}>
        <h1 className={style.title}>
          Task manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}

export default HomePage
