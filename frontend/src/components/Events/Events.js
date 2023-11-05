// import img1 from "../assets/yoga.jpg";
// import img2 from "../assets/Meditation.jpg";
// import img3 from "../assets/Pregnancy.jpg";
// import img4 from "../assets/nature-walk.jpeg";
// import img5 from "../assets/music.jpg";
// import img6 from "../assets/garbh.jpg";
// import img7 from "../assets/zoo.jpg";
import img8 from "../../assets/hiking.png";

const Events = [
  {
    Id: 1,
    Image: img8,
    Title: "Hiking Adventure",
    Date: "11-15-2023",
    Day: "Saturday, November 15th",
    Location: "Smoky Mountains, Tennessee",
    Time: "8:00 am",
    Info: "Join us for an exciting hiking adventure in the beautiful Smoky Mountains. Join hiking adventure in the beautiful Smoky Mountains.",
    Description:
      "Join us for an unforgettable hiking adventure in the majestic Smoky Mountains. Immerse yourself in nature's beauty as we explore lush forests, trek past cascading waterfalls, and soak in the breathtaking vistas of the Smoky Mountains. Our expert guides will lead you through well-maintained trails, ensuring a safe and exhilarating experience for hikers of all levels. Whether you're a seasoned hiker or new to the trails, this adventure promises a rejuvenating connection with the great outdoors. Grab your hiking gear and join us on this journey to discover the heart of nature.Join us for an unforgettable hiking adventure in the majestic Smoky Mountains. Immerse yourself in nature's beauty as we explore lush forests, trek past cascading waterfalls, and soak in the breathtaking vistas of the Smoky Mountains. Our expert guides will lead you through well-maintained trails, ensuring a safe and exhilarating experience for hikers of all levels. Whether you're a seasoned hiker or new to the trails, this adventure promises a rejuvenating connection with the great outdoors. Grab your hiking gear and join us on this journey to discover the heart of nature.",
    Duration: "4",
    Creator: "NatureExplorers",
    profile: "https://example.com/nature-explorers.jpg",
  },
  {
    Id: 2,
    Image: "https://www.awarenessdays.com/wp-content/uploads/2018/12/Carl-Garner.jpg",
    Title: "Community Cleanup Day",
    Date: "09-28-2023",
    Day: "Saturday, September 28th",
    Location: "City Park, New York",
    Time: "9:30 am",
    Info: "Help us make our city cleaner and greener. Learn about the latest in tech and innovation.Help us make our city cleaner and greener.",
    Description:
      "Make a positive impact on your community by joining our Community Cleanup Day at City Park in New York. As a volunteer, you'll have the chance to roll up your sleeves and contribute to a cleaner, greener, and more vibrant city. With eco-friendly practices and a shared commitment to environmental stewardship, we aim to create a cleaner urban oasis. From picking up litter to planting trees, every effort counts in making our city a better place for everyone. Join us and be part of the change you want to see.Make a positive impact on your community by joining our Community Cleanup Day at City Park in New York. As a volunteer, you'll have the chance to roll up your sleeves and contribute to a cleaner, greener, and more vibrant city. With eco-friendly practices and a shared commitment to environmental stewardship, we aim to create a cleaner urban oasis. From picking up litter to planting trees, every effort counts in making our city a better place for everyone. Join us and be part of the change you want to see.",
    Duration: "6",
    Creator: "GreenInitiative",
    profile: "https://example.com/green-initiative.jpg",
  },
  {
    Id: 3,
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwEC7vLkOYMwGeHDkUYSKd0QzAZZuUQT5BGxK0QmqmMRTSZRzg36XenKPrVISYOImtNGk&usqp=CAU",
    Title: "Green Living Expo",
    Date: "08-25-2023",
    Day: "Thursday, August 25th",
    Location: "GreenTech Center, San Francisco",
    Time: "9:00 am",
    Info: "Explore sustainable living practices and eco-friendly innovations. Explore useful and also sustainable and eco-friendly innovations.",
    Description: "Dive into the world of sustainability at the Green Living Expo, a one-of-a-kind event that focuses on environmentally friendly practices and innovations. This expo brings together eco-conscious businesses, experts, and enthusiasts to showcase the latest in green technology, renewable energy, organic agriculture, and eco-friendly products. Whether you're interested in reducing your carbon footprint, learning about sustainable farming, or exploring green technology, this event is your opportunity to connect with like-minded individuals and discover practical ways to make a positive impact on the environment. Join us and be part of the green living revolution.Dive into the world of sustainability at the Green Living Expo, a one-of-a-kind event that focuses on environmentally friendly practices and innovations. This expo brings together eco-conscious businesses, experts, and enthusiasts to showcase the latest in green technology, renewable energy, organic agriculture, and eco-friendly products. Whether you're interested in reducing your carbon footprint, learning about sustainable farming, or exploring green technology, this event is your opportunity to connect with like-minded individuals and discover practical ways to make a positive impact on the environment. Join us and be part of the green living revolution.",
    Duration: "5",
    Creator: "EcoAlliance",
    profile: "https://example.com/eco-alliance.jpg"
  }
  ,
  {
    Id: 4,
    Image: "https://clubrunner.blob.core.windows.net/00000060070/Images/food-drive-thorold.jpg",
    Title: "Annual Food Drive",
    Date: "12-20-2023",
    Day: "Wednesday, December 20th",
    Location: "Community Center, Chicago",
    Time: "10:00 am",
    Info: "Help us collect food for those in need. Learn about the latest in tech and innovation.Help us collect food for those in need.",
    Description:
      "Spread warmth and kindness this holiday season by participating in our Annual Food Drive for the Homeless. The event takes place at the Community Center in Chicago, and your contributions will help us provide nourishing meals to those in need. As winter approaches, your support can make a significant difference in the lives of the homeless. Join us and give the gift of sustenance and hope to those less fortunate.Spread warmth and kindness this holiday season by participating in our Annual Food Drive for the Homeless. The event takes place at the Community Center in Chicago, and your contributions will help us provide nourishing meals to those in need. As winter approaches, your support can make a significant difference in the lives of the homeless. Join us and give the gift of sustenance and hope to those less fortunate.Spread warmth and kindness this holiday season by participating in our Annual Food Drive for the Homeless. The event takes place at the Community Center in Chicago, and your contributions will help us provide nourishing meals to those in need. As winter approaches, your support can make a significant difference in the lives of the homeless. Join us and give the gift of sustenance and hope to those less fortunate.",
    Duration: "4",
    Creator: "HelpingHands",
    profile: "https://example.com/helping-hands.jpg",
  },
  {
    Id: 5,
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRDL98jcLYSuFq0CUPomiNP_UidrJU92DIBEXFHWNcqv67rqaHYNs8E2PnLx4Z1KIb-g&usqp=CAU",
    Title: "Local Artists' Showcase",
    Date: "07-05-2023",
    Day: "Wednesday, July 5th",
    Location: "City Art Gallery, Los Angeles",
    Time: "6:30 pm",
    Info: "Explore the creativity of local artists. Learn about the latest in tech and innovation.Explore the creativity of local artists.",
    Description:
      "Immerse yourself in the world of art at the Local Artists' Showcase in the City Art Gallery of Los Angeles. This exhibition is a celebration of creativity and a testament to the talent of local artists. Explore a diverse range of artistic expressions, from stunning paintings to captivating sculptures. Every piece tells a unique story and invites you to appreciate the beauty of human imagination. Join us for a night of artistic wonder and be inspired by the boundless creativity of our local art community.Immerse yourself in the world of art at the Local Artists' Showcase in the City Art Gallery of Los Angeles. This exhibition is a celebration of creativity and a testament to the talent of local artists. Explore a diverse range of artistic expressions, from stunning paintings to captivating sculptures. Every piece tells a unique story and invites you to appreciate the beauty of human imagination. Join us for a night of artistic wonder and be inspired by the boundless creativity of our local art community.Immerse yourself in the world of art at the Local Artists' Showcase in the City Art Gallery of Los Angeles. This exhibition is a celebration of creativity and a testament to the talent of local artists. Explore a diverse range of artistic expressions, from stunning paintings to captivating sculptures. Every piece tells a unique story and invites you to appreciate the beauty of human imagination. Join us for a night of artistic wonder and be inspired by the boundless creativity of our local art community.",
    Duration: "3",
    Creator: "ArtEnthusiasts",
    profile: "https://example.com/art-enthusiasts.jpg",
  },
  {
    Id: 6,
    Image: "https://www.classy.org/wp-content/uploads/2015/03/10922102676_96513508b4_k-1224x612-1-1224x612.jpg",
    Title: "Annual Charity Fun Run",
    Date: "10-10-2023",
    Day: "Saturday, October 10th",
    Location: "City Park, Dallas",
    Time: "7:00 am",
    Info: "Run for a cause and make a difference. Learn about the latest in tech and innovation.Run for a cause and make a difference.",
    Description:
      "Lace up your running shoes and be part of our Annual Charity Fun Run in City Park, Dallas. This event isn't just about breaking personal records; it's about breaking barriers and making a difference. By participating, you're helping us raise funds for local charities that are working tirelessly to support the less fortunate. Whether you're a seasoned runner or just looking for a fun way to contribute to a good cause, this event is your opportunity to do something meaningful while staying active and healthy.Lace up your running shoes and be part of our Annual Charity Fun Run in City Park, Dallas. This event isn't just about breaking personal records; it's about breaking barriers and making a difference. By participating, you're helping us raise funds for local charities that are working tirelessly to support the less fortunate. Whether you're a seasoned runner or just looking for a fun way to contribute to a good cause, this event is your opportunity to do something meaningful while staying active and healthy.Lace up your running shoes and be part of our Annual Charity Fun Run in City Park, Dallas. This event isn't just about breaking personal records; it's about breaking barriers and making a difference. By participating, you're helping us raise funds for local charities that are working tirelessly to support the less fortunate. Whether you're a seasoned runner or just looking for a fun way to contribute to a good cause, this event is your opportunity to do something meaningful while staying active and healthy.",
    Duration: "2",
    Creator: "RunForACause",
    profile: "https://example.com/run-for-a-cause.jpg",
  },
  {
    Id: 7,
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8RctNjsUDPM-4oXWaECE9cXgZFPG0X38jI4rV5JFIYD7Omo8S_fVgQsdYfv5peiDcrY&usqp=CAU",
    Title: "Tech & Innovation Workshop",
    Date: "09-10-2023",
    Day: "Sunday, September 10th",
    Location: "Innovation Center, Austin",
    Time: "1:00 pm",
    Info: "Learn about the latest in tech and innovation.Join on environmental sustainability.Learn about the latest in tech and innovation.",
    Description:
      "Stay on the cutting edge of technology at our Tech and Innovation Workshop in the Innovation Center of Austin. Dive deep into the latest trends, innovations, and breakthroughs in the tech world. Connect with industry experts and like-minded enthusiasts to explore the future of technology. Whether you're a tech enthusiast, a professional in the field, or simply curious about the technological advancements that shape our world, this workshop is a valuable opportunity to learn, network, and be inspired.Stay on the cutting edge of technology at our Tech and Innovation Workshop in the Innovation Center of Austin. Dive deep into the latest trends, innovations, and breakthroughs in the tech world. Connect with industry experts and like-minded enthusiasts to explore the future of technology. Whether you're a tech enthusiast, a professional in the field, or simply curious about the technological advancements that shape our world, this workshop is a valuable opportunity to learn, network, and be inspired.Stay on the cutting edge of technology at our Tech and Innovation Workshop in the Innovation Center of Austin. Dive deep into the latest trends, innovations, and breakthroughs in the tech world. Connect with industry experts and like-minded enthusiasts to explore the future of technology. Whether you're a tech enthusiast, a professional in the field, or simply curious about the technological advancements that shape our world, this workshop is a valuable opportunity to learn, network, and be inspired.",
    Duration: "5",
    Creator: "TechInnovators",
    profile: "https://example.com/tech-innovators.jpg",
  },
  {
    Id: 8,
    Image: "https://youmatter.world/app/uploads/sites/2/2019/01/sustainable-development-world-conference-history.jpg",
    Title: "Environmental Conference",
    Date: "11-28-2023",
    Day: "Tuesday, November 28th",
    Location: "Convention Center, Miami",
    Time: "9:00 am",
    Info: "Join the conversation on environmental sustainability.Learn about the and innovation.Join the conversation on environment.",
    Description:
      "Join us in Miami for the Global Environmental Conference, where the world's foremost experts and leaders convene to address pressing environmental challenges and discuss sustainable solutions. This conference serves as a platform for critical conversations on climate change, conservation, and sustainability. Gain insights from renowned speakers, collaborate with fellow attendees, and explore innovative ideas that are shaping the future of our planet. Together, we can make a positive impact on the environment and secure a more sustainable future for generations to come.Join us in Miami for the Global Environmental Conference, where the world's foremost experts and leaders convene to address pressing environmental challenges and discuss sustainable solutions. This conference serves as a platform for critical conversations on climate change, conservation, and sustainability. Gain insights from renowned speakers, collaborate with fellow attendees, and explore innovative ideas that are shaping the future of our planet. Together, we can make a positive impact on the environment and secure a more sustainable future for generations to come.Join us in Miami for the Global Environmental Conference, where the world's foremost experts and leaders convene to address pressing environmental challenges and discuss sustainable solutions. This conference serves as a platform for critical conversations on climate change, conservation, and sustainability. Gain insights from renowned speakers, collaborate with fellow attendees, and explore innovative ideas that are shaping the future of our planet. Together, we can make a positive impact on the environment and secure a more sustainable future for generations to come.",
    Duration: "2",
    Creator: "EcoAlliance",
    profile: "https://templates.hibootstrap.com/nedo/default/assets/img/author/author-4.jpg",
  },
];

export default Events;
