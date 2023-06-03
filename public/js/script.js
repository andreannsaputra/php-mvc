$(function () {
  $(".tombolTambahData").on("click", function () {
    $("#formModalLabel").html("Tambah Data Mahasiswa");
    $(".modal-footer button[type=submit]").html("Tambah Data");
  });
  $(".ubahModal").on("click", function () {
    $("#formModalLabel").html("Ubah Data Mahasiswa");
    $(".modal-footer button[type=submit]").html("Ubah Data");
    $(".modal-body form").attr(
      "action",
      "http://localhost/2023/php-mvc/public/mahasiswa/ubah"
    );

    const id = $(this).data("id");

    $.ajax({
      url: "http://localhost/2023/php-mvc/public/mahasiswa/getUbah",
      data: { id: id },
      method: "post",
      dataType: "json",
      success: function (data) {
        $("#nama").val(data.nama);
        $("#nim").val(data.nim);
        $("#jurusan").val(data.jurusan);
        $("#id").val(data.id);
      },
    });
  });
});
