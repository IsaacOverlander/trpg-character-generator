CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username character varying(240) NOT NULL,
    password character varying(1080),
    user_role character varying(240) DEFAULT 'user'::character varying
);

CREATE TABLE alignment (
    id SERIAL PRIMARY KEY,
    alignment_name character varying(250) NOT NULL
);

INSERT INTO "alignment" ("alignment_name")
       VALUES ('Lawful Good'),('Neutral Good'),('Chaotic Good')
              ,('Lawful Neutral'),('Chaotic Neutral'),('Lawful Evil')
              ,('Neutral Evil'),('Chaotic Evil');
              
CREATE TABLE background (
    id SERIAL PRIMARY KEY,
    background_name character varying(250) NOT NULL
);

INSERT INTO "background" ("background_name")
       VALUES  ('Acolyte'),('Charlatan'),('Criminal'),('Entertainer'),
               ('Folk Hero'),('Gladiator'),('Guild Artisan'),('Guild Merchant'),
               ('Hermit'),('Knight'),('Noble'),('Outlander'),('Pirate'),('Sage'),
               ('Sailor'),('Soldier'),('Spy'),('Urchin');
               
               
CREATE TABLE bond (
    id SERIAL PRIMARY KEY,
    bond_description character varying(1080) NOT NULL
);

INSERT INTO "bond" ("bond_description")
	   VALUES ('I would die to recover an ancient artifact of my faith that was lost long ago.'),
	   		  ('I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.'),
	   		  ('I owe me life to the priest who took me in when my parents died.'),
	   		  ('Everything I do is for the common people.'),
	   		  ('I will do anything to protect the temple where I served.'),
	   		  ('I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.'),
	   		  ('I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.'),
	   		  ('I owe everything to my mentor--a horrible person who is probably rotting in jail somewhere.'),
	   		  ('Somewhere out there I have a child who does not know me. I am making the world better for him or her.'),
	   		  ('I come from a noble family, and one day I will reclaim my lands and title from those who stole them from me.'),
	   		  ('A powerful person killed someone I love. Some day soon, I will have my revenge.'),
	   		  ('I swindled and ruined a person who did not deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.'),
	   		  ('I am trying to pay off an old debt I owe to a generous benefactor.'),
	   		  ('My ill-gotten gains go to support my family.'),
	   		  ('Something important was taken from me, and I aim to steal it back.'),
	   		  ('I will become the greatest thief that ever lived.'),
	   		  ('I am guilty of a terrible crime. I hope I can redeem myself for it.'),
	   		  ('Someone I loved died because of a mistake I made. That will never happen again.'),
	   		  ('My instrument is my most treasured possession, and it reminds me of someone I love.'),
	   		  ('Someone stole my precious instrument, and someday I will get it back.'),
	   		  ('I want to be famous, whatever it takes.'),
	   		  ('I idolize a hero of the old tales and measure my deeds against that person.'),
	   		  ('I will do anything to prove myself superior to me hated rival.'),
	   		  ('I would do anything for the other members of my old troupe.'),
	   		  ('I have a family, but I have no idea where they are. One day, I hope to see them again.'),
	   		  ('I worked the land, I love the land, and I will protect the land.'),
	   		  ('A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.'),
	   		  ('My tools are symbols of my past life, and I carry them so that I will never forget my roots.'),
	   		  ('I protect those who cannot protect themselves.'),
	   		  ('I wish my childhood sweetheart had come with me to pursue my destiny.'),
	   		  ('The workshop where I learned my trade is the most important place in the world to me.'),
	   		  ('I created a great work for someone, and then found them unworthy to receive it. I am still looking for someone worthy.'),
	   		  ('I owe my guild a great debt for forging me into the person I am today.'),
	   		  ('I pursue wealth to secure love.'),
	   		  ('One day I will return to my guild and prove that I am the greatest artisan of them all.'),
	   		  ('I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.'),
	   		  ('Nothing is more important than the other members of my hermitage, order, or association.'),
	   		  ('I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.'),
	   		  ('I am still seeking the enlightenment I pursued in my seclusion, and it still eludes me.'),
	   		  ('I entered seclusion because I loved someone I could not have.'),
	   		  ('Should my discovery come to light, it could bring ruin to the world.'),
	   		  ('My isolation gave me great insight into a great evil that only I can destroy.'),
	   		  ('I will face any challenge to win the approval of my family.'),
	   		  ('My house alliance with another noble family must be sustained at all costs.'),
	   		  ('Nothing is more important that the other members of my family.'),
	   		  ('I am in love with the heir of a family that my family despises.'),
			  ('My loyalty to my sovereign is unwavering.'),
			  ('The common folk must see me as a hero of the people.'),
			  ('My family, clan, or tribe is the most important thing in my life, even when they are far from me.'),
			  ('An injury to the unspoiled wilderness of my home is an injury to me.'),
			  ('I will bring terrible wrath down on the evildoers who destroyed my homeland.'),
			  ('I am the last of my tribe, and it is up to me to ensure their names enter legend.'),
			  ('I suffer awful visions of a coming disaster and will do anything to prevent it.'),
			  ('It is my duty to provide children to sustain my tribe.'),
			  ('It is my duty to protect my students.'),
			  ('I have an ancient text that holds terrible secrets that must not fall into the wrong hands.'),
			  ('I work to preserve a library, university, scriptorium, or monastery.'),
			  ('My life work is a series of tomes related to a specific field of lore.'),
			  ('I have been searching my whole life for the answer to a certain question.'),
			  ('I sold my soul for knowledge. I hope to do great deeds and win it back.'),
			  ('I am loyal to my captain first, everything else second.'),
			  ('The ship is most important,crewmates and captains come and go.'),
			  ('I will always remember my first ship.'),
			  ('In a harbor town, I have a paramour whose eyes nearly stole me from the sea.'),
			  ('I was cheated of my fair share of the profits, and I want to get my due.'),
			  ('Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.'),	
			  ('I would lay down my life for the people I served with.'),
			  ('Someone saved my life on the battlefield. To this day, I will never leave a friend behind.'),
			  ('My honor is my life.'),
			  ('I will never forget the crushing defeat my company suffered or the enemies who dealt it.'),
			  ('Those who fight beside me are those worth dying for.'),
			  ('I fight for those who cannot fight for themselves.'),
			  ('My town or city is my home, and I will fight to defend it.'),
			  ('I sponsor an orphanage to keep others from enduring what I was forced to endure.'),
			  ('I owe my survival to another urchin who taught me to live on the streets.'),
			  ('I owe a debt I can never repay to the person who took pity on me.'),
			  ('I escaped my life of poverty by robbing an important person, and I am wanted for it.'),
			  ('No one else is going to have to endure the hardships I have been through.');

