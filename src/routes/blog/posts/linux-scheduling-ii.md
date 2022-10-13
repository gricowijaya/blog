---
title: Scheduling Part II
date: "10-13-2022"
---

Scheduling memiliki beberapa algoritma yang digunakan seperti dibawah ini

## Short Process Next (SPN)

Mengecek processing time yang dimana waktu yang terpendek dari queue yang terdepan karena yang paling pendek. Sementara queue yang paling panjang adalah dari paling belakang. <br>

Kelebihannya : Bersifat Adil, Artinya jika eksekusi pendek maka nantinya akan menjadi eksekusi yang paling cepat didahulukan ketimbang waktu ekseksui yang lebih panjang. 

<br>

Kelebihannya : Sorting akan menghabiskan resource untuk melakukan sorting scheduling berdasarkan waktu eksekusi setiap program atau kernel.

## Feedback

Algoritma ini tidak bergantung pada waktu eksekusi yang dimana setiap batas waktu yang dihabiskan akan digantikan dengan berapa lama waktu yang dihabiskan jika melebihi waktu yang diberikan maka akan akan dilepas atau di release hingga semua proses akan selesai. Jadi Berfokus kepada berapa lama waktu yang dihabiskan.

## High Response Ration Next (HRRN)

Waktu tunggu proses dibagi dengan processor dan juga service time yang nantinya akan dibagi dengan service time dengan rumus

```latex
(w+s)/s

w = waiting time waktu tunggu processor.
s = service time
```

Misalnya waktu yang digunakan adalah 4 s lalu servicenya 2 s maka 

(4+2)/2 = 3 Kelebihannya akan lebih teliti untuk perhitungan tetapi memerlukan effort yang besar seperti pencatatan service time, waiting time nantinya baru akan disortir berdasarkan hasil.

## Shortest Remaining Time (SRT)

Dengan waktu waktu tunggu yang lebih pendek sehingga job masuk ke dalam queue memiliki waktu tunggu < job yang diproses jadi jika terlalu lama menunggu nantinya akan mengalami starvation atau mati karena process tersebut akan mengira bahwa dirinya tidak dihiraukan dalam pemrosesan. 

## Penjadwalan dan NOS

Setiap algoritma ini nantinya belum tentu digunakan dalam algoritma yang nantinya sistem akan memilih algoritma yang paling baik untuk digunakan dan nantinya scheduling di sistem ini harus menciptakan keadilan untuk semua prosesnya. Dengan menggunakan komputasi paralel jangan sampai tidak fair karena untuk menjalankan service dapat menjadikan hal yang tidak beres atau salah tentang algoritma schedulingnya.

Dari sistem dapat menggunakan sebuah cron yang dimana menentukan penjadwalan terhadap suatu proses yang dimana nantinya akan terhubung untuk sistem operasi. Dari waktu-waktu tersebut nantinya akan sudah dishare dengan menggunakan root webnya yang dimana nantinya user akan menjalankan file lokal tersebut dengan cara mendownload.   

Berkaitan dengan penjadwalan dengan cron dalam sistem administrasi nantinya dari setiap _resource_ layar tersebut dapat menggunakan layanan mana yang menjadi secara umum. Terdapat _backdoor_ dari sebuah malware yang dimana setiap peringkat teratas dan nantinya malwarenya ini akan akses ke setiap pemerintahan. Sistem administrasi dalam kondisi yang anomali tiba-tiba resource yang menghabiskan memory yang hampir mendekati 100% yang nantinya dapat dicek dengan nomor port yang dimana nantinya seperti nomor aneh disana maka akan terdapat sebuah software asing yang tidak diberikan authentication dan berhasil masuk ke sistem dan terdapat banyak hal yang menjadi beberapa tindakan dari software asing tersebut. Seperti kasusnya pada beberapa hal kemarin yang dimana berhasil membobol sistem dengan domain dan dengan jaringan tersebut dan dengan memanfaatkan pengguna. 

Adminstrator harus mengerti tentang log, cron atau data yang dimasukdari jaringan lokal atau jaringan eksternal yang dimana dari luar tersebut jaringan lainnya itu sudah menembus kedalam sebuah firewall yang dimana artinya sudah dilakukan sebuah setting yang menyebarkan siklus. Yang paling tidak sistem sudah melakukan penetrasi.   

# Praktik 1 : Melihat Log Sistem 

Seperti pembahasan diatas maka tidak harus sesuai dengan algoritma yang diatas tetapi dapat menggunakan algoritma yang sesuai kebutuhan. 
File proses yang log dapat dilihat dari `/var/log/syslog` dan dapat dilihat dengan menggunakan text editor pilihan dapat berupa `nano` ataupun `vim`, `gedit`, `emacs` dan lain-lain. Akses tersebut harus dengan menggunakan akses `root` privileges. Contoh dari command tersebut adalah 

``` bash
sudo vi /var/log/syslog
```
    
Atau dengan menggunakan command cat yang dimana dapat menambilkan kepada terminal seperti dibawah ini

``` bash
sudo cat /var/log/syslog
```

# Praktek 2 Melihat Semua File Log.

Ketahui semua file log yang ada di dalam sistem operasi Linux (Sysadmin Linux) 

Dapat dilihat dari file log nya  yaitu sudo ls -lah /var/log

Log Sistem apapun yang terjadi maka akan dicatat sehingga sistem dianggap seperti orang yang rajin dimana setiap sistem tersebut akan mencatat file log tersebut. 

![imageofsyslogcontent](/images/syslog_content.png) <br>
*Tampilan dari isi yang dimiliki oleh syslog *

Karena dari banyaknya sebuah pencatatan pada file syslog dari log tersebut dapat memiliki banyak jumlah baris text yang dimana jika ingin mengetahuinya dapat dengan menggunakan perintah dibawah ini.

    sudo cat /var/log/syslog | wc -l

Dari perintah diatas maka akan terdapat sebuah angka yang merupakan _word count_ dari _line_ pada /var/log/syslog. Seperti pada gambar dibawah ini.

![imageofwclinesyslog](/images/line_of_syslog.png) <br>
*Tampilan dari sudo cat  /var/log/syslog | wc -l*

### Referensi 

1. Stallings, William. 2008 Operating Systems: Internals and Design Principles (6th Edition). Prentice Hall.
2. Silberschatz, Galvin, Gagne. 2009. Operating System Concepts. John Wiley & Sons, Inc.
3. Dean, Tamara. 2010. Network+ Guide to Networks (5th Edition). Course Technology, Cengage Learning.
4. I Putu Agus Eka Pratama S.T., M.T., Pertemuan 4: Scheduling (Lanjutan) Network Operating System 
