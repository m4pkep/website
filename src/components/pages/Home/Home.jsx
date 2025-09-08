import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                welcome to main page of my react website
            </h1>
            <p className={styles.description}>
                здесь собраны мои мини проекты на реакте
            </p>
        </div>
    );
};

export default Home;