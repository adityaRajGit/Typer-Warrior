// export const TEXTS: string[] = [
//     // https://en.wikipedia.org/wiki/SpaceX
//     'Space Exploration Technologies Corp. (SpaceX) is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.',

//     // https://en.wikipedia.org/wiki/Tesla,_Inc.
//     "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid scale, solar panels and solar roof tiles, as well as other related products and services.",

//     // https://en.wikipedia.org/wiki/Elon_Musk
//     'Elon Reeve Musk is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX; early investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI.',

//     // https://en.wikipedia.org/wiki/Google
//     'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the Big Five technology companies in the U.S. information technology industry, alongside Amazon, Facebook, Apple, and Microsoft.',

//     // https://en.wikipedia.org/wiki/Amazon_(company)
//     'Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.',

//     // https://en.wikipedia.org/wiki/Apple_Inc.
//     'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.',

//     // https://en.wikipedia.org/wiki/Microsoft
//     'Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',

//     // https://en.wikipedia.org/wiki/Microsoft_Windows
//     'Microsoft Windows, commonly referred to as Windows, is a group of several proprietary graphical operating system families, all of which are developed and marketed by Microsoft. Each family caters to a certain sector of the computing industry.',

//     // https://en.wikipedia.org/wiki/Android_(operating_system)
//     'Android is a mobile operating system based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets.',

//     // https://en.wikipedia.org/wiki/IOS
//     "iOS (formerly iPhone OS) is a mobile operating system created and developed by Apple Inc. exclusively for its hardware. It is the operating system that powers many of the company's mobile devices.",

//     // https://en.wikipedia.org/wiki/Starlink
//     'Starlink is a satellite internet constellation being constructed by SpaceX providing satellite Internet access. The constellation will consist of thousands of mass-produced small satellites in low Earth orbit (LEO), working in combination with ground transceivers.',

//     // https://en.wikipedia.org/wiki/SpaceX_Starship
//     'The SpaceX Starship system is a proposed fully reusable, two-stage-to-orbit super heavy-lift launch vehicle under development by SpaceX. The system is composed of a booster stage, named Super Heavy, and a second stage, also referred to as Starship.',

//     // https://en.wikipedia.org/wiki/Netflix
//     'Netflix, Inc. is an American over-the-top content platform and production company headquartered in Los Gatos, California. Netflix was founded in Scotts Valley, California.',

//     // https://en.wikipedia.org/wiki/YouTube
//     'YouTube is an American online video-sharing platform headquartered in San Bruno, California. The service, created in February 2005 by three former PayPal employees was bought by Google in November 2006',

//     // https://en.wikipedia.org/wiki/Artificial_intelligence
//     'Artificial intelligence (AI) is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals, which involves consciousness and emotionality.',

//     // https://en.wikipedia.org/wiki/Video_game
//     'A video game is an electronic game that involves interaction with a user interface or input device - such as a joystick, controller, keyboard, or motion sensing device - to generate visual feedback for a player.',

//     // https://en.wikipedia.org/wiki/Golden_Gate_Bridge
//     'The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean.',

//     // https://en.wikipedia.org/wiki/Spotify
//     'Spotify is a Swedish audio streaming and media services provider, founded in 2006 by Daniel Ek. Spotify is headquartered in Stockholm, Sweden.',

//     // https://en.wikipedia.org/wiki/Adobe_Inc.
//     'Adobe Inc. is an American multinational computer software company. It has historically specialized in software for the creation and publication of a wide range of content, including graphics, photography, illustration, animation, multimedia/video, motion pictures and print.',

//     // https://en.wikipedia.org/wiki/Discord_(software)
//     'Discord is a VoIP, instant messaging and digital distribution platform designed for creating communities. Users communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities called servers.',

//     // https://en.wikipedia.org/wiki/Amazon_Web_Services
//     'Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.',

//     // https://en.wikipedia.org/wiki/Steam_(service)
//     'Steam is a video game digital distribution service by Valve. It was launched as a standalone software client in September 2003 as a way for Valve to provide automatic updates for their games, and expanded to include games from third-party publishers.',

//     // https://en.wikipedia.org/wiki/Unity_(game_engine)
//     'Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005. The engine can be used to create three-dimensional, two-dimensional, virtual reality, and augmented reality games, as well as simulations and other experiences.',

//     // https://en.wikipedia.org/wiki/Internet
//     'The Internet is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices.',

//     // https://en.wikipedia.org/wiki/Computer_science
//     'Computer science involves the study of computation, automation, and information. Computer science spans theoretical disciplines (such as algorithms, theory of computation, and information theory) to practical disciplines (including the design and implementation of hardware and software).',

//     // https://en.wikipedia.org/wiki/Twitch_(service)
//     'Twitch is an American video live streaming service that focuses on video game live streaming, including broadcasts of esports competitions, in addition to offering music broadcasts, creative content, and "in real life" streams. It is operated by Twitch Interactive, a subsidiary of Amazon.com, Inc.',

//     // https://en.wikipedia.org/wiki/Linux
//     'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution.',