CREATE TABLE class (
    id SERIAL PRIMARY KEY,
    class_name character varying(250) NOT NULL,
    hit_dice character varying(40) NOT NULL,
    hp integer NOT NULL,
    saving_throws boolean[],
    class_features character varying(75)[]
);

INSERT INTO "class" ("class_name","hit_dice","hp","saving_throws","class_features")
	   VALUES ('Barbarian','d12',12,ARRAY[true,false,true,false,false,false],ARRAY['Rage','Unarmored Defense']),
	   		  ('Bard','d8',8,ARRAY[false,true,false,false,false,true],ARRAY['Bardic Inspiration']),
	   		  ('Cleric','d8',8,ARRAY[false,false,false,true,false,true],
	   		  	ARRAY['Life Domain','Light Domain','Nature Domain','TempestDomain','Trickery Domain','War Domain']),
	   		  ('Druid','d8',8,ARRAY[false,false,false,true,true,false],ARRAY['Druidic']),
	   		  ('Fighter','d10',10,ARRAY[true,false,true,false,false,false],ARRAY['Second Wind']),
	   		  ('Monk','d8',8,ARRAY[true,true,false,false,false,false],ARRAY['Unarmored Defense','Martial Arts']),
	   		  ('Paladin','d10',10,ARRAY[false,false,false,false,true,true],ARRAY['Divine Sense','Lay on Hands']),
	   		  ('Ranger','d10',10,ARRAY[true,true,false,false,false,false],ARRAY['Keen Senses']),
	   		  ('Rogue','d8',8,ARRAY[false,true,false,true,false,false],ARRAY['Sneak Attack','Thieve''s Cant']),
	   		  ('Sorcerer','d6',6,ARRAY[false,false,true,false,false,true],ARRAY['Innate Magic']),
	   		  ('Warlock','d8',8,ARRAY[false,false,false,false,true,true],ARRAY['Demonic Pact']),
	   		  ('Wizard','d6',6,ARRAY[false,false,false,true,true,false],ARRAY['Arcane Recovery']);


