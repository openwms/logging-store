drop table authorities;
drop table users;

create table users(
    username varchar2(60) not null primary key,
    password varchar2(60) not null,
    enabled char not null
);

create table authorities (
    username varchar2(60) not null,
    authority varchar2(60) not null
);

insert into users
(username, password, enabled)
values
('mrlog', '$2a$10$/9X8Z7/uoVQziFN9Ri6rROlhyzkhDxhs9yV39qVCybO9HUDTmz6J.', 1);


insert into authorities
 (username, authority)
 VALUES
 ('mrlog','ROLE_USER');

 insert into authorities
 (username, authority)
 VALUES
 ('mrlog','ROLE_ADMIN');

commit;