//     // https://en.wikipedia.org/wiki/Server_(computing)
//     'In computing, a server is a piece of computer hardware or software (computer program) that provides functionality for other programs or devices, called "clients". This architecture is called the client–server model.',

//     // https://en.wikipedia.org/wiki/Web_browser
//     "A web browser (also referred to as an Internet browser or simply a browser) is application software for accessing the World Wide Web. When a user requests a web page from a particular website, the web browser retrieves the necessary content from a web server and then displays the page on the user's device.",

//     // https://en.wikipedia.org/wiki/World_Wide_Web
//     'The World Wide Web (WWW), commonly known as the Web, is an information system where documents and other web resources are identified by Uniform Resource Locators (URLs), which may be interlinked by hyperlinks, and are accessible over the Internet.',

//     // https://en.wikipedia.org/wiki/Programming_language
//     'A programming language is any set of rules that converts strings, or graphical program elements in the case of visual programming languages, to various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms.',

//     // https://en.wikipedia.org/wiki/Software
//     'Software is a collection of instructions that tell a computer how to work. This is in contrast to hardware, from which the system is built and actually performs the work.',

//     // https://en.wikipedia.org/wiki/Computer_hardware
//     'Computer hardware includes the physical parts of a computer, such as the case, central processing unit (CPU), monitor, mouse, keyboard, computer data storage, graphics card, sound card, speakers and motherboard.',

//     // https://en.wikipedia.org/wiki/Central_processing_unit
//     'A central processing unit (CPU), also called a central processor, main processor or just processor, is the electronic circuitry that executes instructions comprising a computer program.',

//     // https://en.wikipedia.org/wiki/Graphics_processing_unit
//     'A graphics processing unit (GPU) is a specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images in a frame buffer intended for output to a display device.',

//     // https://en.wikipedia.org/wiki/Cloud_computing
//     'Cloud computing is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each location being a data center.',

//     // https://en.wikipedia.org/wiki/Cryptography
//     'Cryptography, or cryptology, is the practice and study of techniques for secure communication in the presence of adversarial behavior. More generally, cryptography is about constructing and analyzing protocols that prevent third parties or the public from reading private messages.',

//     // https://en.wikipedia.org/wiki/Smartphone
//     'A smartphone is a computing platform portable device that combines mobile telephone and computing functions into one unit. They are distinguished from feature phones by their stronger hardware capabilities and extensive mobile operating systems.',

//     // https://en.wikipedia.org/wiki/IPhone
//     "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007.",

//     // https://en.wikipedia.org/wiki/System_on_a_chip
//     'A system on a chip is an integrated circuit that integrates all or most components of a computer or other electronic system. These components almost always include a central processing unit (CPU), memory, input/output ports and secondary storage, often alongside other components such as radio modems and a graphics processing unit (GPU) – all on a single substrate or microchip.',

//     // https://en.wikipedia.org/wiki/Die_(integrated_circuit)
//     'A die, in the context of integrated circuits, is a small block of semiconducting material on which a given functional circuit is fabricated. Typically, integrated circuits are produced in large batches on a single wafer of electronic-grade silicon (EGS) or other semiconductor through processes such as photolithography.',

//     // https://en.wikipedia.org/wiki/Solar_cell
//     'A solar cell, or photovoltaic cell, is an electrical device that converts the energy of light directly into electricity by the photovoltaic effect, which is a physical and chemical phenomenon.',

//     // https://en.wikipedia.org/wiki/Renewable_energy
//     'Renewable energy is energy that is collected from renewable resources that are naturally replenished on a human timescale. It includes sources such as sunlight, wind, rain, tides, waves, and geothermal heat.',

//     // https://en.wikipedia.org/wiki/Climate_change
//     "Contemporary climate change includes both global warming and its impacts on Earth's weather patterns. There have been previous periods of climate change, but the current changes are distinctly more rapid and not due to natural causes. Instead, they are caused by the emission of greenhouse gases, mostly carbon dioxide (CO2) and methane.",

//     // https://en.wikipedia.org/wiki/Outer_space
//     'Outer space, commonly shortened to space, is the expanse that exists beyond Earth and its atmosphere and between celestial bodies.',

//     // https://en.wikipedia.org/wiki/Solar_System
//     'The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. Of the bodies that orbit the Sun directly, the largest are the four gas and ice giants and the four terrestrial planets, followed by an unknown number of dwarf planets and innumerable small Solar System bodies.',

//     // https://en.wikipedia.org/wiki/Saturn
//     'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.',

//     // https://en.wikipedia.org/wiki/Jupiter
//     'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.',

//     // https://en.wikipedia.org/wiki/Moon
//     "The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth (comparable to the width of Australia), it is the largest natural satellite in the Solar System relative to the size of a major planet, the fifth largest satellite in the Solar System overall, and larger than any known dwarf planet.",

//     // https://en.wikipedia.org/wiki/Ray_tracing_(graphics)
//     'In 3D computer graphics, ray tracing is a technique for modeling light transport for use in a wide variety of rendering algorithms for generating digital images.',