CREATE TABLE flaw (
    id SERIAL PRIMARY KEY,
    flaw_description character varying(1080) NOT NULL
);

INSERT INTO "flaw" ("flaw_description")
	   VALUES ('I judge others harshly, and myself even more severely.'),
	   		  ('I put too much trust in those who wield power within my temple''s hierarchy.'),
	   		  ('My piety sometimes leads me to blindly trust those that profess faith in my god.'),
	   		  ('I am inflexible in my thinking.'),
	   		  ('I am suspicious of strangers and suspect the worst of them.'),
	   		  ('Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.'),
	   		  ('I can''t resist a pretty face.'),
	   		  ('I''m always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.'),
	   		  ('I''m convinced that no one could ever fool me in the way I fool others.'),
	   		  ('I''m too greedy for my own good. I can''t resist taking a risk if there''s money involved.'),
	   		  ('I can''t resist swindling people who are more powerful than me.'),
	   		  ('I hate to admit it and will hate myself for it, but I''ll run and preserve my own hide if the going gets tough.'),
	   		  ('When I see something valuable, I can''t think about anything but how to steal it.'),
	   		  ('When faced with a choice between money and my friends, I usually choose the money.'),
	   		  ('If there''s a plan, I''ll forget it. If I don''t forget it, I''ll ignore it.'),
	   		  ('I have a ''tell'' that reveals when I''m lying.'),
	   		  ('I turn tail and run when things go bad.'),
	   		  ('An innocent person is in prison for a crime that I committed. I''m okay with that.'),
	   		  ('I''ll do anything to win fame and renown.'),
	   		  ('I''m a sucker for a pretty face.'),
	   		  ('A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.'),
	   		  ('I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.'),
	   		  ('I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.'),
	   		  ('Despite my best efforts, I am unreliable to my friends.'),
	   		  ('The tyrant who rules my land will stop at nothing to see me killed.'),
	   		  ('I''m convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.'),
	   		  ('The people who knew me when I was young know my shameful secret, so I can never go home again.'),
	   		  ('I have a weakness for the vices of the city, especially hard drink.'),
	   		  ('Secretly, I believe that things would be better if I were a tyrant lording over the land.'),
	   		  ('I have trouble trusting in my allies.'),
	   		  ('I''ll do anything to get my hands on something rare or priceless.'),
	   		  ('I''m quick to assume that someone is trying to cheat me.'),
	   		  ('No one must ever learn that I once stole money from guild coffers.'),
	   		  ('I''m never satisfied with what I have, I always want more.'),
	   		  ('I would kill to acquire a noble title.'),
	   		  ('I''m horribly jealous of anyone who outshines my handiwork. Everywhere I go, I''m surrounded by rivals.'),
	   		  ('Now that I''ve returned to the world, I enjoy its delights a little too much.'),
	   		  ('I harbor dark bloodthirsty thoughts that my isolation failed to quell.'),
	   		  ('I am dogmatic in my thoughts and philosophy.'),
	   		  ('I let my need to win arguments overshadow friendships and harmony.'),
	   		  ('I''d risk too much to uncover a lost bit of knowledge.'),
	   		  ('I like keeping secrets and won''t share them with anyone.'),
	   		  ('I secretly believe that everyone is beneath me.'),
	   		  ('I hide a truly scandalous secret that could ruin my family forever.'),
	   		  ('I too often hear veiled insults and threats in every word addressed to me, and I''m quick to anger.'),
	   		  ('I have an insatiable desire for carnal pleasures.'),
	   		  ('In fact, the world does revolve around me.'),
	   		  ('By my words and actions, I often bring shame to my family.'),
	   		  ('I am too enamored of ale, wine, and other intoxicants.'),
	   		  ('There''s no room for caution in a life lived to the fullest.'),
	   		  ('I remember every insult I''ve received and nurse a silent resentment toward anyone who''s ever wronged me.'),
	   		  ('I am slow to trust members of other races'),
	   		  ('Violence is my answer to almost any challenge.'),
	   		  ('Don''t expect me to save those who can''t save themselves. It is nature''s way that the strong thrive and the weak perish.'),
	   		  ('I am easily distracted by the promise of information.'),
	   		  ('Most people scream and run when they see a demon. I stop and take notes on its anatomy.'),
	   		  ('Unlocking an ancient mystery is worth the price of a civilization.'),
	   		  ('I overlook obvious solutions in favor of complicated ones.'),
	   		  ('I speak without really thinking through my words, invariably insulting others.'),
	   		  ('I can''t keep a secret to save my life, or anyone else''s.'),
	   		  ('I follow orders, even if I think they''re wrong.'),
	   		  ('I''ll say anything to avoid having to do extra work.'),
	   		  ('Once someone questions my courage, I never back down no matter how dangerous the situation.'),
	   		  ('Once I start drinking, it''s hard for me to stop.'),
	   		  ('I can''t help but pocket loose coins and other trinkets I come across.'),
	   		  ('My pride will probably lead to my destruction'),
	   		  ('The monstrous enemy we faced in battle still leaves me quivering with fear.'),
	   		  ('I have little respect for anyone who is not a proven warrior.'),
	   		  ('I made a terrible mistake in battle that cost many lives, and I would do anything to keep that mistake secret.'),
	   		  ('My hatred of my enemies is blind and unreasoning.'),
	   		  ('I obey the law, even if the law causes misery.'),
	   		  ('I''d rather eat my armor than admit when I''m wrong.'),
	   		  ('If I''m outnumbered, I always run away from a fight.'),
	   		  ('Gold seems like a lot of money to me, and I''ll do just about anything for more of it.'),
	   		  ('I will never fully trust anyone other than myself.'),
	   		  ('I''d rather kill someone in their sleep than fight fair.'),
	   		  ('It''s not stealing if I need it more than someone else.'),
	   		  ('People who don''t take care of themselves get what they deserve.');

