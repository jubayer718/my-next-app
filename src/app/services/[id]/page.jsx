import React from 'react';

const ServiceDetailsPage = ({ params }) => {
  const id = params?.id;
  const data = [
  {
    "_id": "1",
    "service_name": "Web Development",
    "service_img": "/dev.jpg",
    "service_description": "We offer comprehensive web development services, from custom website design to full-stack development solutions tailored to your business needs."
  },
  {
    "_id": "2",
    "service_name": "Graphic Design",
    "service_img": "/IT.jpg",
    "service_description": "Our graphic design team creates visually engaging designs for branding, marketing, and digital media, ensuring your message stands out."
  },
  {
    "_id": "3",
    "service_name": "SEO Optimization",
    "service_img": "/IT.jpg",
    "service_description": "We specialize in SEO strategies that improve your website's visibility, drive organic traffic, and enhance your search engine rankings."
  },
  {
    "_id": "4",
    "service_name": "Mobile App Development",
    "service_img": "/IT.jpg",
    "service_description": "Our mobile app development team builds intuitive and user-friendly apps for iOS and Android, helping you engage customers on the go."
  },
  {
    "_id": "5",
    "service_name": "Digital Marketing",
    "service_img": "/IT.jpg",
    "service_description": "We provide digital marketing strategies across social media, email marketing, and paid ads to boost your brand's online presence and drive conversions."
  }
]
  const singleData = data.find(d => d._id == id);
  if (singleData) {
    
    return (
      <div className='min-h-screen'>
        <p>Service Details Page</p>
        <p>ID:{id}</p>
        <img className='w-[500px] mx-auto' src={ singleData.service_img} alt="" />
        <h2>{ singleData.service_name}</h2>
        <p>{ singleData.service_description}</p>
      </div>
    );
  } else {
  return <h2 className="text-3xl">Page not Found</h2>
  }
};

export default ServiceDetailsPage;