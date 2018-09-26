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

CREATE TABLE background (
    id SERIAL PRIMARY KEY,
    background_name character varying(250) NOT NULL
);

CREATE TABLE bond (
    id SERIAL PRIMARY KEY,
    bond_description character varying(1080) NOT NULL
);

CREATE TABLE class (
    id SERIAL PRIMARY KEY,
    class_name character varying(250) NOT NULL,
    hit_dice character varying(40) NOT NULL,
    hp integer NOT NULL,
    saving_throws boolean[],
    class_features character varying(75)[]
);

CREATE TABLE flaw (
    id SERIAL PRIMARY KEY,
    flaw_description character varying(1080) NOT NULL
);

CREATE TABLE ideal (
    id SERIAL PRIMARY KEY,
    ideal_name character varying(240) NOT NULL,
    ideal_description character varying(1080) NOT NULL
);

CREATE TABLE personality (
    id SERIAL PRIMARY KEY,
    personality_description character varying(1080) NOT NULL
);

CREATE TABLE race (
    id SERIAL PRIMARY KEY,
    race_name character varying(250) NOT NULL,
    speed integer NOT NULL,
    race_features character varying(75)[],
    race_languages character varying(75)[]
);

CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username character varying(240) NOT NULL,
    password character varying(1080),
    user_role character varying(240) DEFAULT 'user'::character varying
);

CREATE TABLE skill (
    id SERIAL PRIMARY KEY,
    skill character varying(120),
    skill_value boolean
);

CREATE TABLE character (
    character_id integer DEFAULT nextval('character_id_seq'::regclass) PRIMARY KEY,
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

CREATE TABLE class_skill (
    id SERIAL PRIMARY KEY,
    class_id integer REFERENCES class(id),
    skill_id integer REFERENCES skill(id)
);