CREATE TABLE ideal (
    id SERIAL PRIMARY KEY,
    ideal_name character varying(240) NOT NULL,
    ideal_description character varying(1080) NOT NULL
);

INSERT INTO "ideal" ("ideal_name","ideal_description")
	   VALUES ('Aspiration','I seek to prove my self worthy of my god''s favor by matching my actions against his or her teachings.'),
	   	      ('Aspiration','I''m going to prove that I''m worthy of a better life.'),
	   	      ('Aspiration','I work hard to be the best there is at my craft.'),
	   	      ('Aspiration','Someday I''ll own my own ship and chart my own destiny.'),
	   	      ('Self Knowledge','If you know yourself, there''s nothing left to know.'),
	   	      ('Family','Blood runs thicker than water.'),
	   	      ('Glory','I must earn glory in battle, for myself and my clan.'),
	   	      ('Destiny','Nothing and no one can steer me away from my higher calling.'),
	   	      ('Nation','My city, nation, or people are all that matter.'),
	   	      ('Honesty','Art should reflect the soul; it should come from within and reveal who we really are.');


CREATE TABLE personality (
    id SERIAL PRIMARY KEY,
    personality_description character varying(1080) NOT NULL
);

INSERT INTO "personality" ("personality_description")
	   VALUES ('I idolize a particular hero of my faith and constantly refer to that person''s deeds and example.'),
	   		  ('I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.'),
	   		  ('I see omens in every event and action. The gods try to speak to us, we just need to listen.'),
	   		  ('Nothing can shake my optimistic attitude.'),
	   		  ('I quote (or misquote) the sacred texts and proverbs in almost every situation.'),
	   		  ('I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.'),
	   		  ('I''ve enjoyed fine food, drink, and high society among my temple''s elite. Rough living grates on me.'),
	   		  ('I''ve spent so long in the temple that I have little practical experience dealing with people in the outside world.'),
	   		  ('I fall in and out of love easily, and am always pursuing someone.'),
	   		  ('I have a joke for every occasion, especially occasions where humor is inappropriate.'),
	   		  ('Flattery is my preferred trick for getting what I want.'),
	   		  ('I''m a born gambler who can''t resist taking a risk for a potential payoff.'),
	   		  ('I lie about almost everything, even when there''s no good reason to.'),
	   		  ('Sarcasm and insults are my weapons of choice.'),
	   		  ('I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.'),
	   		  ('I pocket anything I see that might have some value.'),
	   		  ('I always have plan for what to do when things go wrong.'),
	   		  ('I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.'),
	   		  ('The first thing I do in a new place is note the locations of everything valuable, or where such things could be hidden.'),
	   		  ('I would rather make a new friend than a new enemy.'),
	   		  ('I am incredibly slow to trust. Those who seem the fairest often have the most to hide.'),
	   		  ('I don''t pay attention to the risks in a situation. Never tell me the odds.'),
	   		  ('The best way to get me to do something is to tell me I can''t do it.'),
	   		  ('I blow up at the slightest insult.'),
	   		  ('I know a story relevant to almost every situation.'),
	   		  ('Whenever I come to a new place, I collect local rumors and spread gossip.'),
	   		  ('I''m a hopeless romantic, always searching for that ''special someone''.'),
	   		  ('Nobody stays angry at me or around me for long, since I can defuse any amount of tension.'),
	   		  ('I love a good insult, even one directed at me.'),
	   		  ('I get bitter if I''m not the center of attention.'),
	   		  ('I''ll settle for nothing less than perfection.'),
	   		  ('I change my mood or my mind as quickly as I change key in a song.'),
	   		  ('I judge people by their actions, not their words.'),
	   		  ('If someone is in trouble, I''m always willing to lend help.'),
	   		  ('When I set my mind to something, I follow through no matter what gets in my way.'),
	   		  ('I have a strong sense of fair play and always try to find the most equitable solution to arguments.'),
	   		  ('I''m confident in my own abilities and do what I can to instill confidence in others.'),
	   		  ('Thinking is for other people. I prefer action.'),
	   		  ('I misuse long words in an attempt to sound smarter.'),
	   		  ('I get bored easily. When am I going to get on with my destiny.'),
	   		  ('I believe that everything worth doing is worth doing right. I can''t help it, I''m a perfectionist.'),
	   		  ('I''m a snob who looks down on those who can''t appreciate fine art.'),
	   		  ('I always want to know how things work and what makes people tick.'),
	   		  ('I''m full of witty aphorisms and have a proverb for every occasion.'),
	   		  ('I''m rude to people who lack my commitment to hard work and fair play.'),
	   		  ('I like to talk at length about my profession.'),
	   		  ('I don''t part with my money easily and will haggle tirelessly to get the best deal possible.'),
	   		  ('I''m well known for my work, and I want to make sure everyone appreciates it. I''m always taken aback when people haven''t heard of me.'),
	   		  ('I''ve been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.'),
	   		  ('I am utterly serene, even in the face of disaster.'),
	   		  ('The leader of my community has something wise to say on every topic, and I am eager to share that wisdom.'),
	   		  ('I feel tremendous empathy for all who suffer.'),
	   		  ('I''m oblivious to etiquette and social expectations.'),
	   		  ('I connect everything that happens to me to a grand cosmic plan.'),
	   		  ('I often get lost in my own thoughts and contemplations, becoming oblivious to my surroundings.'),
	   		  ('I am working on a grand philosophical theory and love sharing my ideas.'),
	   		  ('My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.'),
	   		  ('The common folk love me for my kindness and generosity.'),
	   		  ('No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.'),
	   		  ('I take great pains to always look my best and follow the latest fashions.'),
	   		  ('I don''t like to get my hands dirty, and I won''t be caught dead in unsuitable accommodations.'),
	   		  ('Despite my birth, I do not place myself above other folk. We all have the same blood.'),
	   		  ('My favor, once lost, is lost forever.'),
	   		  ('If you do me an injury, I will crush you, ruin your name, and salt your fields.'),
	   		  ('I''m driven by a wanderlust that led me away from home.'),
	   		  ('I watch over my friends as if they were a litter of newborn pups.'),
	   		  ('I once ran twenty-five miles without stopping to warn my clan of an approaching orc horde. I''d do it again if I had to.'),
	   		  ('I have a lesson for every situation, drawn from observing nature.'),
	   		  ('I place no stock in wealthy or well-mannered folk. Money and manners won''t save you from a hungry owlbear.'),
	   		  ('I''m always picking things up, absently fiddling with them, and sometimes accidentally breaking them.'),
	   		  ('I feel far more comfortable around animals than people.'),
	   		  ('I was, in fact, raised by wolves.'),
	   		  ('I use polysyllabic words to convey the impression of great erudition.'),
	   		  ('I''ve read every book in the world''s greatest libraries or like to boast that I have.'),
	   		  ('I''m used to helping out those who aren''t as smart as I am, and I patiently explain anything and everything to others.'),
	   		  ('There''s nothing I like more than a good mystery.'),
	   		  ('I''m willing to listen to every side of an argument before I make my own judgment.'),
	   		  ('I...speak...slowly...when talking...to idiots...which...almost...everyone...is...compared ...to me.'),
	   		  ('I am horribly, horribly awkward in social situations.'),
	   		  ('I''m convinced that people are always trying to steal my secrets.'),
	   		  ('My friends know they can rely on me, no matter what.'),
	   		  ('I work hard so that I can play hard when the work is done.'),
	   		  ('I enjoy sailing into new ports and making new friends over a flagon of ale.'),
	   		  ('I stretch the truth for the sake of a good story.'),
	   		  ('To me, a tavern brawl is a nice way to get to know a new city.'),
	   		  ('I never pass up a friendly wager.'),
	   		  ('My language is as foul as an otyugh nest.'),
	   		  ('I like a job well done, especially if I can convince someone else to do it.'),
	   		  ('I''m always polite and respectful.'),
	   		  ('I''m haunted by memories of war. I can''t get the images of violence out of my mind.'),
	   		  ('I''ve lost too many friends, and I''m slow to make new ones.'),
	   		  ('I''m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.'),
	   		  ('I can stare down a hellhound without flinching.'),
	   		  ('I enjoy being strong and like breaking things.'),
	   		  ('I have a crude sense of humor.'),
	   		  ('I face problems head-on. A simple direct solution is the best path to success.'),
	   		  ('I hide scraps of food and trinkets away in my pockets.'),
	   		  ('I ask a lot of questions.'),
	   		  ('I like to squeeze into small places where no one else can get to me.'),
	   		  ('I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.'),
	   		  ('I eat like a pig and have bad manners.'),
	   		  ('I think anyone who''s nice to me is hiding evil intent.'),
	   		  ('I don''t like to bathe.'),
	   		  ('I bluntly say what other people are hinting or hiding.');

