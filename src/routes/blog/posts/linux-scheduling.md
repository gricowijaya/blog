---
title: Scheduling Part I
date: "10-13-2022"
---

Konsep dasar dan definisi dari scheduling, 
Scheduling, process, dan multi programming,

Scheduling ?? Seperti hal dalam hidup terdapat sebuah penjadwalan yang dimana menjadi beberapa aturan ataupun mekanisme dan suatu prosedur di dalam sistem operasi yang melibatkan kernel, aplikasi, proses agar komputer dapat melakukan urutan kerja yang dilakukan oleh komputer dan sistem komputer. Tujuan dari scheduling ini adalah bertujuan untuk mengatur _resource_ yang dimiliki oleh komputer sehingga komputer nantinya. Dari sistem operasi apapun yang dimiliki oleh desktop pasti memiliki sebuah scheduling.

Mengapa ?? <br> 

Karena terdapat sebuat utilitas dari sebuah sistem komputer yang dimana karena semua semua hal tersebut memiliki sebuah fungsi-fungsi utama. 

1. Kernel (inti sistem operasi memiliki utilitas, fungsi-fungsi utama) dan dukugan terhadap software dan hardware (sesuai dengan arsitektur omputer: 32 atau 64)  
2. Penanganan Proses yang dimana dapat membagi resource agar sesuai dengan kebutuhan aplikasi.
3. Terdapat _multiprogramming_ yang dimana kemampuan sistem operasi untuk menjalankan 2 aplikasi atau lebih secara bersama-sama agar menghasilkan n buah proses.

# _Multprocessing_ vs _Multiprogramming_

_Multprocessing_ merupakan kemampuan pengananan 2 process atau lebih secara bersama-sama yang dimana ditekankan kedalam hardware yang.

Seperti misalnya menjalankan banyak aplikasi seperti misalnya menjalankan aplikasi multimedia, game dan lain-lain. Yang dimana pada bagian _multiprogramming_ maka dari sisi software dianggap menjalankan 4 aplikasi yang berbeda. Sementara pada _multprocessing_ yang dimana melibatkan n buah software serta hardwarenya. 

# Peran Scheduling

1. Memaksimalkan throughput -> ketika terjadi pemrosesan maka akan mengahsilkan throughput didalamnya misalnya pada penggunaan hardware seperti misalnya terdapat komputer yang memiliki memory sebanyak 1 Gb yang dimana nantinya sesuai dengan program yang semisalnya minimum usagenya adalah 200 Mb dapat memiliki sebuah algoritma yang lebih baik agar dapat memanfaatkan resource yang ada. se

2. Memaksimalkan kinerja dan waktu processor -> dapat memaksimalkan sebuah proses yang terjadwal yang dimana terdapat jeda waktu yang dimana dapat memanfaatkan setiap proses yang dimiliki.
3. Efisiensi process -> semisalnya dari aplikasi b dapat memiliki sumber daya yang lebih besar dari yang sebelumnya.
4. Keadilan pada semua job dan aplikasi -> agar membagi _resource_ sesuai dengan kebutuhan _software_.
5. Meminimalkan waktu tanggap time respond -> dengan adanya scheduling dapat maka akan mengatur pembagian penggunaan memori yang digunakan oleh suatu program sehingga program tidak "berebutan satu dengan lainnya" agar tidak terjadinya sebuah "kelambatan" seperti misalnya dalam sebuah jaringan lokal yang dimana nantinya dari printer tersebut digunakan oleh 2 orang secara berbarengan yang dimana jika tidak terdapat scheduling maka printer akan terjadi bottleneck atau kebingungan siapa duluan yang menjalankan perintah.
6. Optimalisasi sumber daya.

Tanpa scheduling sebuah proses dapat menjadikan hasil tidak maksimal.

# 4 Jenis Scheduling

## Long Term Scheduling

Terdapat penambahan dari proses yang ada didalam pool yang dimana process yang akan dieksekusi 

## Medium Term Scheduling

Penjadwalan dengan menambahkan jumlah dari process baik secara penuh maupun parsial didalam memori utama.

## Short Term Scheduling

Penjadwalan dengan memilih process mana yang akan dieksekus terlebih dahulu oleh 

## IO Scheduling

Yang dimana mengatur sebuah process yang dimana bergantung pada perangkat IO.

## Scheduling dan State Process

Scheduling selalu berhubungan dengan process, sehingga juga berhubungan dengan kondisi (state) dari process.

## Queue Scheduling

Yang dimana sesuai dengan antrian yang nantinya 

## Algoritma Scheduling

Karena terdapat banyak alur scheduling maka dibutuhkannya sebuah algoritma yang dimana seperti yang paling banyak digunakan, multiplatform, paling bagus digunakan. Tujuan dari algoritma ini adalah membantu scheduling seperti algoritma kernel-kernel yang dicipatkan.
dari beberapa algoritma ini terdapat beberapa kelemahan-kelemahan yang dimana sesuai dengan studi kauss 

## Round Robin

Sebuah algoritma yang digunakan yang paling sering digunakan adalah Round Robin yang dimana terdapat sebuah time quantum yang nantinya jika selesai maka process tersebut juga akan selesai. Time quntum jangan terlalu kecil dan juga jangan terlalu besar maka akan menjadi **First Come First Serve** 

Nilai ideal = 80 - 100.

## First In First out (FIFO)

Sebuah algoritma yang dimana jika sebuah proses yang pertama datang maka akan dieksekusi. 

## Shortest Job First

sebuah process yang lebih pendek maka akan dijalankan.

# Praktik

Pengaturan pada sistem Unix maupun GNU/Linux dapat dilihat pada sebuah file yang dimana merupakan scheduling dari setiap hari, mingguan, dan bulanan.
File-file tersebut terdapat pada : 

    /etc/cron.daily/

![imageofhtop](/images/cron_daily.png) <br>
*Tampilan dari cat /etc/cron.daily/0anacron*

    /etc/cron.weekly/

![imageofhtop](/images/cron_weekly.png) <br>
*Tampilan dari cat /etc/cron.weekly/0anacron*

    /etc/cron.monthly/

![imageofhtop](/images/cron.daily.png) <br>
*Tampilan dari cat /etc/cron.monthly/0anacron*

Untuk menampilkan yang file yang ada maka dapat dilakukan command seperti dibawah ini. 

    ls -lah /etc/cron.daily/
    ls -lah /etc/cron.weekly/
    ls -lah /etc/cron.monthly/

Contoh : 

![imageofhtop](/images/ls_cron_daily.png) <br>
*Tampilan dari ls -lah /etc/cron.daily/*


flag h merupakan singkatan dari human readable. 

Pengembangan dari algoritma tersebut menggunakan bahasa pemrograman yang dimana membangun platform sistem tersebut.  

Didalam satu kernel itu terdapat beberapa library yang akan membangun algoritma tersebut. Dari hal tersebut dapat dilihat serta integrasi dari beberapa bahasa pemrograman sesuai yang diperlukan.



<!-- Minggu depan akan belajar tentang 3 algoritma tadi secara lebih dalam. -->