//     // https://en.wikipedia.org/wiki/Sound
//     'In physics, sound is a vibration that propagates as an acoustic wave, through a transmission medium such as a gas, liquid or solid. In human physiology and psychology, sound is the reception of such waves and their perception by the brain.',

//     // https://en.wikipedia.org/wiki/Black_hole
//     'A black hole is a region of spacetime where gravity is so strong that nothing - no particles or even electromagnetic radiation such as light - can escape from it.',

//     // https://en.wikipedia.org/wiki/Continent
//     'A continent is any of several large landmasses. Generally identified by convention rather than any strict criteria, up to seven geographical regions are commonly regarded as continents.',

//     // https://en.wikipedia.org/wiki/Garbage_patch
//     'A garbage patch is a gyre of marine debris particles caused by the effects of ocean currents and increasing plastic pollution by human populations.',

//     // https://en.wikipedia.org/wiki/Ecosystem
//     'An ecosystem (or ecological system) consists of all the organisms and the physical environment with which they interact. These biotic and abiotic components are linked together through nutrient cycles and energy flows.',

//     // https://en.wikipedia.org/wiki/Natural_disaster
//     'A natural disaster is a major adverse event resulting from natural processes of the Earth; examples include firestorms, duststorms, floods, hurricanes, tornadoes, volcanic eruptions, earthquakes, tsunamis, storms, and other geologic processes.',

//     // https://en.wikipedia.org/wiki/Earth
//     'Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large amounts of water can be found throughout the Solar System, only Earth sustains liquid surface water.',

//     // https://en.wikipedia.org/wiki/International_Space_Station
//     'The International Space Station (ISS) is a modular space station (habitable artificial satellite) in low Earth orbit. It is a multinational collaborative project involving five participating space agencies: NASA (United States), Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada).',

//     // https://en.wikipedia.org/wiki/Satellite
//     "In the context of spaceflight, a satellite is an object that has been intentionally placed into orbit. These objects are called artificial satellites to distinguish them from natural satellites such as Earth's Moon.",

//     // https://en.wikipedia.org/wiki/Nuclear_fusion
//     'Nuclear fusion is a reaction in which two or more atomic nuclei are combined to form one or more different atomic nuclei and subatomic particles (neutrons or protons). The difference in mass between the reactants and products is manifested as either the release or the absorption of energy.',

//     // https://en.wikipedia.org/wiki/Atom
//     'An atom is the smallest unit of ordinary matter that forms a chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized atoms. Atoms are extremely small, typically around 100 picometers across.',

//     // https://en.wikipedia.org/wiki/Mathematics
//     'Mathematics is an area of knowledge, which includes the study of such topics as numbers (arithmetic and number theory), formulas and related structures (algebra), shapes and spaces in which they are contained (geometry), and quantities and their changes (calculus and analysis).',

//     // https://en.wikipedia.org/wiki/Spacetime
//     'In physics, spacetime is any mathematical model which fuses the three dimensions of space and the one dimension of time into a single four-dimensional manifold. Spacetime diagrams can be used to visualize relativistic effects.',

//     // https://en.wikipedia.org/wiki/Neutron_star
//     'A neutron star is the collapsed core of a massive supergiant star, which had a total mass of between 10 and 25 solar masses, possibly more if the star was especially metal-rich.',

//     // https://en.wikipedia.org/wiki/Supernova
//     'A supernova (pl. supernovae or supernovas) is a powerful and luminous stellar explosion. This transient astronomical event occurs during the last evolutionary stages of a massive star or when a white dwarf is triggered into runaway nuclear fusion.',

//     // https://en.wikipedia.org/wiki/James_Webb_Space_Telescope
//     'The James Webb Space Telescope is an orbiting spacecraft designed to observe some of the oldest and most distant objects and events in the Universe, including the first stars and formation of the first galaxies, and to provide detailed atmospheric characterization of potentially habitable exoplanets.',

//     // https://en.wikipedia.org/wiki/Hubble_Space_Telescope
//     'The Hubble Space Telescope is a space telescope that was launched into low Earth orbit in 1990 and remains in operation. It was not the first space telescope, but it is one of the largest and most versatile, renowned both as a vital research tool and as a public relations boon for astronomy.',

//     // https://en.wikipedia.org/wiki/Galaxy
//     'A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter. The word is derived from the Greek galaxias, literally "milky", a reference to the Milky Way galaxy that contains the Solar System.',

//     // https://en.wikipedia.org/wiki/Night_sky
//     'The term night sky, usually associated with astronomy from Earth, refers to the nighttime appearance of celestial objects like stars, planets, and the Moon, which are visible in a clear sky between sunset and sunrise, when the Sun is below the horizon.',

//     // https://en.wikipedia.org/wiki/Color
//     'Color or colour is the visual perceptual property corresponding in humans to the categories called blue, green, red, etc. Color derives from the spectrum of light interacting in the eye with the spectral sensitivities of the light receptors.',