CREATE TABLE race (
    id SERIAL PRIMARY KEY,
    race_name character varying(250) NOT NULL,
    speed integer NOT NULL,
    race_features character varying(75)[],
    race_languages character varying(75)[]
);

INSERT INTO "race" ("race_name","speed","race_features","race_languages")
	   VALUES ('Dragonborn',30,ARRAY['Breath Attack'],ARRAY['Common','Draconic']),
	   		  ('Dwarf',25,ARRAY['Dark Vision','Dwarven Resilience','Stonecunning'],ARRAY['Common','Dwarvish']),
	   		  ('Elf',30,ARRAY['Dark Vision','Fey Ancestry','Trance'],ARRAY['Common','Elvish']),
	   		  ('Gnome',25,ARRAY['Dark Vision','Gnome Cunning'],ARRAY['Common','Gnomish']),
	   		  ('Half-Elf',30,ARRAY['Dark Vision','Fey Ancestry'],ARRAY['Common','Elvish']),
	   		  ('Half-Orc',30,ARRAY['Dark Vision','Relentless Endurance','Savage Attacks'],ARRAY['Common','Orc']),
	   		  ('Halfling',25,ARRAY['Lucky','Brave','Halfling Nimblness'],ARRAY['Common','Halfling']),
	   		  ('Human',30,ARRAY['Adaptable'],ARRAY['Common']),
	   		  ('Tiefling',30,ARRAY['Dark Vision','Hellish Resistence'],ARRAY['Common','Infernal']);


