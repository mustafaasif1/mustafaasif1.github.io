import React from 'react';
import Slider from './slider';

const Testimonials = () => {
  const testimonialsData = [
    {
      quote:
        "Mustafa's exceptional skills in front-end development were instrumental in the success of our restaurant management application project. His dedication, analytical mindset, and attention to detail were evident in every task he undertook. His collaborative spirit and effective communication greatly enhanced our team dynamics, resulting in positive outcomes.",
      author: 'Serhat Nas',
      authorImage: '/assets/images/photos/team/serhat.jpeg',
      position: 'Co-founder at ease',
      companyImage: '/assets/images/logos/companies/ease.png',
    },
    {
      quote:
        "I've worked with Mustafa on group projects for 2 courses and the senior year project, which is essentially 16 months of collaborative work. I found Mustafa to be a very competent and driven team mate. Aside from working himself, he is able to make others around him work as well, which was a trait especially visible in the HCI group where he took lead with delegation of work.",
      author: 'Omer Shakeel',
      authorImage: '/assets/images/photos/team/omer.jpeg',
      position: 'Software Engineer at Intellia',
      companyImage: '/assets/images/logos/companies/intellia.jpeg',
    },
    {
      quote:
        'It was a real pleasure to work with Mustafa. He proved to be a great and reliable teammate, supporting each other with our tasks, allowing us to bring the project with LaFamiglia to life.',
      author: 'Hamza Chaouki',
      authorImage: '/assets/images/photos/team/hamza.jpeg',
      position: 'Werkstudent IT at Giorgio Armani ',
      companyImage: '/assets/images/logos/companies/armani.jpeg',
    },
    {
      quote:
        'It was a great pleasure working together with Mustafa. He was super dedicated and had fantastic ideas. In the project we worked on together, he made some major contributions on the client side and was able to solve several challenges we were struggling with on the server side. All the best to you!',
      author: 'Julian Kretzschmar',
      authorImage: '/assets/images/photos/team/julian.jpeg',
      position: 'Research Assistant at Universitätsklinikum Bonn',
      companyImage: '/assets/images/logos/companies/ukb.jpeg',
    },
    {
      quote:
        "I had the pleasure of working with and managing Mustafa, and he was fantastic to have on the team. He's super quick to pick things up and always paid close attention to the details, which made a big difference in our work. You could always count on him to deliver, and the whole team appreciated that reliability. Mustafa's got great potential and I wish him all the best.",
      author: 'Fahad Ashraf',
      authorImage: '/assets/images/photos/team/fahad.jpeg',
      position: 'Lead Software Engineer at EPAM Systems',
      companyImage: '/assets/images/logos/companies/epam_systems.jpeg',
    },
    {
      quote:
        "I had the pleasure of collaborating with Mustafa at Ease, where we worked closely on integrating backend and frontend components for a restaurant OS project. His expertise in ReactJS and web development was evident throughout our collaboration, ensuring seamless communication and efficient problem-solving. Mustafa's relaxed manner and sense of humor added to the positive team dynamics, making it a pleasure to work alongside him. I would eagerly recommend him and look forward to the opportunity to work together again in the future.",
      author: 'Tom Böttger',
      authorImage: '/assets/images/photos/team/tom.jpeg',
      position: 'Software Engineer at Allianz Technology',
      companyImage: '/assets/images/logos/companies/allianz.jpeg',
    },
  ];

  return <Slider testimonials={testimonialsData} />;
};

export default Testimonials;
