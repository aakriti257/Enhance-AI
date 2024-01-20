import React, { useState } from 'react';

const Enhance = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setEnhancedImage(null); // Reset enhanced image when a new image is uploaded
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEnhance = async () => {
    try {
        const response = await fetch("https://enhance-ai.vercel.app/api/v1/enhance", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ image: uploadedImage }),
        });

        if (response.ok) {
            const data = await response.json(); // Parse the JSON response

            // Assuming the enhanced image URL is stored in a property called 'enhancedImageUrl'
            const enhancedImageUrl = data.photo;

            // Now you can use the 'enhancedImageUrl' variable as needed
            console.log('Enhanced Image URL:', enhancedImageUrl);

            // Assuming setEnhancedImage is a state-setting function
            setEnhancedImage(enhancedImageUrl);
        } else {
            console.error('Error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};


  return (
<div className="flex justify-center items-center h-screen bg-black">
      <div className="flex">
        <div className="flex-shrink-0 p-4 border rounded-md w-1/2 mr-5">
          <label
            htmlFor="imageInput"
            className="block bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-purple-700 rounded-md cursor-pointer mt-2"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          {uploadedImage && (
            <div className="mt-4">
              <p className="text-lg font-semibold mb-2">Uploaded Image:</p>
              <img src={uploadedImage} alt="Uploaded" className="w-full rounded-md" />
            </div>
          )}
        </div>

        <div className="flex items-center justify-center h-64">
          <button
            onClick={handleEnhance}
            className="cursor-pointer rounded-full font-semibold overflow-hidden relative z-100 border border-lime-600 group px-8 py-2 w-full">
            <span className="relative z-10 text-lime-600  group-hover:text-white text-xl duration-500">Enhance!</span>
            <span className="absolute w-full h-full bg-lime-600  -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
            <span className="absolute w-full h-full bg-lime-600 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
          </button>
        </div>

        <div className="flex-shrink-0 p-4 w-1/2 ml-4 h-64">
          <p className="text-lg font-semibold mb-2">Enhanced Image:</p>
          {enhancedImage ? (
            <img
              src={enhancedImage}
              alt="Enhanced"
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <div className="flex justify-end items-center h-full border rounded-md">
              <p className="text-gray-500">Placeholder for Enhanced Image</p>
            </div>
          )}
        </div>

        <div className='flex justify-center items-center  ml-5'>
          <button className="cursor-pointer rounded-full font-semibold overflow-hidden relative z-100 border border-lime-600 group px-4 py-2 w-full">
            <span className="relative z-10 text-lime-600 group-hover:text-white text-xl duration-500">Download</span>
            <span className="absolute w-full h-full bg-lime-600 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
            <span className="absolute w-full h-full bg-lime-600 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Enhance;