CREATE TABLE skill (
    id SERIAL PRIMARY KEY,
    skill character varying(120),
    skill_value boolean DEFAULT false
);

INSERT INTO "skill" ("skill")
	   VALUES ('Acrobatics'),('Animal Handling'),('Arcana'),('Athletics'),
	   		  ('Deception'),('History'),('Insight'),('Intimidation'),
	   		  ('Investigation'),('Medicine'),('Nature'),('Perception'),
	   		  ('Performance'),('Persuasion'),('Religion'),('Slight of Hand'),
	   		  ('Stealth'),('Survival');


CREATE TABLE character (
    character_id SERIAL PRIMARY KEY,
    person_id integer NOT NULL REFERENCES person(id),
    class_id integer NOT NULL REFERENCES class(id),
    background_id integer NOT NULL REFERENCES background(id),
    race_id integer NOT NULL REFERENCES race(id),
    alignment_id integer NOT NULL REFERENCES alignment(id),
    personality_id integer NOT NULL REFERENCES personality(id),
    ideal_id integer NOT NULL REFERENCES ideal(id),
    bond_id integer NOT NULL REFERENCES bond(id),
    flaw_id integer NOT NULL REFERENCES flaw(id),
    name character varying(240) NOT NULL,
    lvl integer NOT NULL DEFAULT 1,
    experience integer NOT NULL DEFAULT 0,
    strength integer NOT NULL,
    dexterity integer NOT NULL,
    constitution integer NOT NULL,
    intelligence integer NOT NULL,
    wisdom integer NOT NULL,
    charisma integer NOT NULL,
    inspiration integer NOT NULL DEFAULT 0,
    proficiency integer NOT NULL DEFAULT 2,
    character_skills boolean[]
);

