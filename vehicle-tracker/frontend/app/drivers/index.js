import { useEffect, useState } from "react";
import Link from 'next/link';
import styles from '../../styles/Drivers.module.css';

export default function Drivers(){
    const [drivers, setDrivers] = useState([]);

    useEffect( () => {
        fetch('/api/drivers')
        .then((res) => res.json())
        .then((data) => setDrivers(data));
    }, []);


    return (
    <div>
        <h1>Drivers</h1>
        <Link href="/drivers/new"><a className={styles.addButton}>Add Driver</a></Link>
        <ul className={styles.driverList}>
            {drivers.map((driver) => {
                <li key={driver.id} className={styles.driverItem}>{driver.name}</li>
            })}
        </ul>
    </div>
);
};