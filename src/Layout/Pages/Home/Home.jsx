import styles from "./Home.module.scss";
import planetsData from "/public/data/planetsData.json"

export const Home = () => {
    return (
        <>
            <main className={styles.homeWrapper}>
                <div className={styles.nato}>
                    <img src="/images/satelite.gif" alt="satelite"/>
                </div>
                <div className={styles.asteroid}>
                    <img src="/images/asteroid1.gif" alt="Asteroid"/>
                </div>
                <div className={styles.ufo}>
                    <img src="/images/asteroid2.gif" alt="Asteroid Fast"/>
                </div>
                <div className={styles.solarSystemContent}>
                    <div className={styles.solarSystem}>
                        {planetsData.map((planet) => {
                            return (
                                <div key={planet.id} className={styles[planet.class]}>
                                    {planet.name === "earth" ?
                                        <div className={styles.earth}>
                                            <img src="/images/earth.png" alt="earth" id="earth"/>
                                            <div className={styles.moonContainer}>
                                                <div className={styles.moon}></div>
                                            </div>
                                        </div>
                                        :
                                        <img src={planet.src} alt={planet.alt} id={planet.name}/>
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}

