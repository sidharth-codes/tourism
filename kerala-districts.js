const districts = [
  {
    id: "thiruvananthapuram",
    name: "Thiruvananthapuram",
    tagline: "The Evergreen City of India",
    aboutParagraphs: [
      "Thiruvananthapuram, the capital of Kerala, is a city where tradition and modernity coexist harmoniously. Known for its rich cultural heritage and historical significance, the city is a major hub for political and economic activities in the state.",
      "Thiruvananthapuram is home to the iconic Sree Padmanabhaswamy Temple, a blend of Dravidian and Kerala architectural styles, attracting devotees and tourists alike. The city also boasts several museums, art galleries, and cultural centers that showcase Kerala's artistic traditions and historical artifacts.",
      "The scenic beaches of Kovalam and Varkala, with their golden sands and clear waters, are major attractions for both domestic and international tourists. The nearby hill stations, backwaters, and wildlife sanctuaries add to the city's allure, making it a versatile tourist destination."
    ],
    cultureParagraphs: [
      "The culture of Thiruvananthapuram is a rich tapestry woven from tradition, art, festivals, literature, and a deep spiritual heritage.",
      "The city's cultural identity is deeply influenced by Hindu temples, most notably the Sree Padmanabhaswamy Temple, and also respects secularism, with prominent churches, mosques, and religious sites coexisting peacefully.",
      "Thiruvananthapuram has long been a cradle for classical music and dance, famous for its patronage of Carnatic music, Kathakali, Mohiniyattam, and Koodiyattam, and hosts the International Film Festival of Kerala (IFFK)."
    ],
    places: [
      { name: "Kovalam Beach", image: "images/kovalam.jpg", desc: "Famous beach known for its crescent-shaped coastline and lighthouse views." },
      { name: "Padmanabhaswamy Temple", image: "images/padmanabhaswamy.jpg", desc: "Historic temple with Dravidian architecture." },
      { name: "Napier Museum", image: "images/napier.jpg", desc: "Museum with a unique architectural style and a collection of historical artifacts." },
      { name: "Shankumugham Beach", image: "images/shankumugham.jpg", desc: "A tranquil beach popular for sunsets and sculptures." },
      { name: "Ponmudi", image: "images/ponmudi.jpg", desc: "A scenic hill station with winding pathways and lush greenery." },
      { name: "Agasthyakoodam", image: "images/agasthyakoodam.jpg", desc: "A prominent peak in the Western Ghats, ideal for trekking and nature lovers." }
    ]
  },
  {
    id: "kollam",
    name: "Kollam",
    tagline: "Gateway to the Backwaters",
    aboutParagraphs: [
      "Kollam, historically known as Quilon, is a coastal city in the state of Kerala, India. It is located on the southwest coast of the Indian peninsula, along the Ashtamudi Lake and the Arabian Sea. As the administrative capital of Kollam district, the city is known for its rich heritage, strategic trade history, scenic beauty, and harmonious social fabric.",
      "One of the oldest port cities in India, Kollam has played a crucial role in India’s international trade for over 2,000 years. The city had active trade links with Romans, Chinese, Arabs, and Europeans. Marco Polo, the famous Venetian traveler, mentioned Kollam as one of the most flourishing cities he visited in the 13th century.",
      "Today, Kollam is well known for its cashew industry, coir manufacturing, fishing, and a growing tourism sector. It serves as the southern gateway to the Kerala backwaters, attracting visitors to explore houseboat cruises and the tranquil beauty of Ashtamudi Lake."
    ],
    cultureParagraphs: [
      "Kollam’s culture is a vibrant blend of tradition, diversity, and coexistence, rooted in centuries of trade, spirituality, and art. It reflects the essence of Kerala’s broader cultural identity, while retaining unique regional characteristics. The city is home to people of various faiths—Hindus, Muslims, Christians, and others—who have lived together peacefully for centuries. This coexistence reflects a spirit of tolerance, mutual respect, and shared heritage. Temples, churches, and mosques coexist harmoniously, such as the Sree Mahaganapathi Temple, Infant Jesus Cathedral, and Kollam Town Mosque, which all play a vital role in the community’s spiritual life.",
      "Kollam celebrates a wide variety of festivals that combine religious, seasonal, and folk traditions. Onam, the harvest festival, is marked by floral carpets, traditional feasts, and games. Unique rituals like Kottankulangara Chamayavilakku, where men dress as women in a temple procession, and Oachira Kali, a mock battle that honors martial traditions, reveal the depth of cultural expression. Art forms such as Kathakali, Mohiniyattam, Padayani, and Kuthiyottam are deeply integrated into the city’s cultural rhythm, accompanied by traditional instruments like chenda and maddalam. These traditions and performances reflect the region’s long-standing artistic heritage and spiritual devotion.",
      "Kollam’s food culture centers around rice, coconut, spices, and seafood. Dishes like Karimeen Pollichathu, Chemmeen Curry, and cashew-based sweets highlight local flavors and ingredients. Communal feasts, especially during Onam and weddings, showcase hospitality and a sense of unity. Malayalam is the primary language spoken, with English and Tamil also common due to historical trade and education influences. The city has produced many writers and scholars who have contributed significantly to Kerala’s literary and philosophical landscape. Altogether, Kollam offers a cultural experience that is deeply rooted in tradition while embracing diversity, art, faith, and natural beauty."
    ],
    places: [
      { name: "Ashtamudi Lake", image: "images/ashtamudi.jpg", desc: "Picturesque lake famous for houseboat cruises." },
      { name: "Thangassery Lighthouse", image: "images/thangassery.jpg", desc: "Historic lighthouse offering panoramic sea views." },
      { name: "Palaruvi Waterfalls", image: "images/palaruvi.jpg", desc: "A beautiful waterfall surrounded by lush forests." },
      { name: "Jatayu Earth's Center", image: "images/jatayu.jpg", desc: "A rock-themed park with the world's largest bird sculpture." },
      { name: "Thenmala", image: "images/thenmala.jpg", desc: "India's first planned eco-tourism destination." },
      { name: "Munroe Island", image: "images/munroe.jpg", desc: "A cluster of islands famous for canal cruises and village life." }
    ]
  },
  {
    id: "pathanamthitta",
    name: "Pathanamthitta",
    tagline: "Pilgrim’s Paradise",
    aboutParagraphs: [
      "Pathanamthitta is a serene district located in the southern part of the Indian state of Kerala. Known as the “Headquarters of Pilgrimage Tourism,” it is home to the world-famous Sabarimala Temple, one of the largest annual pilgrimages in the world. The name Pathanamthitta is derived from the Malayalam words “Pathanam” meaning a cluster of houses and “Thitta” meaning riverside, symbolizing its identity as a riverside settlement.",
      "The district was officially formed in 1982 and shares its borders with Kollam, Alappuzha, Kottayam, and Idukki districts, along with the neighboring state of Tamil Nadu. It is characterized by a peaceful coexistence of religious harmony, spiritual traditions, and a lifestyle closely tied to nature. With its sacred groves and spiritual centers, Pathanamthitta has earned a reputation for cultural depth and religious significance that draws millions of pilgrims and visitors every year.",
      "Pathanamthitta’s landscape is defined by lush forests, flowing rivers, green hills, and vast rubber plantations. Important rivers like the Achankovil, Manimala, and Pamba pass through the district, enriching both its agriculture and spiritual life. The region includes three major geographical zones — the highlands with dense forests and wildlife sanctuaries, the midlands rich in plantations of rubber and spices, and the lowlands with fertile river valleys. This varied terrain contributes to the district’s ecological richness and scenic beauty."
    ],
    cultureParagraphs: [
      "The culture of Pathanamthitta is deeply spiritual, environmentally conscious, and closely tied to the traditions of Hindu temples, Christian churches, and local folklore. It is a land of pilgrimages, rituals, festivals, and artistic heritage. The Sabarimala Temple, located in the Periyar Tiger Reserve and dedicated to Lord Ayyappa, attracts millions of devotees each year during the Mandala-Makaravilakku season. The spiritual journey involves a forest trek, 41 days of austerity, and devotional chanting. Another important shrine is the Aranmula Parthasarathy Temple, famous for its association with the Aranmula Boat Race and the handcrafted Aranmula Kannadi. Alongside these, ancient churches and mosques stand as symbols of the district’s religious harmony and diversity.",
      "Pathanamthitta is alive with festivals and traditional performances that reflect its deep cultural roots. The Aranmula Boat Race, held during Onam, is not just a race but a sacred ritual where beautifully decorated snake boats move in sync to traditional vanchipattu. The Maramon Convention, one of Asia’s largest Christian gatherings, takes place annually on the Pamba riverbanks. The Makara Jyothi, a celestial light seen during the Sabarimala season, symbolizes divine presence. Traditional art forms such as Padayani, performed with vivid masks and powerful drumming, and Margam Kali, a graceful dance by Syrian Christian women, highlight the region’s unique blend of spirituality and artistry. Local performances like Thullal, Kathakali, and Ottamthullal continue to thrive in temple festivals.",
      "Pathanamthitta’s lifestyle is rooted in agriculture and sustainability. People cultivate rubber, banana, tapioca, coconut, and spices, leading a rural life centered on community and nature. Handicrafts such as the GI-tagged Aranmula Kannadi reflect the district’s rich artistic legacy. Education is highly valued here, with institutions like Christian College in Chengannur, Mar Thoma College in Thiruvalla, and regional centers of Mahatma Gandhi University contributing to the district’s high literacy rate. Embracing eco-conscious living, spirituality, and communal unity, Pathanamthitta is more than a district—it is Kerala’s spiritual and cultural heart. From sacred forests to rhythmic boat races, its essence lies in its peaceful harmony of faith, art, and tradition."
    ],
    places: [
      { name: "Sabarimala Temple", image: "images/sabarimala.jpg", desc: "Renowned pilgrimage center in the Western Ghats." },
      { name: "Aranmula Parthasarathy Temple", image: "images/aranmula.jpg", desc: "Ancient temple famous for the Aranmula Boat Race." },
      { name: "Konni Elephant Training Center", image: "images/konni.jpg", desc: "Famous for elephant training and forest adventures." },
      { name: "Perunthenaruvi Waterfalls", image: "images/perunthenaruvi.jpg", desc: "A scenic waterfall ideal for picnics and photography." },
      { name: "Gavi", image: "images/gavi.jpg", desc: "Eco-tourism spot known for wildlife and trekking." },
      { name: "Pandalam Palace", image: "images/pandalam.jpg", desc: "Historic palace associated with Lord Ayyappa." }
    ]
  },
  {
    id: "alappuzha",
    name: "Alappuzha",
    tagline: "Venice of the East",
    aboutParagraphs: [
      "Alappuzha is known for its picturesque backwaters and houseboats...",
      "The Nehru Trophy Boat Race is a major event celebrated with great enthusiasm...",
      "Alappuzha's coir industry and scenic beaches make it a popular destination."
    ],
    cultureParagraphs: [
      "Famous for the Nehru Trophy Boat Race and vibrant Onam celebrations.",
      "Alappuzha has a rich tradition of coir weaving and handicrafts.",
      "The district's culture is also marked by its unique cuisine and folk arts."
    ],
    places: [
      { name: "Alappuzha Backwaters", image: "images/alappuzha.jpg", desc: "Famous for houseboat cruises and scenic beauty." },
      { name: "Marari Beach", image: "images/marari.jpg", desc: "Tranquil beach ideal for relaxation." },
      { name: "Pathiramanal Island", image: "images/pathiramanal.jpg", desc: "A small island on Vembanad Lake, great for birdwatching." },
      { name: "Krishnapuram Palace", image: "images/krishnapuram.jpg", desc: "Historic palace with mural paintings and museum." },
      { name: "Ambalapuzha Sree Krishna Temple", image: "images/ambalapuzha.jpg", desc: "Famous for its delicious 'palpayasam' and architecture." },
      { name: "Kuttanad", image: "images/kuttanad.jpg", desc: "Known as the 'Rice Bowl of Kerala', with scenic paddy fields." }
    ]
  },
  {
    id: "kottayam",
    name: "Kottayam",
    tagline: "Land of Letters, Lakes, and Latex",
    aboutParagraphs: [
      "Kottayam is a hub of education, rubber plantations, and scenic lakes...",
      "The district is known for its literary heritage and vibrant festivals...",
      "Vembanad Lake and Kumarakom Bird Sanctuary are major attractions."
    ],
    cultureParagraphs: [
      "Known for its literary heritage, churches, and traditional festivals.",
      "Kottayam has a significant Christian population, and its churches are famous for their architecture and festivals.",
      "The district is also known for its contributions to Malayalam literature and education."
    ],
    places: [
      { name: "Vembanad Lake", image: "images/vembanad.jpg", desc: "Largest lake in Kerala, known for bird watching." },
      { name: "Kumarakom Bird Sanctuary", image: "images/kumarakom.jpg", desc: "Sanctuary with a variety of migratory birds." },
      { name: "Illikkal Kallu", image: "images/illikkal.jpg", desc: "A majestic rock formation with panoramic views." },
      { name: "St. Mary's Church, Manarcad", image: "images/manarcad.jpg", desc: "Ancient church famous for its annual feast." },
      { name: "Vaikom Mahadeva Temple", image: "images/vaikom.jpg", desc: "One of the oldest and most revered Shiva temples." },
      { name: "Poonjar Palace", image: "images/poonjar.jpg", desc: "A historic palace with royal antiques and artifacts." }
    ]
  },
  {
    id: "idukki",
    name: "Idukki",
    tagline: "The Spice Garden of Kerala",
    aboutParagraphs: [
      "Idukki is a mountainous district famous for its wildlife sanctuaries and tea gardens...",
      "The Idukki Arch Dam and Munnar hill station are iconic landmarks...",
      "Home to tribal communities and unique hill traditions."
    ],
    cultureParagraphs: [
      "Home to tribal communities and unique hill traditions.",
      "Idukki's culture is closely tied to its natural surroundings and agricultural practices.",
      "The district is known for its spice plantations, especially cardamom and pepper."
    ],
    places: [
      { name: "Munnar", image: "images/munnar.jpg", desc: "Hill station famous for tea plantations." },
      { name: "Idukki Arch Dam", image: "images/idukki.jpg", desc: "Asia's first and largest arch dam." },
      { name: "Thekkady", image: "images/thekkady.jpg", desc: "Famous for Periyar Wildlife Sanctuary and boating." },
      { name: "Ramakkalmedu", image: "images/ramakkalmedu.jpg", desc: "A windy hilltop with panoramic views." },
      { name: "Anamudi Peak", image: "images/anamudi.jpg", desc: "The highest peak in South India." },
      { name: "Eravikulam National Park", image: "images/eravikulam.jpg", desc: "Home to the endangered Nilgiri Tahr." }
    ]
  },
  {
    id: "ernakulam",
    name: "Ernakulam",
    tagline: "Queen of the Arabian Sea",
    aboutParagraphs: [
      "Ernakulam is the commercial capital of Kerala, blending modernity with heritage...",
      "Fort Kochi and Jew Town reflect the district's multicultural history...",
      "Marine Drive and Cherai Beach are popular spots for locals and tourists."
    ],
    cultureParagraphs: [
      "A melting pot of cultures, with historic temples, churches, and synagogues.",
      "Ernakulam is known for its vibrant arts scene, including Kathakali and Mohiniyattam.",
      "The district also has a rich tradition of seafood cuisine and boat races."
    ],
    places: [
      { name: "Fort Kochi", image: "images/ernakulam.jpg", desc: "Historic area with colonial architecture." },
      { name: "Cherai Beach", image: "images/cherai.jpg", desc: "Popular beach with golden sands." },
      { name: "Jew Town & Synagogue", image: "images/jewtown.jpg", desc: "Historic area with antique shops and a 16th-century synagogue." },
      { name: "Marine Drive", image: "images/marinedrive.jpg", desc: "A scenic promenade along the backwaters." },
      { name: "Hill Palace Museum", image: "images/hillpalace.jpg", desc: "Kerala's largest archaeological museum." },
      { name: "Bolgatty Palace", image: "images/bolgatty.jpg", desc: "A heritage hotel on Bolgatty Island." }
    ]
  },
  {
    id: "thrissur",
    name: "Thrissur",
    tagline: "Cultural Capital of Kerala",
    aboutParagraphs: [
      "Thrissur is famous for its Pooram festival and vibrant cultural scene...",
      "The district is known for classical arts, literature, and grand festivals...",
      "Historic temples and Kerala Kalamandalam add to its cultural richness."
    ],
    cultureParagraphs: [
      "Known for classical arts, literature, and grand festivals.",
      "Thrissur is often referred to as the 'Cultural Capital of Kerala' for its rich heritage.",
      "The district hosts the famous Thrissur Pooram, a spectacular temple festival."
    ],
    places: [
      { name: "Vadakkunnathan Temple", image: "images/thrissur.jpg", desc: "Ancient Shiva temple and UNESCO site." },
      { name: "Athirappilly Waterfalls", image: "images/athirappilly.jpg", desc: "Largest waterfall in Kerala, known as the Niagara of India." },
      { name: "Guruvayur Temple", image: "images/guruvayur.jpg", desc: "One of the most important Krishna temples in India." },
      { name: "Chavakkad Beach", image: "images/chavakkad.jpg", desc: "A serene beach near Guruvayur." },
      { name: "Punnathur Kotta", image: "images/punnathur.jpg", desc: "Elephant sanctuary housing temple elephants." },
      { name: "Kerala Kalamandalam", image: "images/kalamandalam.jpg", desc: "Renowned center for learning classical arts." }
    ]
  },
  {
    id: "palakkad",
    name: "Palakkad",
    tagline: "Gateway of Kerala",
    aboutParagraphs: [
      "Palakkad is known for its paddy fields, Palakkad Gap, and historic forts...",
      "Silent Valley National Park is a biodiversity hotspot...",
      "The district is rich in folk music, dance, and traditional festivals."
    ],
    cultureParagraphs: [
      "Rich in folk music, dance, and traditional festivals.",
      "Palakkad has a unique tradition of 'Koodiyattam', a form of Sanskrit theatre.",
      "The district is also known for its classical music, especially 'Sopanam' and 'Panchavadyam'."
    ],
    places: [
      { name: "Palakkad Fort", image: "images/palakkad.jpg", desc: "Well-preserved fort built by Hyder Ali." },
      { name: "Silent Valley National Park", image: "images/silent_valley.jpg", desc: "Biodiversity hotspot with rare flora and fauna." },
      { name: "Malampuzha Dam & Gardens", image: "images/malampuzha.jpg", desc: "Popular picnic spot with gardens and ropeway." },
      { name: "Parambikulam Tiger Reserve", image: "images/parambikulam.jpg", desc: "Wildlife sanctuary with tigers and elephants." },
      { name: "Nelliyampathy Hills", image: "images/nelliyampathy.jpg", desc: "Hill station with tea and coffee plantations." },
      { name: "Dhoni Waterfalls", image: "images/dhoni.jpg", desc: "A scenic waterfall near Palakkad town." }
    ]
  },
  {
    id: "malappuram",
    name: "Malappuram",
    tagline: "Land of Hills and Valleys",
    aboutParagraphs: [
      "Malappuram is noted for its rolling hills, rivers, and cultural diversity...",
      "The district is famous for Mappila arts, literature, and religious harmony...",
      "Kottakkunnu and Nilambur Teak Museum are popular attractions."
    ],
    cultureParagraphs: [
      "Famous for Mappila arts, literature, and religious harmony.",
      "Malappuram has a rich tradition of 'Mappila Songs' and 'Kolkkali' dance.",
      "The district is also known for its historic mosques and temples."
    ],
    places: [
      { name: "Kottakkunnu", image: "images/malappuram.jpg", desc: "Hill garden with panoramic views." },
      { name: "Nilambur Teak Museum", image: "images/teak_museum.jpg", desc: "Museum dedicated to the history of teak." },
      { name: "Kadalundi Bird Sanctuary", image: "images/kadalundi.jpg", desc: "Sanctuary for migratory birds." },
      { name: "Thirunavaya Temple", image: "images/thirunavaya.jpg", desc: "Ancient temple on the banks of Bharathapuzha." },
      { name: "Angadipuram Temple", image: "images/angadipuram.jpg", desc: "Famous for the Thirumandhamkunnu Bhagavathy Temple." },
      { name: "Adyanpara Waterfalls", image: "images/adyanpara.jpg", desc: "A beautiful waterfall in the Nilambur region." }
    ]
  },
  {
    id: "kozhikode",
    name: "Kozhikode",
    tagline: "City of Spices",
    aboutParagraphs: [
      "Kozhikode is a historic port city known for its spice trade and beaches...",
      "The city is renowned for its cuisine, music, and festivals...",
      "Kappad Beach and Mananchira Square are must-visit places."
    ],
    cultureParagraphs: [
      "Renowned for its cuisine, music, and festivals.",
      "Kozhikode is famous for 'Kozhikode Biriyani', a culinary delight.",
      "The city also has a vibrant tradition of arts, including 'Mappila Songs' and 'Theyyaam'."
    ],
    places: [
      { name: "Kappad Beach", image: "images/kozhikode.jpg", desc: "Historic beach where Vasco da Gama landed." },
      { name: "Mananchira Square", image: "images/mananchira.jpg", desc: "Urban park with a historic pond." },
      { name: "Beypore Beach", image: "images/beypore.jpg", desc: "Famous for shipbuilding and beautiful sunsets." },
      { name: "Thusharagiri Waterfalls", image: "images/thusharagiri.jpg", desc: "A series of waterfalls in the Western Ghats." },
      { name: "Tali Temple", image: "images/tali.jpg", desc: "Ancient temple in the heart of Kozhikode." },
      { name: "Kozhikode Beach", image: "images/kozhikode_beach.jpg", desc: "Popular beach with a lively atmosphere." }
    ]
  },
  {
    id: "wayanad",
    name: "Wayanad",
    tagline: "Green Paradise",
    aboutParagraphs: [
      "Wayanad is a hill district with forests, wildlife, and tribal heritage...",
      "The district is home to indigenous tribes and unique folk traditions...",
      "Edakkal Caves and Banasura Sagar Dam are major attractions."
    ],
    cultureParagraphs: [
      "Home to indigenous tribes and unique folk traditions.",
      "Wayanad has a rich tradition of tribal arts, dance, and music.",
      "The district is also known for its spice plantations and eco-tourism initiatives."
    ],
    places: [
      { name: "Edakkal Caves", image: "images/wayanad.jpg", desc: "Caves with ancient petroglyphs." },
      { name: "Banasura Sagar Dam", image: "images/banasura.jpg", desc: "Largest earthen dam in India." },
      { name: "Pookode Lake", image: "images/pookode.jpg", desc: "Freshwater lake surrounded by forests." },
      { name: "Chembra Peak", image: "images/chembra.jpg", desc: "Popular trekking destination with a heart-shaped lake." },
      { name: "Wayanad Wildlife Sanctuary", image: "images/wayanad_sanctuary.jpg", desc: "Sanctuary with elephants, tigers, and more." },
      { name: "Soochipara Falls", image: "images/soochipara.jpg", desc: "A three-tiered waterfall amidst dense forest." }
    ]
  },
  {
    id: "kannur",
    name: "Kannur",
    tagline: "Land of Looms and Lores",
    aboutParagraphs: [
      "Kannur is famous for its handloom industry, beaches, and Theyyam rituals...",
      "The district is known for Theyyam, folk arts, and colonial history...",
      "St. Angelo Fort and Muzhappilangad Drive-in Beach are highlights."
    ],
    cultureParagraphs: [
      "Known for Theyyam, folk arts, and colonial history.",
      "Kannur has a vibrant tradition of handloom weaving, producing fine textiles.",
      "The district is also famous for its historic forts and cultural festivals."
    ],
    places: [
      { name: "St. Angelo Fort", image: "images/kannur.jpg", desc: "Historic fort overlooking the Arabian Sea." },
      { name: "Payyambalam Beach", image: "images/payyambalam.jpg", desc: "Popular beach for picnics and sunsets." },
      { name: "Muzhappilangad Drive-in Beach", image: "images/muzhappilangad.jpg", desc: "India's longest drive-in beach." },
      { name: "Parassinikkadavu Temple", image: "images/parassini.jpg", desc: "Famous Muthappan temple on the banks of Valapattanam river." },
      { name: "Arakkal Museum", image: "images/arakkal.jpg", desc: "Museum dedicated to the only Muslim royal family of Kerala." },
      { name: "Dharmadam Island", image: "images/dharmadam.jpg", desc: "A small island accessible during low tide." }
    ]
  },
  {
    id: "kasaragod",
    name: "Kasaragod",
    tagline: "Land of Gods and Forts",
    aboutParagraphs: [
      "Kasaragod is known for its forts, beaches, and linguistic diversity...",
      "The district is rich in temple festivals, Yakshagana, and multicultural traditions...",
      "Bekal Fort and Ranipuram are popular tourist destinations."
    ],
    cultureParagraphs: [
      "Rich in temple festivals, Yakshagana, and multicultural traditions.",
      "Kasaragod has a unique tradition of Yakshagana, a form of dance-drama.",
      "The district is also known for its historic forts and diverse religious practices."
    ],
    places: [
      { name: "Bekal Fort", image: "images/kasargod.jpg", desc: "Largest fort in Kerala with sea views." },
      { name: "Chandragiri Fort", image: "images/chandragiri.jpg", desc: "Riverside fort with scenic surroundings." },
      { name: "Ananthapura Lake Temple", image: "images/ananthapura.jpg", desc: "Unique temple situated in the middle of a lake." },
      { name: "Ranipuram", image: "images/ranipuram.jpg", desc: "Hill station known as the 'Ooty of Kerala'." },
      { name: "Kappil Beach", image: "images/kappil.jpg", desc: "A serene beach with backwaters and coconut groves." },
      { name: "Madhur Temple", image: "images/madhur.jpg", desc: "Famous Ganapathi temple with unique architecture." }
    ]
  }
];

