drop table if EXISTS pokemonuser;
CREATE TABLE if not exists pokemonuser (
	id serial primary key,
	email TEXT,
	hash TEXT,
	pokemon TEXT,
	team TEXT,
	inventory TEXT
);

drop table if exists orders;
create table if not exists orders (
    )

