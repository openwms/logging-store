insert into users
(username, password, enabled)
values
('hkesq', 'welcome1', true);

insert into users
(username, password, enabled)
values
('marcel', 'password', true);

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