// Logic to load district details
(function () {
  const params = new URLSearchParams(window.location.search);
  const districtId = params.get('id');
  let district = districts.find(d => d.id === districtId) || districts[0];

  document.getElementById('dname').innerHTML = `<strong>${district.name}</strong>`;
  document.getElementById('dtagline').textContent = district.tagline || '';
  document.getElementById('dabout').textContent = `About ${district.name}`;
  document.getElementById('dinfo').innerHTML = 
    (district.aboutParagraphs && Array.isArray(district.aboutParagraphs))
      ? district.aboutParagraphs.map(p => `<p>${p}</p>`).join('')
      : (district.about ? `<p>${district.about}</p>` : '');
  document.getElementById('dculture').textContent = `Culture of ${district.name}`;
  document.getElementById('dcult').innerHTML = 
    (district.cultureParagraphs && Array.isArray(district.cultureParagraphs))
      ? district.cultureParagraphs.map(p => `<p>${p}</p>`).join('')
      : (district.culture ? `<p>${district.culture}</p>` : '');

  const placeList = document.querySelector('.places-list');
  placeList.innerHTML = "";

  if (district.places && district.places.length) {
    district.places.forEach(place => {
      const card = document.createElement('div');
      card.className = 'place-card';
      card.innerHTML = `
        <img src="${place.image}" alt="${place.name}">
        <h3>${place.name}</h3>
        <p>${place.desc}</p>
      `;
      placeList.appendChild(card);
    });
  } else {
    placeList.innerHTML = "<p>No tourist places listed for this district.</p>";
  }
})();

function showAbout(district) {
  const aboutDiv = document.getElementById('about');
  aboutDiv.innerHTML = district.aboutParagraphs
    .map(paragraph => `<p>${paragraph}</p>`)
    .join('');
}
