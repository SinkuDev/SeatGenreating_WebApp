import { useState } from 'react';

const UploadStudents = () => {
  const [file, setFile] = useState(null);
  const [previewData, setPreviewData] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    // Dummy preview data (replace with real parsing later)
    setPreviewData([
      { name: 'Alice', roll: '001', room: 'A1' },
      { name: 'Bob', roll: '002', room: 'A1' },
    ]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      setUploadStatus("Please select a file first.");
      return;
    }

    // Placeholder for backend upload
    setUploadStatus("Uploading...");
    setTimeout(() => {
      setUploadStatus("Upload successful!");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Upload Student Data</h2>

      <form onSubmit={handleUpload} className="bg-white p-4 rounded shadow space-y-4">
        <input
          type="file"
          accept=".csv, .xlsx"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
        />

        {previewData.length > 0 && (
          <div className="overflow-x-auto border border-gray-200 rounded mt-4">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2">Name</th>
                  <th className="p-2">Roll No</th>
                  <th className="p-2">Room</th>
                </tr>
              </thead>
              <tbody>
                {previewData.map((row, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2">{row.name}</td>
                    <td className="p-2">{row.roll}</td>
                    <td className="p-2">{row.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload
        </button>

        {uploadStatus && (
          <p className="text-sm text-green-600 mt-2">{uploadStatus}</p>
        )}
      </form>
    </div>
  );
};

export default UploadStudents;