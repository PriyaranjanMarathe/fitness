import React, { useState, CSSProperties } from 'react';

type DietLog = {
  id: number;
  date: string;
  mealType: string;
  item: string;
  calories: number;
};

function App() {
  // State to store form inputs
  const [userId, setUserId] = useState(1);
  const [date, setDate] = useState('');
  const [mealType, setMealType] = useState('');
  const [item, setItem] = useState('');
  const [calories, setCalories] = useState('');
  const [logs, setLogs] = useState<DietLog[]>([]); // State to store fetched logs

  // Function to handle Add Data
  const handleAddData = async () => {
    const data = { userId, date, mealType, item, calories: parseInt(calories) };
    try {
      const response = await fetch('https://nodeapi-dg5e.onrender.com/add-diet-log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  // Function to handle Get Data
  const handleGetData = async () => {
    try {
      const response = await fetch(`https://nodeapi-dg5e.onrender.com/get-diet-log?userId=${userId}&date=${date}`);
      const data = await response.json();
      setLogs(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const styles: {
    container: CSSProperties;
    title: CSSProperties;
    subtitle: CSSProperties;
    formContainer: CSSProperties;
    input: CSSProperties;
    button: CSSProperties;
    logsContainer: CSSProperties;
    list: CSSProperties;
    listItem: CSSProperties;
  } = {
    container: {
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      textAlign: 'center' as const, // Explicitly set as const
      color: '#2c3e50',
    },
    subtitle: {
      margin: '10px 0',
      color: '#34495e',
    },
    formContainer: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      margin: '20px 0',
      backgroundColor: '#f9f9f9',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '8px 0',
      borderRadius: '4px',
      border: '1px solid #ddd',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    logsContainer: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      backgroundColor: '#f9f9f9',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      padding: '8px 0',
      borderBottom: '1px solid #ddd',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Fitness Tracking App</h1>

      {/* Add Diet Log Form */}
      <div style={styles.formContainer}>
        <h2 style={styles.subtitle}>Add Diet Log</h2>
        <input type="number" placeholder="User ID" value={userId} onChange={(e) => setUserId(Number(e.target.value))} style={styles.input} />
        <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} style={styles.input} />
        <input type="text" placeholder="Meal Type" value={mealType} onChange={(e) => setMealType(e.target.value)} style={styles.input} />
        <input type="text" placeholder="Item" value={item} onChange={(e) => setItem(e.target.value)} style={styles.input} />
        <input type="number" placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} style={styles.input} />
        <button onClick={handleAddData} style={styles.button}>Add Data</button>
      </div>

      {/* Fetch Diet Log */}
      <div style={styles.formContainer}>
        <h2 style={styles.subtitle}>Get Diet Logs</h2>
        <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} style={styles.input} />
        <button onClick={handleGetData} style={styles.button}>Fetch Logs</button>
      </div>

      {/* Display Fetched Logs */}
      <div style={styles.logsContainer}>
        <h2 style={styles.subtitle}>Diet Logs</h2>
        {logs.length > 0 ? (
          <ul style={styles.list}>
            {logs.map((log) => (
              <li key={log.id} style={styles.listItem}>
                <strong>Date:</strong> {log.date}, <strong>Meal:</strong> {log.mealType},
                <strong> Item:</strong> {log.item}, <strong>Calories:</strong> {log.calories}
              </li>
            ))}
          </ul>
        ) : (
          <p>No logs available</p>
        )}
      </div>
    </div>
  );
}

export default App;
