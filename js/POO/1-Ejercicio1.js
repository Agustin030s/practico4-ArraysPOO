const auto = {
  color: "Negro",
  marca: "Renault",
  modelo: "Alaskan",
  encender: function () {
    document.write('<p>Auto Encendido</p>');
  },
  apagar: function () {
    document.write('<p>El Auto se apago</p>');
  }
};

auto.encender();
auto.apagar();