CREATE TABLE background_skill (
    id SERIAL PRIMARY KEY,
    background_id integer REFERENCES background(id),
    skill_id integer REFERENCES skill(id)
);
	   		  
INSERT INTO "background_skill" ("background_id", "skill_id")
	   VALUES ('1', '7'),('1', '15'),('2', '5'),('2', '16'),('3', '5'),('3', '17'),('4', '1'),('4', '13'),('5', '2'),
	   ('5', '18'),('6', '1'),('6', '13'),('7', '7'),('7', '14'),('8', '7'),('8', '14'),('9', '10'),('9', '15'),('10', '6'),
	   ('10', '14'),('11', '6'),('11', '14'),('12', '4'),('12', '18'),('13', '4'),('13', '12'),('14', '3'),('14', '6'),
	   ('15', '4'),('15', '12'),('16', '4'),('16', '8'),('17', '5'),('17', '17'),('18', '16'),('18', '17');

CREATE TABLE class_skill (
    id SERIAL PRIMARY KEY,
    class_id integer REFERENCES class(id),
    skill_id integer REFERENCES skill(id)
);

INSERT INTO "class_skill" ("class_id", "skill_id")
	   VALUES ('1','2'),('1','4'),('1','8'),('1','11'),('1','12'),('1','18'),('2', '1'),('2', '2'),('2', '3'),
	   		  ('2', '4'),('2', '5'),('2', '6'),('2', '7'),('2', '8'),('2', '9'),('2', '10'),('2', '11'),
	   		  ('2', '12'),('2', '13'),('2', '14'),('2', '15'),('2', '16'),('2', '17'),('2', '18'),('3','6'),
	   		  ('3','7'),('3','10'),('3','12'),('3','15'),('4','2'),('4','3'),('4','7'),('4','10'),('4','11'),
	   		  ('4','12'),('4','15'),('4','18'),('5','1'),('5','2'),('5','4'),('5','6'),('5','7'),('5','8'),
	   		  ('5','12'),('5','18'),('6','1'),('6','4'),('6','6'),('6','7'),('6','15'),('6','17'),('7','4'),
	   		  ('7','7'),('7','8'),('7','10'),('7','12'),('7','15'),('8','2'),('8','4'),('8','7'),('8','9'),
	   		  ('8','11'),('8','12'),('8','17'),('8','18'),('9','1'),('9','4'),('9','5'),('9','7'),('9','8'),
	   		  ('9','9'),('9','12'),('9','13'),('9','14'),('9','16'),('9','17'),('10','3'),('10','5'),('10','7'),
	   		  ('10','8'),('10','14'),('10','15'),('11','3'),('11','5'),('11','6'),('11','8'),('11','9'),('11','11'),
	   		  ('11','15'),('12','3'),('12','6'),('12','7'),('12','9'),('12','10'),('12','15');

