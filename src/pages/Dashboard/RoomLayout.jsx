import React, { useState } from 'react';

const RoomLayout = () => {
  const [roomName, setRoomName] = useState('');
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [seats, setSeats] = useState([]);

  const handleGenerateLayout = (e) => {
    e.preventDefault();

    const layout = [];
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        row.push(`R${r + 1}C${c + 1}`);
      }
      layout.push(row);
    }
    setSeats(layout);
  };

  return (
    <div className="p-8 bg-white shadow-xl rounded-xl w-full max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-2">Room Layout Designer</h2>
      <p className="mb-6 text-gray-600">Define your classroom layout and preview seating in real time.</p>

      <form
        onSubmit={handleGenerateLayout}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          required
          className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Rows"
          value={rows}
          onChange={(e) => setRows(e.target.value)}
          required
          min={1}
          className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Columns"
          value={cols}
          onChange={(e) => setCols(e.target.value)}
          required
          min={1}
          className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition-all"
        >
          Generate Layout
        </button>
      </form>

      {seats.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Layout for Room: <span className="text-blue-600">{roomName}</span>
          </h3>

          <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
            {seats.flat().map((seat, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 text-center border rounded-lg font-medium text-sm hover:bg-blue-100"
              >
                {seat}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RoomLayout;
