import { EventT } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const localEventList: EventT[] = [
  {
    id: "1",
    type: "Workshop",
    name: "Creative Writing Workshop",
    date: "10/14/2023T10:45PM",
    facilitator: "John Doe",
    cover: "https://picsum.photos/id/238/200", // Changed cover URL
    location: "Online",
    article:
      "In this workshop, you will learn the fundamentals of creative writing, including character development, plot structure, and dialogue. You will also have the opportunity to receive feedback on your own writing.",
    checked: false,
  },
  {
    id: "2", // Different ID
    type: "Languages", // Different type
    name: "Spanish Language Class", // Different name
    date: "11/02/2023T2:00PM", // Different date
    facilitator: "Maria Rodriguez", // Different facilitator
    cover: "https://picsum.photos/id/239/200", // Changed cover URL
    location: "Online", // Different location
    article:
      "Learn Spanish in a fun and interactive class. Perfect for beginners and those looking to improve their language skills.", // Different article
    checked: false,
  },
  {
    id: "3", // Different ID
    type: "Clubs", // Different type
    name: "Photography Club", // Different name
    date: "10/28/2023T6:30PM", // Different date
    facilitator: "Sarah Johnson", // Different facilitator
    cover: "https://picsum.photos/id/240/200", // Changed cover URL
    location: "Local Community Center", // Different location
    article:
      "Join our photography club to meet fellow http://localhost:3000/event/(https://picsum.photos/196)enthusiasts and capture the beauty of the world through your lens.", // Different article
    checked: false,
  },
  {
    id: "4", // Different ID
    type: "Courses", // Different type
    name: "Web Development Course", // Different name
    date: "11/15/2023T7:00PM", // Different date
    facilitator: "Emily Smith", // Different facilitator
    cover: "https://picsum.photos/id/241/200", // Changed cover URL
    location: "Online", // Different location
    article:
      "Learn the essentials of web development, including HTML, CSS, and JavaScript. Start building your own websites.", // Different article
    checked: false,
  },
  {
    id: "5", // Different ID
    type: "Events", // Different type
    name: "Music Festival 2023", // Different name
    date: "12/05/2023T4:00PM", // Different date
    facilitator: "Event Team", // Different facilitator
    cover: "https://picsum.photos/id/242/200", // Changed cover URL
    location: "City Park", // Different location
    article:
      "Join us for a day of live music, food, and fun at Music Festival 2023. It's a celebration you don't want to miss!", // Different article
    checked: false,
  },
  {
    id: "6", // Different ID
    type: "Languages", // Different type
    name: "French Conversation Class", // Different name
    date: "11/10/2023T3:30PM", // Different date
    facilitator: "Isabelle Martin", // Different facilitator
    cover: "https://picsum.photos/id/243/200", // Changed cover URL
    location: "Online", // Different location
    article:
      "Practice your French language skills with native speakers. Join our conversation class and improve your fluency.", // Different article
    checked: false,
  },
  {
    id: "7", // Different ID
    type: "Clubs", // Different type
    name: "Book Club", // Different name
    date: "11/08/2023T7:00PM", // Different date
    facilitator: "Laura Anderson", // Different facilitator
    cover: "https://picsum.photos/id/244/200", // Changed cover URL
    location: "Local Library", // Different location
    article:
      "Join our book club and dive into fascinating books and engaging discussions with fellow book lovers.", // Different article
    checked: false,
  },
  {
    id: "8", // Different ID
    type: "Courses", // Different type
    name: "Digital Marketing Workshop", // Different name
    date: "11/20/2023T10:00AM", // Different date
    facilitator: "Alex Turner", // Different facilitator
    cover: "https://picsum.photos/id/281/200", // Changed cover URL
    location: "Online", // Different location
    article:
      "Learn the strategies and tactics of digital marketing to grow your online presence and boost your business.", // Different article
    checked: false,
  },
  {
    id: "9", // Different ID
    type: "Events", // Different type
    name: "Science Fair 2023", // Different name
    date: "12/10/2023T9:00AM", // Different date
    facilitator: "Event Team", // Different facilitator
    cover: "https://picsum.photos/id/280/200", // Changed cover URL
    location: "City Convention Center", // Different location
    article:
      "Explore the fascinating world of science at Science Fair 2023. Discover new innovations and experiments.", // Different article
    checked: false,
  },
  {
    id: "10", // Different ID
    type: "Workshop", // Different type
    name: "Photography Workshop", // Different name
    date: "10/30/2023T1:30PM", // Different date
    facilitator: "Sarah Johnson", // Different facilitator
    cover: "https://picsum.photos/id/247/200", // Changed cover URL
    location: "Local Photography Studio", // Different location
    article:
      "Join our photography workshop to enhance your photography skills and learn the art of capturing moments.", // Different article
    checked: false,
  },
  {
    id: "11", // Different ID
    type: "Clubs", // Different type
    name: "Chess Club", // Different name
    date: "11/05/2023T6:00PM", // Different date
    facilitator: "David Patel", // Different facilitator
    cover: "https://picsum.photos/id/248/200", // Changed cover URL
    location: "Local Community Center", // Different location
    article:
      "Join our chess club and challenge your strategic thinking skills in a friendly and competitive environment.", // Different article
    checked: false,
  },
  {
    id: "12", // Different ID
    type: "Courses", // Different type
    name: "Graphic Design Course", // Different name
    date: "11/22/2023T2:30PM", // Different date
    facilitator: "Olivia Baker", // Different facilitator
    cover: "https://picsum.photos/id/249/200", // Changed cover URL
    location: "Online", // Different location
    article:
      "Learn the principles of graphic design, including typography, color theory, and layout, and create stunning visual content.", // Different article
    checked: false,
  },
  {
    id: "13", // Different ID
    type: "Events", // Different type
    name: "Food Festival 2023", // Different name
    date: "12/15/2023T5:00PM", // Different date
    facilitator: "Event Team", // Different facilitator
    cover: "https://picsum.photos/id/250/200", // Changed cover URL
    location: "City Square", // Different location
    article:
      "Savor the flavors of the world at Food Festival 2023. Enjoy delicious cuisines, live cooking demos, and more.", // Different article
    checked: false,
  },
  {
    id: "14", // Different ID
    type: "Workshop", // Different type
    name: "Yoga and Meditation Workshop", // Different name
    date: "10/31/2023T9:30AM", // Different date
    facilitator: "Mia Campbell", // Different facilitator
    cover: "https://picsum.photos/id/251/200", // Changed cover URL
    location: "Wellness Center", // Different location
    article:
      "Relax your mind and body with our yoga and meditation workshop. Find inner peace and balance.", // Different article
    checked: false,
  },
  {
    id: "15", // Different ID
    type: "Languages", // Different type
    name: "Japanese Language Class", // Different name
    date: "11/12/2023T4:30PM", // Different date
    facilitator: "Yuki Nakamura", // Different facilitator
    cover: "https://picsum.photos/id/252/200", // Changed cover URL
    location: "Online", // Different location
    article:
      "Learn the Japanese language and explore the culture in our interactive language class.", // Different article
    checked: false,
  },
  {
    id: "16", // Different ID
    type: "Clubs", // Different type
    name: "Hiking Club", // Different name
    date: "11/19/2023T8:00AM", // Different date
    facilitator: "Mark Taylor", // Different facilitator
    cover: "https://picsum.photos/id/253/200", // Changed cover URL
    location: "Various Trails", // Different location
    article:
      "Join our hiking club and explore the great outdoors with like-minded adventurers.", // Different article
    checked: false,
  },
  {
    id: "17", // Different ID
    type: "Courses", // Different type
    name: "Cooking Masterclass", // Different name
    date: "11/25/2023T6:00PM", // Different date
    facilitator: "Chef Sophia", // Different facilitator
    cover: "https://picsum.photos/id/254/200", // Changed cover URL
    location: "Culinary Institute", // Different location
    article:
      "Enhance your culinary skills with our cooking masterclass and prepare restaurant-quality dishes.", // Different article
    checked: false,
  },
  {
    id: "18", // Different ID
    type: "Events", // Different type
    name: "Art Exhibition 2023", // Different name
    date: "12/20/2023T10:00AM", // Different date
    facilitator: "Event Team", // Different facilitator
    cover: "https://picsum.photos/id/255/200", // Changed cover URL
    location: "City Art Gallery", // Different location
    article:
      "Immerse yourself in the world of art at Art Exhibition 2023. View stunning artworks from local and international artists.", // Different article
    checked: false,
  },
  {
    id: "19", // Different ID
    type: "Workshop", // Different type
    name: "Digital Photography Workshop", // Different name
    date: "11/02/2023T3:00PM", // Different date
    facilitator: "Liam Parker", // Different facilitator
    cover: "https://picsum.photos/id/256/200", // Changed cover URL
    location: "Photography Studio", // Different location
    article:
      "Explore the art of digital photography and enhance your skills in capturing stunning photographs.", // Different article
    checked: false,
  },
];

interface EventsState {
  events: EventT[];
}

const initialState: EventsState = {
  events: localEventList,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    populate: (state, action: PayloadAction<{ events: EventT[] }>) => {
      state.events = action.payload.events;
    },
  },
});

export const { populate } = eventsSlice.actions;