//     // https://en.wikipedia.org/wiki/3D_printing
//     '3D printing, or additive manufacturing, is the construction of a three-dimensional object from a CAD model or a digital 3D model. The term "3D printing" can refer to a variety of processes in which material is deposited, joined or solidified under computer control to create a three-dimensional object.',

//     // https://en.wikipedia.org/wiki/Hyperloop
//     'A Hyperloop is a proposed high-speed transportation system for both passenger and freight transport.The term was coined by Elon Musk to describe the modern open-source project originally conceived in 1799.',

//     // https://en.wikipedia.org/wiki/Technology
//     'Technology ("science of craft") is the sum of any techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.',

//     // https://en.wikipedia.org/wiki/Mountain
//     "A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. A mountain differs from a plateau in having a limited summit area, and is larger than a hill, typically rising at least 300 metres above the surrounding land.",

//     // https://en.wikipedia.org/wiki/Alps
//     'The Alps are the highest and most extensive mountain range system that lies entirely in Europe, stretching approximately 1,200 km across eight Alpine countries.',

//     // https://en.wikipedia.org/wiki/Music
//     'Music is the art of arranging sounds in time through the elements of melody, harmony, rhythm, and timbre. It is one of the universal cultural aspects of all human societies.',

//     // https://en.wikipedia.org/wiki/Glacier
//     'A glacier is a persistent body of dense ice that is constantly moving under its own weight. A glacier forms where the accumulation of snow exceeds its ablation over many years, often centuries.',

//     // https://en.wikipedia.org/wiki/Pacific_Crest_Trail
//     'The Pacific Crest Trail (PCT), officially designated as the Pacific Crest National Scenic Trail, is a long-distance hiking and equestrian trail closely aligned with the highest portion of the Cascade and Sierra Nevada mountain ranges, which lie 160 to 240 km east of the U.S. Pacific coast.',

//     // https://en.wikipedia.org/wiki/National_park
//     'A national park is a natural park in use for conservation purposes, created and protected by national governments. Often it is a reserve of natural, semi-natural, or developed land that a sovereign state declares or owns.',

//     // https://en.wikipedia.org/wiki/Silicon_Valley
//     'Silicon Valley is a region in Northern California that serves as a global center for high technology and innovation. Located in the southern part of the San Francisco Bay Area, it corresponds roughly to the geographical Santa Clara Valley.',

//     // https://en.wikipedia.org/wiki/Light
//     'Light or visible light is electromagnetic radiation within the portion of the electromagnetic spectrum that is perceived by the human eye.',

//     // https://en.wikipedia.org/wiki/Laptop
//     'A laptop is a small, portable personal computer with a screen and alphanumeric keyboard. These typically have a clam shell form factor with the screen mounted on the inside of the upper lid and the keyboard on the inside of the lower lid.',

//     // https://en.wikipedia.org/wiki/Encryption
//     'In cryptography, encryption is the process of encoding information. This process converts the original representation of the information, known as plaintext, into an alternative form known as ciphertext.',

//     // https://en.wikipedia.org/wiki/Human_brain
//     'The human brain is the central organ of the human nervous system, and with the spinal cord makes up the central nervous system.',

//     // https://en.wikipedia.org/wiki/Social_media
//     'Social media are interactive technologies that facilitate the creation and sharing of information, ideas, interests, and other forms of expression through virtual communities and networks.',

//     // https://en.wikipedia.org/wiki/Film
//     'A film, also called a movie, motion picture or moving picture, is a work of visual art used to simulate experiences that communicate ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images.',

//     // https://en.wikipedia.org/wiki/Rendering_(computer_graphics)
//     'Rendering or image synthesis is the process of generating a photorealistic or non-photorealistic image from a 2D or model by means of a computer program. The resulting image is referred to as the render.',

//     // https://en.wikipedia.org/wiki/3D_modeling
//     'In 3D computer graphics, 3D modeling is the process of developing a mathematical coordinate-based representation of any surface of an object in three dimensions via specialized software by manipulating edges, vertices, and polygons in a simulated 3D space.',

//     // https://en.wikipedia.org/wiki/Permafrost
//     'Permafrost is ground that continuously remains below 0 degrees Celsius for two or more years, located on land or under the ocean. Most common in the Northern Hemisphere, around 15% of the Northern Hemisphere or 11% of the global surface is underlain by permafrost.',

//     // https://en.wikipedia.org/wiki/Summer
//     'Summer is the hottest of the four temperate seasons, occurring after spring and before autumn. At or centred on the summer solstice, the earliest sunrise and latest sunset occurs, daylight hours are longest and dark hours are shortest, with day length decreasing as the season progresses after the solstice.',

//     // https://en.wikipedia.org/wiki/Season
//     "A season is a division of the year based on changes in weather, ecology, and the number of daylight hours in a given region. On Earth, seasons are the result of Earth's orbit around the Sun and Earth's axial tilt relative to the ecliptic plane.",

//     // https://en.wikipedia.org/wiki/SpinLaunch
//     'SpinLaunch is a spaceflight technology development company working on mass accelerator technology to move payloads to space.',
// ];





