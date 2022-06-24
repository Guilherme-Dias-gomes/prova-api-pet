create database petzinho;
use petzinho;

create table tb_pet (
id_pet                     int primary key auto_increment,
nm_apelido                varchar(50)
);

insert into tb_pet (nm_apelido)
values ("Cleiton");

select * from tb_pet;