CREATE TABLE equipment (
    id SERIAL PRIMARY KEY,
    equipment_name character varying(120),
    damage character varying(50),
    armor_class integer,
    type character varying(50)
);

INSERT INTO "equipment" ("equipment_name","damage","armor_class","type")
	   VALUES 
	   		  ('Dagger','1d4',null,'Piercing'),
	   		  ('Dart','1d4',null,'Piercing'),	
	   		  ('Great Axe','1d12',null,'Slashing'),
	   		  ('Hand Axe','1d6',null,'Slashing'),
	   		  ('Javeline','1d6',null,'Piercing'),
	   		  ('Light Crossbow','1d6',null,'Piercing'),
	   		  ('Longbow','1d8',null,'Piercing'),
	   		  ('Mace','1d6',null,'Bludgeoning'),
	   		  ('Quarterstaff','1d6',null,'Bludgeoning'),
	   		  ('Rapier','1d8',null,'Piercing'),
	   		  ('Scimitar','1d6',null,'Slashing'),
	   		  ('Shortsword','1d6',null,'Piercing'),
	   		  ('Chain Mail',null,16,null),
	   		  ('Leather Armor',null,11,null),
	   		  ('Scale Mail',null,14,null),
	   		  ('Shield',null,2,null),
	   		  ('Wooden Shiled',null,2,null),
	   		  ('Arcane Focus',null,null,null),
	   		  ('Arrows',null,null,null),
	   		  ('Burglar''s Pack',null,null,null),
	   		  ('Druidic Focus',null,null,null),
	   		  ('Dungeoneer''s Pack',null,null,null),
	   		  ('Entertainer''s Pack',null,null,null),
	   		  ('Explorer''s Pack',null,null,null),
	   		  ('Holy Symbol',null,null,null),
	   		  ('Lute',null,null,null),
	   		  ('Priest''s Pack',null,null,null),
	   		  ('Scholar''s Pack',null,null,null),
	   		  ('Spell Book',null,null,null),
	   		  ('Thieves Tools',null,null,null);

CREATE TABLE class_equipment (
    id SERIAL PRIMARY KEY,
    class_id integer REFERENCES class(id),
    equipment_id integer REFERENCES equipment(id)
);

INSERT INTO "class_equipment" ("class_id", "equipment_id")
	   VALUES (1,3),(1,4),(1,4),(1,24),(1,5),(1,5),(1,5),(1,5),
	   		  (2,10),(2,23),(2,26),(2,14),(2,1),
	   		  (3,6),(3,8),(3,15),(3,16),(3,25),(3,27),
	   		  (4,11),(4,17),(4,14),(4,21),(4,24),
	   		  (5,12),(5,13),(5,16),(5,6),(5,22),
	   		  (6,12),(6,22),(6,2),(6,2),(6,2),(6,2),
	   		  (7,12),(7,16),(7,5),(7,5),(7,5),(7,5),(7,5),(7,13),(7,25),(7,27),
	   		  (8,15),(8,12),(8,12),(8,7),(8,19),(8,24),
	   		  (9,10),(9,7),(9,19),(9,20),(9,14),(9,1),(9,1),(9,30),
	   		  (10,6),(10,18),(10,24),(10,1),(10,1),
	   		  (11,6),(11,18),(11,28),(11,14),(11,12),(11,1),(11,1),
	   		  (12,9),(12,18),(12,28),(12,29);