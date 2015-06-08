drop table users;
drop table authorities;

create table users(
    username varchar2(50) not null primary key,
    password varchar2(50) not null,
    enabled char not null
);

create table authorities (
    username varchar2(50) not null,
    authority varchar2(50) not null,
    constraint fk_authorities_users foreign key(username) references users(username)
);

insert into users
(username, password, enabled)
values
('hkesq', 'welcome1', 1);

insert into users
(username, password, enabled)
values
('marcel', 'password', 1);

insert into authorities
 (username, authority)
 VALUES
 ('hkesq','ROLE_USER');

 insert into authorities
 (username, authority)
 VALUES
 ('marcel','ROLE_ADMIN');

 insert into authorities
 (username, authority)
 VALUES
 ('marcel', 'ROLE_USER');
