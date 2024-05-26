import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import styles from '../../styles/Vehicles.module.css';

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get('/api/vehicles')
      .then((res) => setVehicles(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Vehicles</h1>
      <Link href="/vehicles/new"><a className={styles.addButton}>Add Vehicle</a></Link>
      <ul className={styles.vehicleList}>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id} className={styles.vehicleItem}>{vehicle.vehicleNumber}</li>
        ))}
      </ul>
    </div>
  );
}
