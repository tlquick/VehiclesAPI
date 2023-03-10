PGDMP     -                    z           caryard    15.1    15.1 !    "           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            #           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            $           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            %           1262    16771    caryard    DATABASE     ~   CREATE DATABASE caryard WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Australia.1252';
    DROP DATABASE caryard;
                postgres    false            ?            1259    16991    Colour    TABLE     q   CREATE TABLE public."Colour" (
    colour_id integer NOT NULL,
    colour_name character varying(50) NOT NULL
);
    DROP TABLE public."Colour";
       public         heap    postgres    false            ?            1259    16990    Colour_colour_id_seq    SEQUENCE     ?   ALTER TABLE public."Colour" ALTER COLUMN colour_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Colour_colour_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    221            ?            1259    17002 	   Inventory    TABLE     ?   CREATE TABLE public."Inventory" (
    inventory_id integer NOT NULL,
    vehicle_id integer,
    colour_id integer,
    price integer,
    sold boolean DEFAULT false
);
    DROP TABLE public."Inventory";
       public         heap    postgres    false            ?            1259    17001    Inventory_inventory_id_seq    SEQUENCE     ?   ALTER TABLE public."Inventory" ALTER COLUMN inventory_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Inventory_inventory_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    223            ?            1259    16934    Make    TABLE     k   CREATE TABLE public."Make" (
    make_id integer NOT NULL,
    make_name character varying(50) NOT NULL
);
    DROP TABLE public."Make";
       public         heap    postgres    false            ?            1259    16933    Make_make_id_seq    SEQUENCE     ?   ALTER TABLE public."Make" ALTER COLUMN make_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Make_make_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215            ?            1259    16942    Model    TABLE     n   CREATE TABLE public."Model" (
    model_id integer NOT NULL,
    model_name character varying(50) NOT NULL
);
    DROP TABLE public."Model";
       public         heap    postgres    false            ?            1259    16941    Model_model_id_seq    SEQUENCE     ?   ALTER TABLE public."Model" ALTER COLUMN model_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Model_model_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            ?            1259    16959    Vehicle    TABLE     n   CREATE TABLE public."Vehicle" (
    vehicle_id integer NOT NULL,
    make_id integer,
    model_id integer
);
    DROP TABLE public."Vehicle";
       public         heap    postgres    false            ?            1259    16958    Vehicle_vehicle_id_seq    SEQUENCE     ?   ALTER TABLE public."Vehicle" ALTER COLUMN vehicle_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Vehicle_vehicle_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    219                      0    16991    Colour 
   TABLE DATA           :   COPY public."Colour" (colour_id, colour_name) FROM stdin;
    public          postgres    false    221   ?#                 0    17002 	   Inventory 
   TABLE DATA           W   COPY public."Inventory" (inventory_id, vehicle_id, colour_id, price, sold) FROM stdin;
    public          postgres    false    223   $                 0    16934    Make 
   TABLE DATA           4   COPY public."Make" (make_id, make_name) FROM stdin;
    public          postgres    false    215   L$                 0    16942    Model 
   TABLE DATA           7   COPY public."Model" (model_id, model_name) FROM stdin;
    public          postgres    false    217   ?$                 0    16959    Vehicle 
   TABLE DATA           B   COPY public."Vehicle" (vehicle_id, make_id, model_id) FROM stdin;
    public          postgres    false    219   ?$       &           0    0    Colour_colour_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."Colour_colour_id_seq"', 3, true);
          public          postgres    false    220            '           0    0    Inventory_inventory_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."Inventory_inventory_id_seq"', 4, true);
          public          postgres    false    222            (           0    0    Make_make_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Make_make_id_seq"', 3, true);
          public          postgres    false    214            )           0    0    Model_model_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Model_model_id_seq"', 5, true);
          public          postgres    false    216            *           0    0    Vehicle_vehicle_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."Vehicle_vehicle_id_seq"', 13, true);
          public          postgres    false    218            ?           2606    16997    Colour Colour_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public."Colour"
    ADD CONSTRAINT "Colour_pkey" PRIMARY KEY (colour_id);
 @   ALTER TABLE ONLY public."Colour" DROP CONSTRAINT "Colour_pkey";
       public            postgres    false    221            ?           2606    17006    Inventory Inventory_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."Inventory"
    ADD CONSTRAINT "Inventory_pkey" PRIMARY KEY (inventory_id);
 F   ALTER TABLE ONLY public."Inventory" DROP CONSTRAINT "Inventory_pkey";
       public            postgres    false    223            {           2606    16940    Make Make_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public."Make"
    ADD CONSTRAINT "Make_pkey" PRIMARY KEY (make_id);
 <   ALTER TABLE ONLY public."Make" DROP CONSTRAINT "Make_pkey";
       public            postgres    false    215            }           2606    16948    Model Model_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Model"
    ADD CONSTRAINT "Model_pkey" PRIMARY KEY (model_id);
 >   ALTER TABLE ONLY public."Model" DROP CONSTRAINT "Model_pkey";
       public            postgres    false    217                       2606    16963    Vehicle Vehicle_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."Vehicle"
    ADD CONSTRAINT "Vehicle_pkey" PRIMARY KEY (vehicle_id);
 B   ALTER TABLE ONLY public."Vehicle" DROP CONSTRAINT "Vehicle_pkey";
       public            postgres    false    219            ?           2606    17007    Inventory fk_colour    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Inventory"
    ADD CONSTRAINT fk_colour FOREIGN KEY (colour_id) REFERENCES public."Colour"(colour_id);
 ?   ALTER TABLE ONLY public."Inventory" DROP CONSTRAINT fk_colour;
       public          postgres    false    3201    221    223            ?           2606    16964    Vehicle fk_make    FK CONSTRAINT     v   ALTER TABLE ONLY public."Vehicle"
    ADD CONSTRAINT fk_make FOREIGN KEY (make_id) REFERENCES public."Make"(make_id);
 ;   ALTER TABLE ONLY public."Vehicle" DROP CONSTRAINT fk_make;
       public          postgres    false    219    3195    215            ?           2606    16969    Vehicle fk_model    FK CONSTRAINT     z   ALTER TABLE ONLY public."Vehicle"
    ADD CONSTRAINT fk_model FOREIGN KEY (model_id) REFERENCES public."Model"(model_id);
 <   ALTER TABLE ONLY public."Vehicle" DROP CONSTRAINT fk_model;
       public          postgres    false    217    3197    219            ?           2606    17012    Inventory fk_vehicle    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Inventory"
    ADD CONSTRAINT fk_vehicle FOREIGN KEY (vehicle_id) REFERENCES public."Vehicle"(vehicle_id);
 @   ALTER TABLE ONLY public."Inventory" DROP CONSTRAINT fk_vehicle;
       public          postgres    false    223    219    3199               "   x?3?JM?2?t?)M?2???,I?????? V,         )   x?3?4BC ?L?2?AS?(?i?ib
???qqq ??=         &   x?3?t?/J?2????II??2?ɯ?/I?????? m?         0   x?3??/J?K?2?t,?????2????)??2?tK?I???????? ??
?            x?3?4?4?2?B.CNCNS?=... %??     