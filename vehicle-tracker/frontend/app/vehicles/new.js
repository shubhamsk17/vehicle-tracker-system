import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../../styles/Vehicles.module.css';

export default function NewVehicle() {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [pucCertificate, setPucCertificate] = useState('');
  const [insuranceCertificate, setInsuranceCertificate] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/vehicles', { vehicleNumber, vehicleType, pucCertificate, insuranceCertificate });
      router.push('/vehicles');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>New Vehicle</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Vehicle Number</label>
          <input type="text" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} required />
        </div>
        <div>
          <label>Vehicle Type</label>
          <input type="text" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required />
        </div>
        <div>
          <label>PUC Certificate URL</label>
          <input type="text" value={pucCertificate} onChange={(e) => setPucCertificate(e.target.value)} />
        </div>
        <div>
          <label>Insurance Certificate URL</label>
          <input type="text" value={insuranceCertificate} onChange={(e) => setInsuranceCertificate(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
