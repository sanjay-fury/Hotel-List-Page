
const hotels = [
  // CHENNAI
  {
    id: 1,
    title: "The Residency",
    location: "Chennai",
    address: "49, G.N. Chetty Road, T. Nagar, Chennai - 600017",
    description: "Business hotel with comfortable rooms, restaurants, fitness facilities and convenient access to T. Nagar shopping.",
    price: 4500,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    latitude: 13.0827,
    longitude: 80.2707
  },
  {
    id: 2,
    title: "The Accord Metropolitan",
    location: "Chennai",
    address: "35, Gopathi Narayanaswami Chetty Road, T. Nagar, Chennai - 600017",
    description: "Premium city hotel with restaurants, spa, swimming pool and event facilities.",
    price: 6500,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    latitude: 13.0827,
    longitude: 80.2707
  },
  {
    id: 3,
    title: "Essentia Premier Hotel",
    location: "Chennai",
    address: "71/2, OMR, Rajiv Gandhi Salai, Thoraipakkam, Chennai - 600097",
    description: "Modern business hotel with comfortable rooms, dining and meeting facilities.",
    price: 3800,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    latitude: 13.0827,
    longitude: 80.2707
  },

  // MADURAI
  {
    id: 4,
    title: "Courtyard by Marriott",
    location: "Madurai",
    address: "168, Alagar Kovil Main Road, Madurai - 625002",
    description: "Full-service hotel with swimming pool, fitness centre, restaurants and event facilities.",
    price: 7000,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    latitude: 9.9252,
    longitude: 78.1198
  },
  {
    id: 5,
    title: "Heritage Madurai",
    location: "Madurai",
    address: "11, Melakkal Main Road, Kochadai, Madurai - 625016",
    description: "Heritage-style resort featuring landscaped gardens, swimming pool, spa and dining facilities.",
    price: 6000,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
    latitude: 9.9252,
    longitude: 78.1198
  },
  {
    id: 6,
    title: "Hotel Royal Court",
    location: "Madurai",
    address: "4, W Veli Street, Opposite Railway Station, Madurai - 625001",
    description: "City hotel with comfortable rooms, buffet restaurant and banquet facilities.",
    price: 3500,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    latitude: 9.9252,
    longitude: 78.1198
  },

  // ERODE
  {
    id: 7,
    title: "Hotel Merilin",
    location: "Erode",
    address: "Brough Road, Old Savitha Hospital Signal, Erode - 638001",
    description: "City hotel offering air-conditioned rooms, restaurant and convenient access to railway and shopping areas.",
    price: 1800,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
    latitude: 11.3410,
    longitude: 77.7172
  },
  {
    id: 8,
    title: "Hotel PRM Aruna Archadia",
    location: "Erode",
    address: "453, EVN Road, Near Railway Station, Erode - 638001",
    description: "Comfortable accommodation with restaurant, parking, Wi-Fi and convenient railway station access.",
    price: 2200,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
    latitude: 11.3410,
    longitude: 77.7172
  },
  {
    id: 9,
    title: "Hotel Balaji Classic",
    location: "Erode",
    address: "69-70, VCTV Road, Erode",
    description: "Locally listed hotel accommodation on VCTV Road in Erode.",
    price: 1500,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    latitude: 11.3410,
    longitude: 77.7172
  },

  // KARUR
  {
    id: 10,
    title: "The Residency Karur",
    location: "Karur",
    address: "179, Coimbatore Road, Alwin Nagar, Karur - 639002",
    description: "Business hotel offering comfortable rooms, restaurants, spa and banquet facilities.",
    price: 4000,
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800",
    latitude: 10.9601,
    longitude: 78.0766
  },
  {
    id: 11,
    title: "Hotel Hemala",
    location: "Karur",
    address: "9, Police Line Street, Karur - 639001",
    description: "City hotel with accommodation, restaurant, banquet and business facilities.",
    price: 2800,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
    latitude: 10.9601,
    longitude: 78.0766
  },
  {
    id: 12,
    title: "KVR Hotels",
    location: "Karur",
    address: "123, Jawahar Bazaar, Near Bus Stand, Karur - 639001",
    description: "Local hotel accommodation near Karur bus stand and the commercial area.",
    price: 1700,
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800",
    latitude: 10.9601,
    longitude: 78.0766
  },

  // SALEM
  {
    id: 13,
    title: "Radisson Hotel Salem",
    location: "Salem",
    address: "157/3-A, Bangalore Highway, Mamangam, Salem - 636302",
    description: "Full-service hotel featuring modern rooms, restaurants, event spaces and leisure facilities.",
    price: 5500,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    latitude: 11.6643,
    longitude: 78.1460
  },
  {
    id: 14,
    title: "Zibe Salem by GRT Hotels",
    location: "Salem",
    address: "14/1, Omalur Main Road, Four Roads, Salem - 636009",
    description: "Modern city hotel with contemporary rooms and convenient access to the bus stand and commercial areas.",
    price: 3000,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    latitude: 11.6643,
    longitude: 78.1460
  },
  {
    id: 15,
    title: "CJ Pallazzio",
    location: "Salem",
    address: "201/6, Junction Main Road, Meyyanur, Salem - 636004",
    description: "Business-oriented hotel with rooms, dining, meeting and event facilities.",
    price: 3800,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    latitude: 11.6643,
    longitude: 78.1460
  },

  // TRICHY
  {
    id: 16,
    title: "Courtyard by Marriott",
    location: "Trichy",
    address: "Collectorate Office Road, Raja Colony, Trichy - 620001",
    description: "Premium hotel with modern rooms, swimming pool, fitness centre, restaurants and event facilities.",
    price: 6500,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    latitude: 10.7905,
    longitude: 78.7047
  },
  {
    id: 17,
    title: "Red Fox Hotel",
    location: "Trichy",
    address: "No. 1, Rockins Road, Cantonment, Trichy - 620001",
    description: "Contemporary city hotel with practical accommodation, dining and convenient access to railway and shopping areas.",
    price: 3000,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    latitude: 10.7905,
    longitude: 78.7047
  },
  {
    id: 18,
    title: "Hotel Tamilnadu",
    location: "Trichy",
    address: "McDonald's Road, Melapudur, Cantonment, Trichy - 620001",
    description: "Government tourism hotel offering practical accommodation near the central bus stand.",
    price: 1800,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
    latitude: 10.7905,
    longitude: 78.7047
  },

  // MANAPPARAI
  {
    id: 19,
    title: "Ravivarma Illam",
    location: "Manapparai",
    address: "104, Karikankulam Street, Gandhi Nagar, Manapparai - 621306",
    description: "Homestay-style accommodation offering a private and comfortable stay with family-friendly facilities.",
    price: 1800,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    latitude: 10.6077,
    longitude: 78.4258
  },
  {
    id: 20,
    title: "Vijay Guest House",
    location: "Manapparai",
    address: "341, Indira Nagar, Near Pillaiyar Koil Street, Manapparai - 621306",
    description: "Local guest house providing practical accommodation near the town's residential and commercial areas.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
    latitude: 10.6077,
    longitude: 78.4258
  },
  {
    id: 21,
    title: "Easwari Lodge",
    location: "Manapparai",
    address: "Park Road, Manapparai - 621306",
    description: "Local budget lodge listed in the Manapparai Municipality accommodation directory.",
    price: 1000,
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800",
    latitude: 10.6077,
    longitude: 78.4258
  }
];

export default hotels;
