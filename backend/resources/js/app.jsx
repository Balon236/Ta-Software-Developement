import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import ClassroomManager from './ClassroomManager';
import SpecialtyManager from './SpecialtyManager';
import TimetableManager from './TimetableManager ';
import ScreeningForm from './ScreeningForm';
import ScreenRecordManager from './ScreenRecordManager';
import Main from '../../../frontend/tamentalhealth/src/App'

function HouseForm() {
    const [form, setForm] = useState({
        name: '',
        location: '',
        price: '',
        description: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/houses', form);
            setMessage(res.data.message);
        } catch (err) {
            setMessage('Error submitting house');
            console.error(err.response?.data);
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <Main/>
            <ScreenRecordManager/>
            <ScreeningForm/>
            <h2>Add House</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="House Name" onChange={handleChange} required />
                <br />
                <input name="location" placeholder="Location" onChange={handleChange} required />
                <br />
                <input name="price" placeholder="Price" type="number" onChange={handleChange} required />
                <br />
                <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

const root = document.getElementById('react-root');
if (root) {
    ReactDOM.createRoot(root).render(<HouseForm />);
}
