import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import * as THREE from "three";

/* =======================
   FULL TOPICS (UNCHANGED RESTORED)
======================= */
const topics = [
  
{ id: "contract-law-basics", title: "Contract Law Explained Simply", category: "law", content: "Contract law deals with legally binding agreements between two or more parties. A valid contract requires offer, acceptance, intention to create legal relations, and consideration." },

{ id: "offer-and-acceptance", title: "Offer and Acceptance Explained Simply", category: "law", content: "An offer is a clear proposal to form an agreement, and acceptance is agreeing to those exact terms without changes." },

{ id: "consideration", title: "Consideration Explained Simply", category: "law", content: "Consideration is something of value exchanged between parties in a contract, such as money, goods, or services." },

{ id: "intention-to-create-legal-relations", title: "Legal Intention Explained Simply", category: "law", content: "This means both parties must intend for the agreement to be legally enforceable, not just a casual promise." },

{ id: "breach-of-contract", title: "Breach of Contract Explained Simply", category: "law", content: "A breach occurs when one party fails to fulfil their obligations under a valid contract." },

{ id: "criminal-law-basics", title: "Criminal Law Explained Simply", category: "law", content: "Criminal law deals with offences against society or the state, such as theft, assault, and fraud. The state prosecutes offenders." },

{ id: "crime-definition", title: "What is a Crime?", category: "law", content: "A crime is any act that breaks the law and is punishable by the state through fines, imprisonment, or other penalties." },

{ id: "types-of-crime", title: "Types of Crime Explained Simply", category: "law", content: "Crimes include violent crimes (assault), property crimes (theft), and financial crimes (fraud)." },

{ id: "criminal-liability", title: "Criminal Liability Explained Simply", category: "law", content: "Criminal liability means a person can be legally responsible and punished for committing a crime." },

{ id: "tort-law-basics", title: "Tort Law Explained Simply", category: "law", content: "Tort law deals with civil wrongs where one person harms another, and the victim can claim compensation." },

{ id: "negligence", title: "Negligence Explained Simply", category: "law", content: "Negligence occurs when someone fails to take reasonable care, causing harm or injury to another person." },

{ id: "defamation", title: "Defamation Explained Simply", category: "law", content: "Defamation is damaging someone’s reputation by making false statements about them." },

{ id: "liability-in-tort", title: "Tort Liability Explained Simply", category: "law", content: "Tort liability means a person must pay compensation for harm caused through wrongful actions or negligence." },

{ id: "constitutional-law-basics", title: "Constitutional Law Explained Simply", category: "law", content: "Constitutional law deals with the structure of government and the rights of citizens as defined in the constitution." },

{ id: "constitution-definition", title: "Constitution Explained Simply", category: "law", content: "A constitution is the supreme law of a country that sets out how government is organised and limits its power." },

{ id: "rule-of-law-law", title: "Rule of Law Explained Simply", category: "law", content: "Rule of law means everyone, including leaders, must obey the law and no one is above it." },

{ id: "human-rights-law", title: "Human Rights Explained Simply", category: "law", content: "Human rights are basic legal freedoms such as life, education, and freedom of speech that all people are entitled to." },

{ id: "fundamental-rights", title: "Fundamental Rights Explained Simply", category: "law", content: "Fundamental rights are basic rights protected by law, such as equality before the law and freedom of expression." },

{ id: "civil-law-basics", title: "Civil Law Explained Simply", category: "law", content: "Civil law deals with disputes between individuals or organisations, usually solved through compensation or agreements." },

{ id: "common-law", title: "Common Law Explained Simply", category: "law", content: "Common law is based on court decisions and legal precedents rather than written codes." },

{ id: "precedent", title: "Legal Precedent Explained Simply", category: "law", content: "A precedent is a past court decision used as a guide in similar future cases." },

{ id: "legal-system", title: "Legal System Explained Simply", category: "law", content: "A legal system is the framework of laws, courts, and institutions used to enforce justice in a country." },

{ id: "court-system", title: "Court System Explained Simply", category: "law", content: "The court system is where legal disputes are resolved and justice is administered." },

{ id: "judiciary-basics", title: "Judiciary Explained Simply", category: "law", content: "The judiciary is the branch of government that interprets laws and delivers justice in courts." },

{ id: "judicial-independence", title: "Judicial Independence Explained Simply", category: "law", content: "Judicial independence means courts make decisions without interference from government or politics." },

{ id: "trial-process", title: "Trial Process Explained Simply", category: "law", content: "The trial process is the legal procedure where evidence is presented and a judge decides the outcome." },

{ id: "burden-of-proof", title: "Burden of Proof Explained Simply", category: "law", content: "The burden of proof is the responsibility to prove that a claim or accusation is true." },

{ id: "presumption-of-innocence", title: "Presumption of Innocence Explained Simply", category: "law", content: "This principle means a person is considered innocent until proven guilty in court." },

{ id: "legal-reasoning", title: "Legal Reasoning Explained Simply", category: "law", content: "Legal reasoning is the process of applying laws and logic to reach fair court decisions." },

{ id: "police-role", title: "Role of Police Explained Simply", category: "law", content: "The police enforce laws, maintain order, and investigate crimes." },

{ id: "prosecution", title: "Prosecution Explained Simply", category: "law", content: "Prosecution is the legal process of bringing charges against someone accused of a crime." },

{ id: "defence-lawyer", title: "Defence Lawyer Explained Simply", category: "law", content: "A defence lawyer represents and protects the rights of someone accused of a crime." },

{ id: "human-rights-violation-law", title: "Human Rights Violation Explained Simply", category: "law", content: "A human rights violation occurs when a person’s basic freedoms are denied or abused illegally." },

{ id: "legal-justice", title: "Justice Explained Simply", category: "law", content: "Justice means fairness in the law, where people are treated equally and punished or protected fairly." },

{ id: "law-making-process", title: "Law Making Process Explained Simply", category: "law", content: "Law making involves proposing, debating, and passing laws through parliament or legislative bodies." },

{ id: "statutory-law", title: "Statutory Law Explained Simply", category: "law", content: "Statutory law is written law passed by a legislative body like parliament." },

{ id: "international-law", title: "International Law Explained Simply", category: "law", content: "International law governs relations between countries and includes treaties and agreements." },

{ id: "legal-ethics", title: "Legal Ethics Explained Simply", category: "law", content: "Legal ethics are rules that guide lawyers to act fairly, honestly, and responsibly." },
 { id: "introduction-economics", title: "Economics Basics Explained Simply", category: "economics", content: "Economics studies how people use limited resources." },
  { id: "inflation-basics", title: "What is Inflation? Explained Simply", category: "economics", content: "Inflation is the rise in prices over time." },
  { id: "gdp-basics", title: "What is GDP? Explained Simply", category: "economics", content: "GDP measures total economic output of a country." },
  { id: "supply-demand-basics", title: "Supply and Demand Explained Simply", category: "economics", content: "Supply and demand determine prices in markets." },
  { id: "unemployment-basics", title: "Unemployment Explained Simply", category: "economics", content: "Unemployment is when people seeking jobs cannot find work." },
  { id: "fiscal-policy-basics", title: "Fiscal Policy Explained Simply", category: "economics", content: "Government spending and taxation used to influence economy." },
{ id: "psychology-introduction", title: "Psychology Explained Simply", category: "social", content: "Psychology is the study of human behaviour, thoughts, emotions, and mental processes. It explains why people act the way they do, how they learn, and how experiences shape personality." },

{ id: "sociology-introduction", title: "Sociology Explained Simply", category: "social", content: "Sociology is the study of society and human relationships. It focuses on how people interact in groups, how institutions like family and education work, and how society influences behaviour." },

{ id: "culture", title: "Culture Explained Simply", category: "social", content: "Culture is the total way of life of a group of people. It includes language, beliefs, customs, traditions, food, music, and values that are passed from one generation to another." },

{ id: "socialisation", title: "Socialisation Explained Simply", category: "social", content: "Socialisation is the lifelong process through which individuals learn the norms, values, and behaviours of society. It happens through family, school, peers, media, and religion." },

{ id: "family-roles", title: "Family Roles Explained Simply", category: "social", content: "Family roles refer to the responsibilities and duties that each member of a family performs. For example, parents provide care and guidance, while children are expected to learn and respect rules." },

{ id: "peer-pressure", title: "Peer Pressure Explained Simply", category: "social", content: "Peer pressure is the influence that friends or people of the same age group have on an individual. It can be positive (encouraging good behaviour) or negative (leading to risky behaviour)." },

{ id: "identity", title: "Identity Explained Simply", category: "social", content: "Identity is how a person understands and defines themselves. It includes personal traits, beliefs, culture, nationality, and social roles that make someone unique." },

{ id: "gender-roles", title: "Gender Roles Explained Simply", category: "social", content: "Gender roles are social expectations about how males and females should behave. These roles vary across cultures and can change over time." },

{ id: "social-norms", title: "Social Norms Explained Simply", category: "social", content: "Social norms are unwritten rules that guide acceptable behaviour in society. They help maintain order and harmony by showing people how they are expected to act." },

{ id: "values", title: "Values Explained Simply", category: "social", content: "Values are deeply held beliefs about what is right or wrong. They guide behaviour and influence decisions in everyday life." },

{ id: "traditions", title: "Traditions Explained Simply", category: "social", content: "Traditions are customs and practices passed down from previous generations. They help preserve cultural identity and strengthen community bonds." },

{ id: "marriage", title: "Marriage Explained Simply", category: "social", content: "Marriage is a socially and legally recognised union between two people. It forms the basis of a family and involves rights, responsibilities, and commitment." },

{ id: "family-types", title: "Types of Family Explained Simply", category: "social", content: "Families can be nuclear (parents and children only) or extended (including relatives like grandparents, uncles, and cousins). Each type provides support and structure." },

{ id: "education-role", title: "Role of Education Explained Simply", category: "social", content: "Education helps individuals gain knowledge, skills, and values. It prepares people for employment and teaches them how to participate in society." },

{ id: "religion", title: "Religion Explained Simply", category: "social", content: "Religion is a system of beliefs and practices related to spirituality and the meaning of life. It often provides moral guidance and a sense of purpose." },

{ id: "social-problems", title: "Social Problems Explained Simply", category: "social", content: "Social problems are issues that negatively affect society, such as poverty, crime, unemployment, and inequality. They disrupt social stability and development." },

{ id: "poverty", title: "Poverty Explained Simply", category: "social", content: "Poverty is a condition where individuals or families lack basic necessities like food, shelter, clean water, and education due to low income." },

{ id: "unemployment", title: "Unemployment Explained Simply", category: "social", content: "Unemployment occurs when people who are able and willing to work cannot find jobs. It can lead to poverty and social problems." },

{ id: "crime", title: "Crime Explained Simply", category: "social", content: "Crime is any action that breaks the law and is punishable by the state. It includes theft, assault, fraud, and other illegal activities." },

{ id: "juvenile-delinquency", title: "Juvenile Delinquency Explained Simply", category: "social", content: "Juvenile delinquency refers to illegal or antisocial behaviour by young people, often caused by peer pressure, poverty, or lack of guidance." },

{ id: "drug-abuse", title: "Drug Abuse Explained Simply", category: "social", content: "Drug abuse is the misuse of legal or illegal substances in a way that harms health, behaviour, and social life." },

{ id: "health-and-wellbeing", title: "Health and Wellbeing Explained Simply", category: "social", content: "Health and wellbeing refer to a complete state of physical, mental, and social wellness, not just the absence of illness." },

{ id: "mental-health", title: "Mental Health Explained Simply", category: "social", content: "Mental health refers to emotional and psychological well-being. It affects how people think, feel, and handle stress." },

{ id: "conflict", title: "Conflict Explained Simply", category: "social", content: "Conflict is a disagreement or clash between individuals or groups caused by differences in interests, beliefs, or values." },

{ id: "conflict-resolution", title: "Conflict Resolution Explained Simply", category: "social", content: "Conflict resolution involves finding peaceful ways to settle disagreements through communication, negotiation, or compromise." },

{ id: "human-rights-social", title: "Human Rights Explained Simply", category: "social", content: "Human rights are basic freedoms and protections that every person is entitled to, such as the right to life, education, and freedom of speech." },

{ id: "gender-equality", title: "Gender Equality Explained Simply", category: "social", content: "Gender equality means that all people, regardless of gender, should have equal rights, opportunities, and treatment." },

{ id: "discrimination", title: "Discrimination Explained Simply", category: "social", content: "Discrimination is unfair treatment of people based on characteristics such as gender, race, age, or religion." },

{ id: "social-stratification", title: "Social Stratification Explained Simply", category: "social", content: "Social stratification is the division of society into different levels or classes based on wealth, power, or status." },

{ id: "urbanisation", title: "Urbanisation Explained Simply", category: "social", content: "Urbanisation is the movement of people from rural areas to cities, leading to growth of urban populations and infrastructure." },

{ id: "rural-life", title: "Rural Life Explained Simply", category: "social", content: "Rural life refers to living in countryside areas, where activities are often based on agriculture and close community relationships." },

{ id: "migration", title: "Migration Explained Simply", category: "social", content: "Migration is the movement of people from one place to another, either within a country or between countries, for work, safety, or better living conditions." },

{ id: "globalisation", title: "Globalisation Explained Simply", category: "social", content: "Globalisation is the process where countries become more connected through trade, technology, communication, and culture." },

{ id: "media-role", title: "Role of Media Explained Simply", category: "social", content: "Media plays a key role in informing, educating, and influencing public opinion on social and political issues." },

{ id: "social-media-impact", title: "Social Media Impact Explained Simply", category: "social", content: "Social media affects communication, relationships, education, and behaviour, with both positive and negative effects." },

{ id: "leadership", title: "Leadership Explained Simply", category: "social", content: "Leadership is the ability to guide, influence, and inspire others to achieve goals or make decisions." },

{ id: "citizenship-social", title: "Citizenship Explained Simply", category: "social", content: "Citizenship is the legal status of belonging to a country, with rights, duties, and responsibilities." },

{ id: "community", title: "Community Explained Simply", category: "social", content: "A community is a group of people who live in the same area or share common interests, values, or goals." },

{ id: "development", title: "Development Explained Simply", category: "social", content: "Development refers to improvements in living standards, infrastructure, education, health, and economic growth in a society." },

{ id: "human-rights-violation-social", title: "Human Rights Violation Explained Simply", category: "social", content: "Human rights violation occurs when individuals or groups are denied their basic rights through abuse, oppression, or unfair treatment." },


{ id: "states-of-matter", title: "States of Matter Explained", category: "science", content: "Matter exists in three main states: solid, liquid, and gas. In solids, particles are tightly packed and only vibrate. In liquids, particles are loosely packed and can flow. In gases, particles are far apart and move freely. Changes between states happen when energy (heat) is added or removed." },

{ id: "changes-of-state", title: "Changes of State Explained", category: "science", content: "Changes of state occur when matter gains or loses heat energy. Melting is solid to liquid, freezing is liquid to solid, boiling is liquid to gas, and condensation is gas to liquid. These changes do not alter the substance itself, only its physical form." },

{ id: "heat-transfer", title: "Heat Transfer Explained", category: "science", content: "Heat is transferred in three ways: conduction, convection, and radiation. Conduction happens in solids through particle vibration, convection occurs in fluids through movement of particles, and radiation transfers heat through electromagnetic waves without needing a medium." },

{ id: "conduction", title: "Conduction Explained", category: "science", content: "Conduction is the transfer of heat through direct contact, mainly in solids. Faster-moving particles pass energy to slower ones. Metals are good conductors because they have free electrons that transfer energy quickly." },

{ id: "convection", title: "Convection Explained", category: "science", content: "Convection is heat transfer in liquids and gases. When a fluid is heated, it becomes less dense and rises, while cooler, denser fluid sinks. This creates a circular movement called a convection current." },

{ id: "radiation", title: "Radiation Explained", category: "science", content: "Radiation is heat transfer through electromagnetic waves. It does not require a medium, so it can travel through space. The Sun heats the Earth mainly through radiation." },

{ id: "density", title: "Density Explained", category: "science", content: "Density is how much mass is packed into a given volume. It is calculated as mass divided by volume. High-density objects are heavier for their size, while low-density objects are lighter for their size." },

{ id: "pressure", title: "Pressure Explained", category: "science", content: "Pressure is force acting on a unit area. It increases when force increases or when the area decreases. This is why sharp objects cut better—they apply force over a smaller area." },

{ id: "atmospheric-pressure", title: "Atmospheric Pressure Explained", category: "science", content: "Atmospheric pressure is the force exerted by air due to its weight. It decreases with altitude because there is less air above pushing down." },

{ id: "water-cycle", title: "Water Cycle Explained", category: "science", content: "The water cycle is the continuous movement of water on Earth through evaporation, condensation, and precipitation. Sunlight causes evaporation, clouds form through condensation, and rain returns water to Earth." },

{ id: "weather-vs-climate", title: "Weather vs Climate Explained", category: "science", content: "Weather refers to short-term atmospheric conditions like rain or temperature. Climate is the long-term average pattern of weather in a region over many years." },

{ id: "rocks", title: "Types of Rocks Explained", category: "science", content: "Igneous rocks form from cooled magma, sedimentary rocks form from compressed sediments, and metamorphic rocks form when existing rocks are changed by heat and pressure." },

{ id: "soil", title: "Soil Explained", category: "science", content: "Soil is made of rock particles, organic matter, air, and water. It supports plant growth by providing nutrients and anchoring roots." },

{ id: "fossils", title: "Fossils Explained", category: "science", content: "Fossils are preserved remains or traces of ancient organisms. They form when organisms are buried quickly and replaced by minerals over time." },

{ id: "earth-structure", title: "Earth Structure Explained", category: "science", content: "The Earth has three main layers: the crust (outer solid layer), the mantle (semi-molten rock), and the core (mostly iron and nickel, very hot and dense)." },

{ id: "plate-tectonics", title: "Plate Tectonics Explained", category: "science", content: "The Earth's crust is divided into tectonic plates that move slowly. Their movement causes earthquakes, volcanoes, and mountain formation." },

{ id: "earthquakes", title: "Earthquakes Explained", category: "science", content: "Earthquakes happen when tectonic plates suddenly move, releasing energy as seismic waves that shake the ground." },

{ id: "volcanoes", title: "Volcanoes Explained", category: "science", content: "Volcanoes are openings in the Earth's crust where molten rock (magma), ash, and gases escape from below the surface." },

{ id: "gravity", title: "Gravity Explained", category: "science", content: "Gravity is the force that pulls objects toward the Earth’s centre. It gives objects weight and keeps planets in orbit around the Sun." },

{ id: "mass-vs-weight", title: "Mass vs Weight Explained", category: "science", content: "Mass is the amount of matter in an object and stays constant. Weight is the force of gravity acting on that mass and can change depending on location." },

{ id: "forces", title: "Forces Explained", category: "science", content: "A force is a push or pull that can change an object's motion, direction, or shape. Forces can be balanced or unbalanced." },

{ id: "friction", title: "Friction Explained", category: "science", content: "Friction is a force that opposes motion between two surfaces in contact. It can slow objects down but also helps with movement like walking." },

{ id: "speed", title: "Speed Explained", category: "science", content: "Speed is how fast an object moves. It is calculated by dividing distance travelled by time taken." },

{ id: "acceleration", title: "Acceleration Explained", category: "science", content: "Acceleration is the rate at which an object changes its speed or direction over time." },

{ id: "energy", title: "Energy Explained", category: "science", content: "Energy is the ability to do work or cause change. It exists in different forms such as kinetic, potential, heat, and chemical energy." },

{ id: "energy-conservation", title: "Conservation of Energy Explained", category: "science", content: "Energy cannot be created or destroyed; it only changes from one form to another." },

{ id: "electric-current", title: "Electric Current Explained", category: "science", content: "Electric current is the flow of electric charge through a conductor such as a wire." },

{ id: "voltage", title: "Voltage Explained", category: "science", content: "Voltage is the electrical force that pushes current through a circuit." },

{ id: "resistance", title: "Resistance Explained", category: "science", content: "Resistance is the opposition to the flow of electric current in a material." },



{ id: "what-is-history", title: "What is History?", category: "history", content: "History is the study of past events, especially how societies, countries, and people developed over time. It helps us understand how the present was shaped by the past." },

{ id: "sources-of-history", title: "Sources of History Explained", category: "history", content: "Sources of history are materials used to study the past. Primary sources include original evidence like letters and artefacts, while secondary sources include books and interpretations written later." },

{ id: "oral-tradition", title: "Oral Tradition Explained", category: "history", content: "Oral tradition is passing historical information through storytelling, songs, and spoken word from generation to generation, especially where written records are limited." },

{ id: "archaeology", title: "Archaeology Explained", category: "history", content: "Archaeology is the study of past human life through excavation and analysis of artefacts such as tools, bones, and buildings." },

{ id: "precolonial-africa", title: "Precolonial Africa Explained", category: "history", content: "Precolonial Africa refers to African societies before European colonisation, where kingdoms, trade systems, and cultures developed independently." },

{ id: "great-zimbabwe", title: "Great Zimbabwe Explained", category: "history", content: "Great Zimbabwe was a powerful medieval African kingdom known for its stone architecture and as a major trading centre in southern Africa." },

{ id: "trade-trans-saharan", title: "Trans-Saharan Trade Explained", category: "history", content: "Trans-Saharan trade was the exchange of goods like gold, salt, and slaves across the Sahara Desert linking North and West Africa." },

{ id: "colonialism", title: "Colonialism Explained", category: "history", content: "Colonialism is the control of one country over another territory, often exploiting its resources and people for economic gain." },

{ id: "scramble-for-africa", title: "Scramble for Africa Explained", category: "history", content: "The Scramble for Africa was the rapid colonisation of African territories by European powers in the late 19th century." },

{ id: "berlin-conference", title: "Berlin Conference Explained", category: "history", content: "The Berlin Conference (1884–1885) was a meeting where European powers divided Africa among themselves without African participation." },

{ id: "colonial-rule", title: "Colonial Rule Explained", category: "history", content: "Colonial rule refers to how European powers governed African territories, often using direct or indirect control systems." },

{ id: "indirect-rule", title: "Indirect Rule Explained", category: "history", content: "Indirect rule is a colonial system where Europeans governed through local chiefs and traditional leaders." },

{ id: "direct-rule", title: "Direct Rule Explained", category: "history", content: "Direct rule is a system where colonial powers controlled territories directly with their own officials." },

{ id: "resistance-movements", title: "African Resistance Movements", category: "history", content: "Resistance movements were efforts by Africans to fight against colonial control through war, protests, or diplomacy." },

{ id: "world-war-1", title: "World War 1 Explained", category: "history", content: "World War 1 (1914–1918) was a global conflict involving major world powers caused by alliances, nationalism, and political tensions." },

{ id: "treaty-of-versailles", title: "Treaty of Versailles Explained", category: "history", content: "The Treaty of Versailles ended World War 1 and imposed heavy penalties on Germany." },

{ id: "world-war-2", title: "World War 2 Explained", category: "history", content: "World War 2 (1939–1945) was a global war involving Allied and Axis powers caused by aggression and unresolved issues from WW1." },

{ id: "cold-war", title: "Cold War Explained", category: "history", content: "The Cold War was a period of tension between the USA and USSR without direct military conflict, mainly driven by ideology differences." },

{ id: "independence-movements", title: "Independence Movements", category: "history", content: "Independence movements were struggles by colonised countries to gain freedom from European rule." },

{ id: "decolonisation", title: "Decolonisation Explained", category: "history", content: "Decolonisation is the process where colonies gained independence from colonial powers after WW2." },

{ id: "nationalism", title: "Nationalism Explained", category: "history", content: "Nationalism is the belief in self-rule and pride in one’s nation, often driving independence struggles." },

{ id: "apartheid", title: "Apartheid Explained", category: "history", content: "Apartheid was a system of racial segregation in South Africa that separated people based on race." },

{ id: "civil-rights-movements", title: "Civil Rights Movements", category: "history", content: "Civil rights movements fought for equal rights and the end of discrimination in society." },

{ id: "cold-war-conflicts", title: "Cold War Conflicts", category: "history", content: "Cold War conflicts were indirect wars fought through allies, propaganda, and political influence." },

{ id: "united-nations", title: "United Nations Explained", category: "history", content: "The United Nations is an international organisation formed to maintain peace and cooperation between countries." },

{ id: "african-union", title: "African Union Explained", category: "history", content: "The African Union is an organisation that promotes unity, peace, and development in Africa." },

{ id: "post-independence-africa", title: "Post-Independence Africa", category: "history", content: "Post-independence Africa refers to African countries after gaining freedom, focusing on development and governance challenges." },

{ id: "economic-history", title: "Economic History Explained", category: "history", content: "Economic history studies how economies developed over time, including trade, agriculture, and industry." },

{ id: "industrial-revolution", title: "Industrial Revolution Explained", category: "history", content: "The Industrial Revolution was a period of major technological change that transformed production and industry." },

{ id: "transport-development", title: "Transport Development in History", category: "history", content: "Transport development shows how movement evolved from walking and animals to railways, cars, and aircraft." },

{ id: "communication-history", title: "Communication History Explained", category: "history", content: "Communication has evolved from oral messages and letters to telephones, internet, and digital media." },

{ id: "leadership-history", title: "Historical Leadership Explained", category: "history", content: "Historical leadership refers to leaders who shaped societies through political, military, or social influence." },

{ id: "historical-change", title: "Historical Change Explained", category: "history", content: "Historical change refers to how societies evolve over time due to events like wars, discoveries, and movements." },

{ id: "causes-of-war", title: "Causes of War Explained", category: "history", content: "Wars are caused by factors like competition for resources, political conflict, nationalism, and alliances." },

{ id: "effects-of-colonialism", title: "Effects of Colonialism", category: "history", content: "Colonialism affected Africa socially, politically, and economically, including loss of independence and resource exploitation." },

{ id: "heritage-preservation", title: "Heritage Preservation", category: "history", content: "Heritage preservation is the protection of historical sites, artefacts, and traditions for future generations." },

{ id: "historical-importance", title: "Importance of History", category: "history", content: "History helps us understand the past, learn from mistakes, and make better decisions for the future." },


{ id: "democracy-basics", title: "Democracy Explained Simply", category: "politics", content: "Democracy is a system where citizens choose leaders through voting and have a say in how the country is governed." },

{ id: "rule-of-law", title: "Rule of Law Explained Simply", category: "politics", content: "Rule of law means everyone, including leaders, must obey the law equally without special treatment." },

{ id: "constitution-basics", title: "Constitution Explained Simply", category: "politics", content: "A constitution is the supreme law of a country that defines government structure and protects citizens' rights." },

{ id: "human-rights", title: "Human Rights Explained Simply", category: "politics", content: "Human rights are basic freedoms and protections that every person has simply because they are human." },

{ id: "separation-of-powers", title: "Separation of Powers Explained Simply", category: "politics", content: "Government power is divided into executive, legislature, and judiciary to prevent abuse of power." },

{ id: "executive", title: "Executive Branch Explained Simply", category: "politics", content: "The executive branch enforces laws and runs the daily administration of the country." },

{ id: "legislature", title: "Legislature Explained Simply", category: "politics", content: "The legislature is responsible for making, debating, and passing laws." },

{ id: "judiciary", title: "Judiciary Explained Simply", category: "politics", content: "The judiciary interprets laws and ensures justice is delivered fairly in courts." },

{ id: "political-parties", title: "Political Parties Explained Simply", category: "politics", content: "Political parties are organised groups that compete in elections to form government." },

{ id: "voting-systems", title: "Voting Systems Explained Simply", category: "politics", content: "Voting systems are methods used to count votes and determine election winners." },

{ id: "citizenship", title: "Citizenship Explained Simply", category: "politics", content: "Citizenship is belonging to a country with rights like voting and duties like obeying laws." },

{ id: "democratic-rights", title: "Democratic Rights Explained Simply", category: "politics", content: "These are rights that allow citizens to participate in political decision-making such as voting and expressing opinions." },

{ id: "free-and-fair-elections", title: "Free and Fair Elections Explained Simply", category: "politics", content: "Elections where all eligible citizens can vote without fear, pressure, or corruption." },

{ id: "universal-suffrage", title: "Universal Suffrage Explained Simply", category: "politics", content: "Universal suffrage means all adult citizens have the right to vote." },

{ id: "voter-turnout", title: "Voter Turnout Explained Simply", category: "politics", content: "Voter turnout is the percentage of eligible voters who actually vote in an election." },

{ id: "political-ideologies", title: "Political Ideologies Explained Simply", category: "politics", content: "Political ideologies are belief systems that guide how governments should be run." },

{ id: "liberalism", title: "Liberalism Explained Simply", category: "politics", content: "Liberalism supports freedom, democracy, and individual rights." },

{ id: "conservatism", title: "Conservatism Explained Simply", category: "politics", content: "Conservatism supports tradition, stability, and gradual change in society." },

{ id: "socialism", title: "Socialism Explained Simply", category: "politics", content: "Socialism supports equal distribution of resources and public ownership of key services." },

{ id: "capitalism", title: "Capitalism Explained Simply", category: "politics", content: "Capitalism is an economic system based on private ownership and free markets." },

{ id: "political-stability", title: "Political Stability Explained Simply", category: "politics", content: "Political stability means a government runs smoothly without major conflict or disruption." },

{ id: "civil-society", title: "Civil Society Explained Simply", category: "politics", content: "Civil society includes organisations and groups that operate independently of government." },

{ id: "public-administration", title: "Public Administration Explained Simply", category: "politics", content: "Public administration is the implementation of government policies and public services." },

{ id: "cabinet", title: "Cabinet Explained Simply", category: "politics", content: "The cabinet is a group of top government ministers who assist the leader in decision-making." },

{ id: "opposition", title: "Opposition Explained Simply", category: "politics", content: "The opposition is made up of parties that are not in power but hold government accountable." },

{ id: "parliament", title: "Parliament Explained Simply", category: "politics", content: "Parliament is the institution responsible for making laws and representing citizens." },

{ id: "checks-and-balances", title: "Checks and Balances Explained Simply", category: "politics", content: "A system that ensures no branch of government becomes too powerful." },

{ id: "human-rights-violation", title: "Human Rights Violation Explained Simply", category: "politics", content: "This happens when basic freedoms and rights of individuals are ignored or abused." },

{ id: "gender-equality", title: "Gender Equality Explained Simply", category: "politics", content: "Gender equality means equal rights and opportunities for all genders." },

{ id: "discrimination", title: "Discrimination Explained Simply", category: "politics", content: "Discrimination is unfair treatment of people based on differences like race, gender, or religion." },

{ id: "social-stratification", title: "Social Stratification Explained Simply", category: "politics", content: "Social stratification is the division of society into different social classes." },

{ id: "urbanisation", title: "Urbanisation Explained Simply", category: "politics", content: "Urbanisation is the movement of people from rural areas to cities." },

{ id: "migration", title: "Migration Explained Simply", category: "politics", content: "Migration is the movement of people from one place to another for better opportunities or safety." },

{ id: "globalisation", title: "Globalisation Explained Simply", category: "politics", content: "Globalisation is the increasing connection between countries through trade, communication, and culture." },

{ id: "media-role", title: "Role of Media Explained Simply", category: "politics", content: "Media informs citizens, educates the public, and helps hold leaders accountable." },

{ id: "social-media-impact", title: "Social Media Impact Explained Simply", category: "politics", content: "Social media influences opinions, communication, and political awareness in society." },

{ id: "leadership", title: "Leadership Explained Simply", category: "politics", content: "Leadership is the ability to guide, influence, and direct others towards goals." },

{ id: "community", title: "Community Explained Simply", category: "politics", content: "A community is a group of people who live together or share common interests." },

{ id: "development", title: "Development Explained Simply", category: "politics", content: "Development means improving living standards, infrastructure, and quality of life in a country." },


{ id: "law-vs-criminal-law", title: "Civil Law vs Criminal Law Explained Simply", category: "law", content: "Civil law deals with disputes between people, while criminal law deals with crimes against society." },

{ id: "contract-law-basics", title: "Contract Law Explained Simply", category: "law", content: "Contract law governs agreements that are legally enforceable between two or more parties." },

{ id: "offer-and-acceptance", title: "Offer and Acceptance Explained Simply", category: "law", content: "A contract begins when one person makes an offer and the other agrees without changes." },

{ id: "consideration", title: "Consideration Explained Simply", category: "law", content: "Consideration is something valuable (money, service, goods) exchanged in a contract." },

{ id: "breach-of-contract", title: "Breach of Contract Explained Simply", category: "law", content: "A breach happens when one party fails to follow the terms of a contract." },

{ id: "criminal-law-basics", title: "Criminal Law Explained Simply", category: "law", content: "Criminal law deals with offences like theft, assault, and fraud against the state." },

{ id: "crime", title: "Crime Explained Simply", category: "law", content: "A crime is any act that breaks the law and is punishable by the state." },

{ id: "criminal-liability", title: "Criminal Liability Explained Simply", category: "law", content: "Criminal liability means a person can be legally punished for committing a crime." },

{ id: "tort-law-basics", title: "Tort Law Explained Simply", category: "law", content: "Tort law deals with civil wrongs where someone is harmed and can claim compensation." },

{ id: "negligence", title: "Negligence Explained Simply", category: "law", content: "Negligence is failing to take reasonable care, causing harm to another person." },

{ id: "defamation", title: "Defamation Explained Simply", category: "law", content: "Defamation is damaging someone's reputation by spreading false information." },

{ id: "constitutional-law", title: "Constitutional Law Explained Simply", category: "law", content: "Constitutional law deals with government structure and citizens' rights." },

{ id: "fundamental-rights", title: "Fundamental Rights Explained Simply", category: "law", content: "Fundamental rights are basic rights protected by law such as equality and freedom of speech." },

{ id: "civil-law", title: "Civil Law Explained Simply", category: "law", content: "Civil law deals with disputes between individuals or organisations." },

{ id: "common-law", title: "Common Law Explained Simply", category: "law", content: "Common law is based on court decisions and past cases (precedents)." },

{ id: "precedent", title: "Legal Precedent Explained Simply", category: "law", content: "A precedent is a past court decision used to guide future cases." },

{ id: "court-system", title: "Court System Explained Simply", category: "law", content: "The court system is where legal disputes are heard and justice is delivered." },

{ id: "judicial-independence", title: "Judicial Independence Explained Simply", category: "law", content: "Courts must make decisions without influence from politicians or government." },

{ id: "trial-process", title: "Trial Process Explained Simply", category: "law", content: "A trial is a court process where evidence is presented and a judgment is made." },

{ id: "burden-of-proof", title: "Burden of Proof Explained Simply", category: "law", content: "The burden of proof is the duty to prove that a claim is true in court." },

{ id: "presumption-of-innocence", title: "Presumption of Innocence Explained Simply", category: "law", content: "A person is considered innocent until proven guilty in court." },

{ id: "police-role", title: "Role of Police Explained Simply", category: "law", content: "Police enforce laws, prevent crime, and maintain public order." },

{ id: "prosecution", title: "Prosecution Explained Simply", category: "law", content: "Prosecution is the legal process of charging someone with a crime." },

{ id: "defence-lawyer", title: "Defence Lawyer Explained Simply", category: "law", content: "A defence lawyer represents and protects an accused person in court." },

{ id: "justice", title: "Justice Explained Simply", category: "law", content: "Justice means fairness in law where people are treated equally and fairly." },

{ id: "law-making-process", title: "Law Making Process Explained Simply", category: "law", content: "Laws are proposed, debated, and passed by parliament or lawmakers." },

{ id: "statutory-law", title: "Statutory Law Explained Simply", category: "law", content: "Statutory law is written law passed by parliament." },

{ id: "international-law", title: "International Law Explained Simply", category: "law", content: "International law governs relationships between countries." },

  { id: "law-vs-criminal-law", title: "Civil Law vs Criminal Law Explained Simply", category: "law", content: "Differences between civil and criminal law." },
  { id: "what-is-constitution", title: "What is a Constitution? Explained Simply", category: "law", content: "A constitution defines rules of a country." },
  { id: "what-is-human-rights", title: "What are Human Rights? Explained Simply", category: "law", content: "Human rights are basic freedoms for all people." },



{ id: "usa-democracy-overview", title: "US Democracy Explained", category: "usa-civics", content: "The United States is a representative democracy where citizens elect leaders to make laws and govern on their behalf. This system balances popular participation with structured government institutions." },

{ id: "usa-constitution-foundation", title: "US Constitution Explained", category: "usa-civics", content: "The US Constitution is the supreme law of the land. It defines government structure, limits powers, and protects individual rights." },

{ id: "usa-bill-of-rights", title: "Bill of Rights Explained", category: "usa-civics", content: "The Bill of Rights includes the first ten amendments, protecting freedoms such as speech, religion, press, and fair trial." },

{ id: "usa-separation-of-powers", title: "Separation of Powers", category: "usa-civics", content: "Government power is divided into three branches: legislative, executive, and judicial, preventing concentration of authority." },

{ id: "usa-checks-balances", title: "Checks and Balances", category: "usa-civics", content: "Each branch of government can limit the powers of the others to prevent abuse and maintain balance." },

{ id: "usa-federalism", title: "Federalism Explained", category: "usa-civics", content: "Power is shared between federal and state governments, allowing both national unity and regional autonomy." },

{ id: "usa-congress", title: "US Congress", category: "usa-civics", content: "Congress is the legislative branch responsible for making federal laws and is divided into the Senate and House of Representatives." },

{ id: "usa-senate", title: "US Senate", category: "usa-civics", content: "The Senate represents states equally, with two senators per state, and approves treaties and presidential appointments." },

{ id: "usa-house-representatives", title: "House of Representatives", category: "usa-civics", content: "The House represents citizens based on population size, ensuring proportional representation." },

{ id: "usa-president-role", title: "Role of the US President", category: "usa-civics", content: "The President is the head of state and government, responsible for enforcing laws and leading national policy." },

{ id: "usa-executive-branch", title: "Executive Branch", category: "usa-civics", content: "The executive branch implements and enforces laws, led by the President and federal agencies." },

{ id: "usa-judiciary", title: "Judicial Branch", category: "usa-civics", content: "The judiciary interprets laws and ensures they align with the Constitution." },

{ id: "usa-supreme-court", title: "Supreme Court", category: "usa-civics", content: "The Supreme Court is the highest court and has the final authority on constitutional interpretation." },

{ id: "usa-federal-courts", title: "Federal Courts System", category: "usa-civics", content: "Federal courts handle cases involving federal laws, constitutional issues, and disputes between states." },

{ id: "usa-state-government", title: "State Government", category: "usa-civics", content: "Each US state has its own government with powers over education, transport, and local laws." },

{ id: "usa-local-government", title: "Local Government", category: "usa-civics", content: "Local governments manage community services such as policing, schools, and infrastructure." },

{ id: "usa-elections", title: "US Elections", category: "usa-civics", content: "Elections allow citizens to choose representatives at federal, state, and local levels." },

{ id: "usa-electoral-college", title: "Electoral College", category: "usa-civics", content: "The Electoral College is the system used to elect the President based on state electoral votes." },

{ id: "usa-political-parties", title: "Political Parties", category: "usa-civics", content: "The two main parties are Democrats and Republicans, each with different political ideologies." },

{ id: "usa-voting-rights", title: "Voting Rights", category: "usa-civics", content: "Voting rights ensure citizens can participate in elections, with protections against discrimination." },

{ id: "usa-civil-rights", title: "Civil Rights Movement", category: "usa-civics", content: "The Civil Rights Movement fought against racial segregation and discrimination in the US." },

{ id: "usa-freedom-speech", title: "Freedom of Speech", category: "usa-civics", content: "Citizens can express opinions freely without government censorship, within legal limits." },

{ id: "usa-freedom-press", title: "Freedom of the Press", category: "usa-civics", content: "Media is free to report news and hold government accountable." },

{ id: "usa-religious-freedom", title: "Religious Freedom", category: "usa-civics", content: "Citizens can practice any religion or no religion without government interference." },

{ id: "usa-citizenship", title: "US Citizenship", category: "usa-civics", content: "Citizenship gives legal rights and responsibilities, including voting and obeying laws." },

{ id: "usa-public-opinion", title: "Public Opinion", category: "usa-civics", content: "Public opinion influences government decisions and policies through voter preferences." },

{ id: "usa-media-role", title: "Role of Media", category: "usa-civics", content: "Media informs citizens, shapes opinions, and monitors government actions." },

{ id: "usa-rule-of-law", title: "Rule of Law", category: "usa-civics", content: "All individuals, including leaders, must obey the law equally." },

{ id: "usa-constitution-amendments", title: "Constitutional Amendments", category: "usa-civics", content: "Amendments allow the Constitution to be updated to reflect societal changes." },

{ id: "usa-democratic-values", title: "Democratic Values", category: "usa-civics", content: "Core values include equality, freedom, justice, and participation." },

{ id: "usa-majority-rule", title: "Majority Rule", category: "usa-civics", content: "Decisions are made based on what most citizens vote for." },

{ id: "usa-minority-rights", title: "Minority Rights", category: "usa-civics", content: "Minority rights protect smaller groups from unfair treatment by the majority." },

{ id: "usa-political-ideology", title: "Political Ideology", category: "usa-civics", content: "Political ideology refers to beliefs about how government should function." },

{ id: "usa-liberalism", title: "Liberalism", category: "usa-civics", content: "Liberalism supports individual rights, democracy, and equality." },

{ id: "usa-conservatism", title: "Conservatism", category: "usa-civics", content: "Conservatism values tradition, stability, and gradual change." },

{ id: "usa-socialism", title: "Socialism", category: "usa-civics", content: "Socialism supports public ownership and equal distribution of resources." },

{ id: "usa-capitalism", title: "Capitalism", category: "usa-civics", content: "Capitalism is based on private ownership and free markets." },

{ id: "usa-taxation", title: "Taxation", category: "usa-civics", content: "Taxes fund public services like education, healthcare, and infrastructure." },

{ id: "usa-government-services", title: "Government Services", category: "usa-civics", content: "Government provides essential services such as safety, education, and healthcare." },

{ id: "usa-public-policy", title: "Public Policy", category: "usa-civics", content: "Public policy refers to government decisions that affect society." },

{ id: "usa-political-debates", title: "Political Debates", category: "usa-civics", content: "Debates allow leaders to discuss issues and present policies to the public." },

{ id: "usa-election-campaigns", title: "Election Campaigns", category: "usa-civics", content: "Campaigns are activities used by candidates to gain voter support." },

{ id: "usa-lobbying", title: "Lobbying Explained", category: "usa-civics", content: "Lobbying is when groups try to influence government decisions." },

{ id: "usa-corruption", title: "Corruption Explained", category: "usa-civics", content: "Corruption is the abuse of power for personal gain, undermining trust in government." },

{ id: "usa-accountability", title: "Government Accountability", category: "usa-civics", content: "Officials must explain and take responsibility for their actions." },

{ id: "usa-transparency", title: "Transparency", category: "usa-civics", content: "Government decisions should be open and accessible to the public." },

{ id: "usa-civil-society", title: "Civil Society", category: "usa-civics", content: "Civil society includes NGOs and groups independent of government." },

{ id: "usa-human-rights", title: "Human Rights", category: "usa-civics", content: "Human rights protect dignity, freedom, and equality for all individuals." },

{ id: "usa-rule-of-majority", title: "Rule of Majority", category: "usa-civics", content: "Decisions are based on majority votes in democratic processes." },

{ id: "usa-political-participation", title: "Political Participation", category: "usa-civics", content: "Citizens participate through voting, protests, and civic engagement." },

{ id: "usa-judicial-review", title: "Judicial Review", category: "usa-civics", content: "Courts can review laws to ensure they align with the Constitution." },

{ id: "usa-democracy-importance", title: "Importance of Democracy", category: "usa-civics", content: "Democracy ensures freedom, equality, and citizen participation in governance." },


{ id: "canada-democracy-overview", title: "Canadian Democracy Explained", category: "canada-civics", content: "Canada is a parliamentary democracy where citizens elect representatives to make laws and govern on their behalf." },

{ id: "canada-constitutional-monarchy", title: "Constitutional Monarchy Explained", category: "canada-civics", content: "Canada is a constitutional monarchy where the King is the head of state, but real political power is exercised by elected officials." },

{ id: "canada-constitution", title: "Canadian Constitution Explained", category: "canada-civics", content: "The Constitution defines Canada’s political structure, rights, and division of powers between federal and provincial governments." },

{ id: "canada-charter-rights", title: "Charter of Rights and Freedoms", category: "canada-civics", content: "The Charter protects fundamental freedoms such as speech, religion, equality, and legal rights for all citizens." },

{ id: "canada-rule-of-law", title: "Rule of Law in Canada", category: "canada-civics", content: "Rule of law ensures that everyone, including government leaders, must obey the law equally." },

{ id: "canada-parliament", title: "Canadian Parliament Explained", category: "canada-civics", content: "Parliament is the federal legislative body made up of the House of Commons and the Senate." },

{ id: "canada-house-commons", title: "House of Commons", category: "canada-civics", content: "The House of Commons is composed of elected representatives who debate and pass laws." },

{ id: "canada-senate", title: "Canadian Senate", category: "canada-civics", content: "The Senate reviews legislation passed by the House of Commons and provides regional representation." },

{ id: "canada-prime-minister", title: "Prime Minister of Canada", category: "canada-civics", content: "The Prime Minister is the head of government and leads national decision-making." },

{ id: "canada-governor-general", title: "Governor General Explained", category: "canada-civics", content: "The Governor General represents the King in Canada and performs ceremonial duties." },

{ id: "canada-federalism", title: "Canadian Federalism", category: "canada-civics", content: "Power is shared between federal and provincial governments to balance national unity and regional needs." },

{ id: "canada-provinces", title: "Provinces and Territories", category: "canada-civics", content: "Canada is divided into provinces and territories, each with its own government and responsibilities." },

{ id: "canada-local-government", title: "Local Government in Canada", category: "canada-civics", content: "Local governments manage community services such as transport, schools, and policing." },

{ id: "canada-elections", title: "Elections in Canada", category: "canada-civics", content: "Citizens vote in regular elections to choose Members of Parliament." },

{ id: "canada-voting-system", title: "Voting System Explained", category: "canada-civics", content: "Canada uses the first-past-the-post system where the candidate with most votes wins." },

{ id: "canada-political-parties", title: "Political Parties in Canada", category: "canada-civics", content: "Major parties include Liberal Party, Conservative Party, and New Democratic Party (NDP)." },

{ id: "canada-citizenship", title: "Canadian Citizenship", category: "canada-civics", content: "Citizenship gives rights like voting and responsibilities like obeying laws." },

{ id: "canada-rights-responsibilities", title: "Rights and Responsibilities", category: "canada-civics", content: "Citizens have rights protected by law and responsibilities like respecting others and participating in democracy." },

{ id: "canada-human-rights", title: "Human Rights in Canada", category: "canada-civics", content: "Human rights ensure equality, dignity, and freedom for all individuals." },

{ id: "canada-equality-law", title: "Equality Under Law", category: "canada-civics", content: "All people are treated equally under Canadian law regardless of background." },

{ id: "canada-freedom-speech", title: "Freedom of Speech", category: "canada-civics", content: "Citizens can express opinions freely within legal limits." },

{ id: "canada-freedom-religion", title: "Freedom of Religion", category: "canada-civics", content: "People can practice any religion or none without government interference." },

{ id: "canada-freedom-press", title: "Freedom of the Press", category: "canada-civics", content: "Media can report freely and hold leaders accountable." },

{ id: "canada-justice-system", title: "Canadian Justice System", category: "canada-civics", content: "The justice system ensures fairness through courts, judges, and laws." },

{ id: "canada-supreme-court", title: "Supreme Court of Canada", category: "canada-civics", content: "The Supreme Court is the highest court and final authority on legal interpretation." },

{ id: "canada-judiciary", title: "Judiciary in Canada", category: "canada-civics", content: "The judiciary interprets laws and ensures justice is applied fairly." },

{ id: "canada-constitution-act", title: "Constitution Act 1982", category: "canada-civics", content: "This act officially patriated Canada’s Constitution and introduced the Charter of Rights." },

{ id: "canada-democratic-values", title: "Democratic Values", category: "canada-civics", content: "Canada values fairness, equality, participation, and rule of law." },

{ id: "canada-public-opinion", title: "Public Opinion", category: "canada-civics", content: "Public opinion influences government decisions through elections and surveys." },

{ id: "canada-media-role", title: "Role of Media", category: "canada-civics", content: "Media informs citizens and monitors government actions." },

{ id: "canada-civil-society", title: "Civil Society", category: "canada-civics", content: "Civil society includes NGOs and groups that influence public policy." },

{ id: "canada-lobbying", title: "Lobbying Explained", category: "canada-civics", content: "Lobbying is when groups try to influence government decisions." },

{ id: "canada-accountability", title: "Government Accountability", category: "canada-civics", content: "Government officials must explain and justify their decisions." },

{ id: "canada-transparency", title: "Transparency", category: "canada-civics", content: "Government actions should be open and accessible to the public." },

{ id: "canada-corruption", title: "Corruption Explained", category: "canada-civics", content: "Corruption is misuse of power for personal benefit." },

{ id: "canada-public-services", title: "Public Services", category: "canada-civics", content: "Government provides healthcare, education, and infrastructure services." },

{ id: "canada-healthcare", title: "Public Healthcare System", category: "canada-civics", content: "Canada has publicly funded healthcare accessible to all citizens." },

{ id: "canada-education-system", title: "Education System", category: "canada-civics", content: "Education is managed by provinces and is publicly funded." },

{ id: "canada-taxation", title: "Taxation System", category: "canada-civics", content: "Taxes fund public services like healthcare and education." },

{ id: "canada-budget", title: "Government Budget", category: "canada-civics", content: "The government budget outlines spending and revenue for public services." },

{ id: "canada-economic-policy", title: "Economic Policy", category: "canada-civics", content: "Economic policy manages inflation, employment, and national growth." },

{ id: "canada-immigration", title: "Immigration Policy", category: "canada-civics", content: "Canada has a structured immigration system to attract skilled workers." },

{ id: "canada-multiculturalism", title: "Multiculturalism", category: "canada-civics", content: "Canada promotes diversity and cultural inclusion in society." },

{ id: "canada-national-symbols", title: "National Symbols", category: "canada-civics", content: "Symbols like the maple leaf represent Canadian identity." },

{ id: "canada-civic-participation", title: "Civic Participation", category: "canada-civics", content: "Citizens participate through voting, volunteering, and public engagement." },

{ id: "canada-majority-rule", title: "Majority Rule", category: "canada-civics", content: "Decisions are made based on majority vote in democratic processes." },

{ id: "canada-minority-rights", title: "Minority Rights", category: "canada-civics", content: "Minority rights protect small groups from discrimination." },

{ id: "canada-political-stability", title: "Political Stability", category: "canada-civics", content: "Canada has a stable democratic system with peaceful transitions of power." },

{ id: "canada-election-campaigns", title: "Election Campaigns", category: "canada-civics", content: "Candidates promote policies to gain voter support during elections." },

{ id: "canada-party-leaders", title: "Party Leaders", category: "canada-civics", content: "Each political party has a leader who represents it nationally." },

{ id: "canada-debates", title: "Political Debates", category: "canada-civics", content: "Debates allow leaders to present policies and challenge opponents." },

{ id: "canada-referendums", title: "Referendums", category: "canada-civics", content: "Referendums allow citizens to vote directly on major issues." },

{ id: "canada-law-making", title: "Law Making Process", category: "canada-civics", content: "Laws are proposed, debated, voted on, and approved by Parliament." },

{ id: "canada-court-system", title: "Court System Overview", category: "canada-civics", content: "Courts interpret laws and resolve disputes in Canada’s justice system." },

{ id: "canada-constitutional-rights", title: "Constitutional Rights", category: "canada-civics", content: "These are rights protected by the Constitution and Charter." },

{ id: "canada-democracy-importance", title: "Importance of Democracy", category: "canada-civics", content: "Democracy ensures freedom, equality, and citizen participation in governance." },


{ id: "sweden-democracy-overview", title: "Swedish Democracy Explained", category: "sweden-civics", content: "Sweden is a parliamentary democracy where citizens elect representatives to the Riksdag to make national decisions." },

{ id: "sweden-parliament", title: "The Riksdag Explained", category: "sweden-civics", content: "The Riksdag is Sweden’s parliament and the main legislative body responsible for making laws." },

{ id: "sweden-constitution", title: "Swedish Constitution Explained", category: "sweden-civics", content: "Sweden’s Constitution consists of fundamental laws that protect democracy, freedom, and government structure." },

{ id: "sweden-constitutional-laws", title: "Fundamental Laws of Sweden", category: "sweden-civics", content: "Sweden has four fundamental laws that protect freedom of speech, press, succession, and governance." },

{ id: "sweden-monarchy", title: "Constitutional Monarchy", category: "sweden-civics", content: "Sweden is a constitutional monarchy where the King is the ceremonial head of state but has no political power." },

{ id: "sweden-prime-minister", title: "Prime Minister of Sweden", category: "sweden-civics", content: "The Prime Minister is the head of government and leads the executive branch." },

{ id: "sweden-government", title: "Swedish Government System", category: "sweden-civics", content: "The government executes laws passed by the Riksdag and manages national administration." },

{ id: "sweden-rule-of-law", title: "Rule of Law in Sweden", category: "sweden-civics", content: "Rule of law ensures that everyone, including leaders, is subject to Swedish law equally." },

{ id: "sweden-separation-powers", title: "Separation of Powers Sweden", category: "sweden-civics", content: "Power is divided between the Riksdag, government, and independent courts to ensure balance." },

{ id: "sweden-courts", title: "Swedish Court System", category: "sweden-civics", content: "Courts in Sweden interpret laws and ensure justice is applied fairly." },

{ id: "sweden-supreme-court", title: "Supreme Court of Sweden", category: "sweden-civics", content: "The Supreme Court is the highest judicial authority in Sweden." },

{ id: "sweden-administrative-courts", title: "Administrative Courts", category: "sweden-civics", content: "These courts handle disputes between citizens and government authorities." },

{ id: "sweden-elections", title: "Elections in Sweden", category: "sweden-civics", content: "Sweden holds elections every four years for the Riksdag, regional, and local councils." },

{ id: "sweden-voting-system", title: "Swedish Voting System", category: "sweden-civics", content: "Sweden uses proportional representation, meaning seats are allocated based on vote share." },

{ id: "sweden-political-parties", title: "Political Parties in Sweden", category: "sweden-civics", content: "Major parties include Social Democrats, Moderates, Sweden Democrats, and others." },

{ id: "sweden-multiparty-system", title: "Multi-Party System Sweden", category: "sweden-civics", content: "Sweden has many political parties that form coalition governments." },

{ id: "sweden-citizenship", title: "Swedish Citizenship", category: "sweden-civics", content: "Citizenship grants rights such as voting and responsibilities like obeying laws." },

{ id: "sweden-rights-freedoms", title: "Rights and Freedoms", category: "sweden-civics", content: "Citizens enjoy freedoms like speech, religion, and press under constitutional protection." },

{ id: "sweden-human-rights", title: "Human Rights in Sweden", category: "sweden-civics", content: "Sweden strongly protects human rights and promotes equality and dignity." },

{ id: "sweden-freedom-press", title: "Freedom of the Press Sweden", category: "sweden-civics", content: "Media in Sweden is free to report without government censorship." },

{ id: "sweden-freedom-speech", title: "Freedom of Speech Sweden", category: "sweden-civics", content: "Citizens can express opinions freely within legal limits." },

{ id: "sweden-freedom-religion", title: "Freedom of Religion Sweden", category: "sweden-civics", content: "Individuals can practice any religion or none without interference." },

{ id: "sweden-public-opinion", title: "Public Opinion Sweden", category: "sweden-civics", content: "Public opinion influences political decisions through elections and media." },

{ id: "sweden-media-role", title: "Role of Media Sweden", category: "sweden-civics", content: "Media informs citizens and holds government accountable." },

{ id: "sweden-civil-society", title: "Civil Society Sweden", category: "sweden-civics", content: "Civil society includes NGOs and organizations that influence public policy." },

{ id: "sweden-lobbying", title: "Lobbying in Sweden", category: "sweden-civics", content: "Lobbying involves influencing government decisions through advocacy groups." },

{ id: "sweden-accountability", title: "Government Accountability Sweden", category: "sweden-civics", content: "Government officials must justify their actions to the public and parliament." },

{ id: "sweden-transparency", title: "Transparency Sweden", category: "sweden-civics", content: "Sweden has strong transparency laws allowing public access to government information." },

{ id: "sweden-corruption", title: "Corruption in Sweden", category: "sweden-civics", content: "Sweden has very low corruption due to strong institutions and transparency." },

{ id: "sweden-local-government", title: "Local Government Sweden", category: "sweden-civics", content: "Municipalities manage services like schools, healthcare, and infrastructure." },

{ id: "sweden-regional-government", title: "Regional Government Sweden", category: "sweden-civics", content: "Regions manage healthcare and public transport services." },

{ id: "sweden-welfare-state", title: "Welfare State Sweden", category: "sweden-civics", content: "Sweden provides extensive public services like healthcare, education, and social support." },

{ id: "sweden-healthcare", title: "Healthcare System Sweden", category: "sweden-civics", content: "Healthcare is publicly funded and accessible to all citizens." },

{ id: "sweden-education-system", title: "Education System Sweden", category: "sweden-civics", content: "Education is free and publicly funded from primary to university level." },

{ id: "sweden-taxation", title: "Taxation in Sweden", category: "sweden-civics", content: "High taxes fund extensive public services and welfare programs." },

{ id: "sweden-budget", title: "Government Budget Sweden", category: "sweden-civics", content: "The budget determines spending on public services and national priorities." },

{ id: "sweden-immigration", title: "Immigration Policy Sweden", category: "sweden-civics", content: "Sweden has structured immigration policies focusing on asylum and skilled migration." },

{ id: "sweden-integration", title: "Integration in Sweden", category: "sweden-civics", content: "Integration policies help immigrants adapt to Swedish society." },

{ id: "sweden-equality", title: "Equality in Sweden", category: "sweden-civics", content: "Sweden strongly promotes gender equality and social fairness." },

{ id: "sweden-democratic-values", title: "Democratic Values Sweden", category: "sweden-civics", content: "Values include equality, freedom, participation, and transparency." },

{ id: "sweden-election-campaigns", title: "Election Campaigns Sweden", category: "sweden-civics", content: "Parties promote policies to gain voter support during elections." },

{ id: "sweden-coalition-government", title: "Coalition Governments Sweden", category: "sweden-civics", content: "Since no party often wins alone, parties form coalitions to govern." },

{ id: "sweden-majority-rule", title: "Majority Rule Sweden", category: "sweden-civics", content: "Decisions are made based on majority votes in parliament." },

{ id: "sweden-minority-rights", title: "Minority Rights Sweden", category: "sweden-civics", content: "Minority groups are protected against discrimination." },

{ id: "sweden-public-services", title: "Public Services Sweden", category: "sweden-civics", content: "Government provides healthcare, education, transport, and welfare services." },

{ id: "sweden-political-stability", title: "Political Stability Sweden", category: "sweden-civics", content: "Sweden is known for stable democratic governance and peaceful transitions." },

{ id: "sweden-civic-participation", title: "Civic Participation Sweden", category: "sweden-civics", content: "Citizens participate through voting, discussions, and civic engagement." },

{ id: "sweden-referendums", title: "Referendums Sweden", category: "sweden-civics", content: "Citizens may vote directly on important national issues." },

{ id: "sweden-law-making", title: "Law Making Process Sweden", category: "sweden-civics", content: "Laws are proposed, debated in the Riksdag, and voted into law." },

{ id: "sweden-democracy-importance", title: "Importance of Democracy Sweden", category: "sweden-civics", content: "Democracy ensures freedom, equality, and citizen participation in governance." },


{ id: "math-number-system", title: "Number System Explained", category: "math", content: "The number system includes natural numbers, integers, rational, and irrational numbers. It forms the foundation of all mathematics and is used to classify and operate with different types of quantities." },

{ id: "math-natural-numbers", title: "Natural Numbers", category: "math", content: "Natural numbers are positive counting numbers starting from 1. They are used for basic counting and ordering in everyday life." },

{ id: "math-integers-deep", title: "Integers Explained Deeply", category: "math", content: "Integers include positive numbers, negative numbers, and zero. They are essential for representing gains, losses, temperature changes, and financial calculations." },

{ id: "math-whole-numbers", title: "Whole Numbers", category: "math", content: "Whole numbers include zero and all natural numbers. They do not include fractions or decimals and are used in basic counting systems." },

{ id: "math-rational-numbers", title: "Rational Numbers", category: "math", content: "Rational numbers are numbers that can be expressed as a fraction of two integers. They include terminating and repeating decimals." },

{ id: "math-irrational-numbers", title: "Irrational Numbers", category: "math", content: "Irrational numbers cannot be written as simple fractions. Their decimal form continues infinitely without repeating patterns, such as π and √2." },

{ id: "math-decimals-deep", title: "Decimals Explained", category: "math", content: "Decimals represent fractions in base-10 form. They are widely used in money, measurement, and scientific calculations." },

{ id: "math-fractions-deep", title: "Fractions Explained Deeply", category: "math", content: "Fractions show parts of a whole and consist of numerator and denominator. They are essential for division, ratios, and real-world problem solving." },

{ id: "math-percentages-deep", title: "Percentages Explained", category: "math", content: "Percentages represent values out of 100 and are used in discounts, interest rates, statistics, and comparisons." },

{ id: "math-ratio-deep", title: "Ratio Explained", category: "math", content: "A ratio compares two or more quantities and shows their relative sizes. It is widely used in scaling, recipes, and map reading." },

{ id: "math-proportion-deep", title: "Proportion Explained", category: "math", content: "A proportion states that two ratios are equal. It is used in scaling drawings, solving unknown values, and geometry." },

{ id: "math-algebra-intro", title: "Introduction to Algebra", category: "math", content: "Algebra introduces variables (letters) to represent unknown values. It allows general problem-solving instead of fixed numbers." },

{ id: "math-expressions", title: "Algebraic Expressions", category: "math", content: "Expressions combine numbers, variables, and operations but do not include equality signs. They represent mathematical phrases." },

{ id: "math-linear-equations-deep", title: "Linear Equations Explained", category: "math", content: "Linear equations represent straight-line relationships between variables. They are used to model real-world constant-rate problems." },

{ id: "math-solving-equations", title: "Solving Equations", category: "math", content: "Solving equations means finding the unknown value that makes both sides equal using inverse operations." },

{ id: "math-factorisation-deep", title: "Factorisation", category: "math", content: "Factorisation breaks expressions into simpler multiplying components. It is important for solving quadratic equations and simplifying algebra." },

{ id: "math-expansion-deep", title: "Expansion", category: "math", content: "Expansion removes brackets by multiplying each term. It is the reverse of factorisation." },

{ id: "math-bodmas-deep", title: "BODMAS Rule Explained", category: "math", content: "BODMAS defines order of operations: Brackets, Orders, Division, Multiplication, Addition, Subtraction. It ensures correct calculation results." },

{ id: "math-powers", title: "Indices and Powers", category: "math", content: "Powers represent repeated multiplication of a number. They are used in scientific notation and exponential growth." },

{ id: "math-square-roots-deep", title: "Square Roots Explained", category: "math", content: "A square root is a number that produces a given value when multiplied by itself. It is the inverse of squaring." },

{ id: "math-cubes-deep", title: "Cubes and Cube Roots", category: "math", content: "Cubes involve multiplying a number three times. Cube roots reverse this process and are used in volume calculations." },

{ id: "math-geometry-intro", title: "Introduction to Geometry", category: "math", content: "Geometry studies shapes, sizes, angles, and spatial relationships in both 2D and 3D space." },

{ id: "math-lines-angles", title: "Lines and Angles", category: "math", content: "Lines extend infinitely while angles measure the rotation between two lines. They form the basis of geometric study." },

{ id: "math-triangles-deep", title: "Triangles Explained", category: "math", content: "Triangles are 3-sided shapes classified by sides and angles. They are fundamental in geometry and trigonometry." },

{ id: "math-pythagoras-deep", title: "Pythagoras Theorem", category: "math", content: "In right-angled triangles, the square of the hypotenuse equals the sum." },

{ id: "math-area-rectangle", title: "Area of a Rectangle Explained", category: "math", content: "Area is found using length × width. Example: if length = 8 cm and width = 5 cm, then area = 8 × 5 = 40 cm². It measures the space inside a rectangle in square units." },

{ id: "math-perimeter-rectangle", title: "Perimeter of a Rectangle", category: "math", content: "Perimeter is 2(length + width). Example: 2(10 + 6) = 32 cm. It measures the total distance around a rectangle." },

{ id: "math-area-circle", title: "Area of a Circle", category: "math", content: "Area is πr². Example: if r = 7, area = 3.14 × 7 × 7 = 153.86 cm². It measures space inside a circle." },

{ id: "math-circumference", title: "Circumference of a Circle", category: "math", content: "Circumference is 2πr. Example: r = 10 gives 2 × 3.14 × 10 = 62.8 cm. It is the distance around a circle." },

{ id: "math-mean", title: "Mean (Average)", category: "math", content: "Mean is sum of values divided by number of values. Example: (5 + 10 + 15) ÷ 3 = 10. It represents the central value of data." },

{ id: "math-median", title: "Median Explained", category: "math", content: "Median is the middle number in ordered data. Example: 2, 4, 6 → median = 4. It is useful when data has extremes." },

{ id: "math-mode", title: "Mode Explained", category: "math", content: "Mode is the most frequent value. Example: 2, 2, 3, 4 → mode = 2. It shows the most common result." },

{ id: "math-probability", title: "Probability Explained", category: "math", content: "Probability = favourable outcomes ÷ total outcomes. Example: even number on dice = 3/6 = 1/2. It measures chance of events." },

{ id: "math-linear-equation", title: "Linear Equations", category: "math", content: "Linear equations solve for unknown values. Example: x + 5 = 12 → x = 7. They form straight-line graphs." },

{ id: "math-two-step-equations", title: "Two-Step Equations", category: "math", content: "Solve by reversing operations. Example: 2x + 4 = 12 → 2x = 8 → x = 4. Used in real-world problem solving." },

{ id: "math-gradient", title: "Gradient (Slope)", category: "math", content: "Gradient = change in y ÷ change in x. Example: (10-2)/(5-1) = 8/4 = 2. It measures steepness of a line." },

{ id: "math-pythagoras", title: "Pythagoras Theorem", category: "math", content: "a² + b² = c². Example: 3² + 4² = 9 + 16 = 25, so c = 5. Used in right-angled triangles." },

{ id: "math-fractions-addition", title: "Adding Fractions", category: "math", content: "Fractions are added by making denominators equal. Example: 1/4 + 1/4 = 2/4 = 1/2. Used in measurement and sharing." },

{ id: "math-fractions-subtraction", title: "Subtracting Fractions", category: "math", content: "Subtract numerators when denominators are same. Example: 5/6 - 1/6 = 4/6 = 2/3. Used in comparisons." },

{ id: "math-percentages", title: "Percentages Explained", category: "math", content: "Percentage = (part ÷ whole) × 100. Example: 20/50 × 100 = 40%. Used in discounts and statistics." },

{ id: "math-algebra-expansion", title: "Expanding Brackets", category: "math", content: "Multiply each term. Example: 2(x + 3) = 2x + 6. Used in simplifying expressions." },

{ id: "math-range", title: "Range in Data", category: "math", content: "Range = highest - lowest. Example: 15 - 5 = 10. It shows data spread." },

{ id: "math-sequences", title: "Number Sequences", category: "math", content: "Sequences follow patterns. Example: 2, 4, 6, 8 increases by +2 each time." },

{ id: "math-arithmetic-sequence", title: "Arithmetic Sequence", category: "math", content: "Each term increases by a fixed number. Example: 3, 6, 9, 12 (+3 pattern)." },

{ id: "math-geometric-sequence", title: "Geometric Sequence", category: "math", content: "Each term multiplies by a fixed ratio. Example: 2, 4, 8, 16 (×2 pattern)." },

{ id: "math-square-roots", title: "Square Roots", category: "math", content: "Square root reverses squaring. Example: √25 = 5 because 5 × 5 = 25." },

{ id: "math-cubes", title: "Cubes and Cube Roots", category: "math", content: "Cube multiplies number three times. Example: 2³ = 8, cube root of 8 = 2." },

{ id: "math-area-triangle", title: "Area of Triangle", category: "math", content: "Area = 1/2 × base × height. Example: 1/2 × 10 × 6 = 30. Used in geometry." },

{ id: "math-statistics", title: "Statistics Basics", category: "math", content: "Statistics involves data collection and analysis for decision making." },

{ id: "math-sets", title: "Sets Explained", category: "math", content: "A set is a collection of objects. Example: {1,2,3} is a set of numbers." },

{ id: "math-functions", title: "Functions Explained", category: "math", content: "A function links input to output. Example: f(x)=2x means if x=3, output=6." },

{ id: "math-graphs", title: "Graphs Explained", category: "math", content: "Graphs show relationships visually using points and lines on axes." },

{ id: "math-linear-graphs", title: "Linear Graphs", category: "math", content: "Linear graphs form straight lines showing constant change." },

{ id: "math-intercepts", title: "X and Y Intercepts", category: "math", content: "Intercepts are where graphs touch axes, helping identify equation solutions." },

{ id: "math-quadratic-equations", title: "Quadratic Equations", category: "math", content: "Equations with x² forming curves. Example: x² = 9 → x = ±3." },

{ id: "math-parabola", title: "Parabola Explained", category: "math", content: "A parabola is a U-shaped curve from quadratic equations." },

{ id: "math-bodmas", title: "BODMAS Rule", category: "math", content: "Order of operations: Brackets, Orders, Division, Multiplication, Addition, Subtraction." },


{ id: "cs-setup-first-program", title: "How to Write Your First Program", category: "computer-science", content: "Step 1: Install Python. Step 2: Open editor. Step 3: Write code. Example: print('Hello World'). Step 4: Run file. Output shows text on screen. This is the foundation of all programming." },

{ id: "cs-variables-deep", title: "Variables Explained Step by Step", category: "computer-science", content: "Step 1: A variable stores data. Step 2: Assign value. Example: x = 10. Step 3: Use it. Example: print(x) outputs 10. Variables are used everywhere in software systems." },

{ id: "cs-user-input", title: "Getting User Input", category: "computer-science", content: "Step 1: Ask user for data. Step 2: Store input. Example (Python): name = input('Enter name: '). Step 3: Display result. print('Hello', name). Used in login systems and apps." },

{ id: "cs-conditionals-deep", title: "If-Else Logic Step by Step", category: "computer-science", content: "Step 1: Check condition. Step 2: If true run block. Step 3: Else run alternative. Example: if age >= 18: print('Adult') else: print('Minor'). Used in decision systems." },

{ id: "cs-loops-deep", title: "Loops Step by Step", category: "computer-science", content: "Step 1: Define repeat rule. Step 2: Run code multiple times. Example: for i in range(5): print(i). Output: 0 1 2 3 4. Used in games and automation." },

{ id: "cs-functions-deep", title: "Functions Step by Step", category: "computer-science", content: "Step 1: Define function. Step 2: Add logic. Step 3: Call it. Example: def add(a,b): return a+b. print(add(2,3)) → 5. Used in all software systems." },

{ id: "cs-lists-arrays", title: "Lists (Arrays) Explained", category: "computer-science", content: "Step 1: Store multiple values. Step 2: Access using index. Example: nums = [1,2,3]. print(nums[0]) → 1. Used in data handling and apps." },

{ id: "cs-debugging-step", title: "Debugging Step by Step", category: "computer-science", content: "Step 1: Find error. Step 2: Read error message. Step 3: Fix code. Example: missing colon in Python causes SyntaxError. Debugging is essential in all development." },

{ id: "cs-web-html-basics", title: "HTML Step by Step Website Creation", category: "computer-science", content: "Step 1: Create file index.html. Step 2: Add structure. Example: <h1>Hello</h1>. Step 3: Open in browser. You see a webpage. HTML builds structure of websites." },

{ id: "cs-css-styling", title: "CSS Styling Step by Step", category: "computer-science", content: "Step 1: Link CSS file. Step 2: Add style rules. Example: h1 { color: blue; }. Step 3: Refresh browser. Used to design websites." },

{ id: "cs-js-basics", title: "JavaScript Step by Step", category: "computer-science", content: "Step 1: Add script tag. Step 2: Write code. Example: alert('Hello'). Step 3: Run in browser. Used for interactivity in websites." },

{ id: "cs-dom-interaction", title: "DOM Manipulation", category: "computer-science", content: "Step 1: Select element. Step 2: Modify it. Example: document.getElementById('text').innerHTML = 'Hi'. Used in dynamic websites." },

{ id: "cs-login-system-basic", title: "Simple Login System", category: "computer-science", content: "Step 1: Ask username/password. Step 2: Check values. Example: if user == 'admin' and pass == '123'. Step 3: Grant access. Used in apps." },

{ id: "cs-cybersecurity-passwords", title: "Password Security Step by Step", category: "computer-science", content: "Step 1: Create strong password. Step 2: Use symbols and numbers. Step 3: Store securely. Example: P@ssw0rd! is stronger than 123456." },

{ id: "cs-encryption-basic", title: "Encryption Explained", category: "computer-science", content: "Step 1: Convert data. Step 2: Encode it. Example: HELLO → encrypted text like XJ#92. Used in banking and messaging apps." },

{ id: "cs-firewall-basic", title: "Firewall Protection", category: "computer-science", content: "Step 1: Monitor network traffic. Step 2: Block threats. Step 3: Allow safe connections. Used in cybersecurity systems." },

{ id: "cs-malware-explained", title: "Malware Types", category: "computer-science", content: "Step 1: Understand threats. Step 2: Identify viruses, worms, spyware. Step 3: Use antivirus protection." },

{ id: "cs-software-dev-cycle", title: "Software Development Life Cycle", category: "computer-science", content: "Step 1: Plan. Step 2: Design. Step 3: Code. Step 4: Test. Step 5: Deploy. Used in all professional software creation." },

{ id: "cs-testing-software", title: "Software Testing", category: "computer-science", content: "Step 1: Write code. Step 2: Test functions. Step 3: Fix bugs. Example: checking login system works correctly." },

{ id: "cs-git-basics", title: "Git Version Control", category: "computer-science", content: "Step 1: Initialize repo. Step 2: Save changes. Example: git commit -m 'update'. Step 3: Track versions of code." },

{ id: "cs-game-loop", title: "Game Loop Explained", category: "computer-science", content: "Step 1: Update game state. Step 2: Render graphics. Step 3: Repeat continuously. Used in all video games." },

{ id: "cs-game-player-movement", title: "Player Movement in Games", category: "computer-science", content: "Step 1: Detect key press. Step 2: Move character. Example: if key == 'right': x += 5. Used in Unity and JavaScript games." },

{ id: "cs-ai-basic", title: "Artificial Intelligence Basics", category: "computer-science", content: "Step 1: Collect data. Step 2: Train model. Step 3: Make predictions. Used in chatbots and recommendation systems." },

{ id: "cs-database-basic", title: "Databases Explained", category: "computer-science", content: "Step 1: Store data. Step 2: Query data. Example SQL: SELECT * FROM users. Used in all applications." },

{ id: "cs-api-basics", title: "APIs Explained", category: "computer-science", content: "Step 1: Request data. Step 2: Server responds. Example: weather API returns temperature data." },


{ id: "money", title: "Money", category: "economics", content: "Anything used to buy goods and services." },

{ id: "market", title: "Market", category: "economics", content: "Where buyers and sellers meet to trade." },

{ id: "supply", title: "Supply", category: "economics", content: "How much sellers are willing to sell." },

{ id: "demand", title: "Demand", category: "economics", content: "How much buyers want to buy." },

{ id: "price", title: "Price", category: "economics", content: "The amount paid for a product." },

{ id: "scarcity", title: "Scarcity", category: "economics", content: "Limited resources compared to unlimited wants." },

{ id: "choice", title: "Choice", category: "economics", content: "Selecting one option over others." },

{ id: "opportunity-cost", title: "Opportunity Cost", category: "economics", content: "The next best thing you give up." },

{ id: "profit", title: "Profit", category: "economics", content: "Money left after all costs are paid." },

{ id: "loss", title: "Loss", category: "economics", content: "When costs are more than earnings." },

{ id: "inflation", title: "Inflation", category: "economics", content: "Rise in prices over time." },

{ id: "deflation", title: "Deflation", category: "economics", content: "Fall in prices over time." },

{ id: "gdp", title: "GDP", category: "economics", content: "Total value of goods and services produced." },

{ id: "tax", title: "Tax", category: "economics", content: "Money paid to the government." },

{ id: "subsidy", title: "Subsidy", category: "economics", content: "Government support to reduce costs." },

{ id: "trade", title: "Trade", category: "economics", content: "Buying and selling goods and services." },

{ id: "import", title: "Import", category: "economics", content: "Goods brought into a country." },

{ id: "export", title: "Export", category: "economics", content: "Goods sold to other countries." },

{ id: "capital", title: "Capital", category: "economics", content: "Tools used to make other goods." },

{ id: "labour", title: "Labour", category: "economics", content: "Human effort used in production." },

{ id: "entrepreneur", title: "Entrepreneur", category: "economics", content: "Person who starts a business." },

{ id: "production", title: "Production", category: "economics", content: "Creating goods and services." },

{ id: "consumption", title: "Consumption", category: "economics", content: "Using goods and services." },

{ id: "distribution", title: "Distribution", category: "economics", content: "How goods are shared among people." },

{ id: "exchange", title: "Exchange", category: "economics", content: "Trading goods or services." },

{ id: "equilibrium", title: "Equilibrium", category: "economics", content: "When supply equals demand." },

{ id: "shortage", title: "Shortage", category: "economics", content: "When demand is greater than supply." },

{ id: "surplus", title: "Surplus", category: "economics", content: "When supply is greater than demand." },

{ id: "elasticity", title: "Elasticity", category: "economics", content: "How demand or supply reacts to price changes." },

{ id: "utility", title: "Utility", category: "economics", content: "Satisfaction gained from a product." },

{ id: "public-goods", title: "Public Goods", category: "economics", content: "Goods available to everyone." },

{ id: "private-goods", title: "Private Goods", category: "economics", content: "Goods owned by individuals." },

{ id: "externalities", title: "Externalities", category: "economics", content: "Side effects affecting others." },

{ id: "monopoly", title: "Monopoly", category: "economics", content: "Market controlled by one seller." },

{ id: "competition", title: "Competition", category: "economics", content: "Many sellers competing to sell." },

{ id: "oligopoly", title: "Oligopoly", category: "economics", content: "Market controlled by a few firms." },

{ id: "revenue", title: "Revenue", category: "economics", content: "Total money earned from sales." },

{ id: "cost", title: "Cost", category: "economics", content: "Money spent to produce goods." },

{ id: "fixed-cost", title: "Fixed Cost", category: "economics", content: "Costs that do not change." },

{ id: "variable-cost", title: "Variable Cost", category: "economics", content: "Costs that change with production." },

{ id: "average-cost", title: "Average Cost", category: "economics", content: "Cost per unit produced." },

{ id: "marginal-cost", title: "Marginal Cost", category: "economics", content: "Cost of producing one more unit." },

{ id: "productivity", title: "Productivity", category: "economics", content: "Output produced per worker." },

{ id: "investment", title: "Investment", category: "economics", content: "Spending to earn future benefits." },

{ id: "savings", title: "Savings", category: "economics", content: "Money kept for future use." },

{ id: "interest", title: "Interest", category: "economics", content: "Cost of borrowing money." },

{ id: "bank", title: "Bank", category: "economics", content: "Place where money is stored and managed." },

{ id: "credit", title: "Credit", category: "economics", content: "Borrowing money to pay later." },

{ id: "debit", title: "Debit", category: "economics", content: "Paying directly from your account." },

{ id: "what-is-atp-biology", title: "What is ATP in Biology? Explained Simply", category: "science", content: "ATP is energy currency of cells." },
{ id: "photosynthesis-basics", title: "Photosynthesis Explained Simply", category: "science", content: "Plants convert sunlight into energy." }
];

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:cat" element={<CategoryPage />} />
        <Route path="/topic/:id" element={<TopicPage />} />
      </Routes>
    </Router>
  );
}

