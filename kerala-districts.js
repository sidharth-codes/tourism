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
      "Alappuzha, popularly known as Alleppey, is a scenic district located along the southwestern coast of Kerala, bordered by the Arabian Sea on the west and the vast Vembanad Lake on the east. It is often referred to as the “Venice of the East” because of its unique and intricate network of canals, lagoons, rivers, and backwaters, which crisscross the region and support a distinctive lifestyle centered on water. The town of Alappuzha serves as the district headquarters and is a major center for tourism, marine activities, and coir industries.",
      "What truly sets Alappuzha apart is its breathtaking backwater ecosystem, which attracts tourists from all over the world for houseboat cruises, ayurvedic retreats, and nature experiences. The Vembanad Lake, India’s longest lake, and the Punnamada Lake, where the famous Nehru Trophy Boat Race is held, make Alappuzha a focal point for inland water tourism. Another remarkable feature is the Kuttanad region, often called the “Rice Bowl of Kerala,” where agriculture is practiced below sea level, a rare phenomenon in the world.",
      "Economically, Alappuzha is known for its thriving coir industry, which employs thousands and exports mats, ropes, and other products made from coconut fiber. The district also has strong agricultural roots, especially in rice, coconut, bananas, and fish farming. With a long coastline, Alappuzha supports a large fishing community and numerous fishing harbors.Well-connected by road, rail, and water, Alappuzha offers a blend of natural beauty, rural charm, and cultural richness, making it a must-visit destination for those seeking an authentic Kerala experience."
    ],
    cultureParagraphs: [
      "The culture of Alappuzha is a vibrant reflection of its historical legacy, religious harmony, and close relationship with water and land. This district has long been a melting pot of Hindu, Christian, and Muslim traditions, and it hosts a wide variety of festivals, rituals, folk arts, and community events throughout the year. The people of Alappuzha are known for their hospitality, simplicity, and strong sense of cultural identity. Religious coexistence is evident in the peaceful presence of temples, mosques, and churches such as the Ambalappuzha Sri Krishna Temple, Arthunkal Basilica, and Mullakkal Mosque, which serve as active centers of faith and celebration.",
      "One of the most iconic cultural events in Alappuzha is the Nehru Trophy Boat Race, held annually on the second Saturday of August in the backwaters of Punnamada Lake. Featuring the grand Chundan Vallams rowed by hundreds of oarsmen to the rhythm of Vanchipattu, the event blends sport with ritual. Other boat races and Onam festivities — including Pookalam, Onasadya, Thiruvathirakali, and Pulikali — reflect the region’s deep-rooted festive spirit. Classical and folk arts such as Kathakali, Mohiniyattam, Ottan Thullal, and Velakali are actively performed during temple festivals and cultural programs. The district also carries a strong legacy of coir craftsmanship, where skilled artisans, especially women, continue traditional weaving practices that contribute to the local economy and heritage.",
      "Christianity holds a significant place in Alappuzha’s cultural fabric, with the Arthunkal Basilica drawing lakhs of pilgrims each year during its feast. Alongside Hindu temples and Islamic mosques, it represents the inclusive and secular spirit of the district. Alappuzha is also notable for its role in literature, politics, and social reform. It was among the first regions in Kerala to adopt communist ideologies and has a lasting legacy in labor rights, education, and progressive movements. The district has produced several revolutionary leaders, writers, and poets who shaped Kerala’s intellectual and cultural direction. Blending the serenity of its backwaters with the energy of festivals and reform, Alappuzha remains one of the most culturally dynamic and inspiring districts of Kerala."
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
      "Kottayam, often called the “Land of Letters, Latex, and Lakes,” is a beautiful and historically significant district in Kerala, nestled between the Western Ghats and the Vembanad Lake. It holds the proud distinction of being the first district in India to achieve 100% literacy, underscoring its deep-rooted emphasis on education and intellectual progress. The district is home to renowned institutions such as CMS College, one of India’s oldest, and Mahatma Gandhi University. Its seminaries and publishing houses have contributed significantly to Kerala’s literary, religious, and journalistic traditions, earning it the nickname “Akshara Nagari” or City of Letters.",
      "The geography of Kottayam blends lush hills, expansive rubber plantations, tranquil backwaters, and bustling town centers. The district plays a leading role in Kerala’s rubber industry, with plantations forming a core part of its economy. In addition, Kottayam is a major hub for printing and publishing, continuing its literary legacy in modern forms. The Meenachil, Manimala, and Pamba rivers flow through its fertile lands, supporting agriculture and rural livelihoods, while also contributing to the district’s scenic charm.",
      "Kottayam serves as a gateway to both natural and spiritual experiences, offering easy access to the serene backwaters of Kumarakom and the misty hills of Vagamon. Its peaceful environment, coupled with economic stability and educational achievements, makes it a vibrant district where tradition meets progress. The region balances spiritual heritage with modern aspirations, welcoming visitors to experience its calm lakes, rich culture, and the warm hospitality of its people."
    ],
    cultureParagraphs: [
      "The culture of Kottayam is deeply rooted in education, literature, religion, and social reform. As a district that played a central role in Kerala’s literary and political awakening, Kottayam has a rich cultural heritage shaped by printing, publishing, classical arts, and diverse religious traditions. One of the most defining aspects of Kottayam’s cultural history is its pivotal role in Kerala’s printing revolution. The first Malayalam printing press was established here in the early 19th century by Christian missionaries, which paved the way for the development of Malayalam literature and journalism. Prestigious publications like Malayala Manorama and Deepika were born in Kottayam, reinforcing its identity as Kerala’s publishing capital.",
      "Religiously, Kottayam reflects diversity and peaceful coexistence. It is home to a strong Syrian Christian presence, with historic churches like the Valiyapalli and Cheriapalli that stand out for their ancient architecture and intricate murals. Alongside these, Hindu temples such as the Thirunakkara Mahadeva Temple, known for its grand festivals, and various mosques also contribute to the region’s spiritual and communal harmony. In the sphere of performing arts, Kottayam supports both classical and folk traditions. Cultural centers and educational institutions regularly host performances of Kathakali, Bharatanatyam, and Mohiniyattam. Folk dances like Margamkali and Parichamuttukali are also kept alive, especially within Christian communities.",
      "Kottayam has long been a hub for social reform, especially in areas of education, women's empowerment, and upliftment of marginalized groups. The district has produced many reformers, writers, and leaders who have played a key role in shaping Kerala’s progressive outlook. Its commitment to intellectual growth is visible in events like the annual flower show, literary festivals, and book fairs, which attract people from across the state. Altogether, Kottayam’s culture is a harmonious blend of academic excellence, religious harmony, artistic expression, and social consciousness, making it one of the most enlightened and inspiring districts of Kerala."
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
      "Idukki is a mountainous and forest-rich district located in the Western Ghats of Kerala. Known for its breathtaking landscapes, lush greenery, and cool climate, Idukki is one of the most nature-blessed districts in the state. It is home to Kerala’s highest peak, Anamudi, and encompasses vast stretches of evergreen forests, rivers, waterfalls, and wildlife sanctuaries. With its sparse population and high-range geography, the district is ideal for eco-tourism and plays an important role in nature conservation efforts.",
      "A standout feature of Idukki is the Idukki Arch Dam, one of the highest arch dams in Asia, built across the Periyar River. This dam and its hydroelectric project are crucial in powering the state and form a key part of Idukki’s identity. The district is also home to famous hill stations like Munnar and Thekkady, which draw thousands of visitors annually for their scenic tea gardens, spice plantations, and wildlife experiences in the Periyar Tiger Reserve. These places have made Idukki a central destination for tourism that combines both natural beauty and sustainable development.",
      "Agriculture is a major livelihood in Idukki, with extensive cultivation of cardamom, tea, coffee, pepper, and other spices, earning it the title of Kerala’s spice hub. The hilly terrain supports a unique agrarian economy, while tribal communities contribute significantly to the cultural and economic life of the region. With its blend of natural resources, power generation, and agricultural strength, Idukki stands out as Kerala’s green powerhouse — a district where nature, livelihood, and conservation thrive in harmony."
    ],
    cultureParagraphs: [
      "The culture of Idukki is uniquely shaped by its geographical isolation, tribal heritage, and agrarian lifestyle. Unlike the coastal and midland regions of Kerala, Idukki’s culture is more rural and closely tied to the hills and forests. The district is home to several indigenous tribal communities, including the Muthuvans, Mannans, Malayarayans, and Ooralis, who have preserved their languages, customs, and traditional ways of life for generations. Their deep connection with the natural world is reflected in their daily life, beliefs, and sustainable practices.",
      "Festivals in Idukki reflect a blend of tribal customs and mainstream religious traditions. Tribal communities celebrate nature-based festivals with rituals involving music, dance, and offerings to forest spirits and ancestors, while Hindu and Christian festivals like Onam, Vishu, and Christmas are widely celebrated with a local touch. The region is rich in oral traditions, folk songs, and tribal dances. The Muthuvan community is known for their vibrant attire and ceremonial group dances. Handcrafted items made from bamboo, cane, and forest wood showcase the region’s skilled craftsmanship and eco-friendly way of life.",
      "Idukki’s rugged terrain and relative isolation have helped preserve its authentic culture, largely untouched by rapid urbanization. However, with the rise of tourism in areas like Munnar, Vagamon, and Thekkady, the district is slowly embracing modern influences. Cultural programs are being curated for visitors, and there is growing awareness about ecological preservation and heritage protection. Idukki today stands as a mosaic of tribal diversity, agricultural tradition, and religious harmony, offering a culturally rich and environmentally sensitive identity that sets it apart within Kerala."
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
      "Ernakulam, often regarded as the commercial capital of Kerala, is a dynamic district that successfully blends urban sophistication with cultural heritage. Located along the central coast of Kerala, it is home to Kochi (Cochin), one of India’s leading port cities and a thriving hub for trade, tourism, and technology. With world-class infrastructure, including an international airport, a modern metro system, and well-developed IT parks, Ernakulam leads the state in economic development and modernization.",
      "The district’s geography is richly varied, consisting of serene backwaters, scenic islands, flowing rivers, sandy beaches, and a vibrant cityscape. Bordered by the Arabian Sea, its intricate network of waterways once supported flourishing trade with Arab, Chinese, Dutch, Portuguese, and British merchants. This historical interaction gave rise to Kochi’s cosmopolitan culture, where diverse communities have coexisted peacefully for centuries, shaping the region’s unique identity.",
      "Today, Ernakulam is not just an economic hub but also a major center for education, healthcare, transportation, and media. It hosts InfoPark and SmartCity, forming one of Kerala’s most active startup and IT ecosystems. Tourist attractions like Fort Kochi, Marine Drive, Hill Palace Museum, Cherai Beach, and the Jewish Synagogue draw thousands of visitors, both domestic and international. Ernakulam's seamless blend of colonial charm and urban innovation makes it a living symbol of Kerala’s progressive and multicultural spirit."
    ],
    cultureParagraphs: [
      "The culture of Ernakulam is a vibrant blend of tradition and modernity, shaped by its rich colonial past, religious diversity, and cosmopolitan atmosphere. With centuries of trade and settlement by Portuguese, Dutch, Jewish, British, and Arab communities, the district—especially Kochi—developed a cultural identity that is both globally influenced and deeply rooted in Kerala’s heritage. This melting pot of faiths includes ancient Hindu temples like the Ernakulam Shiva Temple, historic churches such as St. Francis Church, elegant mosques, and the iconic Jewish Synagogue in Mattancherry. Together, these landmarks represent the peaceful coexistence of communities who celebrate festivals such as Onam, Vishu, Eid, Christmas, Passover, and local temple feasts with shared enthusiasm.",
      "Ernakulam is a major cultural hub, renowned for its contributions to art and literature. It proudly hosts the Kochi-Muziris Biennale, Asia’s largest contemporary art festival, which attracts global audiences and transforms the city into an open-air art gallery. The district has also nurtured renowned writers, filmmakers, musicians, and performers, while continuing to support classical traditions like Kathakali, Mohiniyattam, and Chenda Melam. Alongside these, modern expressions thrive through theatre, cinema, and experimental fusion music, making Ernakulam a space where heritage and innovation interact constantly.",
      "In daily life, the people of Ernakulam seamlessly combine cosmopolitan openness with traditional Malayali values. The district is home to a wide-ranging population—tech professionals, traders, artists, and fishermen—who coexist with mutual respect and a shared drive for progress. Its multicultural cuisine reflects this diversity, offering everything from local Kerala dishes to European, Arabic, and Jewish flavors. Ernakulam is also a beacon of progressive values, with high literacy rates, youth-led initiatives, and active platforms for social and environmental advocacy. Whether in the art-filled streets of Fort Kochi or the eco-conscious corners of the city, Ernakulam exemplifies a living culture that continues to grow without forgetting its roots."
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
      "Thrissur, often hailed as the “Cultural Capital of Kerala,” is a district steeped in history, spiritual legacy, and cultural pride. Centrally located in the state, it has played a major role in shaping Kerala’s intellectual and religious traditions. Once a part of the ancient Chera Empire, Thrissur has long been a vibrant center of Hindu, Christian, and Islamic heritage. The iconic Thekkinkadu Maidan, which encircles the ancient Vadakkumnathan Temple, stands as a symbol of this legacy. This revered Shiva temple is one of the oldest in India and continues to be a spiritual heartland of the district.",
      "Thrissur is world-famous for the Thrissur Pooram, a grand temple festival that transforms the city into a cultural spectacle. Celebrated annually at the Vadakkumnathan Temple grounds, it features a majestic parade of caparisoned elephants, traditional percussion ensembles, vibrant umbrellas, and dazzling fireworks. The Pooram exemplifies Thrissur’s deep connection to ritual, performance, and collective celebration. Beyond festivals, the district is home to Kerala Kalamandalam, the leading institution for training in classical performing arts like Kathakali and Mohiniyattam, preserving and promoting Kerala’s artistic legacy for future generations.",
      "While rooted in tradition, Thrissur is also a thriving modern center for education, commerce, and healthcare. It hosts prominent institutions such as Sree Kerala Varma College, Government Engineering College, and Amala Medical College. The district is also known for its Ayurvedic centers and its strong banking and financial presence. As the undisputed hub of Kerala’s gold trade, it attracts thousands of shoppers to its dense cluster of jewelry showrooms. With lush rivers, fertile lands, and cultural landmarks woven into its everyday life, Thrissur beautifully balances heritage and modern livelihood."
    ],
    cultureParagraphs: [
      "The culture of Thrissur is deeply interwoven with spirituality, vibrant festivals, and community participation. At its heart lies the world-renowned Thrissur Pooram, held annually at the Vadakkumnathan Temple. This grand spectacle features over 50 decorated elephants, rhythmic percussion ensembles like Panchavadyam and Chenda Melam, colorful parasols, and stunning fireworks. More than a religious event, Thrissur Pooram is a secular, inclusive celebration that brings together people of all faiths, reflecting the district's open and festive spirit.",
      "Thrissur has earned its title as Kerala’s cultural capital largely through its preservation and promotion of classical arts. Kerala Kalamandalam, located in Cheruthuruthy, is a globally recognized institution that trains students in Kathakali, Mohiniyattam, Koodiyattam, and Ottanthullal—art forms that blend spirituality, storytelling, and performance. The district also houses the Kerala Sahitya Akademi and the Kerala Sangeetha Nataka Akademi, which continue to foster excellence in literature and performing arts, making Thrissur a cradle for both traditional and contemporary creativity.",
      "Thrissur’s cultural life is enriched by religious harmony and active civic participation. Alongside ancient temples, the district is home to notable Christian and Muslim landmarks such as the Our Lady of Lourdes Cathedral, Puthanpally Church, and the Cheraman Juma Masjid in nearby Kodungallur. These sites reflect centuries of peaceful coexistence and cultural exchange. Thrissur’s people are known for their deep involvement in cultural events, temple committees, and support for local artists, making it a district where tradition and public engagement keep cultural heritage alive and thriving."
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
      "Palakkad, often called the “Gateway of Kerala,” is a district defined by its expansive plains, fertile valleys, and the historic Palakkad Gap—a natural mountain pass that connects Kerala with Tamil Nadu. This unique geographical feature has made Palakkad a vital corridor for trade, migration, and cultural exchange for centuries. With vast stretches of paddy fields, rivers, and coconut groves, the district is famously known as the 'granary of Kerala,' and remains one of the state’s most agriculturally productive regions.",
      "Steeped in history, Palakkad houses the grand Palakkad Fort, built by Hyder Ali in the 18th century, which stands as a prominent reminder of the district’s strategic importance. Nature lovers are drawn to the region’s green hills and protected forests, most notably the Silent Valley National Park—one of India’s most treasured biodiversity hotspots. The park shelters numerous rare and endangered species and represents Palakkad’s commitment to ecological preservation.",
      "Beyond its rural charm, Palakkad contributes richly to Kerala’s cultural and intellectual landscape. It is home to several esteemed educational institutions and has a strong tradition in classical music, having nurtured many celebrated Carnatic musicians over the decades. The district’s peaceful rhythm of life, rooted in farming, folk traditions, and musical heritage, continues to influence Kerala’s identity in both subtle and significant ways."
    ],
    cultureParagraphs: [
      "Palakkad’s culture is shaped by a deep blend of Malayali and Tamil influences, owing to its close geographical and historical connection with Tamil Nadu. This cultural fusion is especially visible in local architecture, dialects, cuisine, and religious practices. The Agraharams—rows of traditional Brahmin houses—are iconic to Palakkad and are home to the Tamil Brahmin (Iyer) community, known for their mastery of Carnatic music, Vedic rituals, and Sanskrit scholarship. This environment has given rise to legendary artists like Chembai Vaidyanatha Bhagavathar and mridangam maestro Palakkad Mani Iyer, making the district a cradle of classical music in South India.",
      "Festivals in Palakkad are a colorful mix of Malayali and Tamil customs. Alongside Kerala’s Onam and Vishu, celebrations like Navaratri and Margazhi Utsavams bring a strong Tamil spiritual tone to the district. Temple festivals often include processions, traditional percussion, and rituals like Vela, Bhagavathi Theyyam, and chariot pulling. The region is equally rich in folk traditions, with rituals like Poothan and Thira, Kalamezhuthu, and Padayani performed in rural temples. Places like Kalpathy Heritage Village and Ottapalam serve as cultural hubs, preserving and promoting these deeply rooted practices.",
      "Palakkad’s cultural spirit thrives on simplicity, hospitality, and a strong sense of identity. The people remain closely connected to their agricultural roots while embracing education, literature, and performance arts. In recent times, there has been a rise in literary circles, drama troupes, and cultural tourism initiatives that showcase the district’s unique blend of classical and folk traditions. Whether through a morning concert in an Agraharam or a vibrant village festival, Palakkad continues to embody a distinct and graceful cultural presence in Kerala."
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
      "Malappuram, which means “land atop the hills,” is a picturesque district in northern Kerala, blessed with rolling hills, fertile valleys, and scenic rivers. Nestled between the Western Ghats and the Arabian Sea, its diverse terrain supports both agriculture and natural biodiversity. This unique location not only contributes to the district’s natural charm but also influences its cultural and economic life, blending hill landscapes with coastal traditions.",
      "Steeped in history, Malappuram played a key role in Kerala’s political movements. It was once an important center under the Zamorin Kingdom of Kozhikode and later became notable for its role in the Mappila uprisings and the Khilafat Movement during colonial rule. These events have left a lasting legacy visible in local forts, mosques, and memorials, making Malappuram a historically significant district in Kerala’s freedom struggle and communal history.",
      "In recent years, Malappuram has emerged as one of Kerala’s fastest-growing districts, known for its achievements in education, sports, and healthcare. It houses renowned institutions like the University of Calicut and the AMU Malappuram Centre, and boasts a passionate football culture. Despite rapid urbanization, the district maintains its rural warmth, cultural vibrancy, and a strong sense of communal harmony, representing a perfect blend of tradition and progress."
    ],
    cultureParagraphs: [
      "Malappuram’s cultural identity is strongly shaped by its vibrant Muslim heritage, most notably the Mappila culture—a unique fusion of Arab and Malayali traditions. One of its most cherished contributions is Mappila Paattu, poetic folk songs written in Arabi-Malayalam, expressing themes of love, devotion, and social resistance. Another striking element is Oppana, a graceful dance form performed by Muslim women during weddings, along with rhythmic art forms like Duff Muttu and Kolkkali, which add liveliness to community events and festive occasions.",
      "Despite its dominant Muslim population, Malappuram exemplifies religious harmony through its celebration of Hindu and Christian traditions as well. Hindu temples host vibrant festivals like Poorams, Thiruvathira, and Vishu, drawing large crowds and community participation. Temples such as the Thirunavaya Navamukunda Temple and Triprangode Temple serve as important spiritual centers. This inclusive spirit has helped shape a district where faiths co-exist peacefully, enriching the region's collective cultural fabric.",
      "The district also has a strong legacy in martial arts, especially Kalaripayattu, and is famously known as the football capital of Kerala, where local matches draw massive, passionate crowds. Malappuram is also home to a thriving literary scene, with renowned authors and poets contributing to Malayalam literature. From traditional art forms to sporting excellence and intellectual pursuits, Malappuram is a district where cultural pride, community engagement, and modern expression flourish side by side."
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
      "Kozhikode, formerly known as Calicut, is a historically significant coastal city in northern Kerala that once served as the capital of the powerful Zamorin dynasty. A major center for spice trade, especially black pepper, Kozhikode was renowned for its bustling port that welcomed traders from Arabia, China, and Europe. The district gained global prominence when Vasco da Gama landed here in 1498, marking the beginning of European maritime exploration in India and altering global trade routes forever.",
      "The city’s commercial legacy continues today with vibrant spice markets, traditional handloom industries, and wood carving crafts. Kozhikode has grown into a modern hub for education, healthcare, and technology, with premier institutions like IIM Kozhikode, NIT Calicut, and Calicut University contributing to its reputation. At the same time, it is known for its thriving urban culture, marked by active literary circles, tech parks, and progressive civic infrastructure",
      "Kozhikode is just as famous for its rich Malabar cuisine as it is for its trade history. Signature dishes like biriyani, banana chips, and the iconic Kozhikode Halwa make the district a food lover’s paradise. Beyond its urban buzz, Kozhikode is blessed with serene beaches, rolling hills, and proximity to the Wayanad Ghats—offering a perfect blend of nature, tradition, and contemporary living."
    ],
    cultureParagraphs: [
      "Kozhikode has long been a cradle of literature and music, producing iconic writers like S.K. Pottekkatt and Vaikom Muhammad Basheer, who enriched Malayalam storytelling with depth and local flavor. The city also holds a unique place in music history thanks to M.S. Baburaj, who introduced Ghazal-style Hindustani melodies into Malayalam, creating a lasting musical tradition. Cultural spaces like Mathrubhumi, public libraries, and academies continue to fuel the city’s creative and intellectual pursuits.",
      "The cultural identity of Kozhikode reflects a vibrant fusion of Hindu, Muslim, and Christian traditions. Folk arts like Oppana, Duff Muttu, and Mappila Paattu showcase the rich heritage of the Malabar Muslim community. Simultaneously, temple festivals such as those at the Tali Shiva Temple, and dramatic performances like Thirayattam, contribute to the spiritual and festive life of the region. Kozhikode is a model of communal harmony, where different faiths and traditions thrive together.",
      "Kozhikode’s cuisine is legendary across Kerala. Signature dishes like Malabar Biryani, Kozhi Nirachathu, Kalummakkaya preparations, and sweets from Sweet Meat Street (Mittai Theruvu) have become cultural emblems. The Kozhikodan dialect itself is loved for its humor and charm, reflecting the people’s famed hospitality, secular spirit, and conversational culture. Whether it’s food, stories, or music, Kozhikode offers an experience that is both deeply rooted and warmly welcoming."
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
      "Wayanad, perched in the Western Ghats, is famed for its lush forests, misty hills, waterfalls, and biodiversity. As the only Kerala district sharing borders with Karnataka and Tamil Nadu, it occupies a unique ecological and strategic position. The district houses treasures like Wayanad Wildlife Sanctuary, part of the Nilgiri Biosphere Reserve, making it a hub for eco-tourism, trekking, and wildlife conservation.",
      "Though officially formed in 1980, Wayanad's roots go deep into prehistory. Edakkal Caves, with Neolithic carvings, offer rare glimpses into early human settlements. The region is also home to ancient Jain temples and sites that reflect centuries of cultural exchange. These historic landmarks add layers of meaning to Wayanad’s naturally rich terrain, merging the past with the present.",
      "Agriculture drives Wayanad’s economy, with cultivation of pepper, coffee, cardamom, tea, and other spices being predominant. The district also sustains a significant tribal population, whose customs, crafts, and sustainable lifestyles contribute to the region’s cultural identity. Their deep connection with the forest, along with ongoing efforts in tribal welfare and environmental preservation, makes Wayanad a model for harmonious coexistence between humans and nature."
    ],
    cultureParagraphs: [
      "Wayanad’s cultural identity is deeply shaped by its indigenous tribes such as the Paniyas, Adiyas, Kurichiyas, and Kattunaikkans. Their unique customs, oral traditions, folk dances like Gadhika, and rituals such as Vattakkali and Kalamezhuthu reflect a lifestyle in harmony with nature. These traditions are preserved through community efforts and cultural centers, offering a living testament to ancestral wisdom.",
      "While tribal beliefs remain strong, Wayanad also embraces Hindu, Muslim, and Christian communities. This spiritual diversity is celebrated through festivals like Onam, Eid, Vishu, and Christmas, and is visible in religious landmarks such as Thirunelly Temple, Pallikkunnu Church, and local mosques. The peaceful coexistence of faiths adds to Wayanad’s inclusive and harmonious social fabric.",
      "Wayanad's culture is closely linked to eco-conscious living. The cuisine features local ingredients like ragi, bamboo rice, and jackfruit, offering simple yet nutritious meals. Traditional livelihoods such as bamboo craft, pottery, and organic farming not only sustain the community but also promote environmental responsibility. Cooperatives and grassroots initiatives help preserve this balance between culture and sustainability."
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
      "Kannur is famed for Theyyam, one of Kerala’s most powerful ritual art forms. Performed in sacred groves and village shrines, Theyyam combines dance, music, and spiritual possession, with performers often believed to embody deities. With vivid makeup, towering headgear, and intense drumming, Theyyam rituals are central to the region’s cultural and religious life, especially among communities that traditionally lacked access to temple worship.",
      "Known as the “Land of Looms,” Kannur has a thriving handloom industry, renowned for its quality cotton fabrics. Artisans here continue to use traditional weaving techniques passed down for generations. The region also preserves Kolathunadu's legacy through architectural remnants, temple murals, and folk customs that showcase the district’s historic and artistic depth.",
      "Culturally diverse, Kannur is home to Hindus, Muslims, and Christians who celebrate festivals like Theyyam season, Ramadan, Onam, and Christmas with mutual respect. The district has also played a pivotal role in Kerala’s political and social reform movements, fostering a population that is highly politically aware and socially active, with strong roots in both leftist ideology and grassroots organization."
    ],
    cultureParagraphs: [
      "The culture of Kannur is a vivid blend of ritualistic art forms, deep-rooted spirituality, coastal traditions, and a fierce legacy of resistance. At the heart of its identity lies Theyyam, an awe-inspiring ritual dance where performers, believed to become divine beings, enact ancestral myths through vibrant movements, elaborate face art, towering headgear, and spiritual chants. These performances, held in sacred groves and village shrines between October and May, are not just artistic displays but deeply sacred events that preserve oral history and spiritual continuity in the region.",
      "Kannur is also renowned for its contributions to traditional craftsmanship and martial heritage. The district's legendary handloom weaving villages, such as Chirakkal and Madayipara, continue to produce high-quality cotton fabrics celebrated around the world. Alongside, the martial art Kalaripayattu and temple arts like mural painting and percussion music sustain Kannur’s place as a guardian of Kerala’s classical traditions. The district’s temples, mosques, and churches together shape a cultural fabric defined by religious harmony—reflected in celebrations of Onam, Eid, Vishu, and Christmas with equal fervor.",
      "What sets Kannur apart is its spirit of intellectual freedom and social activism. It has long been a crucible for Kerala’s political awakening, especially in the context of leftist ideologies and workers’ rights. The region has produced a lineage of poets, playwrights, freedom fighters, and public thinkers whose contributions continue to influence Kerala’s social and cultural evolution. Bold, expressive, and fiercely rooted in heritage, Kannur’s culture reflects a legacy where the sacred and the revolutionary walk hand in hand."
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
      "Kasargod, the northernmost district of Kerala, is a land where languages, cultures, and landscapes blend into a unique identity. Bordered by Karnataka to the north and east and the Arabian Sea to the west, Kasargod serves as a gateway to Kerala, showcasing the influence of both Kerala and South Canara traditions. Famed for its historic forts, lush hills, serene beaches, and backwaters, Kasargod holds a strategic place in Kerala’s history and geography. The iconic Bekal Fort, one of the largest and best-preserved forts in Kerala, stands as a proud reminder of the region’s military and maritime significance.",
      "Agriculture is the backbone of Kasargod’s economy, with key crops including coconut, areca nut, paddy, and rubber. Fishing and handloom weaving are also important to the livelihoods of many. The district is steadily growing as a tourism destination, known for attractions like Ranipuram Hills, Valiyaparamba backwaters, Chandragiri fort, and Ananthapura Lake Temple.",
      "Kasargod is also notable for its multilingual population—Malayalam, Tulu, Kannada, Konkani, and Urdu are widely spoken, reflecting its position as a cultural bridge between Kerala and Karnataka."
    ],
    cultureParagraphs: [
      "Kasargod's culture is a harmonious fusion of languages, faiths, and folk traditions, shaped by centuries of interaction between Malayali, Tuluva, and Konkan communities. This multilingualism has given rise to a cosmopolitan identity, where diversity is not just accepted but celebrated.One of the most vibrant expressions of Kasargod’s cultural life is Theyyam, the ritual art form that dominates northern Kerala, especially in temple festivals. In Kasargod, Theyyam takes on regional variations and is performed in numerous Kavus (sacred groves) and shrines, particularly during the Thulam and Makaram months. Kasargod is also home to Yakshagana, a classical dance-drama form that originated in Karnataka but flourishes in this region due to cultural proximity. Duff Muttu, Kolkali, and Oppana reflect the Islamic folk traditions, while Bhajans, temple dances, and processions signify the Hindu contributions.",
      "The Ananthapura Lake Temple, believed to be the original seat of Lord Anantha Padmanabha of Thiruvananthapuram, is an important spiritual site. Mosques like Malik Dinar Mosque in Thalangara, and historic churches in Kumbla and nearby areas, signify the deep religious pluralism of the region.",
      "Kasargod’s cuisine is also a cultural amalgam—featuring influences from Malabar, coastal Karnataka, and Tulu Nadu. Dishes like pathrode, neer dosa, and seafood curries coexist with Malabar biryani and spicy Muslim delicacies. The district is also deeply committed to traditional crafts, including coir work, handloom weaving, wood carving, and bell metal work. Festivals are celebrated with cross-cultural participation, making Kasargod a living example of communal harmony and shared heritage."
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