export const TEXTS = [
    // https://en.wikipedia.org/wiki/SpaceX
    "Space Exploration Technologies Corp. (SpaceX) is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.",
  
    // https://en.wikipedia.org/wiki/Tesla,_Inc.
    "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid scale, solar panels and solar roof tiles, as well as other related products and services.",
  
    // https://en.wikipedia.org/wiki/Elon_Musk
    "Elon Reeve Musk is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX; early investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI.",
  
    // https://en.wikipedia.org/wiki/Google
    "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the Big Five technology companies in the U.S. information technology industry, alongside Amazon, Facebook, Apple, and Microsoft.",
  
    // https://en.wikipedia.org/wiki/Amazon_(company)
    "Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  
    // https://en.wikipedia.org/wiki/Apple_Inc.
    "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.",
  
    // https://en.wikipedia.org/wiki/Microsoft
    "Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  
    // https://en.wikipedia.org/wiki/Microsoft_Windows
    "Microsoft Windows, commonly referred to as Windows, is a group of several proprietary graphical operating system families, all of which are developed and marketed by Microsoft. Each family caters to a certain sector of the computing industry.",
  
    // https://en.wikipedia.org/wiki/Android_(operating_system)
    "Android is a mobile operating system based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets.",
  
    // https://en.wikipedia.org/wiki/IOS
    "iOS (formerly iPhone OS) is a mobile operating system created and developed by Apple Inc. exclusively for its hardware. It is the operating system that powers many of the company's mobile devices.",
  
    // https://en.wikipedia.org/wiki/Starlink
    "Starlink is a satellite internet constellation being constructed by SpaceX providing satellite Internet access. The constellation will consist of thousands of mass-produced small satellites in low Earth orbit (LEO), working in combination with ground transceivers.",
  
    // https://en.wikipedia.org/wiki/SpaceX_Starship
    "The SpaceX Starship system is a proposed fully reusable, two-stage-to-orbit super heavy-lift launch vehicle under development by SpaceX. The system is composed of a booster stage, named Super Heavy, and a second stage, also referred to as Starship.",
  
    // https://en.wikipedia.org/wiki/Netflix
    "Netflix, Inc. is an American over-the-top content platform and production company headquartered in Los Gatos, California. Netflix was founded in Scotts Valley, California.",
  
    // https://en.wikipedia.org/wiki/YouTube
    "YouTube is an American online video-sharing platform headquartered in San Bruno, California. The service, created in February 2005 by three former PayPal employees was bought by Google in November 2006",
  
    // https://en.wikipedia.org/wiki/Artificial_intelligence
    "Artificial intelligence (AI) is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals, which involves consciousness and emotionality.",
  
    // https://en.wikipedia.org/wiki/Video_game
    "A video game is an electronic game that involves interaction with a user interface or input device - such as a joystick, controller, keyboard, or motion sensing device - to generate visual feedback for a player.",
  
    // https://en.wikipedia.org/wiki/Golden_Gate_Bridge
    "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide (1.6 km) strait connecting San Francisco Bay and the Pacific Ocean.",
  
    // https://en.wikipedia.org/wiki/Spotify
    "Spotify is a Swedish audio streaming and media services provider, founded in 2006 by Daniel Ek. Spotify is headquartered in Stockholm, Sweden.",
  
    // https://en.wikipedia.org/wiki/Adobe_Inc.
    "Adobe Inc. is an American multinational computer software company. It has historically specialized in software for the creation and publication of a wide range of content, including graphics, photography, illustration, animation, multimedia/video, motion pictures and print.",
  
    // https://en.wikipedia.org/wiki/Discord_(software)
    "Discord is a VoIP, instant messaging and digital distribution platform designed for creating communities. Users communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities called servers.",
  
    // https://en.wikipedia.org/wiki/Amazon_Web_Services
    "Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
  
    // https://en.wikipedia.org/wiki/Steam_(service)
    "Steam is a video game digital distribution service by Valve. It was launched as a standalone software client in September 2003 as a way for Valve to provide automatic updates for their games, and expanded to include games from third-party publishers.",
  
    // https://en.wikipedia.org/wiki/Unity_(game_engine)
    "Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005. The engine can be used to create three-dimensional, two-dimensional, virtual reality, and augmented reality games, as well as simulations and other experiences.",
  
    // https://en.wikipedia.org/wiki/Internet
    "The Internet is the global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices.",
  
    // https://en.wikipedia.org/wiki/Computer_science
    "Computer science involves the study of computation, automation, and information. Computer science spans theoretical disciplines (such as algorithms, theory of computation, and information theory) to practical disciplines (including the design and implementation of hardware and software).",
  
    // https://en.wikipedia.org/wiki/Twitch_(service)
    'Twitch is an American video live streaming service that focuses on video game live streaming, including broadcasts of esports competitions, in addition to offering music broadcasts, creative content, and "in real life" streams. It is operated by Twitch Interactive, a subsidiary of Amazon.com, Inc.',
  
    // https://en.wikipedia.org/wiki/Linux
    "Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution.",
  
    // https://en.wikipedia.org/wiki/Server_(computing)
    'In computing, a server is a piece of computer hardware or software (computer program) that provides functionality for other programs or devices, called "clients". This architecture is called the client–server model.',
  
    // https://en.wikipedia.org/wiki/Web_browser
    "A web browser (also referred to as an Internet browser or simply a browser) is application software for accessing the World Wide Web. When a user requests a web page from a particular website, the web browser retrieves the necessary content from a web server and then displays the page on the user's device.",
  
    // https://en.wikipedia.org/wiki/World_Wide_Web
    "The World Wide Web (WWW), commonly known as the Web, is an information system where documents and other web resources are identified by Uniform Resource Locators (URLs), which may be interlinked by hyperlinks, and are accessible over the Internet.",
  
    // https://en.wikipedia.org/wiki/Programming_language
    "A programming language is any set of rules that converts strings, or graphical program elements in the case of visual programming languages, to various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms.",
  
    // https://en.wikipedia.org/wiki/Software
    "Software is a collection of instructions that tell a computer how to work. This is in contrast to hardware, from which the system is built and actually performs the work.",
  
    // https://en.wikipedia.org/wiki/Computer_hardware
    "Computer hardware includes the physical parts of a computer, such as the case, central processing unit (CPU), monitor, mouse, keyboard, computer data storage, graphics card, sound card, speakers and motherboard.",
  
    // https://en.wikipedia.org/wiki/Central_processing_unit
    "A central processing unit (CPU), also called a central processor, main processor or just processor, is the electronic circuitry that executes instructions comprising a computer program.",
  
    // https://en.wikipedia.org/wiki/Graphics_processing_unit
    "A graphics processing unit (GPU) is a specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images in a frame buffer intended for output to a display device.",
  
    // https://en.wikipedia.org/wiki/Cloud_computing
    "Cloud computing is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each location being a data center.",
  
    // https://en.wikipedia.org/wiki/Cryptography
    "Cryptography, or cryptology, is the practice and study of techniques for secure communication in the presence of adversarial behavior. More generally, cryptography is about constructing and analyzing protocols that prevent third parties or the public from reading private messages.",
  
    // https://en.wikipedia.org/wiki/Smartphone
    "A smartphone is a computing platform portable device that combines mobile telephone and computing functions into one unit. They are distinguished from feature phones by their stronger hardware capabilities and extensive mobile operating systems.",
  
    // https://en.wikipedia.org/wiki/IPhone
    "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007.",
  
    // https://en.wikipedia.org/wiki/System_on_a_chip
    "A system on a chip is an integrated circuit that integrates all or most components of a computer or other electronic system. These components almost always include a central processing unit (CPU), memory, input/output ports and secondary storage, often alongside other components such as radio modems and a graphics processing unit (GPU) – all on a single substrate or microchip.",
  
    // https://en.wikipedia.org/wiki/Die_(integrated_circuit)
    "A die, in the context of integrated circuits, is a small block of semiconducting material on which a given functional circuit is fabricated. Typically, integrated circuits are produced in large batches on a single wafer of electronic-grade silicon (EGS) or other semiconductor through processes such as photolithography.",
  
    // https://en.wikipedia.org/wiki/Solar_cell
    "A solar cell, or photovoltaic cell, is an electrical device that converts the energy of light directly into electricity by the photovoltaic effect, which is a physical and chemical phenomenon.",
  
    // https://en.wikipedia.org/wiki/Renewable_energy
    "Renewable energy is energy that is collected from renewable resources that are naturally replenished on a human timescale. It includes sources such as sunlight, wind, rain, tides, waves, and geothermal heat.",
  
    // https://en.wikipedia.org/wiki/Climate_change
    "Contemporary climate change includes both global warming and its impacts on Earth's weather patterns. There have been previous periods of climate change, but the current changes are distinctly more rapid and not due to natural causes. Instead, they are caused by the emission of greenhouse gases, mostly carbon dioxide (CO2) and methane.",
  
    // https://en.wikipedia.org/wiki/Outer_space
    "Outer space, commonly shortened to space, is the expanse that exists beyond Earth and its atmosphere and between celestial bodies.",
  
    // https://en.wikipedia.org/wiki/Solar_System
    "The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. Of the bodies that orbit the Sun directly, the largest are the four gas and ice giants and the four terrestrial planets, followed by an unknown number of dwarf planets and innumerable small Solar System bodies.",
  
    // https://en.wikipedia.org/wiki/Saturn
    "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.",
  
    // https://en.wikipedia.org/wiki/Jupiter
    "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.",
  
    // https://en.wikipedia.org/wiki/Moon
    "The Moon is Earth's only natural satellite. At about one-quarter the diameter of Earth (comparable to the width of Australia), it is the largest natural satellite in the Solar System relative to the size of a major planet, the fifth largest satellite in the Solar System overall, and larger than any known dwarf planet.",
  
    // https://en.wikipedia.org/wiki/Ray_tracing_(graphics)
    "In 3D computer graphics, ray tracing is a technique for modeling light transport for use in a wide variety of rendering algorithms for generating digital images.",
  
    // https://en.wikipedia.org/wiki/Sound
    "In physics, sound is a vibration that propagates as an acoustic wave, through a transmission medium such as a gas, liquid or solid. In human physiology and psychology, sound is the reception of such waves and their perception by the brain.",
  
    // https://en.wikipedia.org/wiki/Black_hole
    "A black hole is a region of spacetime where gravity is so strong that nothing - no particles or even electromagnetic radiation such as light - can escape from it.",
  
    // https://en.wikipedia.org/wiki/Continent
    "A continent is any of several large landmasses. Generally identified by convention rather than any strict criteria, up to seven geographical regions are commonly regarded as continents.",
  
    // https://en.wikipedia.org/wiki/Garbage_patch
    "A garbage patch is a gyre of marine debris particles caused by the effects of ocean currents and increasing plastic pollution by human populations.",
  
    // https://en.wikipedia.org/wiki/Ecosystem
    "An ecosystem (or ecological system) consists of all the organisms and the physical environment with which they interact. These biotic and abiotic components are linked together through nutrient cycles and energy flows.",
  
    // https://en.wikipedia.org/wiki/Natural_disaster
    "A natural disaster is a major adverse event resulting from natural processes of the Earth; examples include firestorms, duststorms, floods, hurricanes, tornadoes, volcanic eruptions, earthquakes, tsunamis, storms, and other geologic processes.",
  
    // https://en.wikipedia.org/wiki/Earth
    "Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large amounts of water can be found throughout the Solar System, only Earth sustains liquid surface water.",
  
    // https://en.wikipedia.org/wiki/International_Space_Station
    "The International Space Station (ISS) is a modular space station (habitable artificial satellite) in low Earth orbit. It is a multinational collaborative project involving five participating space agencies: NASA (United States), Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada).",
  
    // https://en.wikipedia.org/wiki/Satellite
    "In the context of spaceflight, a satellite is an object that has been intentionally placed into orbit. These objects are called artificial satellites to distinguish them from natural satellites such as Earth's Moon.",
  
    // https://en.wikipedia.org/wiki/Nuclear_fusion
    "Nuclear fusion is a reaction in which two or more atomic nuclei are combined to form one or more different atomic nuclei and subatomic particles (neutrons or protons). The difference in mass between the reactants and products is manifested as either the release or the absorption of energy.",
  
    // https://en.wikipedia.org/wiki/Atom
    "An atom is the smallest unit of ordinary matter that forms a chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized atoms. Atoms are extremely small, typically around 100 picometers across.",
  
    // https://en.wikipedia.org/wiki/Mathematics
    "Mathematics is an area of knowledge, which includes the study of such topics as numbers (arithmetic and number theory), formulas and related structures (algebra), shapes and spaces in which they are contained (geometry), and quantities and their changes (calculus and analysis).",
  
    // https://en.wikipedia.org/wiki/Spacetime
    "In physics, spacetime is any mathematical model which fuses the three dimensions of space and the one dimension of time into a single four-dimensional manifold. Spacetime diagrams can be used to visualize relativistic effects.",
  
    // https://en.wikipedia.org/wiki/Neutron_star
    "A neutron star is the collapsed core of a massive supergiant star, which had a total mass of between 10 and 25 solar masses, possibly more if the star was especially metal-rich.",
  
    // https://en.wikipedia.org/wiki/Supernova
    "A supernova (pl. supernovae or supernovas) is a powerful and luminous stellar explosion. This transient astronomical event occurs during the last evolutionary stages of a massive star or when a white dwarf is triggered into runaway nuclear fusion.",
  
    // https://en.wikipedia.org/wiki/James_Webb_Space_Telescope
    "The James Webb Space Telescope is an orbiting spacecraft designed to observe some of the oldest and most distant objects and events in the Universe, including the first stars and formation of the first galaxies, and to provide detailed atmospheric characterization of potentially habitable exoplanets.",
  
    // https://en.wikipedia.org/wiki/Hubble_Space_Telescope
    "The Hubble Space Telescope is a space telescope that was launched into low Earth orbit in 1990 and remains in operation. It was not the first space telescope, but it is one of the largest and most versatile, renowned both as a vital research tool and as a public relations boon for astronomy.",
  
    // https://en.wikipedia.org/wiki/Galaxy
    'A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter. The word is derived from the Greek galaxias, literally "milky", a reference to the Milky Way galaxy that contains the Solar System.',
  
    // https://en.wikipedia.org/wiki/Night_sky
    "The term night sky, usually associated with astronomy from Earth, refers to the nighttime appearance of celestial objects like stars, planets, and the Moon, which are visible in a clear sky between sunset and sunrise, when the Sun is below the horizon.",
  
    // https://en.wikipedia.org/wiki/Color
    "Color or colour is the visual perceptual property corresponding in humans to the categories called blue, green, red, etc. Color derives from the spectrum of light interacting in the eye with the spectral sensitivities of the light receptors.",
  
    // https://en.wikipedia.org/wiki/3D_printing
    '3D printing, or additive manufacturing, is the construction of a three-dimensional object from a CAD model or a digital 3D model. The term "3D printing" can refer to a variety of processes in which material is deposited, joined or solidified under computer control to create a three-dimensional object.',
  
    // https://en.wikipedia.org/wiki/Hyperloop
    "A Hyperloop is a proposed high-speed transportation system for both passenger and freight transport.The term was coined by Elon Musk to describe the modern open-source project originally conceived in 1799.",
  
    // https://en.wikipedia.org/wiki/Technology
    'Technology ("science of craft") is the sum of any techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.',
  
    // https://en.wikipedia.org/wiki/Mountain
    "A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. A mountain differs from a plateau in having a limited summit area, and is larger than a hill, typically rising at least 300 metres above the surrounding land.",
  
    // https://en.wikipedia.org/wiki/Alps
    "The Alps are the highest and most extensive mountain range system that lies entirely in Europe, stretching approximately 1,200 km across eight Alpine countries.",
  
    // https://en.wikipedia.org/wiki/Music
    "Music is the art of arranging sounds in time through the elements of melody, harmony, rhythm, and timbre. It is one of the universal cultural aspects of all human societies.",
  
    // https://en.wikipedia.org/wiki/Glacier
    "A glacier is a persistent body of dense ice that is constantly moving under its own weight. A glacier forms where the accumulation of snow exceeds its ablation over many years, often centuries.",
  
    // https://en.wikipedia.org/wiki/Pacific_Crest_Trail
    "The Pacific Crest Trail (PCT), officially designated as the Pacific Crest National Scenic Trail, is a long-distance hiking and equestrian trail closely aligned with the highest portion of the Cascade and Sierra Nevada mountain ranges, which lie 160 to 240 km east of the U.S. Pacific coast.",
  
    // https://en.wikipedia.org/wiki/National_park
    "A national park is a natural park in use for conservation purposes, created and protected by national governments. Often it is a reserve of natural, semi-natural, or developed land that a sovereign state declares or owns.",
  
    // https://en.wikipedia.org/wiki/Silicon_Valley
    "Silicon Valley is a region in Northern California that serves as a global center for high technology and innovation. Located in the southern part of the San Francisco Bay Area, it corresponds roughly to the geographical Santa Clara Valley.",
  
    // https://en.wikipedia.org/wiki/Light
    "Light or visible light is electromagnetic radiation within the portion of the electromagnetic spectrum that is perceived by the human eye.",
  
    // https://en.wikipedia.org/wiki/Laptop
    "A laptop is a small, portable personal computer with a screen and alphanumeric keyboard. These typically have a clam shell form factor with the screen mounted on the inside of the upper lid and the keyboard on the inside of the lower lid.",
  
    // https://en.wikipedia.org/wiki/Encryption
    "In cryptography, encryption is the process of encoding information. This process converts the original representation of the information, known as plaintext, into an alternative form known as ciphertext.",
  
    // https://en.wikipedia.org/wiki/Human_brain
    "The human brain is the central organ of the human nervous system, and with the spinal cord makes up the central nervous system.",
  
    // https://en.wikipedia.org/wiki/Social_media
    "Social media are interactive technologies that facilitate the creation and sharing of information, ideas, interests, and other forms of expression through virtual communities and networks.",
  
    // https://en.wikipedia.org/wiki/Film
    "A film, also called a movie, motion picture or moving picture, is a work of visual art used to simulate experiences that communicate ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images.",
  
    // https://en.wikipedia.org/wiki/Rendering_(computer_graphics)
    "Rendering or image synthesis is the process of generating a photorealistic or non-photorealistic image from a 2D or model by means of a computer program. The resulting image is referred to as the render.",
  
    // https://en.wikipedia.org/wiki/3D_modeling
    "In 3D computer graphics, 3D modeling is the process of developing a mathematical coordinate-based representation of any surface of an object in three dimensions via specialized software by manipulating edges, vertices, and polygons in a simulated 3D space.",
  
    // https://en.wikipedia.org/wiki/Permafrost
    "Permafrost is ground that continuously remains below 0 degrees Celsius for two or more years, located on land or under the ocean. Most common in the Northern Hemisphere, around 15% of the Northern Hemisphere or 11% of the global surface is underlain by permafrost.",
  
    // https://en.wikipedia.org/wiki/Summer
    "Summer is the hottest of the four temperate seasons, occurring after spring and before autumn. At or centred on the summer solstice, the earliest sunrise and latest sunset occurs, daylight hours are longest and dark hours are shortest, with day length decreasing as the season progresses after the solstice.",
  
    // https://en.wikipedia.org/wiki/Season
    "A season is a division of the year based on changes in weather, ecology, and the number of daylight hours in a given region. On Earth, seasons are the result of Earth's orbit around the Sun and Earth's axial tilt relative to the ecliptic plane.",
  
    // https://en.wikipedia.org/wiki/SpinLaunch
    "SpinLaunch is a spaceflight technology development company working on mass accelerator technology to move payloads to space."
  ]
  