/* =======================
   SEO
======================= */
function useSEO(title) {
  useEffect(() => {
    document.title = `${title} | Study Guide Hub`;
  }, [title]);
}

/* =======================
   🌌 NEXT-LEVEL MOVING WORLD
======================= */
function MovingWorld() {
  const ref = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: ref.current, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 6;

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 1200; i++) {
      vertices.push(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.04,
      transparent: true,
      opacity: 0.9
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const light = new THREE.PointLight(0x38bdf8, 2);
    scene.add(light);

    function animate() {
      requestAnimationFrame(animate);

      points.rotation.y += 0.0015;
      points.rotation.x += 0.0008;

      camera.position.x += (Math.sin(Date.now() * 0.0003) * 0.3 - camera.position.x) * 0.02;
      camera.position.y += (Math.cos(Date.now() * 0.0003) * 0.2 - camera.position.y) * 0.02;

      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 0 }}
    />
  );
}

/* =======================
   HOME (IMPROVED — MORE MODERN UI)
======================= */
function Home() {
  useSEO("Home");

  const categories = [...new Set(topics.map(t => t.category))];

  /* ✅ ADDED: Monetag click tracking */
  const handleMonetagClick = () => {
    if (window.gtag) {
      window.gtag("event", "click", {
        event_category: "referral",
        event_label: "Monetag link",
      });
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#0ea5e9,#6366f1,#0f172a)"
    }}>
      <MovingWorld />

      <div style={{ position: "relative", zIndex: 2, padding: 30 }}>

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: "center", color: "white" }}
        >
          <h1 style={{ fontSize: 50 }}>📚 Study Guide Hub</h1>
          <p style={{ opacity: 0.8 }}>
            Simple notes. Fast learning. Exam-ready revision.
          </p>

          {/* ✅ ADDED REFERRAL LINK HERE */}
          <a
            href="https://monetag.com/?ref_id=t5y1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMonetagClick}
            style={{
              display: "inline-block",
              marginTop: 15,
              padding: "10px 18px",
              borderRadius: 20,
              background: "white",
              color: "black",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Join Monetag
          </a>
        </motion.div>

        {/* STATS BAR */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          marginTop: 20,
          color: "white"
        }}>
          <div>📘 {topics.length} Topics</div>
          <div>🏷 {categories.length} Categories</div>
          <div>⚡ Fast Revision Mode</div>
        </div>

        {/* CATEGORY BUTTONS (IMPROVED FLOATING UI) */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          flexWrap: "wrap",
          marginTop: 25
        }}>
          {categories.map(c => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={c}
            >
              <Link
                to={`/category/${c}`}
                style={{
                  padding: "14px 20px",
                  borderRadius: "40px",
                  background: "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(12px)",
                  color: "white",
                  textDecoration: "none",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.25)"
                }}
              >
                {c}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* TOPICS GRID */}
        {categories.map(cat => (
          <div key={cat} style={{ marginTop: 50 }}>
            <h2 style={{ color: "white" }}>{cat.toUpperCase()}</h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 15
            }}>
              {topics.filter(t => t.category === cat).map(t => (
                <motion.div whileHover={{ scale: 1.03 }} key={t.id}>
                  <Link
                    to={`/topic/${t.id}`}
                    style={{
                      background: "rgba(255,255,255,0.92)",
                      padding: 15,
                      borderRadius: 15,
                      textDecoration: "none",
                      color: "black",
                      display: "block"
                    }}
                  >
                    <b>{t.title}</b>
                    <p style={{ fontSize: 12, opacity: 0.7 }}>
                      Click to study
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

/* =======================
   CATEGORY PAGE
======================= */
function CategoryPage() {
  const { cat } = useParams();
  const data = topics.filter(t => t.category === cat);

  return (
    <div style={{ padding: 30 }}>
      <Link to="/">← Back</Link>
      <h1>{cat.toUpperCase()}</h1>

      {data.map(t => (
        <div key={t.id} style={{ marginBottom: 15 }}>
          <b>{t.title}</b>
          <p>{t.content}</p>
        </div>
      ))}
    </div>
  );
}

/* =======================
   TOPIC PAGE
======================= */
function TopicPage() {
  const { id } = useParams();
  const topic = topics.find(t => t.id === id);

  if (!topic) return <div>Not found</div>;

  return (
    <div style={{ padding: 30 }}>
      <Link to="/">← Back</Link>
      <h1>{topic.title}</h1>
      <p>{topic.content}</p>
    </div>
  );
}