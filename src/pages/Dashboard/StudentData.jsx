import React, { useState } from 'react'

const StudentData = () => {
    const [file, setFile]= useState(null);
    const [uploading, setUploading] = useState(false);
    const [message , setMessage] = useState("");
    

    const  handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setMessage(" ");
    };

    const  handleUpload = async () => {
       if(!file){
        setMessage("Please select a file first.");
        return;
       }

       setUploading(true);
       const forData = new FormData();
       FormData.append("file", file);

       try{
        const res =await
        fetch("http:///localhost:8080/api/upload",{
            method:"POST",
            body:formData,

        });
        const text= await res.text();
        setMessage(text);
       }catch (err){
        setMessage("Upload failed.");

       }finally{
        setMessage(false);
       }
    };



  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 px-4'>
        <div className='bg-white p-6 rounded-2xl shadow-xl w-full max-w-md'> 
            <h2 className='text-xl font-bold mb-4 text-center text-gray-800'>upload student data</h2>
            <div className='border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mb-4'>
                <input  
                type='file'
                accept='.csv, .xls, .xlsx'
                onChange={handleFileChange}

                className='hidden'
                id='fileUpload'
                />
                <label htmlFor='fileUpload' className='cursor-pointer text-blue-500'>
                    {file ? file.name:"Click to select an Excel/CSV file"}
                </label>
            </div>
            <button 
            onClick={handleUpload}
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200'
            disabled={uploading}
            >
                {uploading ? "Uploading..." : "Upload File"}
            </button>
            {message && (
                <p className='mt-4 text-sm text-center text-gray-700'>{message}</p>
            )}
        </div>
    </div>
   

  );
}

export default StudentData