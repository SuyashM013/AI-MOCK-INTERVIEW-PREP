import React from "react";

const BoxGallery = () => {
  
  const boxes = [
    {
      id: 1,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.",
      imageUrl: "/Resumes/resume1.png",
      fileUrl: "/Resumes/resume1.docx",
      viewUrl: "/Resumes/resume1.",
    },
    {
      id: 2,
      title: "Professional CV",
      description: "Best for job seekers in corporate fields.",
      imageUrl: "/Resumes/resume2.png",
      fileUrl: "/Resumes/resume2.docx",
      viewUrl: "/Resumes/resume2.",
    },
    {
      id: 3,
      title: "Creative CV",
      description: "Great for designers and creatives to showcase work.",
      imageUrl: "/Resumes/resume3.png",
      fileUrl: "/Resumes/resume3.docx",
      viewUrl: "/Resumes/resume3.",
    },
    {
      id: 4,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.",
      imageUrl: "/Resumes/resume4.png",
      fileUrl: "/resumes/resume4.docx",
      viewUrl: "/Resumes/resume4",
    },
    {
      id: 5,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.",
      imageUrl: "/Resumes/resume5.png",
      fileUrl: "/resumes/resume5.docx",
      viewUrl: "/Resumes/resume5",
    },
    {
      id: 6,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.",
      imageUrl: "/Resumes/resume6.png",
      fileUrl: "/resumes/resume6.docx",
      viewUrl: "/Resumes/resume6",
    },
    {
      id: 7,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.",
      imageUrl: "/Resumes/resume7.png",
      fileUrl: "/resumes/resume7.docx",
      viewUrl: "/Resumes/resume7",
    },
    {
      id: 8,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.",
      imageUrl: "/Resumes/resume8.png",
      fileUrl: "/resumes/resume8.docx",
      viewUrl: "/Resumes/resume8",
    },
    {
      id: 9,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.",
      imageUrl: "/Resumes/resume9.png",
      fileUrl: "/resumes/resume9.docx",
      viewUrl: "/Resumes/resume9",
    },
    {
      id: 10,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.",
      imageUrl: "/Resumes/resume10.png",
      fileUrl: "/resumes/resume10.docx",
      viewUrl: "/Resumes/resume10",

    },
    {
      id: 11,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.",
      imageUrl: "/Resumes/resume8.png",
      fileUrl: "/resumes/resume8.docx",
      viewUrl: "/Resumes/resume8",

    },
    {
      id: 12,
      title: "Modern CV",
      description: "A clean and modern CV template with sleek design.",
      imageUrl: "/Resumes/resume2.png",
      fileUrl: "/resumes/resume2.docx",
      viewUrl: "/Resumes/resume2",
    },
  ];

  return (
    <div className="">
      <div className="pt-8 ">
        <h1 className="text-3xl font-bold text-center mb-8">Resume Gallery</h1>
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

