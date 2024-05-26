import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/Transfers.module.css';

export default function Transfers() {
  const [fromDriverId, setFromDriverId] = useState('');
  const [toDriverId, setToDriverId] = useState('');
  const [vehicleId, setVehicleId] = useState('');
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const driversRes = await axios.get('/api/drivers');
        const vehiclesRes = await axios.get('/api/vehicles');
        const transfersRes = await axios.get('/api/transfers');

        setDrivers(driversRes.data);
        setVehicles(vehiclesRes.data);
        setTransfers(transfersRes.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/transfers', { fromDriverId, toDriverId, vehicleId });
      // Fetch updated transfer list after new transfer
      const transfersRes = await axios.get('/api/transfers');
      setTransfers(transfersRes.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Transfers</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>From Driver</label>
          <select value={fromDriverId} onChange={(e) => setFromDriverId(e.target.value)} required>
            <option value="">Select Driver</option>
            {drivers.map((driver) => (
              <option key={driver.id} value={driver.id}>{driver.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>To Driver</label>
          <select value={toDriverId} onChange={(e) => setToDriverId(e.target.value)} required>
            <option value="">Select Driver</option>
            {drivers.map((driver) => (
              <option key={driver.id} value={driver.id}>{driver.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Vehicle</label>
          <select value={vehicleId} onChange={(e) => setVehicleId(e.target.value)} required>
            <option value="">Select Vehicle</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>{vehicle.vehicleNumber}</option>
            ))}
          </select>
        </div>
        <button type="submit">Transfer</button>
      </form>
      <h2>Transfer History</h2>
      <ul>
        {transfers.map((transfer) => (
          <li key={transfer.id}>
            {`Vehicle ${transfer.vehicleId} from Driver ${transfer.fromDriverId} to Driver ${transfer.toDriverId}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
