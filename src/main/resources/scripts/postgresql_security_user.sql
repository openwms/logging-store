drop table if exists users;
drop table if exists authorities;



create table users(
	username  varchar(60) not null primary key,
	password  varchar(60) not null,
	enabled boolean not null
);

create table authorities (
	username varchar(60) not null,
	authority varchar(60) not null,
	constraint fk_authorities_users foreign key (username)
	references users(username)
);

create unique index ix_auth_username on authorities
(username,authority);


insert into users
(username, password, enabled)
values
('marcel', 'welcome1', true);

insert into authorities
 (username, authority)
 VALUES
 ('marcel','ROLE_USER');

 insert into authorities
 (username, authority)
 VALUES
 ('marcel','ROLE_ADMIN');
