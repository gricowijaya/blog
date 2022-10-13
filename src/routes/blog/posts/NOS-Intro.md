---
title: NOS INTRO
date: "10-13-2022"
---

## Pembelajaran selama satu semester ?

Membahas mengeai sistem operasi yang digunakan dalam jaringan komputer. <br>

- Konsep Dasar dari OS
- Evolusi OS 
- Fungsionalitas OS
- Konsep dasar NOS
- Infrastruktur pendukung NOS.
- Karakteristik dari NOS, dalam jaringan komputer.

Praktik mandiri untuk belajar menggunakan OS: OS Linux, Free BSD. Tampilan dari beberapa _distro_ Linux pun dapat berbeda-beda dengan kebebasan pengguna untuk melakukan konfigurasinya seperti yang ada dibawah ini dengan menggunakan _window manager_. 

![Linux](/images/archdwm.png) <br>
*Tampilan sistem Linux dengan menggunakan dwm*

sementara FreeBSD juga memiliki tampilan desktop lainnya bahkan dapat menggunakan sistem yang digunakan untuk  

![FreeBSD](/images/freeBSD_desktop.png) <br>
*Tamplan Sistem FreeBSD*

Perbedaan antara keduanya hanya berupa _project_ yang berbeda yang dimana Linux didirikan oleh Linus Torvalds dan FreeBSD didirikan dari sebuah grup akademik yaitu *Berkeley Software Distribution*.

Misalnya seperti dengan menggunakan _network thetering_ maka dari _handphone_ tersebut dapat dilihat siapa saja yang menggunakan _Network_ tersebut. 

## Sistem Operasi

Sistem Operasi merupakan suatu sistem yang tersusun tersusun dari kumpulan _hardware_ dan __software__ dan terdapat _firmware_ <br> 

![Image of William Stallings](/images/william-stallings.jpg)  <br>
*William Stallings*

Menurut __William Stalling__ yaitu dia memiliki _layer_ yang dimana menjalankan aplikasi-aplikasi yang digunakan untuk _interface_ antara _hardware_ dengan __software__ lainnya. Yang dimana artinya menjembatani _hardware_ dengan aplikasi. Jika terdapat _hardware_ yang tidak terbaca maka dapat diinstall sebuah _driver_ agar dapat proses kinerja dari _hardware_ yang ingin digunakan seperti misalnya jika anda menggunakan linux untuk GPU Nvidia terdapat _driver open source_ agar anda dapat melakukan konfigurasi _hardware_ tersebut.   

Peran OS : 

1. Memindahkan pengguna komputer.
2. Efisiensi sumber daya komputasi. Seperti dalam satu kantor yaitu dengan memberikan banyak _file_ dalam  satu kantor baik melewati intranet atau lainnya. 
3. Membantu pengembangan, pengujian, perbaikan aplikasi dan layanan.
4. Membantu pengembangan _software_ IDE, Debugger, editor dengan menggunakan bahasa pemrograman seperti _low level language_ seperti C.
5. Eksekusi program .
6. Akses ke IO _Device_.
7. Kontrol akses _file_ dan data _privilege_ adalah bagaimana file tersebut memiliki hak akses untuk penggunanya. 
8. Akses ke sistem (_root_ seperti administrator atau akses keseluruhan, user). Akses _root_ juga dapat beresiko seperti dengan aplikasi yang memiliki malware.
9. Deteksi error dan penanganan. Misalkan didalam jaringan terdapat melakukann unduan dari jaringan yang menjadi corrupt. Penanganan-penanganan tersebut terdapat pada OS lagi.
10. Menghitung statistik penggunaan _resource_ komputasi seperti misalnya memiliki 16 GB memori yang dimana menjadikan resource tersebut memiliki proses yang tidak diperlukan maka dapat dilakukan penghapusan. Untuk di jaman sekarang dapat menggunakan docker karena dapat menggunakan sebuah environment yang dapat digunakan untuk pengujian aplikasi.
11. Manajemen intruksi melalui bahasa mesin (_software_) dan _hardware_. Seperti dengan menggunakan C dengan __malloc__ maka dapat melakukan alokasi memori yang dimana dapat melakukan manajemen sistemnya tersebut.
12. Penanganan data binary. Seperti dengan data multimedia seperti JPEG, PNG dll. Komputer melihat _file_ tersebut sebagai urutan binary saja.
13. Penyediaan API sehingga dapat lebih mudah untuk meakukan pengembangan sebuah _software_.

