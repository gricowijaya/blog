---
title: Linux Kernel
date: "10-13-2022"
---

## Apa itu Kernel ? 

Pada umumnya Sistem Operasi Linux memiliki sebuah kernel yang dimana merupakan sebuah komponen utama dari sistem tersebut. Fungsi dari kernel sendiri adalah sebuah perantara atau _interface_ antara perangkat keras dan perangkat lunak. Kernel Linux digunakan membuat pemrograman dengan bahasa C karena merupakan bahasa mesin yang lebih mudah dipahami dibanding _asembly language_. 

Perangkat ini digunakan untuk mengatur beberapa komponen penting dalam sebuah _Operating Systems_ seperti _Memory Management_, _Process Management_, _Device Drivers_, _System calls and Security_. Maka dari itu karena menjadi pengatur dari sebuah kemampuan utama OS maka kernel dapat disebut sebagai sistem operasi baik dalam _desktop_, _mobile_ dan lain-lainnya. Pada Dasarnya dapat linux merupakan sebuah kernel tetapi dapat digunakan sebagai sistem operasi yang utuh.

## Memory Management

Memory Management merupakan monitoring tentang berapa banyak memori yang dibutuhkan untuk penyimpanan data.

## Process Management

Melihat _process_ yang dapat digunakan oleh CPU (Central Processing Unit) dengan memperkirakan bagaimana dan untuk berapa lama.

## Device Drivers

Sebuah driver atau jembatan yang bertugas untuk melakukan interpretasi antara _hardware_ dan _process software_. 

## System Calls and Security 

Menerima _service_ dari sebuah process. Yang dimaksud dari sebuah _service_ adalah instruksi pada OS. Perintah-perintah ini berupa _request service_ yang nantinya akan diambil oleh sebuah sistem operasi.    

# Boot

Jika anda menggunakan 2 OS maka Linux terdapat sebuah _booting system_ seperti _efi_ atau _legacy boot_ atau dengan menggunakan _libreboot_ yang dimana digunakan nantinya dapat dipartisi yang dimana dengan menggunakan GRUB untuk melakukan konfigurasi sistem operasi yang memumpuni.

# Penantaan Direktori

Dalam linux terdapat sebuah banyak direktori yang dimana merupakan seperti direktori root yang nantinya setiap direktori yang menjadi akar dari filesystem yang ada pada _directory_ / tersebut seperti misalnya /bin, /sbin, /etc. dan lain-lainnya.

Setiap direktori tersebut tentunya memiliki kegunaann tersendiri yang dimana karena pada 90-an itu tidak seperti pada tahun 2010 an atau seperti sekarang karena pada jaman sebelum OS Linux tercipta komputer masih hanya digunakan untuk komputasi dan penyimpnan data saja dan tidak dapat digunakan seperti keguanaan pengguna biasa pada umumnya yang dimana biasanya hanya digunakan untuk instansi pemerintah dan pendidikan. 

# Perintah untuk mengetahui sistem seperti 

Dalam Linux kernel sendiri terdapat beberapa perintah yang sudah ada untuk digunakan oleh pengguna. Beberapa perintah tersebut merupakan seperti berikut.

- `lsblk` <br>  Untuk memberikan data informasi mengenai semua block penyimpanan yang dimiliki oleh komputer. 
- `lsusb`  <br> Untuk memberikan data alat bus USB yang terdapat pada komputer.
- `lspci`<br>  Untuk memberikan informasi tentang data pci yang terkoneksi pada sistem. 
- `hwinfo`  <br>Terkadang harus diinstal
- `inxi -Fx`
- `df -H`
- `sudo fdisk -l`
- `free -m`<br>  Memberikan berapa banyak _swap memory_ yang digunakan.  
- `cat /proc/version` <br> Digunakan untuk memberikan informasi version kernel yang digunakan serta compiler yang digunakan untuk _compile source code_ Linux.
- `uname -a`<br>  Digunakan untuk melakukan printing informasi dari system.
- `cat /proc/partitions`<br>  Digunakan untuk melihat partisi yang dimiliki oleh processor.

`man` merupakan sebuah manual untuk menuliskan panduan yang didapatkan dari perintah tersebut sehingga untuk informasi lebih lanjut dapat digunakan perintah seperti diatas untuk setiap manualnya. Contoh penggunaannya adalah sebagai berikut.

Jika anda mengetik 
    
`man lsusb`

Maka anda akan diberikan sebuah manual untuk lsusb seperti digambar ini.

`![manlsusb](images/man_lsusb.png)`

Sehingga jika sudah mengetahui _command_ nya kita dapat melakukan penggunaan _command_ lsusb atau dengan flag lainnya agar dapat mendapatkan informasi yang lebih jelas. Seperti dengan perintah berikut.  

`lsusb -v` 

Sehingga akan mendapatkan informasi seperti ini

`![lsusb -v](images/lsusb_v.png)` 

Pada daftar tersebut dapat dilihat bahwa terdapat Bus 001 yang dimana merupakan sebuah root device atau kemungkinan sebuah _female_ USB yang digunakan oleh linux kernel tersebut.


# Praktik 1

Untuk melakukan praktik ini dapat digunakan program wget untuk mengunduh linux kernel yang pertama kali dituliskan oleh Linus Torvalds. Untuk perintahnya dapat dituliskan sebagai berikut

`wget https://mirrors.edge.kernel.org/pub/linux/kernel/Historic/linux-0.01.tar.gz`

Penempatan file linux tersebut dapat disimpan dimana saja semisalnya pada folder Download anda dapat membuat folder baru seperti linux-isofiles. Setleah dilakukan penempatan tersebut anda dapat melakukan pembukaan kompresi data tar.gz dengan program tar menggunakan perintah berikut.

`tar -xvf linux-0.01.tar.gz`

Sehingga nantinya akan otomatis terbuat _directory_ linux beserta dengan _source code_ yang akan dipelajari. Pada _source code_ tersebut terdapat banyak library yang akan dibutuhkan dalam _compile_ sistem operasi linux.  

Terdapat sebuah file pada bagian kernel yang merupakan sched.c yang digunakan untuk melakukan sebuah _scheduling_ pada Operating System yang akan dijalankan. Pada file tersebut 


### Referensi

1. Write your own Operating System, Linux Kernel Programming 01:Compile and Boot, link: https://www.youtube.com/watch?v=WiZ05pnHZqM, YouTube.

2. Redhat, What is Linux Kernel ?, link: https://www.redhat.com/en/topics/linux/what-is-the-linux-kernel 
3. Stallings, William. 2008. Operating Systems: Internals and Design Principles (6th Edition). Prentice Hall. 

4. Silberschatz, Galvin, Gagne. 2009. Operating System Concepts, John Wiley & Sons, Inc.

5. Dean, Tamara. 2010. Network+ Guide to Networks (5th Edition). Course Technology, Cengage Learning.

<!-- # UTS -->
<!---->
<!-- Pertemuan 7 akan menjadi UTS dapat dengan asumsi keterangan hardwarenya abcd bahkan dapat dengan sebuah studi kasus dan peran-peran dari sistem operasi. Serta berikan contohnya. Dalam bentuk makalah dan nantinya dengan menggunakan paper sebagai referensi. -->
