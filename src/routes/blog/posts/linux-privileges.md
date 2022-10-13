---
title: Privileges
date: "10-13-2022"
---

Pada sistem operasi Linux atau NOS terdapat sebuah hak akses atau _privileges_ yang dimana merupakan kepemilikan file atau foder. Pada hak akses ini dapat menggunakan chmod atau chown. 

## Perintah menngganti hak akses.

Penggunaan chmod dan chown tidak semata-mata sama melainkan kedua perintah tersebut merupakan perintah yang berbeda. Karena pada Sistem Operasi Linux terdapat 3 hak akses  yaitu _read, write, and execute_ artinya _read_ adalah sebuah _user_ dalam sistem operasi tersebut dapat membaca _file_ atau _directory_ yang dimana dapat dibaca _write_ untuk menuliskan dan _execute_ untuk menjalankan sebuah file atau program. 

Hak Akses tertinggi yaitu merupakan rwx dengan kode decimal yaitu 777, 755, 644 (atau untuk hanya membaca saja) contoh penggunaannya itu pergantian foldernya yaitu seperti dibawah ini.

    sudo chmod 777 -R /folder

Diatas ini merupakan perintah yang dilakukan secara rekursif dengan membaca semua file yang ada didalam folder lalu diubah perintahnya. 

    sudo chmod 777 anu.txt

Diatas merupakan perintah untuk mengubah kepemilikan.

## Hak Kepemilikan

Jika sebelumnya merupakan Hak Akses maka di _section_ ini merupakan sebuah kepemilikan dari file tersebut yang dimana biasanya dalam OS terdapat pemberian 2 hak akses yang dimana merupakan rwx atau pun rw. Owner dari Linux/UNIX dapat berupa user tertinggi atau _root_ atau user biasa. Dapat juga dengan menggunakan user biasa sebagai administrator seperti misalnya sudo. Semisalnya pada _home directory_ user terdapat file.txt yang dimana mau hanya dimiliki oleh satu _user_ yang nantinya ingin diubah oleh user lainnya. Maka pergantian tersebut harus diubah dengan _root user_.

## Praktek

Untuk percobaan maka dapat dibuka terlebih dahulu terminal. Dapat menggunakan terminal tersebut dengan mengetikan perintah dibawah ini. 
  
    echo "Hello Computer!" >> file.txt

Perintah diatas digunakan untuk menjalankan penulisan string berupa "Hello Computer kedalam file.txt.

Lalu setelah itu dapat menggunakan perintah dibawah ini untuk melihat hak akses lalu dapat diberikan user lainnya. Jika tidak memiliki user lainnya dapat dibuat dengan user lainnya seperti contohnya. 

    sudo useradd -m <username>
    sudo passwd <username>

lalu ketikkan password yang ingin dimiliki setelah user tertambah maka dapat dilakukan pengecekan yang 

Lalu lakukan perintah dibawah ini  untuk melihat hak akses dari file.txt dan isi dari file.txt tersebut grep adalah untuk mencari file yang bernama .txt sehingga kita tidak perlu melihat semua file yang tidak kita tujukan.

    ls -lah | grep "file.txt" && cat file.txt

![file.txt](/images/list\ file.png) <br>
*Tampilan perintah diatas*

Setelah melakukan penglihatan file maka dapat dituliskan contoh pergantian group yaitu dengan perintah sudo chown dibawah ini. Pada perintah ini dapat mengubah user owner menjadi testing dari yang awalnya adalah user yang membuat dalam kasus ini adalah user yang saya gunakan yaitu _gricowijaya_ akan diubah menjadi _testing_.

    sudo chown testing file.txt
    ls -lah | grep "file.txt"

![chowntesting](/images/chown_testing.png) <br>
*Tampilan perintah diatas*

Lalu dapat dilihat bahwa pada perintah diatas berhasil terbuat sebuah user dengan testing tetapi usergroup pada file tersebut masih merupakan gricowijaya maka untuk jika ingin mengubah usergroup tersebut menjadi _testing_ dapat dilakukan perintah berikut.

    sudo chown testing:testing file.txt
    ls -lah | grep "file.txt"

Setelah perintah tersebut berhasil maka anda sudah mengubah owner dari file tersebut menjadi _testing_ dan juga mengubah usergroup menjadi _testing_ seperti pada gambar dibawah ini.

![chowntesting](/images/chown_testing:testing.png) <br>
*Tampilan perintah diatas*

Dari perintah-perintah diatas maka akan terdapat dapat digunakan untuk melakukan perintah agar nantinya perintah tersebut dapat mengubah kepemilikan dari sebuah file agar file tersebut hanya dapat diakses oleh pemiliknya.   
