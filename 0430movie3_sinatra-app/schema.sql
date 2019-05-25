
create database movie_app;

\c movie_app;

create table movies
(
  id            serial primary key,
  title         text,
  year          integer,
  actors        text,
  poster        text
);
