CREATE TABLE USERS (
  ID SERIAL PRIMARY KEY,
  firstname text not null,
  lastname text not null,
  email text not null unique,
  birthdate date not null,
  city text not NULL,
  zipcode text not NULL,
  created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  )



  INSERT INTO donations (user_id, amount)
VALUES (3, 5.00);

  CREATE TABLE donations (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  amount NUMERIC(10,2) NOT NULL,
  donated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO adopts (user_id, animal_id, status)
VALUES (1, 2, 'pending');

  
 INSERT INTO users (firstname, lastname, email, birthdate, city, zipcode)
VALUES
('abdel', 'nomdefamille', 'abdel@mail.com', '1999-03-10', 'paris', '75019'),
('nasra', 'nomdefamille', 'nasra@mail.com', '1811-03-10', 'nanterre', '92000'),
('florian', 'nomdefamille', 'florian@mail.com', '1997-03-10', 'savigny le temple', '77000'),
('salem', 'nomdefamille', 'salem@mail.com', '1999-03-10', 'orleans', '75019');


CREATE TABLE ANIMALS (
  id SERIAL PRIMARY key,
  name text not null,
  birthdate date not null,
  city text not null,
  zipcode text not null,
  image_url text not null,
  avalaible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
  )
  

create table adopts (
    id SERIAL PRIMARY KEY,
    user_id      INTEGER     NOT NULL REFERENCES users(id)   ON DELETE CASCADE,
    animal_id    INTEGER     NOT NULL REFERENCES animals(id) ON DELETE CASCADE,
    status text not null DEFAULT 'pending',
    requested_at TIMESTAMP not null DEFAULT now()
   )


   create table donation (
    id serial PRIMARY key,
    user_id integer not null references users(id) on DELETE cascade,
    amount NUMERIC(10,2),
    date_don TIMESTAMP not null DEFAULT now()
   )


INSERT INTO animals (name, birthdate, city, zipcode, image_url)
VALUES 
('Charlie', '2020-09-10', 'Lille', '59000', '/images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg'),

('Mia', '2023-09-10', 'Strasbourg', '67000', '/images/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg'),

('Coco', '2024-09-10', 'Annecy', '74000', '/images/chan-swan-NKyl19P5IHg-unsplash.jpg'),

('Rex', '2021-09-10', 'Grenoble', '38000', '/images/alan-king-KZv7w34tluA-unsplash.jpg'),

('Luna', '2022-09-10', 'Bordeaux', '33000', '/images/jae-park-7GX5aICb5i4-unsplash.jpg'),

('Biscuit', '2025-06-10', 'Tours', '37000', '/images/yosei-g-OVgE3m4MHKM-unsplash.jpg'),

('Rio', '2025-04-10', 'Poitiers', '86000', '/images/melanie-kreutz-IFnknR2Mv5o-unsplash.jpg'),

('Ruby', '2023-09-10', 'Chamonix', '74400', '/images/peri-stojnic-5Vr_RVPfbMI-unsplash.jpg');



-- j'ai donc créer 4 tables l'utilisateur pourra adopter un animal mais également faire un don postgresql