## OS dan Resrource Management 

OS Menangani langsung instruksi ke processor untuk mengeksekusi program. Terdapat waktu Eksekusi serta juga PID atau _Process ID_, Dalam Hal ini dalam sebuah OS _modern_ terdapat beberapa penjadwalan untuk _multitasking_ yang diman digunakan seperti penjadwalan pada umumnya agar sebuah proses dari suatu kegiatan tidak menggunakan tenaga yang banyak. Dari penjadwalan tersebut terdapat beberapa algoritma-algoritma yang dapat mengatur agar dapat mengatur jadwal sesuai dengan studi kasus.

_Memory Translation_ Dalam _Stack_ itu akan mustahil bila wajib terdapat sistem operasi yang dimana akan berkomunikasi langsung dengan hardware tersebut. Maka tanpa Sistem Operasi inilah maka _memory translation_ tersebut tidak akan berjalan yang dimana _memory translation_ ini biasanya menggunakan _low level language_.

## OSI (Open System Interconnection) Layer 

OSI _layer_ adalah sebuah sistem yang dimana berperan dalam pengiriman suatu hal di internet. Sehingga pengguna di internet dapat terkoneksi satu dengan lainnya dengan optimal. Fungsinya dari OSI _layer_ sendiri adalah meminimalkan waktu pendeteksian sebuah masalah pada jaringan sehingga masalah tersebut dapat lebih mudah untuk diatasi.   
Terdapat 7 bagian dari OSI layer yang dimana merupakan : 

_Physical Layer_ : Artinya semua yang terhubung ke jaringan maka dapat terhubung dalam jaringan apapun ataupun terhadap kartu jaringannya lalu setelah membaca dari Physical Network lalu pengalamatannya secara fisik (MAC Address) karena tidak memiliki pengalamatan secara _software_ (IP _Address_).


_Data Link Layer_ : Artinya sebuah _link layer_ yang dimana memeriksa transisi terhadap bit data.

_Network Layer_ : Artinya _layer_ yang mendefinisikan alamat IP sehingga setiap komputer dapat saling berkomunikasi dan berkoneksi pada satu jaringan serta fungsi lainnya yaitu proses _routing_ dan membuat _header_ untuk setiap _packet_ yang dikirimkan.

_Transport Layer_ : Artinya transport layer berperan dalam menyalurkan bit sehingga terdapat sebuah fungsi spesifik seperti memecahkan data menjadi beberapa data, melakukan transmisi data mulai dari _session_ sampai ke _network layer_, Melakukan _looping_ terhadap proses transmisi yang ada dalam paket data yang hilang.  

_Session Layer_ : Merupakan _layer_ yang memiliki fungsi untuk mengendalikan dialog terhadap koneksi suatu komputer.

_Presentation Layer_ : Digunakan untuk mengidentifikasi sintaks yang dipakai suatu host jaringan untuk melakukan komunikasi dengan sebuah sistem enkripsi dan juga sistem dekripsi agar aman saat berkomunikasi.

_Application Layer_ : Digunakan untuk sebuah pusat terjadinya interaksi antara user dengan aplikasi yang bekerja menggunakan fungsionalitas dengan sebuah jaringan internet. Protokol yang digunakan pada _layer_ ini merupakan HTTP, FTP. SMTP.

### Referensi

- Jagoan Hosting, 2021, 'OSI Layer Adalah: Pengertian, Fungsi, Model, dan Cara Kerja' https://www.jagoanhosting.com/blog/osi-layer/ 
- Stallings, Willia. 2008. 'Operating Systems: Internal and Design Principles (6th Edition)'. Prentince Hall.
- Silberschatz, Galvin, Gagne. 2009. 'Operating System Concepts. John Wiley & Sons, Inc' 
- Dean, Tamara. 2010. Network+ Guide to Networks (5th Edition). Course Technologi, Cengage Learning.
- Chris Reid, 2020, Why is BSD more sophisticated than Linux ?, University of Alaska Anchorage, https://www.quora.com/Why-is-BSD-more-sophisticated-than-Linux
