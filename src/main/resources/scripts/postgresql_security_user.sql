drop table if exists authorities;
drop table if exists users;


create table users(
	username  varchar(50) not null primary key,
	password  varchar(50) not null,
	enabled boolean not null
);

create table authorities (
	username varchar(50) not null,
	authority varchar(50) not null,
	constraint fk_authorities_users foreign key (username)
	references users(username)
);

create unique index ix_auth_username on authorities
(username,authority);




insert into users
(username, password, enabled)
values
('hkesq', 'welcome1', true);

insert into users
(username, password, enabled)
values
('hksim', 'password', true);



insert into authorities
 (username, authority)
 VALUES
 ('hkesq','ROLE_USER');

 insert into authorities
 (username, authority)
 VALUES
 ('hkesq','ROLE_ADMIN');

 insert into authorities
 (username, authority)
 VALUES
 ('hksim', 'ROLE_USER');