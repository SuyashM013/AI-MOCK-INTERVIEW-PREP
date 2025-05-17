import React from "react";

const BoxGallery = () => {
  
  const boxes = [
    {
      id: 1,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.",
      imageUrl: "/Minor/res-1.png",
      fileUrl: "/Minor/res-1.docx",
    },
    {
      id: 2,
      title: "Professional CV",
      description: "Best for job seekers in corporate fields.",
      imageUrl: "/Minor/res-2.png",
      fileUrl: "/Minor/res-2.docx",  
    },
    {
      id: 3,
      title: "Creative CV",
      description: "Great for designers and creatives to showcase work.",
      imageUrl: "/Minor/res-3.png",
      fileUrl: "/Minor/res-3.docx", 
    },
    {
      id: 4,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.",
      imageUrl: "/Minor/res-4.png",
      fileUrl: "/Minor/res-4.docx", 
    },
    {
      id: 5,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.", 
      imageUrl: "/Minor/res-5.png",
      fileUrl: "/Minor/res-5.docx", 
    },
    {
      id: 6,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.", 
      imageUrl: "/Resumes/resume2.jpg",
      fileUrl: "/resumes/resume2.docx",
    },
    {
      id: 7,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.",
      imageUrl: "/Resumes/resume3.jpg",
      fileUrl: "/resumes/resume3.docx",
    },
    {
      id: 8,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.",
      imageUrl: "/Resumes/resume11.jpg",
      fileUrl: "/resumes/resume11.docx",
    },
    

  ];

  return (
    <div className="">
      <div className="pt-8 ">
        <h1 className="text-5xl font-bebas text-center mb-8">Resume Gallery</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {boxes.map((box) => (
            <div
              key={box.id}
              className="bg-secondary  p-1 rounded-xl shadow-md hover:shadow-xl transition flex flex-col justify-between overflow-hidden"
            >
              <img
                src={box.imageUrl}
                alt={box.title}
                className=" rounded-lg w-full object-cover"
              />
              <div className="p-4 flex flex-col justify-between ">
                <div>
                  <h2 className="text-lg font-semibold">{box.title}</h2>
                  <p className="text-sm text-gray-600">{box.description}</p>
                </div>
                <div className="flex gap-2 mt-2">

                  <a
                    href={box.fileUrl}
                    download
                    className=" flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center transition-all"
                  >
                    Download
                  </a>
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>

      

     


    </div>

  );
};

export default BoxGallery;

