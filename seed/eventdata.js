import { faker } from '@faker-js/faker';


const staticEvents = [
  {
    title: "Hackathon Mania",
    description: "Join us for a hands-on experience and showcase your skills.",
    category: "webinar",
    date: new Date("2025-05-12"),
    time: "11:00",
    venue: "IGDTUW Auditorium",
    genre: "Cultural",
    college: "igdtuw",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    registeration_link: "https://example.com/event/1",
    registration_deadline: new Date("2025-04-10"),
    createdAt: new Date()
  },
  {
    title: "Web Dev Sprint",
    description: "Be a part of a vibrant gathering of talent and energy.",
    category: "fest",
    date: new Date("2025-04-25"),
    time: "10:00",
    venue: "IGDTUW Auditorium",
    genre: "finance",
    college: "igdtuw",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
    registeration_link: "https://example.com/event/2",
    registration_deadline: new Date("2025-04-11"),
    createdAt: new Date()
  },
  {
    title: "Code Carnival",
    description: "Challenge your coding skills with peers.",
    category: "competition",
    date: new Date("2025-05-02"),
    time: "13:00",
    venue: "IGDTUW Auditorium",
    genre: "tech",
    college: "igdtuw",
    image: "https://thedailytexan.com/wp-content/uploads/2019/09/coding_2019-09-14_Terminal_Coding_Competition_Joshua.Guenther13782-900x600.jpg",
    registeration_link: "https://example.com/event/3",
    registration_deadline: new Date("2025-04-20"),
    createdAt: new Date()
  },
  {
    title: "MUN Fiesta",
    description: "Debate and diplomacy in action!",
    category: "mun/debate",
    date: new Date("2025-05-05"),
    time: "09:00",
    venue: "IGDTUW Auditorium",
    genre: "drama",
    college: "igdtuw",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    registeration_link: "https://example.com/event/4",
    registration_deadline: new Date("2025-04-22"),
    createdAt: new Date()
  },
  {
    title: "ArtFusion",
    description: "Showcase your artistic vibes through modern expression.",
    category: "fest",
    date: new Date("2025-05-08"),
    time: "15:00",
    venue: "IGDTUW Auditorium",
    genre: "art",
    college: "igdtuw",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    registeration_link: "https://example.com/event/5",
    registration_deadline: new Date("2025-04-28"),
    createdAt: new Date()
  },
  {
    title: "Cultural Fiesta",
    description: "A celebration of traditions, music, and more!",
    category: "fest",
    date: new Date("2025-04-30"),
    time: "12:00",
    venue: "IGDTUW Auditorium",
    genre: "Cultural",
    college: "igdtuw",
    image: "https://images.wanderon.in/blogs/new/2024/09/grub-fest.jpg",
    registeration_link: "https://example.com/event/6",
    registration_deadline: new Date("2025-04-20"),
    createdAt: new Date()
  },
  {
    title: "Sports League",
    description: "Compete in various thrilling sports activities.",
    category: "competition",
    date: new Date("2025-05-03"),
    time: "14:00",
    venue: "IGDTUW Auditorium",
    genre: "sports",
    college: "igdtuw",
    image: "https://images.unsplash.com/photo-1605106702842-05ee5a5a2c7b",
    registeration_link: "https://example.com/event/7",
    registration_deadline: new Date("2025-04-25"),
    createdAt: new Date()
  },
  {
    title: "Theatre Night",
    description: "An evening of drama, lights, and action!",
    category: "fest",
    date: new Date("2025-05-10"),
    time: "18:00",
    venue: "IGDTUW Auditorium",
    genre: "theatre",
    college: "igdtuw",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
    registeration_link: "https://example.com/event/8",
    registration_deadline: new Date("2025-04-29"),
    createdAt: new Date()
  },
  {
    title: "Finance Bootcamp",
    description: "Learn real-world finance from top experts.",
    category: "webinar",
    date: new Date("2025-05-15"),
    time: "16:00",
    venue: "IGDTUW Auditorium",
    genre: "finance",
    college: "igdtuw",
    image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e",
    registeration_link: "https://example.com/event/9",
    registration_deadline: new Date("2025-04-30"),
    createdAt: new Date()
  },
  {
    title: "Tech Talks 2025",
    description: "Delve into the future of technology.",
    category: "webinar",
    date: new Date("2025-05-20"),
    time: "17:00",
    venue: "IGDTUW Auditorium",
    genre: "tech",
    college: "igdtuw",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    registeration_link: "https://example.com/event/10",
    registration_deadline: new Date("2025-05-01"),
    createdAt: new Date()
  }
];

const categories = ["Hackathon", "webinar", "fest", "mun/debate", "competition"];
const genres = ["Cultural", "sports", "art", "theatre", "drama", "finance", "tech"];
const imageUrls = [
  "https://images.wanderon.in/blogs/new/2024/09/grub-fest.jpg",
  "https://images.unsplash.com/photo-1581092917730-87d94dd4c3a2",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  "https://images.unsplash.com/photo-1605106702842-05ee5a5a2c7b",
  "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
  "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e",
  "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
];



const generateRandomEvents = (count = 40) => {
  const randomEvents = [];

  for (let i = 0; i < count; i++) {
    const category = faker.helpers.arrayElement(categories);
    const genre = faker.helpers.arrayElement(genres);
    const date = faker.date.future();
    const deadline = faker.date.between({ from: new Date(), to: date });
    const image = faker.helpers.arrayElement(imageUrls);
    const title = `${faker.word.adjective()} ${category} ${genre}`;
    const description = faker.company.catchPhrase();

    randomEvents.push({
      title,
      description,
      category,
      date,
      time: faker.number.int({ min: 9, max: 18 }) + ":00",
      venue: "IGDTUW Auditorium",
      genre,
      college: "igdtuw",
      image,
      registeration_link: `https://example.com/event/${i + 11}`,
      registration_deadline: deadline,
      createdAt: new Date()
    });
  }

  return randomEvents;
};

const allEvents = [...staticEvents, ...generateRandomEvents(40)];

export default allEvents;
